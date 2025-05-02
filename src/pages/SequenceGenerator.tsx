
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import SequenceGeneratorTool from '@/components/tools/SequenceGeneratorTool';
import SequenceGeneratorInstructions from '@/components/tools/SequenceGeneratorInstructions';
import Footer from '@/components/home/Footer';
import AdPlaceholder from '@/components/home/AdPlaceholder';

const SequenceGenerator = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Helmet>
        <title>Number Sequence Generator - Create Custom Numerical Patterns | NumberPicker.Live</title>
        <meta name="description" content="Generate custom number sequences, patterns, and mathematical series. Create arithmetic, geometric progressions and more with our free online tool." />
        <meta name="keywords" content="number sequence generator, number patterns, arithmetic sequence, geometric sequence, fibonacci sequence, custom number sequence" />
      </Helmet>
      
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Number Sequence Generator
            </h1>
            <p className="text-gray-600 mt-2">
              Create custom number sequences and patterns with ease
            </p>
          </header>

          <Navigation />
          <AdPlaceholder />
          <Separator className="my-6" />

          <SequenceGeneratorTool />
          <Separator className="my-6" />
          <SequenceGeneratorInstructions />
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default SequenceGenerator;
