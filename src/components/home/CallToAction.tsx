
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const CallToAction = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="text-center py-12 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Ready to Get Started?</h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Choose from our wide range of random selection tools and experience the simplicity of our user-friendly interface.
      </p>
      <div className="flex justify-center">
        <Button
          onClick={scrollToTop}
          className="text-lg px-8 py-4 bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
        >
          Try Our Tools <ArrowUp className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
