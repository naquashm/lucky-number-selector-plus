
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Check, X, HelpCircle } from 'lucide-react';
import ConfettiEffect from '@/components/ConfettiEffect';

type DecisionMode = 'binary' | 'trinary' | 'custom';
type DecisionOption = {
  text: string;
  icon?: React.ReactNode;
};

const YesNoPickerTool: React.FC = () => {
  const [mode, setMode] = useState<DecisionMode>('binary');
  const [customOptions, setCustomOptions] = useState<string[]>(['Yes', 'No', 'Maybe']);
  const [result, setResult] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const getOptions = (): DecisionOption[] => {
    switch (mode) {
      case 'binary':
        return [
          { text: 'Yes', icon: <Check className="text-green-500" /> },
          { text: 'No', icon: <X className="text-red-500" /> }
        ];
      case 'trinary':
        return [
          { text: 'Yes', icon: <Check className="text-green-500" /> },
          { text: 'No', icon: <X className="text-red-500" /> },
          { text: 'Maybe', icon: <HelpCircle className="text-amber-500" /> }
        ];
      case 'custom':
        return customOptions.map(option => ({ text: option }));
      default:
        return [];
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...customOptions];
    newOptions[index] = value;
    setCustomOptions(newOptions);
  };

  const addOption = () => {
    setCustomOptions([...customOptions, '']);
  };

  const removeOption = (index: number) => {
    if (customOptions.length <= 2) return; // Keep at least 2 options
    setCustomOptions(customOptions.filter((_, i) => i !== index));
  };

  const generateDecision = () => {
    const options = getOptions();
    if (options.length === 0) return;

    setResult(null);
    setIsAnimating(true);

    // Create animation effect - rapidly cycle through options
    let iterations = 0;
    const maxIterations = 15; // Number of flashes
    const animationSpeed = 100; // ms

    const animate = () => {
      const randomIndex = Math.floor(Math.random() * options.length);
      setResult(options[randomIndex].text);
      
      iterations++;
      
      if (iterations < maxIterations) {
        setTimeout(animate, animationSpeed);
      } else {
        // Final selection
        const finalIndex = Math.floor(Math.random() * options.length);
        setResult(options[finalIndex].text);
        setIsAnimating(false);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
    };
    
    animate();
  };

  const getIconForResult = () => {
    if (!result) return null;
    
    if (result === "Yes") return <Check className="text-green-500 h-8 w-8" />;
    if (result === "No") return <X className="text-red-500 h-8 w-8" />;
    if (result === "Maybe") return <HelpCircle className="text-amber-500 h-8 w-8" />;
    return null;
  };

  const getColorForResult = () => {
    if (!result) return "from-picker-purple to-picker-orange";
    
    if (result === "Yes") return "from-green-400 to-green-600";
    if (result === "No") return "from-red-400 to-red-600";
    if (result === "Maybe") return "from-amber-400 to-amber-600";
    return "from-picker-purple to-picker-orange";
  };

  return (
    <Card>
      <CardContent className="p-6">
        <ConfettiEffect active={showConfetti} />
        
        <div className="space-y-6">
          <div>
            <Label className="text-base font-medium">Decision Mode</Label>
            <RadioGroup 
              value={mode} 
              onValueChange={(value) => setMode(value as DecisionMode)}
              className="mt-2 space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="binary" id="binary" />
                <Label htmlFor="binary" className="cursor-pointer">Yes/No</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="trinary" id="trinary" />
                <Label htmlFor="trinary" className="cursor-pointer">Yes/No/Maybe</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom" className="cursor-pointer">Custom Options</Label>
              </div>
            </RadioGroup>
          </div>
          
          {mode === 'custom' && (
            <div className="space-y-3 border rounded-md p-4 bg-gray-50">
              <Label className="text-base font-medium">Custom Options</Label>
              {customOptions.map((option, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="flex-1"
                  />
                  {customOptions.length > 2 && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeOption(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={addOption}
                className="w-full mt-2"
              >
                Add Option
              </Button>
            </div>
          )}
          
          <Button
            onClick={generateDecision}
            disabled={isAnimating}
            className={`w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white mt-4`}
          >
            {isAnimating ? 'Deciding...' : 'Make a Decision'}
          </Button>
          
          {result && (
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-3">Decision:</h3>
              
              <div className={`p-8 rounded-lg flex items-center justify-center bg-gradient-to-r ${getColorForResult()} ${isAnimating ? 'animate-pulse' : ''}`}>
                {getIconForResult() && (
                  <span className="mr-2">{getIconForResult()}</span>
                )}
                <h2 className="text-3xl font-bold text-white">
                  {result}
                </h2>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default YesNoPickerTool;
