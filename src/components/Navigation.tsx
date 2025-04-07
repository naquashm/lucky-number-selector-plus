
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  
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
      
      <Tabs defaultValue="random" className="w-full max-w-lg">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="random" asChild>
            <Link to="/generator" className="w-full">Number Generator</Link>
          </TabsTrigger>
          <TabsTrigger value="wheel" asChild>
            <Link to="/wheel" className="w-full">Wheel Picker</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Navigation;
