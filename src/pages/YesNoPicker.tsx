
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import YesNoPickerTool from '@/components/tools/YesNoPickerTool';
import Footer from '@/components/home/Footer';
import AdPlaceholder from '@/components/home/AdPlaceholder';
import YesNoPickerInstructions from '@/components/tools/YesNoPickerInstructions';

const YesNoPicker = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Helmet>
        <title>Yes No Decision Maker - Simple Decision Tool | NumberPicker.Live</title>
        <meta name="description" content="Make quick decisions with our Yes/No Picker. A simple online tool for binary choices when you're stuck between options." />
        <meta name="keywords" content="yes no picker, decision maker, binary choice tool, random decision, yes or no" />
      </Helmet>
      
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Yes/No Decision Maker
            </h1>
            <p className="text-gray-600 mt-2">
              Let chance decide your binary choices
            </p>
          </header>

          <Navigation />
          <AdPlaceholder />
          <Separator className="my-6" />

          <YesNoPickerTool />
          <Separator className="my-6" />
          <YesNoPickerInstructions />
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default YesNoPicker;
