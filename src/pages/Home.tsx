import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Shuffle, CircleDashed, FileSpreadsheet, HelpCircle, Check, ArrowRight } from 'lucide-react';
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

      <section className="mt-16 space-y-12 text-lg">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
            Why Choose Our Random Selection Tools?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1" />
                <p className="text-gray-700">Perfect for teachers selecting students for class participation or group assignments</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1" />
                <p className="text-gray-700">Ideal for businesses conducting fair raffles or promotional giveaways</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1" />
                <p className="text-gray-700">Great for team leaders assigning random tasks or selecting meeting presenters</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1" />
                <p className="text-gray-700">Useful for event organizers managing door prizes or contest winners</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1" />
                <p className="text-gray-700">Perfect for game nights and social events requiring random player selection</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1" />
                <p className="text-gray-700">Excellent for research requiring random sampling from large datasets</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-picker-purple/10 to-picker-orange/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Advanced Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Number Generator</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Support for up to 500 entries</li>
                <li>• Custom labeling options</li>
                <li>• Duplicate number prevention</li>
                <li>• CSV import capability</li>
                <li>• Instant random selection</li>
              </ul>
            </Card>
            <Card className="p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Wheel Picker</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Interactive spinning wheel</li>
                <li>• Customizable entries</li>
                <li>• Animation effects</li>
                <li>• Winner highlighting</li>
                <li>• Multiple spin options</li>
              </ul>
            </Card>
            <Card className="p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Shared Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Bulk data import</li>
                <li>• Mobile responsive</li>
                <li>• Easy reset options</li>
                <li>• Result history</li>
                <li>• User-friendly interface</li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Perfect For Every Scenario</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-picker-purple">Education</h3>
              <p>
                Teachers can quickly select students for class participation, assign group projects, or
                choose presentation orders. The wheel picker adds an element of excitement to the classroom
                while maintaining fairness in selection.
              </p>
              <h3 className="text-2xl font-semibold text-picker-purple">Business</h3>
              <p>
                Perfect for selecting raffle winners at corporate events, assigning tasks in team meetings,
                or conducting fair employee reward programs. The CSV import feature makes it easy to handle
                large employee databases.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-picker-orange">Events</h3>
              <p>
                Event planners can efficiently manage door prizes, contest winners, and audience participation.
                The visual wheel adds entertainment value while ensuring transparent random selection.
              </p>
              <h3 className="text-2xl font-semibold text-picker-orange">Research</h3>
              <p>
                Researchers can utilize our tools for random sampling, participant selection, or experimental
                group assignment. The ability to import large datasets via CSV makes it ideal for academic
                and professional research.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center py-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Choose your preferred tool and experience the simplicity of random selection with our user-friendly interface.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => navigate('/generator')}
              className="text-lg px-6 py-3 bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
            >
              Try Number Generator <ArrowRight className="ml-2" />
            </Button>
            <Button
              onClick={() => navigate('/wheel')}
              className="text-lg px-6 py-3 bg-gradient-to-r from-picker-orange to-picker-purple hover:opacity-90 text-white"
            >
              Try Wheel Picker <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="text-center mt-8 text-sm text-gray-500">
        <p>© 2025 Random Selection Tools | Support for large data sets via CSV import</p>
      </footer>
    </div>
  );
};

export default Home;
