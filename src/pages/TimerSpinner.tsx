
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import TimerSpinnerTool from '@/components/tools/TimerSpinnerTool';
import TimerSpinnerInstructions from '@/components/tools/TimerSpinnerInstructions';
import Footer from '@/components/home/Footer';
import AdPlaceholder from '@/components/home/AdPlaceholder';

const TimerSpinner = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Helmet>
        <title>Timer Spinner - Free Countdown with Random Selection Tool | NumberPicker.Live</title>
        <meta name="description" content="Combine a countdown timer with random selection for classroom activities, games, and adding suspense to your random picks - completely free and no signup required." />
        <meta name="keywords" content="timer spinner, countdown picker, random selection timer, classroom timer, game timer, random picker with timer, free timer tool" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://numberpicker.live/timer" />
        <meta property="og:title" content="Timer Spinner - Countdown with Random Selection" />
        <meta property="og:description" content="Combine a countdown timer with random selection for classroom activities, games, and adding suspense to picks." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://numberpicker.live/timer" />
        <meta property="twitter:title" content="Timer Spinner - Countdown with Random Selection" />
        <meta property="twitter:description" content="Combine a countdown timer with random selection for classroom activities, games, and adding suspense to picks." />
        
        {/* Canonical link */}
        <link rel="canonical" href="https://numberpicker.live/timer" />
        
        {/* Structured data for SEO */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Timer Spinner",
            "url": "https://numberpicker.live/timer",
            "description": "Countdown timer with random selection when time's up. Perfect for classroom activities, games, and adding suspense to random picks.",
            "applicationCategory": "UtilityApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }
        `}</script>
      </Helmet>
      
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Timer Spinner
            </h1>
            <p className="text-gray-600 mt-2">
              Countdown timer with random selection when time's up
            </p>
          </header>

          <Navigation />
          <AdPlaceholder />
          <Separator className="my-6" />

          <TimerSpinnerTool />
          <Separator className="my-6" />
          <TimerSpinnerInstructions />
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default TimerSpinner;
