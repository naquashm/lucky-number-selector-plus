
import React from 'react';
import Instructions from '@/components/Instructions';

const YesNoPickerInstructions = () => {
  return (
    <Instructions
      title="Yes/No Picker Instructions"
      sections={[
        {
          title: "How to use the Yes/No Decision Maker",
          content: (
            <div className="space-y-3">
              <p>Follow these simple steps to make a random decision:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Choose a decision mode: Yes/No, Yes/No/Maybe, or Custom Options</li>
                <li>If using Custom Options, enter your desired choices</li>
                <li>Click the "Make a Decision" button</li>
                <li>Wait for the animation to complete and see your result</li>
              </ol>
              <p>You can generate a new decision any time by clicking the button again.</p>
            </div>
          )
        },
        {
          title: "Decision Modes",
          content: (
            <div className="space-y-3">
              <p>The Yes/No Picker offers three decision modes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Yes/No:</strong> Binary decision between two options</li>
                <li><strong>Yes/No/Maybe:</strong> Three options for more flexibility</li>
                <li><strong>Custom Options:</strong> Create your own list of options</li>
              </ul>
              <p>In Custom Options mode, you can add as many options as you need and remove any (keeping at least two).</p>
            </div>
          )
        },
        {
          title: "Random Decision Process",
          content: (
            <div className="space-y-3">
              <p>When you click "Make a Decision":</p>
              <ul className="list-disc list-inside space-y-2">
                <li>The tool uses a fair randomization algorithm to select from your options</li>
                <li>An animation shows different possibilities before settling on the final choice</li>
                <li>Each option has an equal probability of being selected</li>
              </ul>
              <p>The result is truly random - perfect for making unbiased decisions!</p>
            </div>
          )
        },
        {
          title: "Use Cases",
          content: (
            <div className="space-y-3">
              <p>The Yes/No Decision Maker is perfect for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Breaking decision paralysis</li>
                <li>Settling minor disagreements</li>
                <li>Choosing between equal alternatives</li>
                <li>Games and activities</li>
                <li>Making spontaneous choices</li>
                <li>Creating random challenges or dares</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  );
};

export default YesNoPickerInstructions;
