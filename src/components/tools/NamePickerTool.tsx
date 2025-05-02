
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { FileSpreadsheet, User, ArrowRight } from 'lucide-react';
import ConfettiEffect from '@/components/ConfettiEffect';
import { useToast } from '@/hooks/use-toast';

const NamePickerTool: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const [showAnimation, setShowAnimation] = useState(true);
  const [picking, setPicking] = useState(false);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [animatingNames, setAnimatingNames] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const animationRef = useRef<number | null>(null);
  const { toast } = useToast();

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const processInputNames = () => {
    if (!inputText.trim()) {
      toast({
        title: "No names entered",
        description: "Please enter at least one name to pick from",
        variant: "destructive"
      });
      return false;
    }

    const nameList = inputText
      .split('\n')
      .map(name => name.trim())
      .filter(name => name !== '');

    if (nameList.length < 1) {
      toast({
        title: "No valid names",
        description: "Please enter at least one valid name",
        variant: "destructive"
      });
      return false;
    }

    setNames(nameList);
    return true;
  };

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const csvText = e.target?.result as string;
      
      // Simple CSV parsing (assuming one name per line)
      const nameList = csvText
        .split('\n')
        .map(line => line.split(',')[0]?.trim()) // Take first column
        .filter(name => name !== '');
      
      if (nameList.length < 1) {
        toast({
          title: "No valid names in CSV",
          description: "Please upload a CSV with at least one valid name",
          variant: "destructive"
        });
        return;
      }
      
      setInputText(nameList.join('\n'));
      setNames(nameList);
      toast({
        title: "CSV Imported",
        description: `Successfully imported ${nameList.length} names`
      });
    };
    
    reader.readAsText(file);
  };

  const pickRandom = () => {
    if (!processInputNames()) return;
    
    setSelectedName(null);
    
    if (showAnimation) {
      setPicking(true);
      startNameAnimation();
    } else {
      // Direct pick without animation
      const randomIndex = Math.floor(Math.random() * names.length);
      setSelectedName(names[randomIndex]);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const startNameAnimation = () => {
    let count = 0;
    const animationSpeed = 50; // ms
    const animationDuration = 2000; // 2 seconds
    const iterations = animationDuration / animationSpeed;
    
    const animate = () => {
      const randomIndex = Math.floor(Math.random() * names.length);
      setAnimatingNames(prev => [...prev.slice(-9), names[randomIndex]]);
      
      count++;
      
      if (count < iterations) {
        animationRef.current = requestAnimationFrame(() => {
          setTimeout(animate, animationSpeed);
        });
      } else {
        // End of animation
        const finalIndex = Math.floor(Math.random() * names.length);
        setSelectedName(names[finalIndex]);
        setPicking(false);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    };
    
    setAnimatingNames([]);
    animate();
  };

  useEffect(() => {
    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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
                <Label htmlFor="names">Enter Names (one per line)</Label>
                <Textarea
                  id="names"
                  placeholder="John Smith
Jane Doe
Alex Johnson
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
                  <p className="text-xs leading-5 text-gray-600">CSV with one name per row</p>
                </div>
              </div>
              
              {names.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500">{names.length} names loaded</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 flex items-center space-x-2">
          <Switch
            id="show-animation"
            checked={showAnimation}
            onCheckedChange={setShowAnimation}
          />
          <Label htmlFor="show-animation">Show animation when picking</Label>
        </div>
        
        <Button
          onClick={pickRandom}
          disabled={picking}
          className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white mt-4"
        >
          <User className="mr-2" />
          Pick a Random Name
        </Button>
        
        {(picking || selectedName) && (
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold mb-3">
              {picking ? "Selecting..." : "Selected Name:"}
            </h3>
            
            {picking ? (
              <div className="h-32 overflow-hidden relative">
                <div className="animate-bounce absolute inset-x-0 -top-6">
                  <ArrowRight className="rotate-90 mx-auto h-6 w-6 text-picker-purple" />
                </div>
                <div className="flex flex-col items-center">
                  {animatingNames.map((name, i) => (
                    <div 
                      key={i}
                      className={`py-1 w-full text-center ${i === animatingNames.length - 1 ? 'text-xl font-bold text-picker-purple' : 'text-gray-400'}`}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-lg bg-gradient-to-r from-picker-purple/10 to-picker-orange/10">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
                  {selectedName}
                </h2>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NamePickerTool;
