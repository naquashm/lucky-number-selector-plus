
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileSpreadsheet } from 'lucide-react';
import { Shuffle, CircleDashed } from 'lucide-react';

import HomeHeader from '@/components/home/HomeHeader';
import ToolCard from '@/components/home/ToolCard';
import QuickHelpGuide from '@/components/home/QuickHelpGuide';
import ToolsInfoSection from '@/components/home/ToolsInfoSection';
import UseCasesGrid from '@/components/home/UseCasesGrid';
import GettingStartedGuide from '@/components/home/GettingStartedGuide';
import CallToAction from '@/components/home/CallToAction';
import Footer from '@/components/home/Footer';

const Home = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <HomeHeader />
          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ToolCard
              icon={Shuffle}
              iconColor="picker-purple"
              title="Random Number Generator"
              description="Enter your numbers with optional names/labels and let the app pick a random one."
              hasCSVImport={true}
              path="/generator"
            />
            
            <ToolCard
              icon={CircleDashed}
              iconColor="picker-orange"
              title="Wheel Picker"
              description="Enter your numbers and spin the wheel to select a random winner."
              hasCSVImport={true}
              path="/wheel"
            />
          </div>

          <QuickHelpGuide />
        </div>
      </Card>

      <section className="mt-16 space-y-16 text-lg">
        <ToolsInfoSection />
        <UseCasesGrid />
        <GettingStartedGuide />
        <CallToAction />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
