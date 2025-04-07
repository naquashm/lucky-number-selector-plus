
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Shuffle, CircleDashed, FileSpreadsheet, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
                <div className="flex items-center justify-center text-sm text-gray-500 my-1">
                  <FileSpreadsheet size={16} className="mr-1" />
                  <span>CSV import available</span>
                </div>
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
                <div className="flex items-center justify-center text-sm text-gray-500 my-1">
                  <FileSpreadsheet size={16} className="mr-1" />
                  <span>CSV import available</span>
                </div>
                <Button 
                  onClick={() => navigate('/wheel')} 
                  className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
                >
                  Select Tool
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-10">
            <div className="flex items-center mb-4">
              <HelpCircle className="mr-2 text-gray-700" size={20} />
              <h3 className="text-xl font-semibold text-gray-800">Quick Help Guide</h3>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="manual-entry">
                <AccordionTrigger>How to use manual entry</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                    <li>Choose either Number Generator or Wheel Picker tool.</li>
                    <li>Set the number of entries using the slider (2-100) or enter a custom number.</li>
                    <li>Fill in unique numbers for each entry (required).</li>
                    <li>Optionally add names or labels to your entries.</li>
                    <li>Click "Start" to begin the random selection process.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="csv-import">
                <AccordionTrigger>How to import CSV data</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                    <li>Prepare a CSV file with two columns: numbers and names (optional).</li>
                    <li>Format example: <code>1,John Smith<br/>2,Jane Doe</code></li>
                    <li>Switch to the CSV Import tab in either tool.</li>
                    <li>Click "Choose File" and select your prepared CSV.</li>
                    <li>The system will automatically detect number and name columns.</li>
                    <li>The data will be processed and loaded automatically.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="detailed-instructions">
                <AccordionTrigger>Where to find more detailed instructions</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Each tool has its own detailed instructions available. When you navigate to either 
                    the Number Generator or Wheel Picker page, look for the "Show Instructions" link 
                    below the main heading. Click it to view comprehensive instructions specific to that tool.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Card>

      <footer className="text-center mt-8 text-sm text-gray-500">
        <p>© 2025 Random Selection Tools | Support for large data sets via CSV import</p>
      </footer>
    </div>
  );
};

export default Home;
