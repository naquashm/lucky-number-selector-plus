
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Shuffle, 
  CircleDashed, 
  Book, 
  ChevronDown,
  Users,
  User,
  Check,
  X,
  Dices,
  Coins,
  Circle,
  ListFilter
} from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white/90 backdrop-blur-sm shadow-sm py-3 sticky top-0 z-10 border-b">
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
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <Home className="mr-2 h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-2 p-4 md:w-[600px] lg:w-[700px]">
                    <Link to="/generator" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <Shuffle className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Number Generator</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Generate random numbers within a range
                      </p>
                    </Link>
                    
                    <Link to="/wheel" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <CircleDashed className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Wheel Picker</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Spin a wheel to select random winners
                      </p>
                    </Link>

                    <Link to="/teams" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Team Generator</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Divide people into random teams
                      </p>
                    </Link>

                    <Link to="/names" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Name Picker</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Randomly select names with animation
                      </p>
                    </Link>

                    <Link to="/yesno" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <div className="flex space-x-1">
                          <Check className="h-4 w-4" />
                          <X className="h-4 w-4" />
                        </div>
                        <div className="text-sm font-medium leading-none">Yes/No Picker</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Make binary decisions quickly
                      </p>
                    </Link>

                    <Link to="/dice" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <Dices className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Dice Roller</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Roll virtual dice for games
                      </p>
                    </Link>

                    <Link to="/coin" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <Coins className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Coin Flipper</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Flip a virtual coin for decisions
                      </p>
                    </Link>

                    <Link to="/labels" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <Circle className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Label Spinner</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Create customizable spinners
                      </p>
                    </Link>

                    <Link to="/shuffle" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <ListFilter className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">List Shuffler</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Randomize lists in any order
                      </p>
                    </Link>

                    <Link to="/questions" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <CircleDashed className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Question Generator</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Random questions for icebreakers
                      </p>
                    </Link>

                    <Link to="/sequence" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <ListFilter className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Sequence Generator</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Generate number sequences
                      </p>
                    </Link>

                    <Link to="/timer" className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <CircleDashed className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Timer Spinner</div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Countdown timer with animation
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/blog" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <Book className="mr-2 h-4 w-4" />
                    <span>Blog</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden z-20">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                <Home className="mr-2 h-5 w-5" />
                <span>Home</span>
              </Link>
              
              <div className="border-t pt-2">
                <p className="text-sm font-medium text-gray-500 mb-2">Tools:</p>
                <Link to="/generator" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <Shuffle className="mr-2 h-5 w-5" />
                  <span>Number Generator</span>
                </Link>
                <Link to="/wheel" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <CircleDashed className="mr-2 h-5 w-5" />
                  <span>Wheel Picker</span>
                </Link>
                <Link to="/teams" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <Users className="mr-2 h-5 w-5" />
                  <span>Team Generator</span>
                </Link>
                <Link to="/names" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <User className="mr-2 h-5 w-5" />
                  <span>Name Picker</span>
                </Link>
                <Link to="/yesno" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <div className="mr-2 flex space-x-1">
                    <Check className="h-5 w-5" />
                    <X className="h-5 w-5" />
                  </div>
                  <span>Yes/No Picker</span>
                </Link>
                <Link to="/dice" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <Dices className="mr-2 h-5 w-5" />
                  <span>Dice Roller</span>
                </Link>
                <Link to="/coin" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <Coins className="mr-2 h-5 w-5" />
                  <span>Coin Flipper</span>
                </Link>
                <Link to="/labels" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <Circle className="mr-2 h-5 w-5" />
                  <span>Label Spinner</span>
                </Link>
                <Link to="/shuffle" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <ListFilter className="mr-2 h-5 w-5" />
                  <span>List Shuffler</span>
                </Link>
                <Link to="/questions" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <CircleDashed className="mr-2 h-5 w-5" />
                  <span>Question Generator</span>
                </Link>
                <Link to="/sequence" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <ListFilter className="mr-2 h-5 w-5" />
                  <span>Sequence Generator</span>
                </Link>
                <Link to="/timer" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <CircleDashed className="mr-2 h-5 w-5" />
                  <span>Timer Spinner</span>
                </Link>
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
