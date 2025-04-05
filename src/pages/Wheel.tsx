
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import NumberPickerForm, { Entry } from '@/components/NumberPickerForm';
import Navigation from '@/components/Navigation';
import WheelCanvas from '@/components/WheelPicker/WheelCanvas';
import { Button } from '@/components/ui/button';
import ConfettiEffect from '@/components/ConfettiEffect';

const Wheel = () => {
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [showWheel, setShowWheel] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<Entry | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleStartPicking = (validEntries: Entry[]) => {
    setEntries(validEntries);
    setShowWheel(true);
    toast.success("Numbers loaded successfully!");
  };

  const handleReset = () => {
    setEntries(null);
    setShowWheel(false);
    setWinner(null);
    toast.info("Reset complete. Start a new selection!");
  };

  const handleSpin = () => {
    if (spinning || !entries) return;
    setSpinning(true);
    setWinner(null);
  };

  const handleSpinComplete = (winnerEntry: Entry) => {
    setSpinning(false);
    setWinner(winnerEntry);
    setShowConfetti(true);
    toast.success(`Winner: ${winnerEntry.number}${winnerEntry.label ? ` - ${winnerEntry.label}` : ''}!`);
    
    // Hide confetti after animation
    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <ConfettiEffect active={showConfetti} />
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <Navigation />
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Wheel Picker
            </h1>
            <p className="text-gray-600 mt-2">
              Enter your numbers with optional names/labels and spin the wheel!
            </p>
          </header>

          <Separator className="my-6" />

          {!showWheel ? (
            <NumberPickerForm onStartPicking={handleStartPicking} />
          ) : entries ? (
            <div className="space-y-8">
              <div className="relative w-full aspect-square max-w-xl mx-auto">
                <WheelCanvas 
                  entries={entries} 
                  spinning={spinning} 
                  onSpinComplete={handleSpinComplete} 
                />
              </div>
              
              <div className="text-center space-y-6">
                {winner && (
                  <div className="animate-bounce-in p-4 bg-gradient-to-r from-picker-purple to-picker-orange text-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">Winner!</h2>
                    <p className="text-2xl font-bold">{winner.number}</p>
                    {winner.label && <p className="text-lg">{winner.label}</p>}
                  </div>
                )}
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={handleSpin} 
                    disabled={spinning}
                    className="bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
                    size="lg"
                  >
                    {spinning ? "Spinning..." : "Spin the Wheel!"}
                  </Button>
                  <Button 
                    onClick={handleReset} 
                    variant="outline"
                    size="lg"
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Card>

      <footer className="text-center mt-8 text-sm text-gray-500">
        <p>© 2025 Random Picker | Input between 2-100 entries</p>
      </footer>
    </div>
  );
};

export default Wheel;
