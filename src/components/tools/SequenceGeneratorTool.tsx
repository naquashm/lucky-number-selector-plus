
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ClipboardCopy, ListFilter } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const SequenceGeneratorTool: React.FC = () => {
  const [sequenceType, setSequenceType] = useState<'range' | 'pattern' | 'custom'>('range');
  const [rangeStart, setRangeStart] = useState<number>(1);
  const [rangeEnd, setRangeEnd] = useState<number>(10);
  const [rangeStep, setRangeStep] = useState<number>(1);
  const [patternType, setPatternType] = useState<'arithmetic' | 'geometric' | 'fibonacci'>('arithmetic');
  const [patternStart, setPatternStart] = useState<number>(1);
  const [patternTerms, setPatternTerms] = useState<number>(10);
  const [patternValue, setPatternValue] = useState<number>(2);  // Common diff/ratio
  const [customExpression, setCustomExpression] = useState<string>("n * 2 - 1");
  const [customTerms, setCustomTerms] = useState<number>(10);
  const [result, setResult] = useState<number[]>([]);
  const [includeZero, setIncludeZero] = useState<boolean>(false);
  const [randomOrder, setRandomOrder] = useState<boolean>(false);
  const [format, setFormat] = useState<'comma' | 'line' | 'space'>('comma');
  
  const { toast } = useToast();
  
  const generateSequence = () => {
    try {
      let sequence: number[] = [];
      
      // Generate sequence based on type
      if (sequenceType === 'range') {
        for (let i = rangeStart; i <= rangeEnd; i += rangeStep) {
          sequence.push(i);
        }
      } 
      else if (sequenceType === 'pattern') {
        if (patternType === 'arithmetic') {
          // Arithmetic sequence: a, a+d, a+2d, ...
          for (let i = 0; i < patternTerms; i++) {
            sequence.push(patternStart + i * patternValue);
          }
        } 
        else if (patternType === 'geometric') {
          // Geometric sequence: a, a*r, a*r^2, ...
          for (let i = 0; i < patternTerms; i++) {
            sequence.push(patternStart * Math.pow(patternValue, i));
          }
        } 
        else if (patternType === 'fibonacci') {
          // Fibonacci-like: a, b, a+b, a+2b, ...
          let a = patternStart;
          let b = patternValue;
          sequence.push(a);
          
          if (patternTerms > 1) {
            sequence.push(b);
            
            for (let i = 2; i < patternTerms; i++) {
              const next = a + b;
              sequence.push(next);
              a = b;
              b = next;
            }
          }
        }
      } 
      else if (sequenceType === 'custom') {
        // Custom formula: evaluate expression for each n
        for (let n = 1; n <= customTerms; n++) {
          // Replace 'n' with the current value and evaluate
          const formula = customExpression.replace(/n/g, n.toString());
          try {
            // eslint-disable-next-line no-eval
            const value = eval(formula);
            sequence.push(value);
          } catch (err) {
            toast({
              title: "Invalid formula",
              description: "Please check your formula syntax",
              variant: "destructive"
            });
            return;
          }
        }
      }
      
      // Filter out negative values if not including zero
      if (!includeZero) {
        sequence = sequence.filter(n => n > 0);
      }
      
      // Randomize if requested
      if (randomOrder) {
        sequence.sort(() => Math.random() - 0.5);
      }
      
      setResult(sequence);
      toast({
        title: "Sequence generated",
        description: `Generated ${sequence.length} numbers`
      });
    } catch (err) {
      toast({
        title: "Error generating sequence",
        description: "Please check your inputs and try again",
        variant: "destructive"
      });
    }
  };
  
  const copyToClipboard = () => {
    if (result.length === 0) return;
    
    let formattedResult = '';
    switch (format) {
      case 'comma':
        formattedResult = result.join(', ');
        break;
      case 'line':
        formattedResult = result.join('\n');
        break;
      case 'space':
        formattedResult = result.join(' ');
        break;
    }
    
    navigator.clipboard.writeText(formattedResult).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "Sequence copied to clipboard"
      });
    });
  };
  
  const formatSequence = (sequence: number[]): string => {
    switch (format) {
      case 'comma':
        return sequence.join(', ');
      case 'line':
        return sequence.join('\n');
      case 'space':
        return sequence.join(' ');
      default:
        return sequence.join(', ');
    }
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <Tabs defaultValue="generator" className="space-y-6">
          <TabsList className="mb-4">
            <TabsTrigger value="generator">Generator</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="generator" className="space-y-6">
            <div>
              <Label className="text-lg font-medium mb-2 block">Sequence Type</Label>
              <RadioGroup
                value={sequenceType}
                onValueChange={(value) => setSequenceType(value as 'range' | 'pattern' | 'custom')}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="range" id="range" />
                  <Label htmlFor="range">Number Range</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pattern" id="pattern" />
                  <Label htmlFor="pattern">Mathematical Pattern</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="custom" id="custom" />
                  <Label htmlFor="custom">Custom Formula</Label>
                </div>
              </RadioGroup>
            </div>
            
            {sequenceType === 'range' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="rangeStart">Start</Label>
                  <Input
                    id="rangeStart"
                    type="number"
                    value={rangeStart}
                    onChange={(e) => setRangeStart(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="rangeEnd">End</Label>
                  <Input
                    id="rangeEnd"
                    type="number"
                    value={rangeEnd}
                    onChange={(e) => setRangeEnd(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="rangeStep">Step</Label>
                  <Input
                    id="rangeStep"
                    type="number"
                    min="1"
                    value={rangeStep}
                    onChange={(e) => setRangeStep(Number(e.target.value) || 1)}
                  />
                </div>
              </div>
            )}
            
            {sequenceType === 'pattern' && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="patternType">Pattern Type</Label>
                  <Select
                    value={patternType}
                    onValueChange={(value) => setPatternType(value as 'arithmetic' | 'geometric' | 'fibonacci')}
                  >
                    <SelectTrigger id="patternType">
                      <SelectValue placeholder="Select pattern type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="arithmetic">Arithmetic (a, a+d, a+2d, ...)</SelectItem>
                      <SelectItem value="geometric">Geometric (a, a×r, a×r², ...)</SelectItem>
                      <SelectItem value="fibonacci">Fibonacci-like (a, b, a+b, a+2b, ...)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="patternStart">
                      {patternType === 'fibonacci' ? 'First Term (a)' : 'First Term'}
                    </Label>
                    <Input
                      id="patternStart"
                      type="number"
                      value={patternStart}
                      onChange={(e) => setPatternStart(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="patternValue">
                      {patternType === 'arithmetic' && 'Common Difference (d)'}
                      {patternType === 'geometric' && 'Common Ratio (r)'}
                      {patternType === 'fibonacci' && 'Second Term (b)'}
                    </Label>
                    <Input
                      id="patternValue"
                      type="number"
                      value={patternValue}
                      onChange={(e) => setPatternValue(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="patternTerms">Number of Terms</Label>
                    <Input
                      id="patternTerms"
                      type="number"
                      min="1"
                      max="100"
                      value={patternTerms}
                      onChange={(e) => setPatternTerms(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            )}
            
            {sequenceType === 'custom' && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="customExpression">Custom Formula (use 'n' as the variable)</Label>
                  <Input
                    id="customExpression"
                    placeholder="e.g., n * 2 - 1 for odd numbers"
                    value={customExpression}
                    onChange={(e) => setCustomExpression(e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Examples: n*2 (even), n*2-1 (odd), n*n (squares), Math.pow(n,3) (cubes)
                  </p>
                </div>
                <div>
                  <Label htmlFor="customTerms">Number of Terms</Label>
                  <Input
                    id="customTerms"
                    type="number"
                    min="1"
                    max="100"
                    value={customTerms}
                    onChange={(e) => setCustomTerms(Number(e.target.value))}
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <Button
                onClick={generateSequence}
                className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
              >
                <ListFilter className="mr-2" />
                Generate Sequence
              </Button>
              
              {result.length > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label className="font-medium">Result:</Label>
                    <Button size="sm" variant="outline" onClick={copyToClipboard}>
                      <ClipboardCopy className="h-4 w-4 mr-1" />
                      Copy
                    </Button>
                  </div>
                  <Textarea
                    readOnly
                    className="font-mono h-32"
                    value={formatSequence(result)}
                  />
                  <p className="text-sm text-gray-500">
                    {result.length} numbers generated
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="includeZero"
                checked={includeZero}
                onCheckedChange={(checked) => setIncludeZero(checked === true)}
              />
              <Label htmlFor="includeZero">Include zero and negative numbers</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="randomOrder"
                checked={randomOrder}
                onCheckedChange={(checked) => setRandomOrder(checked === true)}
              />
              <Label htmlFor="randomOrder">Randomize order</Label>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="format">Output Format</Label>
              <Select value={format} onValueChange={(value) => setFormat(value as 'comma' | 'line' | 'space')}>
                <SelectTrigger id="format">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="comma">Comma separated (1, 2, 3)</SelectItem>
                  <SelectItem value="line">New line (one per line)</SelectItem>
                  <SelectItem value="space">Space separated (1 2 3)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SequenceGeneratorTool;
