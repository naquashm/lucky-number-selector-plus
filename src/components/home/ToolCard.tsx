
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon, FileSpreadsheet } from 'lucide-react';

interface ToolCardProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  hasCSVImport?: boolean;
  path: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  icon: Icon, 
  iconColor, 
  title, 
  description, 
  hasCSVImport = false, 
  path 
}) => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="text-center space-y-4">
        <div className={`mx-auto w-16 h-16 bg-${iconColor}/10 flex items-center justify-center rounded-full`}>
          <Icon size={32} className={`text-${iconColor}`} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">
          {description}
        </p>
        {hasCSVImport && (
          <div className="flex items-center justify-center text-sm text-gray-500 my-1">
            <FileSpreadsheet size={16} className="mr-1" />
            <span>CSV import available</span>
          </div>
        )}
        <Button 
          onClick={() => navigate(path)} 
          className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white"
        >
          Select Tool
        </Button>
      </div>
    </Card>
  );
};

export default ToolCard;
