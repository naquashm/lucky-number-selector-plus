
import React from 'react';
import { Grid2x2, ChartBar, CircleDashed, Lightbulb } from 'lucide-react';

const GettingStartedGuide = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Getting Started Guide</h2>
      <div className="grid md:grid-cols-2 gap-8 text-gray-700">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-picker-purple mb-4 flex items-center gap-2">
              <Grid2x2 className="h-6 w-6" />
              Number Generator
            </h3>
            <p className="leading-relaxed">
              Perfect for quick random selections. Enter up to 500 numbers with optional labels,
              or import your data via CSV. Ideal for selecting winners, assigning tasks, or
              creating random groups. The tool ensures fair and unbiased selection every time.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-picker-purple mb-4 flex items-center gap-2">
              <ChartBar className="h-6 w-6" />
              Data Import Options
            </h3>
            <p className="leading-relaxed">
              Both tools support CSV file imports for handling large datasets. Simply prepare your
              CSV with numbers and optional labels, then upload it to instantly load hundreds of
              entries. Perfect for managing large pools of participants.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-picker-orange mb-4 flex items-center gap-2">
              <CircleDashed className="h-6 w-6" />
              Wheel Picker
            </h3>
            <p className="leading-relaxed">
              Add excitement to your selection process with our interactive wheel. Support for up
              to 500 entries, custom labels, and engaging spin animations. Great for live events,
              classroom activities, or any situation requiring an engaging random selection.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-picker-orange mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Tips for Success
            </h3>
            <p className="leading-relaxed">
              For best results, prepare your data beforehand. Consider using labels to make
              entries more identifiable. For large datasets, organize your CSV file with clear
              headers. The tools are designed to handle both simple and complex selection needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedGuide;
