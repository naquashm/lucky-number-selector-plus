
import React from 'react';
import Instructions from '@/components/Instructions';

const ListShufflerInstructions = () => {
  return (
    <Instructions
      title="List Shuffler Instructions"
      sections={[
        {
          title: "How to use the List Shuffler",
          content: (
            <div className="space-y-3">
              <p>Follow these simple steps to randomize your list:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Enter items in the text box (one per line) or upload a CSV file</li>
                <li>Choose whether to show numbers in the result</li>
                <li>Click the "Shuffle List" button</li>
                <li>View your shuffled list and copy the results if needed</li>
              </ol>
              <p>You can shuffle again any time by clicking the button again.</p>
            </div>
          )
        },
        {
          title: "CSV File Format",
          content: (
            <div className="space-y-3">
              <p>To import items via CSV, your file should:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Have one item per row (in the first column)</li>
                <li>Be plain text format</li>
                <li>Use commas as separators (if multiple columns exist)</li>
              </ul>
              <p>Example: Item 1,Category A,Other Info</p>
              <p>Note: Only the first column (item) will be used by the shuffler.</p>
            </div>
          )
        },
        {
          title: "About the Randomization",
          content: (
            <div className="space-y-3">
              <p>The List Shuffler uses the Fisher-Yates shuffle algorithm, which:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provides a truly random permutation of the original list</li>
                <li>Ensures each item has an equal probability of appearing in any position</li>
                <li>Is unbiased and produces uniform results</li>
              </ul>
              <p>The animation shows multiple shuffles to make the process more engaging, but the final result is a single, fair shuffle.</p>
            </div>
          )
        },
        {
          title: "Use Cases",
          content: (
            <div className="space-y-3">
              <p>The List Shuffler is perfect for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Creating random presentation orders</li>
                <li>Developing randomized playlists for music or videos</li>
                <li>Establishing reading or task sequences</li>
                <li>Organizing tournament matchups or competition brackets</li>
                <li>Assigning order for games, performances, or activities</li>
                <li>Eliminating bias in any sequenced process</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  );
};

export default ListShufflerInstructions;
