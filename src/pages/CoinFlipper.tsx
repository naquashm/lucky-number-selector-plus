
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import CoinFlipperTool from '@/components/tools/CoinFlipperTool';
import Footer from '@/components/home/Footer';
import AdPlaceholder from '@/components/home/AdPlaceholder';
import CoinFlipperInstructions from '@/components/tools/CoinFlipperInstructions';

const CoinFlipper = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Helmet>
        <title>Virtual Coin Flipper - Online Heads or Tails | NumberPicker.Live</title>
        <meta name="description" content="Flip a virtual coin with our free online Coin Flipper tool. Perfect for making quick decisions or settling friendly disputes." />
        <meta name="keywords" content="coin flipper, virtual coin, heads or tails, coin toss, online coin flip" />
      </Helmet>
      
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Coin Flipper
            </h1>
            <p className="text-gray-600 mt-2">
              Flip a virtual coin for quick decisions
            </p>
          </header>

          <Navigation />
          <AdPlaceholder />
          <Separator className="my-6" />

          <CoinFlipperTool />
          <Separator className="my-6" />
          <CoinFlipperInstructions />
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default CoinFlipper;
