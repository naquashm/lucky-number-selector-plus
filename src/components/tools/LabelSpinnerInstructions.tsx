
import React from 'react';
import Instructions from '@/components/Instructions';

const LabelSpinnerInstructions = () => {
  return (
    <Instructions
      title="Label Spinner Instructions"
      sections={[
        {
          title: "How to use the Label Spinner",
          content: (
            <div className="space-y-3">
              <p>Follow these simple steps to create and use your custom spinner:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Add labels to your spinner using one of three methods:
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li><strong>Visual Editor:</strong> Add, edit, or remove segments and change their colors</li>
                    <li><strong>Text Input:</strong> Enter labels (one per line) and click "Apply Labels"</li>
                    <li><strong>CSV Upload:</strong> Import labels from a CSV file</li>
                  </ul>
                </li>
                <li>Click the "Spin the Wheel" button</li>
                <li>Watch the wheel spin and reveal your result</li>
              </ol>
              <p>You can spin again any time by clicking the button again.</p>
            </div>
          )
        },
        {
          title: "Customizing Your Spinner",
          content: (
            <div className="space-y-3">
              <p>Make the spinner your own with these customization options:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Add/Remove Segments:</strong> Create as many options as you need (minimum 2)</li>
                <li><strong>Edit Labels:</strong> Change the text on any segment</li>
                <li><strong>Change Colors:</strong> Customize the color of each segment</li>
              </ul>
              <p>The visual editor gives you complete control over how your wheel looks and works.</p>
            </div>
          )
        },
        {
          title: "CSV File Format",
          content: (
            <div className="space-y-3">
              <p>To import labels via CSV, your file should:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Have one label per row (in the first column)</li>
                <li>Be plain text format</li>
                <li>Use commas as separators (if multiple columns exist)</li>
              </ul>
              <p>Example: Option 1,Category A,Other Info</p>
              <p>Note: Only the first column will be used as the spinner label.</p>
            </div>
          )
        },
        {
          title: "Use Cases",
          content: (
            <div className="space-y-3">
              <p>The Label Spinner is perfect for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Classroom activities and randomized selection</li>
                <li>Team building exercises and icebreakers</li>
                <li>Making decisions between multiple options</li>
                <li>Game shows and contests</li>
                <li>Restaurant or meal selection</li>
                <li>Assigning tasks or responsibilities</li>
                <li>Creating fun challenges or dares</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  );
};

export default LabelSpinnerInstructions;
