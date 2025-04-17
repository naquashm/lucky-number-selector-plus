
import React from 'react';
import { Check } from 'lucide-react';

const ToolsInfoSection = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
        Why Choose Our Random Selection Tools?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1" />
            <p className="text-gray-700">Perfect for teachers selecting students for class participation or group assignments</p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1" />
            <p className="text-gray-700">Ideal for businesses conducting fair raffles or promotional giveaways</p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1" />
            <p className="text-gray-700">Great for team leaders assigning random tasks or selecting meeting presenters</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1" />
            <p className="text-gray-700">Useful for event organizers managing door prizes or contest winners</p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1" />
            <p className="text-gray-700">Perfect for game nights and social events requiring random player selection</p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1" />
            <p className="text-gray-700">Excellent for research requiring random sampling from large datasets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsInfoSection;
