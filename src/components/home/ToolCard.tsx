
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
    <Card className="p-2 hover:shadow-lg transition-all hover:-translate-y-1 h-full flex flex-col">
      <div className="text-center flex flex-col h-full">
        <div className={`mx-auto w-8 h-8 bg-${iconColor}/10 flex items-center justify-center rounded-full mb-1`}>
          <Icon size={16} className={`text-${iconColor}`} />
        </div>
        <h2 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-1">{title}</h2>
        <p className="text-gray-600 text-xs mb-2 line-clamp-2 flex-grow">
          {description}
        </p>
        {hasCSVImport && (
          <div className="flex items-center justify-center text-xs text-gray-500 mb-1">
            <FileSpreadsheet size={10} className="mr-1" />
            <span>CSV import available</span>
          </div>
        )}
        <Button 
          onClick={() => navigate(path)} 
          className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white h-7 text-xs mt-auto"
        >
          Select Tool
        </Button>
      </div>
    </Card>
  );
};

export default ToolCard;
