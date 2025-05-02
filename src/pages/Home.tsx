
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shuffle, CircleDashed, Users, User, Check, X, Dices, Coins, Circle, ListFilter } from 'lucide-react';

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
    <div className="min-h-screen py-6 md:py-10 container">
      <Card className="mx-auto max-w-5xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-5 md:p-6">
          <HomeHeader />
          <Separator className="my-4" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            <ToolCard
              icon={Shuffle}
              iconColor="picker-purple"
              title="Random Number Generator"
              description="Generate random numbers with optional labels."
              hasCSVImport={true}
              path="/generator"
            />
            
            <ToolCard
              icon={CircleDashed}
              iconColor="picker-orange"
              title="Wheel Picker"
              description="Spin a wheel to select a random winner."
              hasCSVImport={true}
              path="/wheel"
            />

            <ToolCard
              icon={Users}
              iconColor="picker-purple"
              title="Team Generator"
              description="Create random teams from a list of names."
              hasCSVImport={true}
              path="/teams"
            />

            <ToolCard
              icon={User}
              iconColor="picker-orange"
              title="Name Picker"
              description="Pick random names with animations."
              hasCSVImport={true}
              path="/names"
            />

            <ToolCard
              icon={Check}
              iconColor="picker-purple"
              title="Yes/No Picker"
              description="Quick binary decision maker."
              path="/yesno"
            />

            <ToolCard
              icon={Dices}
              iconColor="picker-orange"
              title="Dice Roller"
              description="Roll virtual dice with custom sides."
              path="/dice"
            />

            <ToolCard
              icon={Coins}
              iconColor="picker-purple"
              title="Coin Flipper"
              description="Flip a virtual coin with custom faces."
              path="/coin"
            />

            <ToolCard
              icon={Circle}
              iconColor="picker-orange"
              title="Label Spinner"
              description="Create labeled wheel segments."
              hasCSVImport={true}
              path="/labels"
            />

            <ToolCard
              icon={ListFilter}
              iconColor="picker-purple"
              title="List Shuffler"
              description="Randomize list items order."
              hasCSVImport={true}
              path="/shuffle"
            />
            
            <ToolCard
              icon={CircleDashed}
              iconColor="picker-orange"
              title="Question Generator"
              description="Generate random conversation starters."
              path="/questions"
            />
            
            <ToolCard
              icon={ListFilter}
              iconColor="picker-purple"
              title="Sequence Generator"
              description="Create number patterns and sequences."
              path="/sequence"
            />
            
            <ToolCard
              icon={CircleDashed}
              iconColor="picker-orange"
              title="Timer Spinner"
              description="Countdown timer with random selection."
              path="/timer"
            />
          </div>

          <QuickHelpGuide />
        </div>
      </Card>

      <section className="mt-12 space-y-12 text-lg">
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
