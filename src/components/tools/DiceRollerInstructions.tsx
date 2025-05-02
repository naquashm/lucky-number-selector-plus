
import React from 'react';
import Instructions from '@/components/Instructions';

const DiceRollerInstructions = () => {
  return (
    <Instructions
      title="Dice Roller Instructions"
      sections={[
        {
          title: "How to use the Dice Roller",
          content: (
            <div className="space-y-3">
              <p>Follow these simple steps to roll virtual dice:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Select a dice type (D4, D6, D8, D10, D12, D20, or Custom)</li>
                <li>If using Custom dice, enter the number of sides</li>
                <li>Choose how many dice to roll (1-10)</li>
                <li>Click the "Roll Dice" button</li>
                <li>View your dice results and the total sum (for multiple dice)</li>
              </ol>
              <p>You can roll again any time by clicking the button again.</p>
            </div>
          )
        },
        {
          title: "Dice Types Explained",
          content: (
            <div className="space-y-3">
              <p>The Dice Roller supports standard polyhedral dice used in many tabletop games:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>D4:</strong> Tetrahedral die with 4 sides (values 1-4)</li>
                <li><strong>D6:</strong> Standard cubic die with 6 sides (values 1-6)</li>
                <li><strong>D8:</strong> Octahedral die with 8 sides (values 1-8)</li>
                <li><strong>D10:</strong> Pentagonal trapezohedron with 10 sides (values 1-10)</li>
                <li><strong>D12:</strong> Dodecahedral die with 12 sides (values 1-12)</li>
                <li><strong>D20:</strong> Icosahedral die with 20 sides (values 1-20)</li>
                <li><strong>Custom:</strong> Create dice with any number of sides (2 or more)</li>
              </ul>
            </div>
          )
        },
        {
          title: "Multiple Dice and Totals",
          content: (
            <div className="space-y-3">
              <p>When rolling multiple dice:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Each die result is shown individually</li>
                <li>A total sum is calculated and displayed below the dice</li>
                <li>You can roll up to 10 dice at once</li>
              </ul>
              <p>This is particularly useful for games that require rolling multiple dice and adding the results.</p>
            </div>
          )
        },
        {
          title: "Use Cases",
          content: (
            <div className="space-y-3">
              <p>The Dice Roller is perfect for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Board games requiring dice</li>
                <li>Tabletop role-playing games (RPGs)</li>
                <li>Making random decisions</li>
                <li>Educational activities and probabilities</li>
                <li>Games where you don't have physical dice available</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  );
};

export default DiceRollerInstructions;
