
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import ListShufflerTool from '@/components/tools/ListShufflerTool';
import Footer from '@/components/home/Footer';
import AdPlaceholder from '@/components/home/AdPlaceholder';
import ListShufflerInstructions from '@/components/tools/ListShufflerInstructions';

const ListShuffler = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Helmet>
        <title>Random Order Generator - List Shuffler Tool | NumberPicker.Live</title>
        <meta name="description" content="Shuffle any list into random order with our free List Shuffler tool. Great for creating random playlists, reading orders, or presentation sequences." />
        <meta name="keywords" content="list shuffler, random order generator, randomize list, shuffle names, random sequence" />
      </Helmet>
      
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              List Shuffler
            </h1>
            <p className="text-gray-600 mt-2">
              Randomize the order of any list or sequence
            </p>
          </header>

          <Navigation />
          <AdPlaceholder />
          <Separator className="my-6" />

          <ListShufflerTool />
          <Separator className="my-6" />
          <ListShufflerInstructions />
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default ListShuffler;
