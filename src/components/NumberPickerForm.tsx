import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Slider } from '@/components/ui/slider';
import NumberEntry from './NumberEntry';

export interface Entry {
  number: number | null;
  name: string;
}

interface NumberPickerFormProps {
  onStartPicking: (entries: Entry[]) => void;
}

const NumberPickerForm: React.FC<NumberPickerFormProps> = ({ onStartPicking }) => {
  const [entryCount, setEntryCount] = useState<number>(5);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [customCount, setCustomCount] = useState<boolean>(false);
  const [customEntryCount, setCustomEntryCount] = useState<string>('');

  // Initialize entries when entryCount changes
  useEffect(() => {
    const count = customCount && !isNaN(Number(customEntryCount)) ? 
                  Number(customEntryCount) : entryCount;
    
    const newEntries = Array(count).fill(0).map((_, i) => {
      // Keep old entries if they exist
      if (entries[i]) {
        return entries[i];
      }
      return { number: null, name: '' };
    });
    setEntries(newEntries);
  }, [entryCount, customCount, customEntryCount]);

  // Validate the form when entries change
  useEffect(() => {
    if (entries.length === 0) {
      setIsFormValid(false);
      return;
    }
    
    const allNumbersValid = entries.every(entry => entry.number !== null);
    const uniqueNumbers = new Set(entries.map(entry => entry.number)).size;
    setIsFormValid(allNumbersValid && uniqueNumbers === entries.length);
  }, [entries]);

  const handleEntryValueChange = (index: number, number: number | null, name: string) => {
    const updatedEntries = [...entries];
    updatedEntries[index] = { number, name };
    setEntries(updatedEntries);
  };

  const handleSliderChange = (value: number[]) => {
    setEntryCount(value[0]);
    setCustomCount(false);
  };

  const handleCustomCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomEntryCount(e.target.value);
    setCustomCount(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onStartPicking(entries);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6 animate-fade-in">
      <Card className="p-6 border-2 border-picker-purple">
        <div className="space-y-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="entryCount">Number of Entries: {customCount ? customEntryCount || '0' : entryCount}</Label>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-xs">2</span>
                <Slider
                  id="entryCount"
                  value={[entryCount]}
                  min={2}
                  max={100}
                  step={1}
                  onValueChange={handleSliderChange}
                  className={`flex-1 ${customCount ? 'opacity-50' : ''}`}
                  disabled={customCount}
                />
                <span className="text-xs">100</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Input 
                type="number" 
                placeholder="Custom count (>100)" 
                value={customEntryCount}
                onChange={handleCustomCountChange}
                min={2}
                className="max-w-[200px]"
              />
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setCustomCount(false);
                  setCustomEntryCount('');
                }}
                className="text-xs h-9"
              >
                Use Slider
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Enter Your Numbers</h3>
            <ScrollArea className="h-[400px] pr-4">
              {entries.map((entry, index) => (
                <NumberEntry
                  key={index}
                  index={index}
                  onValueChange={handleEntryValueChange}
                  number={entry.number}
                  name={entry.name}
                />
              ))}
            </ScrollArea>
          </div>
          
          {!isFormValid && entries.some(entry => entry.number !== null) && (
            <p className="text-destructive text-sm">
              Please fill in all numbers and make sure they are unique.
            </p>
          )}
          
          <Button 
            type="submit" 
            disabled={!isFormValid}
            className="w-full bg-picker-purple hover:bg-picker-purple/90 text-white"
          >
            Start Random Picking
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default NumberPickerForm;
