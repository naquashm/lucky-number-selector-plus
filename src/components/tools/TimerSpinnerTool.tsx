
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CircleDashed, Pause, Play, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ConfettiEffect from '@/components/ConfettiEffect';
import { Textarea } from '@/components/ui/textarea';

const TimerSpinnerTool: React.FC = () => {
  // Timer settings
  const [duration, setDuration] = useState<number>(10);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [items, setItems] = useState<string[]>([
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5"
  ]);
  const [result, setResult] = useState<string | null>(null);
  const [rotationSpeed, setRotationSpeed] = useState<number>(5);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  
  // Refs
  const timerRef = useRef<number | null>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Parse and set items from textarea
  const handleItemsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const lines = text.split('\n').filter(line => line.trim() !== '');
    setItems(lines);
  };
  
  // Start the timer and spinning
  const startTimer = () => {
    if (items.length === 0) {
      toast({
        title: "No items to select",
        description: "Please add at least one item",
        variant: "destructive"
      });
      return;
    }
    
    // Reset state
    setTimeLeft(duration);
    setIsRunning(true);
    setIsPaused(false);
    setResult(null);
    
    // Start animation
    if (spinnerRef.current) {
      spinnerRef.current.style.animationDuration = `${11 - rotationSpeed}s`;
      spinnerRef.current.style.animationIterationCount = 'infinite';
      spinnerRef.current.style.animationPlayState = 'running';
    }
    
    // Start countdown
    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          // Timer complete
          clearInterval(timerRef.current!);
          selectRandomItem();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  
  // Pause the timer and spinning
  const pauseTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setIsPaused(true);
      
      if (spinnerRef.current) {
        spinnerRef.current.style.animationPlayState = 'paused';
      }
    }
  };
  
  // Resume the timer and spinning
  const resumeTimer = () => {
    setIsPaused(false);
    
    if (spinnerRef.current) {
      spinnerRef.current.style.animationPlayState = 'running';
    }
    
    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timerRef.current!);
          selectRandomItem();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  
  // Reset the timer and spinning
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    setTimeLeft(null);
    setIsRunning(false);
    setIsPaused(false);
    setResult(null);
    
    if (spinnerRef.current) {
      spinnerRef.current.style.animationPlayState = 'paused';
      spinnerRef.current.style.transform = 'rotate(0deg)';
    }
  };
  
  // Select a random item when timer ends
  const selectRandomItem = () => {
    if (items.length === 0) return;
    
    // Show a quick animation of cycling through items
    let cycleCount = 0;
    const maxCycles = 10;
    const cycleInterval = 100; // ms
    
    const cycleItems = () => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setResult(items[randomIndex]);
      
      cycleCount++;
      if (cycleCount < maxCycles) {
        setTimeout(cycleItems, cycleInterval);
      } else {
        // Final selection
        const finalIndex = Math.floor(Math.random() * items.length);
        setResult(items[finalIndex]);
        setIsRunning(false);
        
        // Stop the spinner animation
        if (spinnerRef.current) {
          spinnerRef.current.style.animationPlayState = 'paused';
        }
        
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
        
        toast({
          title: "Timer Complete",
          description: `Selected: ${items[finalIndex]}`
        });
      }
    };
    
    cycleItems();
  };
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  // Format time in MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <ConfettiEffect active={showConfetti} />
        
        <Tabs defaultValue="timer" className="space-y-6">
          <TabsList className="mb-4">
            <TabsTrigger value="timer">Timer</TabsTrigger>
            <TabsTrigger value="items">Items</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="timer" className="space-y-6">
            <div className="flex flex-col items-center">
              {/* Timer display */}
              <div className="w-48 h-48 rounded-full border-8 border-gray-200 flex items-center justify-center mb-6 relative">
                <div 
                  ref={spinnerRef}
                  className="absolute inset-0 rounded-full border-t-8 border-picker-purple"
                  style={{ 
                    animation: 'spin linear',
                    animationPlayState: 'paused'
                  }}
                ></div>
                <div className="text-3xl font-bold">
                  {timeLeft !== null ? formatTime(timeLeft) : formatTime(duration)}
                </div>
              </div>
              
              {/* Result display */}
              {result && (
                <div className="mb-6 text-center">
                  <p className="text-gray-500 mb-1">Selected:</p>
                  <h3 className="text-2xl font-bold text-picker-purple">{result}</h3>
                </div>
              )}
              
              {/* Timer controls */}
              <div className="flex space-x-4">
                {!isRunning ? (
                  <Button
                    onClick={startTimer}
                    className="bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Start Timer
                  </Button>
                ) : isPaused ? (
                  <Button onClick={resumeTimer}>
                    <Play className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                ) : (
                  <Button onClick={pauseTimer}>
                    <Pause className="mr-2 h-4 w-4" />
                    Pause
                  </Button>
                )}
                
                <Button variant="outline" onClick={resetTimer} disabled={!isRunning && timeLeft === null}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="items" className="space-y-4">
            <div>
              <Label htmlFor="items" className="text-base font-medium">Enter Items (one per line)</Label>
              <Textarea
                id="items"
                className="mt-1 h-48 font-mono"
                placeholder="Item 1&#10;Item 2&#10;Item 3"
                value={items.join('\n')}
                onChange={handleItemsChange}
              />
              <p className="text-sm text-gray-500 mt-2">
                {items.length} items entered
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="duration" className="flex justify-between">
                <span>Timer Duration (seconds): {duration}</span>
              </Label>
              <Input
                id="duration"
                type="number"
                min="1"
                max="300"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="speed" className="flex justify-between">
                <span>Rotation Speed: {rotationSpeed}</span>
              </Label>
              <Slider
                id="speed"
                min={1}
                max={10}
                step={1}
                value={[rotationSpeed]}
                onValueChange={(value) => setRotationSpeed(value[0])}
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>Slower</span>
                <span>Faster</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TimerSpinnerTool;
