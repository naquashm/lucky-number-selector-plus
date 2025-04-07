
import React from 'react';
import { Card } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface InstructionProps {
  title: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
}

const Instructions: React.FC<InstructionProps> = ({ title, sections }) => {
  return (
    <Card className="p-4">
      <Alert className="mb-4">
        <Info className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>Click on any section to expand and view detailed instructions</AlertDescription>
      </Alert>
      
      <Accordion type="single" collapsible className="w-full">
        {sections.map((section, index) => (
          <AccordionItem key={index} value={`section-${index}`}>
            <AccordionTrigger className="text-left">{section.title}</AccordionTrigger>
            <AccordionContent className="text-sm text-gray-700">
              {section.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};

export default Instructions;
