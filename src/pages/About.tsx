
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent mb-6">
            About NumberPicker.Live
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              NumberPicker.Live is your go-to platform for making random selections and decisions. Whether you're choosing winners for a contest, making a decision, or just having fun with random selections, our tools make the process easy and fair.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Tools</h2>
            <ul className="space-y-4 text-gray-600">
              <li><strong>Random Number Generator:</strong> Perfect for picking random numbers with optional labels, ideal for contests and selections.</li>
              <li><strong>Wheel Picker:</strong> A fun and visual way to make random selections with an animated spinning wheel.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
            <ul className="space-y-4 text-gray-600">
              <li>Simple and intuitive interface</li>
              <li>Fair and truly random selections</li>
              <li>Support for CSV imports for large datasets</li>
              <li>Mobile-friendly design</li>
              <li>No registration required</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
