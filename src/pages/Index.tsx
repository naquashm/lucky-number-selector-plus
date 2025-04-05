
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/sonner';
import NumberPickerForm, { Entry } from '@/components/NumberPickerForm';
import RandomPicker from '@/components/RandomPicker';

const Index = () => {
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [showPicker, setShowPicker] = useState(false);

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
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Random Number Picker
            </h1>
            <p className="text-gray-600 mt-2">
              Enter your numbers with optional names/labels and let the app pick a random one!
            </p>
          </header>

          <Separator className="my-6" />

          {!showPicker ? (
            <NumberPickerForm onStartPicking={handleStartPicking} />
          ) : entries ? (
            <RandomPicker entries={entries} onReset={handleReset} />
          ) : null}
        </div>
      </Card>

      <footer className="text-center mt-8 text-sm text-gray-500">
        <p>© 2025 Random Number Picker | Input between 2-100 entries</p>
      </footer>
    </div>
  );
};

export default Index;
