
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
    <Card className="p-4 hover:shadow-lg transition-all hover:-translate-y-1 h-full flex flex-col">
      <div className="text-center space-y-3 flex flex-col flex-1">
        <div className={`mx-auto w-12 h-12 bg-${iconColor}/10 flex items-center justify-center rounded-full`}>
          <Icon size={24} className={`text-${iconColor}`} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">{title}</h2>
        <p className="text-gray-600 text-sm flex-1">
          {description}
        </p>
        {hasCSVImport && (
          <div className="flex items-center justify-center text-xs text-gray-500 my-1">
            <FileSpreadsheet size={14} className="mr-1" />
            <span>CSV import available</span>
          </div>
        )}
        <div className="mt-auto pt-2">
          <Button 
            onClick={() => navigate(path)} 
            className="w-full bg-gradient-to-r from-picker-purple to-picker-orange hover:opacity-90 text-white h-10"
          >
            Select Tool
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ToolCard;
