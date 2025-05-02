
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navigation = () => {
  const navigate = useNavigate();
  
  const handleToolChange = (value: string) => {
    navigate(`/${value}`);
  };
  
  return (
    <div className="w-full flex flex-col items-center gap-4 mb-6">
      <div className="w-full flex items-center justify-start">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={18} />
          Back
        </Button>
      </div>
      
      <div className="w-full">
        <Select onValueChange={handleToolChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a tool" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="generator">Number Generator</SelectItem>
            <SelectItem value="wheel">Wheel Picker</SelectItem>
            <SelectItem value="teams">Team Generator</SelectItem>
            <SelectItem value="names">Name Picker</SelectItem>
            <SelectItem value="yesno">Yes/No Picker</SelectItem>
            <SelectItem value="dice">Dice Roller</SelectItem>
            <SelectItem value="coin">Coin Flipper</SelectItem>
            <SelectItem value="labels">Label Spinner</SelectItem>
            <SelectItem value="shuffle">List Shuffler</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Navigation;
