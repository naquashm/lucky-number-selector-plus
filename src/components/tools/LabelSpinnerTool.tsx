
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Circle, FileSpreadsheet } from 'lucide-react';
import ConfettiEffect from '@/components/ConfettiEffect';
import { useToast } from '@/hooks/use-toast';

interface SpinnerSegment {
  label: string;
  color: string;
}

// Color palette for wheel segments
const DEFAULT_COLORS = [
  '#FF7F50', '#8A2BE2', '#7FFFD4', '#FFD700', '#32CD32', 
  '#BA55D3', '#00CED1', '#FF69B4', '#1E90FF', '#F4A460',
  '#6A5ACD', '#98FB98', '#DDA0DD', '#87CEEB', '#F08080'
];

const LabelSpinnerTool: React.FC = () => {
  const [segments, setSegments] = useState<SpinnerSegment[]>([
    { label: 'Option 1', color: DEFAULT_COLORS[0] },
    { label: 'Option 2', color: DEFAULT_COLORS[1] },
    { label: 'Option 3', color: DEFAULT_COLORS[2] },
    { label: 'Option 4', color: DEFAULT_COLORS[3] }
  ]);
  const [inputText, setInputText] = useState('');
  const [spinning, setSpinning] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const { toast } = useToast();
  
  // Process text input into wheel segments
  const processInputLabels = () => {
    if (!inputText.trim()) {
      toast({
        title: "No labels entered",
        description: "Please enter at least one label for the spinner",
        variant: "destructive"
      });
      return false;
    }

    const labelList = inputText
      .split('\n')
      .map(label => label.trim())
      .filter(label => label !== '');

    if (labelList.length < 2) {
      toast({
        title: "Not enough labels",
        description: "Please enter at least two labels for the spinner",
        variant: "destructive"
      });
      return false;
    }

    // Create segments with colors
    const newSegments = labelList.map((label, index) => ({
      label,
      color: DEFAULT_COLORS[index % DEFAULT_COLORS.length]
    }));
    
    setSegments(newSegments);
    return true;
  };
  
  // Handle CSV upload
  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const csvText = e.target?.result as string;
      
      // Simple CSV parsing (assuming one label per line)
      const labelList = csvText
        .split('\n')
        .map(line => line.split(',')[0]?.trim()) // Take first column
        .filter(label => label !== '');
      
      if (labelList.length < 2) {
        toast({
          title: "Not enough labels in CSV",
          description: "Please upload a CSV with at least two labels",
          variant: "destructive"
        });
        return;
      }
      
      setInputText(labelList.join('\n'));
      
      // Create segments with colors
      const newSegments = labelList.map((label, index) => ({
        label,
        color: DEFAULT_COLORS[index % DEFAULT_COLORS.length]
      }));
      
      setSegments(newSegments);
      
      toast({
        title: "CSV Imported",
        description: `Successfully imported ${labelList.length} labels`
      });
    };
    
    reader.readAsText(file);
  };
  
  // Draw the wheel on canvas
  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const size = 300;
    canvas.width = size;
    canvas.height = size;
    
    // Clear canvas
    ctx.clearRect(0, 0, size, size);
    
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.45; // Slightly smaller than half to leave space for borders
    
    // Draw segments
    if (segments.length > 0) {
      const arcAngle = (2 * Math.PI) / segments.length;
      
      segments.forEach((segment, i) => {
        const startAngle = i * arcAngle;
        const endAngle = (i + 1) * arcAngle;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        
        ctx.fillStyle = segment.color;
        ctx.fill();
        
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
        
        // Draw label
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + arcAngle / 2);
        
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '12px Arial';
        
        // Calculate distance from center based on text length
        const distance = radius * 0.75;
        
        // Adjust text to fit in segment
        let text = segment.label;
        const maxLength = 12;
        if (text.length > maxLength) {
          text = text.substring(0, maxLength - 3) + '...';
        }
        
        ctx.fillText(text, distance, 0);
        ctx.restore();
      });
    }
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw pointer
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius);
    ctx.lineTo(centerX - 10, centerY - radius - 20);
    ctx.lineTo(centerX + 10, centerY - radius - 20);
    ctx.closePath();
    ctx.fillStyle = '#FF0000';
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.stroke();
  };
  
  // Spin the wheel
  const spinWheel = () => {
    if (segments.length < 2) {
      toast({
        title: "Not enough segments",
        description: "Add at least two segments to the wheel",
        variant: "destructive"
      });
      return;
    }
    
    setSpinning(true);
    setResult(null);
    
    // Generate random spin parameters
    const spinDuration = 3000 + Math.random() * 2000; // 3-5 seconds
    const extraSpins = 2 + Math.random() * 3; // 2-5 extra rotations
    const totalRotation = extraSpins * 360 + Math.random() * 360;
    
    const startTime = Date.now();
    const startAngle = rotationAngle;
    
    // Animation function
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / spinDuration;
      
      if (progress < 1) {
        // Easing function for natural slowdown
        let easedProgress;
        if (progress < 0.7) {
          // Start fast
          easedProgress = progress;
        } else {
          // Slow down near the end
          easedProgress = 0.7 + (1 - Math.pow(1 - ((progress - 0.7) / 0.3), 3)) * 0.3;
        }
        
        const newAngle = startAngle + totalRotation * easedProgress;
        setRotationAngle(newAngle);
        
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        const finalAngle = startAngle + totalRotation;
        setRotationAngle(finalAngle);
        setSpinning(false);
        
        // Determine winner
        const normalizedAngle = finalAngle % 360;
        const segmentAngle = 360 / segments.length;
        const winningIndex = Math.floor(((360 - normalizedAngle) % 360) / segmentAngle);
        
        setResult(segments[winningIndex].label);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    };
    
    animate();
  };
  
  // Add a new segment
  const addSegment = () => {
    setSegments([
      ...segments, 
      {
        label: `Option ${segments.length + 1}`,
        color: DEFAULT_COLORS[segments.length % DEFAULT_COLORS.length]
      }
    ]);
  };
  
  // Remove a segment
  const removeSegment = (index: number) => {
    if (segments.length <= 2) {
      toast({
        title: "Cannot remove",
        description: "The wheel needs at least two segments",
        variant: "destructive"
      });
      return;
    }
    
    setSegments(segments.filter((_, i) => i !== index));
  };
  
  // Update a segment's label
  const updateSegmentLabel = (index: number, newLabel: string) => {
    const updatedSegments = [...segments];
    updatedSegments[index] = {
      ...updatedSegments[index],
      label: newLabel
    };
    setSegments(updatedSegments);
  };
  
  // Update a segment's color
  const updateSegmentColor = (index: number, newColor: string) => {
    const updatedSegments = [...segments];
    updatedSegments[index] = {
      ...updatedSegments[index],
      color: newColor
    };
    setSegments(updatedSegments);
  };
  
  // Apply text input to create segments
  const applyTextInput = () => {
    processInputLabels();
  };
  
  // Draw wheel whenever segments change
  useEffect(() => {
    drawWheel();
  }, [segments]);
  
  // Clean up animation on unmount
  useEffect(() => {
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
        
        <Tabs defaultValue="visual">
          <TabsList className="mb-4">
            <TabsTrigger value="visual">Visual Editor</TabsTrigger>
            <TabsTrigger value="text">Text Input</TabsTrigger>
            <TabsTrigger value="csv">CSV Upload</TabsTrigger>
          </TabsList>
          
          <TabsContent value="visual" className="space-y-6">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Wheel Segments</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {segments.map((segment, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        type="text"
                        value={segment.label}
                        onChange={(e) => updateSegmentLabel(index, e.target.value)}
                        className="flex-1"
                      />
                      <input
                        type="color"
                        value={segment.color}
                        onChange={(e) => updateSegmentColor(index, e.target.value)}
                        className="w-10 h-10 p-0 rounded-md"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSegment(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        &times;
                      </Button>
                    </div>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addSegment}
                  className="mt-2"
                >
                  Add Segment
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="text" className="space-y-6">
            <div>
              <Label htmlFor="labels">Enter Labels (one per line)</Label>
              <Textarea
                id="labels"
                placeholder="Option 1
Option 2
Option 3
..."
                rows={6}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="mt-1"
              />
              
              <Button
                variant="outline"
                onClick={applyTextInput}
                className="mt-3"
              >
                Apply Labels
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="csv" className="space-y-6">
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
                <p className="text-xs leading-5 text-gray-600">CSV with one label per row</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 flex flex-col items-center">
          <div className="relative mb-4">
            <div 
              ref={wheelRef}
              className="w-[300px] h-[300px] relative transform transition-transform"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
            >
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>
          </div>
          
          <Button
            onClick={spinWheel}
            disabled={spinning || segments.length < 2}
            className="w-full max-w-md bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white mb-4"
          >
            <Circle className="mr-2" />
            {spinning ? 'Spinning...' : 'Spin the Wheel'}
          </Button>
          
          {result && !spinning && (
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold mb-2">Result:</h3>
              <div className="p-4 rounded-lg bg-gradient-to-r from-picker-purple/10 to-picker-orange/10">
                <p className="text-xl font-bold">{result}</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LabelSpinnerTool;
