
import React from 'react';
import Instructions from '@/components/Instructions';

const CoinFlipperInstructions = () => {
  return (
    <Instructions
      title="Coin Flipper Instructions"
      sections={[
        {
          title: "How to use the Coin Flipper",
          content: (
            <div className="space-y-3">
              <p>Follow these simple steps to flip a virtual coin:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Select the tab for standard or custom coin</li>
                <li>For a custom coin, upload your own images for heads and tails</li>
                <li>Optionally adjust settings like result labels</li>
                <li>Click the "Flip Coin" button</li>
                <li>Watch the animation and see your result</li>
              </ol>
              <p>You can flip again any time by clicking the button again.</p>
            </div>
          )
        },
        {
          title: "Custom Coin Images",
          content: (
            <div className="space-y-3">
              <p>Personalize your coin with custom images:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Upload any image file (JPEG, PNG, etc.) for heads and tails</li>
                <li>Images will be cropped to fit a circular shape</li>
                <li>Best results with square images</li>
              </ul>
              <p>This is perfect for creating themed coins, such as using team logos for sports decisions.</p>
            </div>
          )
        },
        {
          title: "Customizing Labels",
          content: (
            <div className="space-y-3">
              <p>Make the coin flipper more versatile by changing the labels:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Go to the Settings tab to modify labels</li>
                <li>Enable or disable result labels completely</li>
                <li>Change "Heads" and "Tails" to any text (e.g., "Yes"/"No", "Apple"/"Orange")</li>
              </ul>
              <p>The labels allow you to use the coin flipper for many different types of binary decisions.</p>
            </div>
          )
        },
        {
          title: "Statistics Tracking",
          content: (
            <div className="space-y-3">
              <p>The Coin Flipper keeps track of your flip history:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Total number of flips</li>
                <li>Number and percentage of heads results</li>
                <li>Number and percentage of tails results</li>
              </ul>
              <p>This can be useful for tracking patterns or demonstrating probability concepts.</p>
            </div>
          )
        },
        {
          title: "Use Cases",
          content: (
            <div className="space-y-3">
              <p>The Coin Flipper is perfect for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Making binary decisions (yes/no, this/that)</li>
                <li>Settling friendly disputes</li>
                <li>Teaching probability concepts</li>
                <li>Sports coin tosses</li>
                <li>Games requiring coin flips</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  );
};

export default CoinFlipperInstructions;
