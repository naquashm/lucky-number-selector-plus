
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Star, Rocket } from 'lucide-react';

const UseCasesGrid = () => {
  return (
    <div className="bg-gradient-to-r from-picker-purple/10 to-picker-orange/10 rounded-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">How Our Tools Can Help You</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-picker-purple h-6 w-6" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• Student participation selection</li>
            <li>• Group assignment distribution</li>
            <li>• Project presentation order</li>
            <li>• Quiz participant selection</li>
            <li>• Fair task distribution</li>
          </ul>
        </Card>
        <Card className="p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-picker-orange h-6 w-6" />
            <h3 className="text-xl font-semibold">Events</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• Raffle drawings</li>
            <li>• Door prize selection</li>
            <li>• Contest winner picking</li>
            <li>• Game night activities</li>
            <li>• Team matchups</li>
          </ul>
        </Card>
        <Card className="p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="text-picker-purple h-6 w-6" />
            <h3 className="text-xl font-semibold">Business</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• Employee rewards</li>
            <li>• Meeting presenter selection</li>
            <li>• Task assignments</li>
            <li>• Team building activities</li>
            <li>• Customer giveaways</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default UseCasesGrid;
