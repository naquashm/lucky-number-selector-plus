
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Dices } from 'lucide-react';
import ConfettiEffect from '@/components/ConfettiEffect';
import { useToast } from '@/hooks/use-toast';

type DiceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'custom';

const DiceRollerTool: React.FC = () => {
  const [diceType, setDiceType] = useState<DiceType>('d6');
  const [customSides, setCustomSides] = useState('6');
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [results, setResults] = useState<number[]>([]);
  const [rolling, setRolling] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  
  const getSides = () => {
    switch (diceType) {
      case 'd4': return 4;
      case 'd6': return 6;
      case 'd8': return 8;
      case 'd10': return 10;
      case 'd12': return 12;
      case 'd20': return 20;
      case 'custom': 
        const sides = parseInt(customSides);
        return isNaN(sides) || sides < 2 ? 6 : sides;
    }
  };
  
  const rollDice = () => {
    // Validate inputs
    if (diceType === 'custom') {
      const sides = parseInt(customSides);
      if (isNaN(sides) || sides < 2) {
        toast({
          title: "Invalid number of sides",
          description: "Please enter a number greater than 1",
          variant: "destructive"
        });
        return;
      }
    }
    
    const numDice = parseInt(numberOfDice.toString());
    if (isNaN(numDice) || numDice < 1 || numDice > 10) {
      toast({
        title: "Invalid number of dice",
        description: "Please enter a number between 1 and 10",
        variant: "destructive"
      });
      return;
    }
    
    setRolling(true);
    setResults([]);
    
    // Animate dice rolling
    let count = 0;
    const sides = getSides();
    
    const animateDiceRoll = () => {
      const tempResults = Array(numDice).fill(0).map(() => 
        Math.floor(Math.random() * sides) + 1
      );
      setResults(tempResults);
      
      count++;
      
      if (count < 10) {
        setTimeout(animateDiceRoll, 100);
      } else {
        // Final roll
        const finalResults = Array(numDice).fill(0).map(() => 
          Math.floor(Math.random() * sides) + 1
        );
        setResults(finalResults);
        setRolling(false);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
    };
    
    animateDiceRoll();
  };
  
  const getDiceDisplay = (value: number) => {
    // For d6, use special display
    if (diceType === 'd6' && value >= 1 && value <= 6) {
      const dotPositions: Record<number, string[]> = {
        1: ['center'],
        2: ['top-left', 'bottom-right'],
        3: ['top-left', 'center', 'bottom-right'],
        4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
        6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right']
      };
      
      return (
        <div className="bg-white border-2 border-gray-300 rounded-lg w-16 h-16 flex items-center justify-center relative shadow-lg">
          {dotPositions[value].map((position, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 bg-black rounded-full ${
                position === 'center' ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' :
                position === 'top-left' ? 'top-2 left-2' :
                position === 'top-right' ? 'top-2 right-2' :
                position === 'middle-left' ? 'top-1/2 left-2 transform -translate-y-1/2' :
                position === 'middle-right' ? 'top-1/2 right-2 transform -translate-y-1/2' :
                position === 'bottom-left' ? 'bottom-2 left-2' :
                'bottom-2 right-2'
              }`}
            ></div>
          ))}
        </div>
      );
    }
    
    // For other dice types
    return (
      <div className="bg-white border-2 border-gray-300 rounded-lg w-16 h-16 flex items-center justify-center shadow-lg">
        <span className="text-xl font-bold">{value}</span>
      </div>
    );
  };

  return (
    <Card>
      <CardContent className="p-6">
        <ConfettiEffect active={showConfetti} />
        
        <div className="space-y-6">
          <div>
            <Label className="text-base font-medium">Dice Type</Label>
            <RadioGroup 
              value={diceType} 
              onValueChange={(value) => setDiceType(value as DiceType)}
              className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="d4" id="d4" />
                <Label htmlFor="d4" className="cursor-pointer">D4</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="d6" id="d6" />
                <Label htmlFor="d6" className="cursor-pointer">D6</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="d8" id="d8" />
                <Label htmlFor="d8" className="cursor-pointer">D8</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="d10" id="d10" />
                <Label htmlFor="d10" className="cursor-pointer">D10</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="d12" id="d12" />
                <Label htmlFor="d12" className="cursor-pointer">D12</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="d20" id="d20" />
                <Label htmlFor="d20" className="cursor-pointer">D20</Label>
              </div>
              <div className="flex items-center space-x-2 col-span-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom" className="cursor-pointer">Custom</Label>
              </div>
            </RadioGroup>
          </div>
          
          {diceType === 'custom' && (
            <div>
              <Label htmlFor="custom-sides">Number of Sides</Label>
              <Input
                id="custom-sides"
                type="number"
                min="2"
                value={customSides}
                onChange={(e) => setCustomSides(e.target.value)}
                className="w-full mt-1"
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="number-of-dice">Number of Dice</Label>
            <Input
              id="number-of-dice"
              type="number"
              min="1"
              max="10"
              value={numberOfDice}
              onChange={(e) => setNumberOfDice(parseInt(e.target.value) || 1)}
              className="w-full mt-1"
            />
          </div>
          
          <Button
            onClick={rollDice}
            disabled={rolling}
            className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
          >
            <Dices className="mr-2" />
            {rolling ? 'Rolling...' : 'Roll Dice'}
          </Button>
          
          {results.length > 0 && (
            <div className="mt-8">
              <div className="bg-gray-50 rounded-lg p-4 border">
                <h3 className="text-lg font-semibold mb-3 text-center">Results:</h3>
                
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  {results.map((result, i) => (
                    <div key={i} className={rolling ? 'animate-bounce' : ''}>
                      {getDiceDisplay(result)}
                    </div>
                  ))}
                </div>
                
                {results.length > 1 && (
                  <div className="text-center mt-4 border-t pt-4">
                    <p className="text-gray-600">Total: <span className="font-bold text-lg">{results.reduce((sum, num) => sum + num, 0)}</span></p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DiceRollerTool;
