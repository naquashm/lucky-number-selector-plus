
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Entry } from './NumberPickerForm';
import ConfettiEffect from './ConfettiEffect';

interface RandomPickerProps {
  entries: Entry[];
  onReset: () => void;
}

const RandomPicker: React.FC<RandomPickerProps> = ({ entries, onReset }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const pickRandom = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setSelectedIndex(null);
    
    // Animation to show cycling through numbers
    let count = 0;
    const maxCycles = 20 + Math.floor(Math.random() * 10);
    const interval = setInterval(() => {
      setHighlightedIndex(Math.floor(Math.random() * entries.length));
      count++;
      
      // Slow down the animation towards the end
      if (count > maxCycles * 0.7) {
        clearInterval(interval);
        
        // Final slower animation
        let slowCount = 0;
        const slowInterval = setInterval(() => {
          setHighlightedIndex(Math.floor(Math.random() * entries.length));
          slowCount++;
          
          if (slowCount >= 10) {
            clearInterval(slowInterval);
            
            // Make final selection and trigger confetti
            const finalIndex = Math.floor(Math.random() * entries.length);
            setSelectedIndex(finalIndex);
            setHighlightedIndex(finalIndex);
            setShowConfetti(true);
            setIsAnimating(false);
            
            // Reset confetti after a few seconds
            setTimeout(() => {
              setShowConfetti(false);
            }, 3000);
          }
        }, 200);
      }
    }, 100);
  };

  return (
    <div className="space-y-6 animate-bounce-in">
      <Card className="p-6 border-2 border-picker-orange">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold mb-4">Random Number Picker</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto p-2">
            {entries.map((entry, index) => (
              <Card 
                key={index}
                className={`p-4 transition-all ${
                  highlightedIndex === index
                    ? 'scale-105 border-2 border-picker-orange bg-picker-orange/10'
                    : selectedIndex === index
                    ? 'scale-110 border-2 border-picker-purple bg-picker-purple/20 shadow-lg'
                    : 'opacity-70'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">{entry.number}</span>
                  <span className="text-lg text-gray-600">
                    {entry.name || `Entry ${index + 1}`}
                  </span>
                </div>
              </Card>
            ))}
          </div>
          
          {selectedIndex !== null && (
            <div className="mt-8 p-6 border-2 border-picker-purple rounded-lg bg-picker-purple/5">
              <h3 className="text-xl mb-2">Selected Entry:</h3>
              <p className="text-3xl font-bold text-picker-purple">
                {entries[selectedIndex].number}
                {entries[selectedIndex].name && 
                  <span className="text-xl text-gray-600 ml-2">
                    ({entries[selectedIndex].name})
                  </span>
                }
              </p>
            </div>
          )}
          
          <div className="flex gap-4 justify-center">
            <Button
              onClick={pickRandom}
              disabled={isAnimating}
              className="bg-picker-orange hover:bg-picker-orange/90 text-white"
            >
              {selectedIndex === null ? "Pick Random Number" : "Pick Again"}
            </Button>
            <Button
              onClick={onReset}
              variant="outline"
              className="border-picker-purple text-picker-purple hover:bg-picker-purple/10"
            >
              Reset All
            </Button>
          </div>
        </div>
      </Card>
      <ConfettiEffect active={showConfetti} />
    </div>
  );
};

export default RandomPicker;
