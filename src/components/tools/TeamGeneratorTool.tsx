
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Users, FileSpreadsheet, RefreshCw } from 'lucide-react';
import ConfettiEffect from '@/components/ConfettiEffect';
import { useToast } from '@/hooks/use-toast';

const TeamGeneratorTool: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const [numberOfTeams, setNumberOfTeams] = useState(2);
  const [teams, setTeams] = useState<string[][]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const processInputNames = () => {
    if (!inputText.trim()) {
      toast({
        title: "No names entered",
        description: "Please enter at least one name to create teams",
        variant: "destructive"
      });
      return false;
    }

    const nameList = inputText
      .split('\n')
      .map(name => name.trim())
      .filter(name => name !== '');

    if (nameList.length < 2) {
      toast({
        title: "Not enough names",
        description: "Please enter at least two names to create teams",
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
      
      if (nameList.length < 2) {
        toast({
          title: "Not enough names in CSV",
          description: "Please upload a CSV with at least two names",
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

  const generateTeams = () => {
    if (!processInputNames()) return;
    
    // Shuffle the names
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    
    // Create teams
    const generatedTeams: string[][] = Array(numberOfTeams)
      .fill(0)
      .map(() => []);
    
    shuffledNames.forEach((name, index) => {
      const teamIndex = index % numberOfTeams;
      generatedTeams[teamIndex].push(name);
    });
    
    setTeams(generatedTeams);
    setShowConfetti(true);
    
    // Stop confetti after 3 seconds
    setTimeout(() => setShowConfetti(false), 3000);
    
    toast({
      title: "Teams Generated",
      description: `Created ${numberOfTeams} teams with ${shuffledNames.length} members`
    });
  };

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
        
        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="number-of-teams">Number of Teams</Label>
            <Select 
              value={numberOfTeams.toString()} 
              onValueChange={val => setNumberOfTeams(parseInt(val))}
            >
              <SelectTrigger id="number-of-teams" className="mt-1">
                <SelectValue placeholder="Select number of teams" />
              </SelectTrigger>
              <SelectContent>
                {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} Teams
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button
            onClick={generateTeams}
            className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white mt-4"
          >
            <Users className="mr-2" />
            Generate Teams
          </Button>
        </div>
        
        {teams.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Generated Teams</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {teams.map((team, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="bg-gradient-to-r from-picker-purple to-picker-orange p-3">
                    <h4 className="font-bold text-white">Team {index + 1}</h4>
                  </div>
                  <CardContent className="p-3">
                    <ul className="list-disc list-inside">
                      {team.map((member, memberIndex) => (
                        <li key={memberIndex} className="text-sm py-1 border-b border-gray-100 last:border-b-0">
                          {member}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              onClick={generateTeams} 
              className="mt-4"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Reshuffle Teams
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamGeneratorTool;
