
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const QuestionGeneratorInstructions: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">How to Use the Random Question Generator</h2>
      
      <p className="text-gray-600">
        Our Question Generator tool is perfect for icebreakers, team meetings, classroom discussions, or social events. 
        Here's how to get the most out of it:
      </p>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-usage">
          <AccordionTrigger>Basic Usage</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Select one or more question categories from the checkboxes.</li>
              <li>Click the "Generate Question" button to get a random question.</li>
              <li>Use the question as a conversation starter or icebreaker.</li>
              <li>Generate as many questions as you need - each click gives you a new question.</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="categories">
          <AccordionTrigger>Understanding Question Categories</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Icebreakers:</strong> Light, easy questions perfect for getting a conversation started.</li>
              <li><strong>Fun:</strong> Quirky and entertaining questions to create laughter and light-hearted discussion.</li>
              <li><strong>Deep:</strong> Thought-provoking questions that encourage meaningful conversation.</li>
              <li><strong>Professional:</strong> Career and work-focused questions suitable for workplace settings.</li>
              <li><strong>Teambuilding:</strong> Questions designed to strengthen team bonds and increase collaboration.</li>
            </ul>
            <p className="mt-2">You can select multiple categories to create a diverse mix of questions.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="history">
          <AccordionTrigger>Using the History Tab</AccordionTrigger>
          <AccordionContent>
            <p>The History tab keeps track of your recently generated questions. This is useful for:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Reviewing questions you've already used</li>
              <li>Avoiding repetition in the same session</li>
              <li>Referring back to particularly good questions</li>
            </ul>
            <p className="mt-2">The tool remembers up to 10 of your most recent questions.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="ideas">
          <AccordionTrigger>Ideas for Using the Question Generator</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Meeting Starters:</strong> Begin team meetings with a random question to break the ice.</li>
              <li><strong>Virtual Gatherings:</strong> Combat online meeting fatigue with engaging questions.</li>
              <li><strong>Classroom Discussions:</strong> Prompt student thinking with unexpected questions.</li>
              <li><strong>Party Games:</strong> Turn question answering into a game with points or challenges.</li>
              <li><strong>Date Night:</strong> Use deeper questions to foster meaningful conversation.</li>
              <li><strong>Self-Reflection:</strong> Answer the questions yourself as journaling prompts.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="tips">
          <AccordionTrigger>Tips for Great Conversations</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Give people time to think before answering complex questions.</li>
              <li>Consider going in a circle so everyone gets a chance to answer.</li>
              <li>Make it optional to skip questions that feel too personal.</li>
              <li>The person asking might want to answer first to set the tone.</li>
              <li>Follow up with related questions to deepen the conversation.</li>
              <li>Be respectful of different answers and perspectives.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default QuestionGeneratorInstructions;
