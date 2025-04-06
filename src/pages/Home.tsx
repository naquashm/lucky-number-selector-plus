
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Shuffle, CircleDashed } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Random Selection Tools
            </h1>
            <p className="text-gray-600 mt-2">
              Choose the tool you want to use for your random selections
            </p>
          </header>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-picker-purple/10 flex items-center justify-center rounded-full">
                  <Shuffle size={32} className="text-picker-purple" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Random Number Generator</h2>
                <p className="text-gray-600">
                  Enter your numbers with optional names/labels and let the app pick a random one.
                </p>
                <Button 
                  onClick={() => navigate('/generator')} 
                  className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
                >
                  Select Tool
                </Button>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-picker-orange/10 flex items-center justify-center rounded-full">
                  <CircleDashed size={32} className="text-picker-orange" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Wheel Picker</h2>
                <p className="text-gray-600">
                  Enter your numbers and spin the wheel to select a random winner.
                </p>
                <Button 
                  onClick={() => navigate('/wheel')} 
                  className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
                >
                  Select Tool
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Card>

      <footer className="text-center mt-8 text-sm text-gray-500">
        <p>© 2025 Random Selection Tools | Input between 2-100 entries</p>
      </footer>
    </div>
  );
};

export default Home;
