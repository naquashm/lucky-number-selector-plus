
import React from 'react';
import Instructions from '@/components/Instructions';

const NamePickerInstructions = () => {
  return (
    <Instructions
      title="Name Picker Instructions"
      sections={[
        {
          title: "How to use the Name Picker",
          content: (
            <div className="space-y-3">
              <p>Follow these simple steps to pick a random name:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Enter names in the text box (one name per line) or upload a CSV file</li>
                <li>Choose whether to show animation during selection</li>
                <li>Click the "Pick a Random Name" button</li>
                <li>Watch the animation (if enabled) and see the selected name</li>
              </ol>
              <p>You can pick again any time by clicking the button again.</p>
            </div>
          )
        },
        {
          title: "CSV File Format",
          content: (
            <div className="space-y-3">
              <p>To import names via CSV, your file should:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Have one name per row (in the first column)</li>
                <li>Be plain text format</li>
                <li>Use commas as separators (if multiple columns exist)</li>
              </ul>
              <p>Example: John Smith,Team A,Other Info</p>
              <p>Note: Only the first column (name) will be used by the name picker.</p>
            </div>
          )
        },
        {
          title: "Animation Options",
          content: (
            <div className="space-y-3">
              <p>The Name Picker offers two selection modes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>With Animation:</strong> Creates a visual "slot machine" effect for 2 seconds before revealing the final selection.</li>
                <li><strong>Without Animation:</strong> Instantly shows the randomly selected name without any visual effects.</li>
              </ul>
              <p>Enable or disable the animation using the switch below the input area.</p>
            </div>
          )
        },
        {
          title: "Use Cases",
          content: (
            <div className="space-y-3">
              <p>The Name Picker is perfect for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Selecting students to answer questions in class</li>
                <li>Choosing raffle or contest winners</li>
                <li>Picking team captains or group leaders</li>
                <li>Assigning tasks or responsibilities</li>
                <li>Making fair selections for any purpose</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  );
};

export default NamePickerInstructions;
