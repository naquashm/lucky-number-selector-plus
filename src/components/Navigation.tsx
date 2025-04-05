
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Navigation = () => {
  return (
    <div className="w-full flex justify-center mb-6">
      <Tabs defaultValue="random" className="w-full max-w-lg">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="random" asChild>
            <Link to="/" className="w-full">Number Picker</Link>
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
