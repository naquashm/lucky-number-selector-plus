
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { FileSpreadsheet, ListFilter, ArrowDown } from 'lucide-react';
import ConfettiEffect from '@/components/ConfettiEffect';
import { useToast } from '@/hooks/use-toast';

const ListShufflerTool: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const [shuffledItems, setShuffledItems] = useState<string[]>([]);
  const [showNumbers, setShowNumbers] = useState(true);
  const [shuffling, setShuffling] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const processInputItems = () => {
    if (!inputText.trim()) {
      toast({
        title: "No items entered",
        description: "Please enter at least one item to shuffle",
        variant: "destructive"
      });
      return false;
    }

    const itemList = inputText
      .split('\n')
      .map(item => item.trim())
      .filter(item => item !== '');

    if (itemList.length < 2) {
      toast({
        title: "Not enough items",
        description: "Please enter at least two items to shuffle",
        variant: "destructive"
      });
      return false;
    }

    setItems(itemList);
    return true;
  };

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const csvText = e.target?.result as string;
      
      // Simple CSV parsing (assuming one item per line)
      const itemList = csvText
        .split('\n')
        .map(line => line.split(',')[0]?.trim()) // Take first column
        .filter(item => item !== '');
      
      if (itemList.length < 2) {
        toast({
          title: "Not enough items in CSV",
          description: "Please upload a CSV with at least two items",
          variant: "destructive"
        });
        return;
      }
      
      setInputText(itemList.join('\n'));
      setItems(itemList);
      toast({
        title: "CSV Imported",
        description: `Successfully imported ${itemList.length} items`
      });
    };
    
    reader.readAsText(file);
  };

  const shuffleList = () => {
    if (!processInputItems()) return;
    
    setShuffling(true);
    setShuffledItems([]);
    
    // Animate shuffling with multiple steps
    const shuffleSteps = 5;
    let currentStep = 0;
    
    const performShuffle = () => {
      // Create a copy of the original items
      const shuffled = [...items];
      
      // Fisher-Yates shuffle algorithm
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      setShuffledItems(shuffled);
      
      currentStep++;
      
      if (currentStep < shuffleSteps) {
        // Continue shuffling with a delay
        setTimeout(performShuffle, 300);
      } else {
        // Final shuffle
        setShuffling(false);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
    };
    
    performShuffle();
  };

  return (
    <Card>
      <CardContent className="p-6">
        <ConfettiEffect active={showConfetti} />
        
        <Tabs defaultValue="text">
          <TabsList className="mb-4">
            <TabsTrigger value="text">Text Input</TabsTrigger>
            <TabsTrigger value="csv">CSV Upload</TabsTrigger>
          </TabsList>
          
          <TabsContent value="text">
            <div className="space-y-4">
              <div>
                <Label htmlFor="items">Enter Items (one per line)</Label>
                <Textarea
                  id="items"
                  placeholder="Item 1
Item 2
Item 3
..."
                  rows={6}
                  value={inputText}
                  onChange={handleTextInput}
                  className="mt-1"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="csv">
            <div className="space-y-4">
              <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div className="text-center">
                  <FileSpreadsheet className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="csv-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 hover:text-blue-500"
                    >
                      <span>Upload a CSV file</span>
                      <Input
                        id="csv-upload"
                        name="csv-upload"
                        type="file"
                        accept=".csv"
                        onChange={handleCSVUpload}
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">CSV with one item per row</p>
                </div>
              </div>
              
              {items.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500">{items.length} items loaded</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 flex items-center space-x-2">
          <Switch
            id="show-numbers"
            checked={showNumbers}
            onCheckedChange={setShowNumbers}
          />
          <Label htmlFor="show-numbers">Show numbers in result</Label>
        </div>
        
        <Button
          onClick={shuffleList}
          disabled={shuffling}
          className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white mt-4"
        >
          <ListFilter className="mr-2" />
          {shuffling ? 'Shuffling...' : 'Shuffle List'}
        </Button>
        
        {shuffledItems.length > 0 && (
          <div className="mt-8">
            <div className={`relative overflow-hidden rounded-lg border bg-card ${shuffling ? 'opacity-70' : ''}`}>
              <div className="flex justify-between items-center bg-muted p-3">
                <h3 className="font-semibold">Shuffled Result</h3>
                {shuffling && (
                  <div className="animate-spin">
                    <ListFilter className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="space-y-1">
                  {shuffledItems.map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex py-2 px-3 ${index % 2 === 0 ? 'bg-muted/50' : ''} rounded-md ${shuffling ? 'animate-pulse' : ''}`}
                    >
                      {showNumbers && (
                        <span className="w-8 font-medium text-gray-500">{index + 1}.</span>
                      )}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-muted/50 p-3 flex justify-end border-t">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    const text = shuffledItems.map((item, i) => 
                      showNumbers ? `${i + 1}. ${item}` : item
                    ).join('\n');
                    navigator.clipboard.writeText(text);
                    toast({ title: "Copied to clipboard" });
                  }}
                >
                  Copy Results
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ListShufflerTool;
