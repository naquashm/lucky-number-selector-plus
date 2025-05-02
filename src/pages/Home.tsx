
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shuffle, CircleDashed, Users, User, Check, X, Dices, Coin, Circle, ListFilter } from 'lucide-react';

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
      <Card className="mx-auto max-w-5xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <HomeHeader />
          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

            <ToolCard
              icon={Users}
              iconColor="picker-purple"
              title="Team Generator"
              description="Input names and divide them into random teams or groups."
              hasCSVImport={true}
              path="/teams"
            />

            <ToolCard
              icon={User}
              iconColor="picker-orange"
              title="Name Picker"
              description="Input names and pick one randomly with engaging animations."
              hasCSVImport={true}
              path="/names"
            />

            <ToolCard
              icon={Check}
              iconColor="picker-purple"
              title="Yes/No Picker"
              description="A simple binary picker for quick decision making."
              path="/yesno"
            />

            <ToolCard
              icon={Dices}
              iconColor="picker-orange"
              title="Dice Roller"
              description="Virtual dice roller for D6, D20, or custom-sided dice."
              path="/dice"
            />

            <ToolCard
              icon={Coin}
              iconColor="picker-purple"
              title="Coin Flipper"
              description="Flip a virtual coin with optional custom coin faces."
              path="/coin"
            />

            <ToolCard
              icon={Circle}
              iconColor="picker-orange"
              title="Label Spinner"
              description="Create labeled segments for a visual fortune wheel."
              hasCSVImport={true}
              path="/labels"
            />

            <ToolCard
              icon={ListFilter}
              iconColor="picker-purple"
              title="List Shuffler"
              description="Shuffle any list of items into a random order."
              hasCSVImport={true}
              path="/shuffle"
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
