
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Star, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const UseCasesGrid = () => {
  return (
    <div className="bg-gradient-to-r from-picker-purple/10 to-picker-orange/10 rounded-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">How Our Tools Can Help You</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Users className="text-picker-purple h-6 w-6" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Student participation selection</li>
            <li>• Group assignment distribution</li>
            <li>• Project presentation order</li>
            <li>• Quiz participant selection</li>
            <li>• Fair task distribution</li>
          </ul>
          <div className="mt-4">
            <Link to="/blog/creative-ways-use-wheel-picker-classroom" className="text-picker-purple hover:underline text-sm font-medium">Learn more about classroom tools →</Link>
          </div>
        </Card>
        <Card className="p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Star className="text-picker-orange h-6 w-6" />
            <h3 className="text-xl font-semibold">Events</h3>
          </div>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Raffle drawings</li>
            <li>• Door prize selection</li>
            <li>• Contest winner picking</li>
            <li>• Game night activities</li>
            <li>• Team matchups</li>
          </ul>
          <div className="mt-4">
            <Link to="/blog/fair-online-giveaway-random-number-generator" className="text-picker-purple hover:underline text-sm font-medium">Learn about running fair contests →</Link>
          </div>
        </Card>
        <Card className="p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Rocket className="text-picker-purple h-6 w-6" />
            <h3 className="text-xl font-semibold">Business</h3>
          </div>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Employee rewards</li>
            <li>• Meeting presenter selection</li>
            <li>• Task assignments</li>
            <li>• Team building activities</li>
            <li>• Customer giveaways</li>
          </ul>
          <div className="mt-4">
            <Link to="/blog/random-number-generators-fair-decisions" className="text-picker-purple hover:underline text-sm font-medium">Discover business applications →</Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UseCasesGrid;
