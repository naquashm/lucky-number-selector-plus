import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Coins } from 'lucide-react';
import ConfettiEffect from '@/components/ConfettiEffect';
import { useToast } from '@/hooks/use-toast';

const CoinFlipperTool: React.FC = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [customHeads, setCustomHeads] = useState<string | null>(null);
  const [customTails, setCustomTails] = useState<string | null>(null);
  const [result, setResult] = useState<'heads' | 'tails' | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLabels, setShowLabels] = useState(true);
  const [headsLabel, setHeadsLabel] = useState('Heads');
  const [tailsLabel, setTailsLabel] = useState('Tails');
  const [flipCount, setFlipCount] = useState(0);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  
  const flipInterval = useRef<number | null>(null);
  const { toast } = useToast();
  
  // Handle file upload for custom coin faces
  const handleImageUpload = (side: 'heads' | 'tails', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    // Create URL for the image
    const imageUrl = URL.createObjectURL(file);
    
    if (side === 'heads') {
      setCustomHeads(imageUrl);
    } else {
      setCustomTails(imageUrl);
    }
    
    toast({
      title: `Custom ${side} uploaded`,
      description: "Your custom coin face has been uploaded"
    });
  };
  
  const flipCoin = () => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setResult(null);
    
    // Rapidly toggle between heads and tails to simulate flipping
    let count = 0;
    const maxFlips = 10;
    const flipSpeed = 150; // ms
    
    const doFlip = () => {
      const randomResult = Math.random() < 0.5 ? 'heads' : 'tails';
      setResult(randomResult);
      
      count++;
      
      if (count < maxFlips) {
        flipInterval.current = window.setTimeout(doFlip, flipSpeed);
      } else {
        // Final result
        const finalResult = Math.random() < 0.5 ? 'heads' : 'tails';
        setResult(finalResult);
        setIsFlipping(false);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
        
        // Update statistics
        setFlipCount(prev => prev + 1);
        if (finalResult === 'heads') {
          setHeadsCount(prev => prev + 1);
        } else {
          setTailsCount(prev => prev + 1);
        }
      }
    };
    
    doFlip();
  };
  
  // Clean up any running intervals when component unmounts
  useEffect(() => {
    return () => {
      if (flipInterval.current) {
        clearTimeout(flipInterval.current);
      }
    };
  }, []);
  
  // Function to get the appropriate coin face image or text
  const getCoinFace = () => {
    if (!result) return null;
    
    if (result === 'heads') {
      return customHeads ? (
        <img 
          src={customHeads} 
          alt="Heads" 
          className="w-32 h-32 rounded-full object-cover" 
        />
      ) : (
        <div className="w-32 h-32 rounded-full bg-yellow-400 border-4 border-yellow-500 flex items-center justify-center">
          <span className="text-2xl font-bold">H</span>
        </div>
      );
    } else {
      return customTails ? (
        <img 
          src={customTails} 
          alt="Tails" 
          className="w-32 h-32 rounded-full object-cover" 
        />
      ) : (
        <div className="w-32 h-32 rounded-full bg-yellow-300 border-4 border-yellow-400 flex items-center justify-center">
          <span className="text-2xl font-bold">T</span>
        </div>
      );
    }
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <ConfettiEffect active={showConfetti} />
        
        <Tabs defaultValue="standard">
          <TabsList className="mb-4">
            <TabsTrigger value="standard">Standard Coin</TabsTrigger>
            <TabsTrigger value="custom">Custom Coin</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="standard">
            <div className="flex flex-col items-center space-y-6">
              <div className={`relative ${isFlipping ? 'animate-spin' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                {result ? (
                  getCoinFace()
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 border-4 border-yellow-400 flex items-center justify-center">
                    <Coins className="w-16 h-16 text-yellow-600" />
                  </div>
                )}
              </div>
              
              {result && showLabels && (
                <div className="text-2xl font-bold text-center">
                  {result === 'heads' ? headsLabel : tailsLabel}
                </div>
              )}
              
              <Button
                onClick={flipCoin}
                disabled={isFlipping}
                className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
              >
                <Coins className="mr-2" />
                {isFlipping ? 'Flipping...' : 'Flip Coin'}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="custom">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="custom-heads">Upload Heads Image</Label>
                  <div className="mt-1 flex flex-col items-center space-y-2">
                    <div className="w-24 h-24 rounded-full bg-gray-100 border flex items-center justify-center overflow-hidden">
                      {customHeads ? (
                        <img 
                          src={customHeads} 
                          alt="Custom Heads" 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <span className="text-gray-400">Heads</span>
                      )}
                    </div>
                    <Input
                      id="custom-heads"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload('heads', e)}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="custom-tails">Upload Tails Image</Label>
                  <div className="mt-1 flex flex-col items-center space-y-2">
                    <div className="w-24 h-24 rounded-full bg-gray-100 border flex items-center justify-center overflow-hidden">
                      {customTails ? (
                        <img 
                          src={customTails} 
                          alt="Custom Tails" 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <span className="text-gray-400">Tails</span>
                      )}
                    </div>
                    <Input
                      id="custom-tails"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload('tails', e)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              
              <Button
                onClick={flipCoin}
                disabled={isFlipping}
                className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
              >
                <Coins className="mr-2" />
                {isFlipping ? 'Flipping...' : 'Flip Custom Coin'}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="show-labels"
                  checked={showLabels}
                  onCheckedChange={setShowLabels}
                />
                <Label htmlFor="show-labels">Show Result Labels</Label>
              </div>
              
              {showLabels && (
                <div className="space-y-4 border-t pt-4">
                  <div>
                    <Label htmlFor="heads-label">Heads Label</Label>
                    <Input
                      id="heads-label"
                      value={headsLabel}
                      onChange={(e) => setHeadsLabel(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="tails-label">Tails Label</Label>
                    <Input
                      id="tails-label"
                      value={tailsLabel}
                      onChange={(e) => setTailsLabel(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        {flipCount > 0 && (
          <div className="mt-8">
            <div className="bg-gray-50 rounded-lg p-4 border">
              <h3 className="font-semibold mb-2 text-center">Statistics</h3>
              <div className="grid grid-cols-3 text-center">
                <div>
                  <p className="text-sm text-gray-500">Flips</p>
                  <p className="font-bold">{flipCount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Heads</p>
                  <p className="font-bold">{headsCount} ({Math.round((headsCount / flipCount) * 100)}%)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tails</p>
                  <p className="font-bold">{tailsCount} ({Math.round((tailsCount / flipCount) * 100)}%)</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CoinFlipperTool;
