
import React from 'react';
import Instructions from './Instructions';

const WheelPickerInstructions: React.FC = () => {
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
            <li>Click "Start Wheel Picking" when all required fields are filled.</li>
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
      title: "Using the Wheel Picker",
      content: (
        <div className="space-y-2">
          <p>Once your entries are loaded, you can use the wheel picker:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>The wheel will display all your entries in different colored segments.</li>
            <li>Click "Spin the Wheel!" to start the spinning animation.</li>
            <li>Wait for the wheel to stop spinning naturally.</li>
            <li>The winning entry will be displayed prominently below the wheel.</li>
            <li>Click "Spin the Wheel!" again to pick another random winner.</li>
            <li>Click "Reset" to start over with a new set of entries.</li>
          </ol>
        </div>
      )
    }
  ];

  return <Instructions title="How to Use the Wheel Picker" sections={sections} />;
};

export default WheelPickerInstructions;
