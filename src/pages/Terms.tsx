
import React from 'react';
import { Card } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent mb-6">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600">Last updated: April 19, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using NumberPicker.Live, you accept and agree to be bound by the terms and conditions laid out on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Use License</h2>
            <p className="text-gray-600">
              Permission is granted to temporarily use this website for personal, non-commercial random selection purposes. This is the grant of a license, not a transfer of title.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
            <p className="text-gray-600">
              The tools and services on NumberPicker.Live are provided "as is". We make no warranties about the completeness, reliability, and accuracy of this information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitations</h2>
            <p className="text-gray-600">
              In no event shall NumberPicker.Live be liable for any damages arising out of the use or inability to use our tools and services.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Terms;
