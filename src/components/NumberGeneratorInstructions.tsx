
import React from 'react';
import Instructions from './Instructions';

const NumberGeneratorInstructions: React.FC = () => {
  const sections = [
    {
      title: "Using Manual Entry",
      content: (
        <div className="space-y-2">
          <p>The manual entry form allows you to create a custom list of entries:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Use the slider to set the number of entries (2-500) or enter a custom number for more entries.</li>
            <li>For each entry, enter a unique number in the "Number" field (required).</li>
            <li>Optionally add a name/label for each entry in the "Name/Label" field.</li>
            <li>All numbers must be unique - duplicates will be highlighted in red.</li>
            <li>Click "Start Random Picking" when all required fields are filled.</li>
          </ol>
        </div>
      )
    },
    {
      title: "CSV File Import",
      content: (
        <div className="space-y-2">
          <p>Import a large number of entries quickly using a CSV file:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Prepare a CSV file with two columns: one for numbers and one for names (optional).</li>
            <li>CSV example format: <code>1,John Smith<br/>2,Jane Doe<br/>3,Alex Johnson</code></li>
            <li>The system will automatically detect which column contains numbers and which contains names.</li>
            <li>Columns containing only numeric values are treated as number entries.</li>
            <li>Columns containing text strings are treated as names/labels.</li>
            <li>If duplicate numbers are found, only the first occurrence will be used.</li>
            <li>Click the "Choose File" button to select your CSV file.</li>
            <li>After selection, the file will be processed automatically.</li>
          </ol>
        </div>
      )
    },
    {
      title: "Using the Random Picker",
      content: (
        <div className="space-y-2">
          <p>Once your entries are loaded, you can use the random picker:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Click "Pick Random Number" to start the selection animation.</li>
            <li>The system will highlight different entries before selecting a final winner.</li>
            <li>The selected entry will be prominently displayed.</li>
            <li>Click "Pick Again" to select another random entry from the same list.</li>
            <li>Click "Reset All" to start over with a new set of entries.</li>
          </ol>
        </div>
      )
    }
  ];

  return <Instructions title="How to Use the Number Generator" sections={sections} />;
};

export default NumberGeneratorInstructions;
