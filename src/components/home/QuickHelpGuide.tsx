
import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const QuickHelpGuide = () => {
  return (
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
  );
};

export default QuickHelpGuide;
