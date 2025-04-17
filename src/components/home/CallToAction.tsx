
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center py-12 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Ready to Get Started?</h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Choose your preferred tool and experience the simplicity of random selection with our user-friendly interface.
      </p>
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => navigate('/generator')}
          className="text-lg px-6 py-3 bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
        >
          Try Number Generator <ArrowRight className="ml-2" />
        </Button>
        <Button
          onClick={() => navigate('/wheel')}
          className="text-lg px-6 py-3 bg-gradient-to-r from-picker-orange to-picker-purple hover:opacity-90 text-white"
        >
          Try Wheel Picker <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
