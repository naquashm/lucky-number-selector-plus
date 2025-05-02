
import React from 'react';
import { Grid2x2, ChartBar, CircleDashed, Lightbulb, Shuffle, Users, User, Check, Dices, Coins, Circle, ListFilter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const GettingStartedGuide = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Comprehensive Guide to Our Random Selection Tools</h2>
      
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Shuffle className="h-6 w-6 text-picker-purple" />
          <h3 className="text-xl font-semibold text-picker-purple">Random Number Generator</h3>
        </div>
        <Card className="p-5">
          <p className="leading-relaxed mb-4">
            Our <Link to="/generator" className="text-picker-purple hover:underline font-medium">Random Number Generator</Link> is designed to create fair, unbiased selections from any number range. Perfect for raffles, lotteries, giveaways, and classroom activities where impartiality is crucial.
          </p>
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Generate up to 500 random numbers with a single click</li>
            <li>Add custom labels to each number for easy identification</li>
            <li>Import large datasets via CSV files for convenience</li>
            <li>Save your configuration for repeated use</li>
            <li>Clean, intuitive interface for all skill levels</li>
          </ul>
          <p>
            <Link to="/generator" className="text-picker-purple hover:underline font-medium">Try our Random Number Generator →</Link>
          </p>
        </Card>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CircleDashed className="h-6 w-6 text-picker-orange" />
          <h3 className="text-xl font-semibold text-picker-orange">Wheel Picker</h3>
        </div>
        <Card className="p-5">
          <p className="leading-relaxed mb-4">
            The <Link to="/wheel" className="text-picker-orange hover:underline font-medium">Wheel Picker</Link> adds excitement and visual engagement to random selection. Perfect for live events, classroom activities, team building exercises, and any situation requiring an engaging random selection experience.
          </p>
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Customizable spinning wheel with up to 500 segments</li>
            <li>Engaging animation with sound effects</li>
            <li>Import names or options via CSV files</li>
            <li>Adjustable spin time and speed settings</li>
            <li>Mobile-friendly design for presentations on any device</li>
          </ul>
          <p>
            <Link to="/wheel" className="text-picker-orange hover:underline font-medium">Try our Wheel Picker →</Link>
          </p>
        </Card>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-6 w-6 text-picker-purple" />
            <h3 className="text-xl font-semibold text-picker-purple">Team Generator</h3>
          </div>
          <Card className="p-5 h-full">
            <p className="leading-relaxed mb-4">
              Our <Link to="/teams" className="text-picker-purple hover:underline font-medium">Team Generator</Link> quickly divides any group into balanced, random teams. Perfect for classroom projects, sports activities, corporate team building, and workshop organization.
            </p>
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Create balanced teams from any list of participants</li>
              <li>Specify exact team numbers or team sizes</li>
              <li>CSV import for large participant lists</li>
              <li>Save team assignments for future reference</li>
            </ul>
          </Card>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <User className="h-6 w-6 text-picker-orange" />
            <h3 className="text-xl font-semibold text-picker-orange">Name Picker</h3>
          </div>
          <Card className="p-5 h-full">
            <p className="leading-relaxed mb-4">
              The <Link to="/names" className="text-picker-orange hover:underline font-medium">Name Picker</Link> randomly selects names from any list with engaging animations. Perfect for choosing participants, winners, volunteer selection, and classroom engagement.
            </p>
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Engaging animation during the selection process</li>
              <li>Option to remove selected names from future picks</li>
              <li>Import name lists via CSV files</li>
              <li>Save selection history for transparency</li>
            </ul>
          </Card>
        </div>
      </div>
      
      <Separator className="my-8" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Check className="h-5 w-5 text-picker-purple" />
            <h3 className="text-lg font-semibold text-picker-purple">Yes/No Picker</h3>
          </div>
          <Card className="p-4 h-full">
            <p className="text-sm mb-3">
              Make binary decisions quickly with our <Link to="/yesno" className="text-picker-purple hover:underline">Yes/No Picker</Link>. Perfect for quick decisions, icebreakers, and group activities requiring simple choices.
            </p>
            <p className="text-xs text-gray-600">
              <Link to="/yesno" className="text-picker-purple hover:underline">Learn more →</Link>
            </p>
          </Card>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Dices className="h-5 w-5 text-picker-orange" />
            <h3 className="text-lg font-semibold text-picker-orange">Dice Roller</h3>
          </div>
          <Card className="p-4 h-full">
            <p className="text-sm mb-3">
              Roll virtual dice with our <Link to="/dice" className="text-picker-orange hover:underline">Dice Roller</Link>. Supports multiple dice, custom sides, and is perfect for games, random number generation, and educational activities.
            </p>
            <p className="text-xs text-gray-600">
              <Link to="/dice" className="text-picker-orange hover:underline">Learn more →</Link>
            </p>
          </Card>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Coins className="h-5 w-5 text-picker-purple" />
            <h3 className="text-lg font-semibold text-picker-purple">Coin Flipper</h3>
          </div>
          <Card className="p-4 h-full">
            <p className="text-sm mb-3">
              Make 50/50 decisions with our <Link to="/coin" className="text-picker-purple hover:underline">Coin Flipper</Link>. Features realistic animation and is perfect for quick binary choices, games, and simple random selection.
            </p>
            <p className="text-xs text-gray-600">
              <Link to="/coin" className="text-picker-purple hover:underline">Learn more →</Link>
            </p>
          </Card>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Circle className="h-5 w-5 text-picker-orange" />
            <h3 className="text-lg font-semibold text-picker-orange">Label Spinner</h3>
          </div>
          <Card className="p-4 h-full">
            <p className="text-sm mb-3">
              Create customized spinning wheels with our <Link to="/labels" className="text-picker-orange hover:underline">Label Spinner</Link>. Perfect for decision making, classroom activities, and adding engagement to selections.
            </p>
            <p className="text-xs text-gray-600">
              <Link to="/labels" className="text-picker-orange hover:underline">Learn more →</Link>
            </p>
          </Card>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ListFilter className="h-5 w-5 text-picker-purple" />
            <h3 className="text-lg font-semibold text-picker-purple">List Shuffler</h3>
          </div>
          <Card className="p-4 h-full">
            <p className="text-sm mb-3">
              Randomize any list with our <Link to="/shuffle" className="text-picker-purple hover:underline">List Shuffler</Link>. Ideal for creating random orders, presentation sequences, and fair distribution of items or tasks.
            </p>
            <p className="text-xs text-gray-600">
              <Link to="/shuffle" className="text-picker-purple hover:underline">Learn more →</Link>
            </p>
          </Card>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CircleDashed className="h-5 w-5 text-picker-orange" />
            <h3 className="text-lg font-semibold text-picker-orange">Question Generator</h3>
          </div>
          <Card className="p-4 h-full">
            <p className="text-sm mb-3">
              Generate random conversation starters with our <Link to="/questions" className="text-picker-orange hover:underline">Question Generator</Link>. Perfect for icebreakers, team building, classroom discussions, and social events.
            </p>
            <p className="text-xs text-gray-600">
              <Link to="/questions" className="text-picker-orange hover:underline">Learn more →</Link>
            </p>
          </Card>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ListFilter className="h-5 w-5 text-picker-purple" />
            <h3 className="text-lg font-semibold text-picker-purple">Sequence Generator</h3>
          </div>
          <Card className="p-4 h-full">
            <p className="text-sm mb-3">
              Create custom number sequences with our <Link to="/sequence" className="text-picker-purple hover:underline">Sequence Generator</Link>. Ideal for creating patterns, ranges, teaching math concepts, and generating ordered lists.
            </p>
            <p className="text-xs text-gray-600">
              <Link to="/sequence" className="text-picker-purple hover:underline">Learn more →</Link>
            </p>
          </Card>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CircleDashed className="h-5 w-5 text-picker-orange" />
            <h3 className="text-lg font-semibold text-picker-orange">Timer Spinner</h3>
          </div>
          <Card className="p-4 h-full">
            <p className="text-sm mb-3">
              Combine countdown timers with random selection using our <Link to="/timer" className="text-picker-orange hover:underline">Timer Spinner</Link>. Perfect for timed activities, games, presentations, and adding suspense to selections.
            </p>
            <p className="text-xs text-gray-600">
              <Link to="/timer" className="text-picker-orange hover:underline">Learn more →</Link>
            </p>
          </Card>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          <h3 className="text-lg font-semibold">Pro Tips for All Tools</h3>
        </div>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Prepare your data beforehand for faster setup and smoother selection processes.</li>
          <li>Use descriptive labels when available to make selections more meaningful and identifiable.</li>
          <li>For large datasets, organize your CSV file with clear headers before importing.</li>
          <li>Consider using our blog resources for creative ideas on how to use our tools in different scenarios.</li>
          <li>All tools are designed to be fully responsive and work on any device - perfect for classroom or event use.</li>
        </ul>
      </div>
    </div>
  );
};

export default GettingStartedGuide;
