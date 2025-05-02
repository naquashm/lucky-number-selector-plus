
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import DiceRollerTool from '@/components/tools/DiceRollerTool';
import Footer from '@/components/home/Footer';
import AdPlaceholder from '@/components/home/AdPlaceholder';
import DiceRollerInstructions from '@/components/tools/DiceRollerInstructions';

const DiceRoller = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Helmet>
        <title>Virtual Dice Roller - Online Dice for Games | NumberPicker.Live</title>
        <meta name="description" content="Roll virtual dice online with our free Dice Roller. Supports standard D6, D20, and custom dice for board games, RPGs, and tabletop gaming." />
        <meta name="keywords" content="dice roller, virtual dice, online dice, D6, D20, custom dice, RPG dice roller" />
      </Helmet>
      
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Dice Roller
            </h1>
            <p className="text-gray-600 mt-2">
              Roll virtual dice for games and activities
            </p>
          </header>

          <Navigation />
          <AdPlaceholder />
          <Separator className="my-6" />

          <DiceRollerTool />
          <Separator className="my-6" />
          <DiceRollerInstructions />
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default DiceRoller;
