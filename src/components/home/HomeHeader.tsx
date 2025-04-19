
import React from 'react';
import { Separator } from '@/components/ui/separator';

const HomeHeader = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
        NumberPicker.Live
      </h1>
      <p className="text-gray-600 mt-2">
        Choose the tool you want to use for your random selections
      </p>
      <p className="text-green-600 text-sm mt-2 font-semibold">
        Free for Life • No Conditions • Unlimited Use
      </p>
    </header>
  );
};

export default HomeHeader;

