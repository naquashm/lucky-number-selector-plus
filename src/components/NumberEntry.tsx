
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface NumberEntryProps {
  index: number;
  onValueChange: (index: number, number: number, name: string) => void;
  number: number | null;
  name: string;
}

const NumberEntry: React.FC<NumberEntryProps> = ({ index, onValueChange, number, name }) => {
  return (
    <Card className="p-4 mb-3 border-2 border-picker-lightpurple hover:shadow-md transition-all">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`number-${index}`}>Number</Label>
          <Input 
            id={`number-${index}`}
            type="number"
            placeholder="Enter a number"
            value={number === null ? '' : number}
            onChange={(e) => onValueChange(index, e.target.value ? Number(e.target.value) : null, name)}
            className="border-picker-purple/40 focus:border-picker-purple"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`name-${index}`}>Name/Label (Optional)</Label>
          <Input 
            id={`name-${index}`}
            placeholder="E.g. John, Team A, etc."
            value={name}
            onChange={(e) => onValueChange(index, number || 0, e.target.value)}
            className="border-picker-orange/40 focus:border-picker-orange"
          />
        </div>
      </div>
    </Card>
  );
};

export default NumberEntry;
