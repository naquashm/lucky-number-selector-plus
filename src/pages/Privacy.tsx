
import React from 'react';
import { Card } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600">Last updated: April 19, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600">
              NumberPicker.Live is committed to protecting your privacy. We do not collect any personal information unless explicitly provided through our feedback form. We do not store your random number selections or any data you input for random picking.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              Any information submitted through our feedback form is used solely for the purpose of improving our service and responding to your queries. We do not share your information with third parties.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p className="text-gray-600">
              While we implement reasonable security measures, please note that no internet transmission is 100% secure. We cannot guarantee the security of information transmitted to our website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our Privacy Policy, please contact us through our feedback form.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Privacy;
