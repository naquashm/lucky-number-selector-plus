
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TimerSpinnerInstructions: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">How to Use the Timer Spinner</h2>
      
      <p className="text-gray-600">
        The Timer Spinner combines a countdown timer with a random selection tool. Add your items, 
        set a timer, and let the spinner choose a random winner when time runs out. Perfect for games, 
        classroom activities, or any situation where you need an element of suspense before making a random pick.
      </p>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic">
          <AccordionTrigger>Basic Usage</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Go to the "Items" tab and enter your items (one per line).</li>
              <li>Switch to the "Settings" tab to adjust the timer duration and rotation speed if desired.</li>
              <li>Return to the "Timer" tab and click "Start Timer".</li>
              <li>Watch the spinner rotate as the timer counts down.</li>
              <li>When the timer reaches zero, the spinner will stop and randomly select one of your items.</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="controls">
          <AccordionTrigger>Timer Controls</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Start Timer:</strong> Begins the countdown timer and sets the spinner in motion.</li>
              <li><strong>Pause:</strong> Temporarily stops the timer and spinner. You can resume from where you left off.</li>
              <li><strong>Resume:</strong> Continues the timer and spinner after pausing.</li>
              <li><strong>Reset:</strong> Stops the timer and spinner completely, returning everything to the initial state.</li>
            </ul>
            <p className="mt-2">You can pause the timer at any point if you need a break or want to explain something before the selection happens.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="settings">
          <AccordionTrigger>Customizing Your Timer</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Timer Duration:</strong> Set the countdown time in seconds (1-300).
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Short durations (5-10 seconds) are good for quick decisions.</li>
                  <li>Medium durations (30-60 seconds) work well for building anticipation.</li>
                  <li>Longer durations can be used for activities where you need time to prepare.</li>
                </ul>
              </li>
              <li>
                <strong>Rotation Speed:</strong> Adjust how quickly the spinner rotates.
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Slower rotations are more visible and dramatic.</li>
                  <li>Faster rotations create more excitement and energy.</li>
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="items">
          <AccordionTrigger>Adding and Editing Items</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Enter each item on a separate line in the text area on the "Items" tab.</li>
              <li>You can add as many items as you want, but 5-20 items generally work best.</li>
              <li>Edit or delete items as needed before starting the timer.</li>
              <li>Items with similar lengths work best visually when the result is displayed.</li>
              <li>You can copy and paste lists from other applications.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="ideas">
          <AccordionTrigger>Creative Uses</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Classroom Activities:</strong> Randomly select students for answers or tasks with a countdown.</li>
              <li><strong>Decision Making:</strong> Let the timer decide between options when you're having trouble choosing.</li>
              <li><strong>Party Games:</strong> Create timed challenges where the spinner selects the next player.</li>
              <li><strong>Workout Routines:</strong> Use the timer for exercise intervals and the spinner to choose the next exercise.</li>
              <li><strong>Team Building:</strong> Random selection with a timer adds excitement to group activities.</li>
              <li><strong>Presentations:</strong> Use the spinner to determine the order of speakers or topics.</li>
              <li><strong>Icebreakers:</strong> Combine with the Question Generator to select both a person and a question.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="tips">
          <AccordionTrigger>Tips and Tricks</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Build anticipation by talking during the countdown to engage your audience.</li>
              <li>For classroom use, tell students they'll be selected when the timer ends to keep everyone engaged.</li>
              <li>Use a longer timer (60+ seconds) if you want time to discuss before the selection happens.</li>
              <li>Combine with other tools: use spinning to select a group from Team Generator or a question from Question Generator.</li>
              <li>Create tournament brackets by running multiple timer sessions and grouping winners.</li>
              <li>For added fairness, remove selected items after they're chosen to avoid repeats.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default TimerSpinnerInstructions;
