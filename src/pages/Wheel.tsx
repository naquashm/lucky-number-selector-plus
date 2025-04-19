
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import NumberPickerForm, { Entry } from '@/components/NumberPickerForm';
import Navigation from '@/components/Navigation';
import WheelCanvas from '@/components/WheelPicker/WheelCanvas';
import { Button } from '@/components/ui/button';
import ConfettiEffect from '@/components/ConfettiEffect';
import CSVImport from '@/components/CSVImport';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WheelPickerInstructions from '@/components/WheelPickerInstructions';
import AdPlaceholder from '@/components/home/AdPlaceholder';
import ToolsInfoSection from '@/components/home/ToolsInfoSection';
import Footer from '@/components/home/Footer';

const Wheel = () => {
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [showWheel, setShowWheel] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<Entry | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

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
    toast.success(`Winner: ${winnerEntry.number}${winnerEntry.name ? ` - ${winnerEntry.name}` : ''}!`);
    
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
              Picker Wheel App
            </h1>
            <p className="text-gray-600 mt-2">
              Random name picker from CSV or manual entry. Spin the wheel to make your selection!
            </p>
            <Button 
              variant="link" 
              onClick={() => setShowInstructions(!showInstructions)}
              className="mt-2"
            >
              {showInstructions ? "Hide Instructions" : "Show Instructions"}
            </Button>
          </header>

          {showInstructions && (
            <div className="mb-6">
              <WheelPickerInstructions />
            </div>
          )}

          <Separator className="my-6" />

          {!showWheel ? (
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
                <TabsTrigger value="form">Manual Entry</TabsTrigger>
                <TabsTrigger value="csv">CSV Import</TabsTrigger>
              </TabsList>
              <TabsContent value="form">
                <NumberPickerForm onStartPicking={handleStartPicking} />
              </TabsContent>
              <TabsContent value="csv">
                <CSVImport onEntriesLoaded={handleStartPicking} />
              </TabsContent>
            </Tabs>
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
                    {winner.name && <p className="text-lg">{winner.name}</p>}
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

      <section className="mt-16 space-y-12 text-lg">
        <ToolsInfoSection />
        <AdPlaceholder />
      </section>

      <Footer />
    </div>
  );
};

export default Wheel;
