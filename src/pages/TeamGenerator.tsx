
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import TeamGeneratorTool from '@/components/tools/TeamGeneratorTool';
import Footer from '@/components/home/Footer';
import AdPlaceholder from '@/components/home/AdPlaceholder';
import TeamGeneratorInstructions from '@/components/tools/TeamGeneratorInstructions';

const TeamGenerator = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Helmet>
        <title>Team & Group Generator - Create Random Teams | NumberPicker.Live</title>
        <meta name="description" content="Create random teams instantly with our free Team Generator tool. Perfect for classrooms, sports teams, or office activities - no login required." />
        <meta name="keywords" content="team generator, random group maker, classroom groups, team picker, team organizer" />
      </Helmet>
      
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Team & Group Generator
            </h1>
            <p className="text-gray-600 mt-2">
              Create balanced random teams quickly and easily
            </p>
          </header>

          <Navigation />
          <AdPlaceholder />
          <Separator className="my-6" />

          <TeamGeneratorTool />
          <Separator className="my-6" />
          <TeamGeneratorInstructions />
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default TeamGenerator;
