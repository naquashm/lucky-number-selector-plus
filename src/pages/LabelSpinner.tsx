
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import LabelSpinnerTool from '@/components/tools/LabelSpinnerTool';
import Footer from '@/components/home/Footer';
import AdPlaceholder from '@/components/home/AdPlaceholder';
import LabelSpinnerInstructions from '@/components/tools/LabelSpinnerInstructions';

const LabelSpinner = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Helmet>
        <title>Customizable Label Spinner - Interactive Decision Wheel | NumberPicker.Live</title>
        <meta name="description" content="Create your own custom spinner wheel with labels. Perfect for classroom activities, games, giveaways, or making random decisions in a fun way." />
        <meta name="keywords" content="spinner wheel, label spinner, decision wheel, random picker wheel, custom spinner" />
      </Helmet>
      
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Label Spinner
            </h1>
            <p className="text-gray-600 mt-2">
              Create custom spinners with your own labels
            </p>
          </header>

          <Navigation />
          <AdPlaceholder />
          <Separator className="my-6" />

          <LabelSpinnerTool />
          <Separator className="my-6" />
          <LabelSpinnerInstructions />
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default LabelSpinner;
