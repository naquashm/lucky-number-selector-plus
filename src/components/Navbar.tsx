
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Shuffle, 
  CircleDashed, 
  Book, 
  Users,
  User,
  Check,
  X,
  Dices,
  Coins,
  Circle,
  ListFilter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tools = [
    { icon: Shuffle, name: "Number Generator", description: "Generate random numbers within a range", path: "/generator" },
    { icon: CircleDashed, name: "Wheel Picker", description: "Spin a wheel to select random winners", path: "/wheel" },
    { icon: Users, name: "Team Generator", description: "Divide people into random teams", path: "/teams" },
    { icon: User, name: "Name Picker", description: "Randomly select names with animation", path: "/names" },
    { icon: Check, name: "Yes/No Picker", description: "Make binary decisions quickly", path: "/yesno" },
    { icon: Dices, name: "Dice Roller", description: "Roll virtual dice for games", path: "/dice" },
    { icon: Coins, name: "Coin Flipper", description: "Flip a virtual coin for decisions", path: "/coin" },
    { icon: Circle, name: "Label Spinner", description: "Create customizable spinners", path: "/labels" },
    { icon: ListFilter, name: "List Shuffler", description: "Randomize lists in any order", path: "/shuffle" },
    { icon: CircleDashed, name: "Question Generator", description: "Random questions for icebreakers", path: "/questions" },
    { icon: ListFilter, name: "Sequence Generator", description: "Generate number sequences", path: "/sequence" },
    { icon: CircleDashed, name: "Timer Spinner", description: "Countdown timer with animation", path: "/timer" },
  ];

  return (
    <div className="w-full bg-white/90 backdrop-blur-sm shadow-sm py-3 sticky top-0 z-20 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-picker-purple to-picker-orange p-2 rounded-md">
            <Shuffle size={20} className="text-white" />
          </div>
          <span className="font-bold text-lg text-gray-800">NumberPicker.Live</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Link 
            to="/" 
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent">
                Tools
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[280px] md:w-[600px] max-h-[450px] overflow-y-auto" align="center">
              <DropdownMenuGroup>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
                  {tools.map((tool) => (
                    <DropdownMenuItem key={tool.path} asChild className="p-0 focus:bg-transparent">
                      <Link to={tool.path} className="flex flex-col w-full p-3 rounded-md hover:bg-accent">
                        <div className="flex items-center gap-2 mb-1">
                          <tool.icon className="h-4 w-4" />
                          <span className="font-medium">{tool.name}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{tool.description}</p>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link 
            to="/blog" 
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            <Book className="mr-2 h-4 w-4" />
            <span>Blog</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden z-30">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                <Home className="mr-2 h-5 w-5" />
                <span>Home</span>
              </Link>
              
              <div className="border-t pt-2">
                <p className="text-sm font-medium text-gray-500 mb-2">Tools:</p>
                {tools.map((tool) => (
                  <Link 
                    key={tool.path}
                    to={tool.path} 
                    className="flex items-center p-2 hover:bg-gray-100 rounded-md" 
                    onClick={() => setIsOpen(false)}
                  >
                    <tool.icon className="mr-2 h-5 w-5" />
                    <span>{tool.name}</span>
                  </Link>
                ))}
              </div>
              
              <div className="border-t pt-2">
                <Link to="/blog" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <Book className="mr-2 h-5 w-5" />
                  <span>Blog</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
