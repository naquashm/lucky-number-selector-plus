
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import QuestionGeneratorTool from '@/components/tools/QuestionGeneratorTool';
import QuestionGeneratorInstructions from '@/components/tools/QuestionGeneratorInstructions';
import Footer from '@/components/home/Footer';
import AdPlaceholder from '@/components/home/AdPlaceholder';

const QuestionGenerator = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Helmet>
        <title>Random Question Generator - Conversation Starters | NumberPicker.Live</title>
        <meta name="description" content="Generate random conversation starters, icebreakers, and discussion questions for meetings, classrooms, and social events." />
        <meta name="keywords" content="question generator, random questions, icebreaker questions, conversation starters, team building questions" />
      </Helmet>
      
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Random Question Generator
            </h1>
            <p className="text-gray-600 mt-2">
              Generate conversation starters and icebreakers for any occasion
            </p>
          </header>

          <Navigation />
          <AdPlaceholder />
          <Separator className="my-6" />

          <QuestionGeneratorTool />
          <Separator className="my-6" />
          <QuestionGeneratorInstructions />
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default QuestionGenerator;
