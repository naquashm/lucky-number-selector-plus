
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import NamePickerTool from '@/components/tools/NamePickerTool';
import Footer from '@/components/home/Footer';
import AdPlaceholder from '@/components/home/AdPlaceholder';
import NamePickerInstructions from '@/components/tools/NamePickerInstructions';

const NamePicker = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Helmet>
        <title>Random Name Picker - Pick Names with Animation | NumberPicker.Live</title>
        <meta name="description" content="Use our free animated Name Picker to randomly select names from a list. Perfect for contests, classroom activities, and decision making." />
        <meta name="keywords" content="name picker, random name selector, name draw, name picker with animation, classroom picker" />
      </Helmet>
      
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Name Picker
            </h1>
            <p className="text-gray-600 mt-2">
              Randomly select names with engaging animations
            </p>
          </header>

          <Navigation />
          <AdPlaceholder />
          <Separator className="my-6" />

          <NamePickerTool />
          <Separator className="my-6" />
          <NamePickerInstructions />
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default NamePicker;
