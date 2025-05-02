import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { CircleDashed } from 'lucide-react';
import ConfettiEffect from '@/components/ConfettiEffect';

// Question categories and their corresponding questions
const questionBank = {
  icebreakers: [
    "If you could have any superpower, what would it be and why?",
    "What's one thing you can't live without?",
    "If you could travel anywhere in the world, where would you go?",
    "What was your favorite childhood toy or game?",
    "If you could have dinner with any historical figure, who would it be?",
    "What's the best advice you've ever received?",
    "If you could master any skill instantly, what would it be?",
    "What's your favorite way to relax after a long day?",
    "If you could live in any time period, when would it be?",
    "What three items would you take to a deserted island?",
  ],
  fun: [
    "What's the weirdest food combination you enjoy?",
    "If you were a kitchen utensil, what would you be and why?",
    "What's the most embarrassing song on your playlist?",
    "If your life was a movie, what would the title be?",
    "What's the strangest dream you've ever had?",
    "If animals could talk, which would be the rudest?",
    "What's the most useless talent you have?",
    "If you could rename yourself, what name would you choose?",
    "What's something you thought was normal until someone told you it wasn't?",
    "If you could instantly become an expert in something, what would it be?",
  ],
  deep: [
    "What do you think happens after we die?",
    "What's a belief you had that was completely changed?",
    "What's something you know you'll never experience?",
    "If you could know the absolute truth to one question, what would you ask?",
    "What's the most important lesson life has taught you so far?",
    "What does success mean to you?",
    "How do you think you've changed in the last five years?",
    "What's something you wish more people knew about you?",
    "What's a memory you'll cherish forever?",
    "If today was your last day, what would you do differently?",
  ],
  professional: [
    "What's a skill you want to develop in the next year?",
    "What aspect of your work do you find most fulfilling?",
    "If you could change one thing about your industry, what would it be?",
    "What's the best piece of career advice you've received?",
    "What drew you to your current profession?",
    "How do you define success in your role?",
    "What's a work-related accomplishment you're proud of?",
    "What's something you wish you'd known earlier in your career?",
    "What's a challenge you're currently facing at work?",
    "If you could have any job for a day, what would it be?",
  ],
  teambuilding: [
    "What's one thing your teammates might not know about you?",
    "What's your favorite part about working with this team?",
    "If our team was an animal, what would it be and why?",
    "What's a strength you bring to the team?",
    "What's something you've learned from someone else on the team?",
    "If you could add any perk to our workplace, what would it be?",
    "What's been your favorite team moment so far?",
    "How would you describe our team culture in three words?",
    "What's something you think our team does really well?",
    "If our team had a theme song, what would it be?",
  ],
};

const QuestionGeneratorTool: React.FC = () => {
  const [question, setQuestion] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['icebreakers']);
  const [questionHistory, setQuestionHistory] = useState<string[]>([]);
  const [selectedTab, setSelectedTab] = useState('generator');
  
  const generateQuestion = () => {
    if (isGenerating) return;
    if (selectedCategories.length === 0) return;
    
    setIsGenerating(true);
    
    // Compile all questions from selected categories
    const availableQuestions: string[] = [];
    selectedCategories.forEach(category => {
      availableQuestions.push(...questionBank[category as keyof typeof questionBank]);
    });
    
    // Filter out recently used questions if possible
    const unusedQuestions = availableQuestions.filter(q => !questionHistory.includes(q));
    const questionPool = unusedQuestions.length > 0 ? unusedQuestions : availableQuestions;
    
    // Simulate thinking/loading
    setTimeout(() => {
      // Pick a random question
      const randomIndex = Math.floor(Math.random() * questionPool.length);
      const newQuestion = questionPool[randomIndex];
      
      setQuestion(newQuestion);
      setQuestionHistory(prev => {
        const updated = [newQuestion, ...prev];
        // Keep only the last 10 questions in history
        return updated.slice(0, 10);
      });
      
      setIsGenerating(false);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }, 800);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        // Ensure at least one category is selected
        if (prev.length === 1) return prev;
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <ConfettiEffect active={showConfetti} />
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="mb-4 grid grid-cols-2">
            <TabsTrigger value="generator">Generator</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="generator">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Question Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {Object.keys(questionBank).map(category => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox 
                        id={category} 
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <Label htmlFor={category} className="capitalize">{category}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border min-h-[120px] flex flex-col items-center justify-center text-center">
                {question ? (
                  <p className="text-lg font-medium text-gray-800">{question}</p>
                ) : (
                  <p className="text-gray-500">Click generate to get a random question</p>
                )}
              </div>
              
              <Button
                onClick={generateQuestion}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
              >
                <CircleDashed className="mr-2" />
                {isGenerating ? 'Generating...' : 'Generate Question'}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Recent Questions</h3>
              {questionHistory.length > 0 ? (
                <ul className="space-y-2">
                  {questionHistory.map((q, i) => (
                    <li key={i} className="bg-gray-50 rounded-lg p-3 border">
                      <p className="text-gray-800">{q}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-center py-4">No questions generated yet</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default QuestionGeneratorTool;
