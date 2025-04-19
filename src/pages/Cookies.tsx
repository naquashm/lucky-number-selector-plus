
import React from 'react';
import { Card } from '@/components/ui/card';

const Cookies = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent mb-6">
            Cookie Policy
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600">Last updated: April 19, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
            <p className="text-gray-600">
              Cookies are small text files that are stored on your computer when you visit websites. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600">
              NumberPicker.Live uses only essential cookies that are necessary for the website to function properly. We do not use any tracking or advertising cookies.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
            <p className="text-gray-600">
              Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact the functionality of our website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Our Cookie Policy</h2>
            <p className="text-gray-600">
              We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Cookies;
