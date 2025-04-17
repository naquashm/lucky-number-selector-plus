
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import NumberPickerForm, { Entry } from '@/components/NumberPickerForm';
import RandomPicker from '@/components/RandomPicker';
import Navigation from '@/components/Navigation';
import CSVImport from '@/components/CSVImport';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NumberGeneratorInstructions from '@/components/NumberGeneratorInstructions';
import { Button } from '@/components/ui/button';
import AdPlaceholder from '@/components/home/AdPlaceholder';
import ToolsInfoSection from '@/components/home/ToolsInfoSection';
import Footer from '@/components/home/Footer';

const Index = () => {
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleStartPicking = (validEntries: Entry[]) => {
    setEntries(validEntries);
    setShowPicker(true);
    toast.success("Numbers loaded successfully!");
  };

  const handleReset = () => {
    setEntries(null);
    setShowPicker(false);
    toast.info("Reset complete. Start a new selection!");
  };

  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <Navigation />
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Random Number Generator
            </h1>
            <p className="text-gray-600 mt-2">
              Enter your numbers with optional names/labels and let the app pick a random one!
            </p>
            <Button 
              variant="link" 
              onClick={() => setShowInstructions(!showInstructions)}
              className="mt-2"
            >
              {showInstructions ? "Hide Instructions" : "Show Instructions"}
            </Button>
          </header>

          {showInstructions && (
            <div className="mb-6">
              <NumberGeneratorInstructions />
            </div>
          )}

          <Separator className="my-6" />

          {!showPicker ? (
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
                <TabsTrigger value="form">Manual Entry</TabsTrigger>
                <TabsTrigger value="csv">CSV Import</TabsTrigger>
              </TabsList>
              <TabsContent value="form">
                <NumberPickerForm onStartPicking={handleStartPicking} />
              </TabsContent>
              <TabsContent value="csv">
                <CSVImport onEntriesLoaded={handleStartPicking} />
              </TabsContent>
            </Tabs>
          ) : entries ? (
            <RandomPicker entries={entries} onReset={handleReset} />
          ) : null}
        </div>
      </Card>

      <section className="mt-16 space-y-12 text-lg">
        <ToolsInfoSection />
        <AdPlaceholder />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
