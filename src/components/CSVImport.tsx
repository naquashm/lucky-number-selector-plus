
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';
import { toast } from 'sonner';
import { Entry } from './NumberPickerForm';

interface CSVImportProps {
  onEntriesLoaded: (entries: Entry[]) => void;
}

const CSVImport: React.FC<CSVImportProps> = ({ onEntriesLoaded }) => {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processCSVData = (data: string): Entry[] => {
    try {
      const lines = data.trim().split('\n');
      if (lines.length === 0) {
        toast.error('CSV file appears to be empty');
        return [];
      }

      const parsedEntries: Entry[] = [];
      
      // Parse CSV into rows and columns
      const rows = lines.map(line => line.split(',').map(item => item.trim()));
      
      // Extract numbers from first row
      const firstRow = rows[0];
      if (!firstRow || firstRow.length === 0) {
        toast.error('No data found in the first row');
        return [];
      }

      // Get optional names from second row if it exists
      const secondRow = rows.length > 1 ? rows[1] : [];
      
      // Create entries by pairing numbers with names
      for (let i = 0; i < firstRow.length; i++) {
        const numValue = Number(firstRow[i]);
        if (!isNaN(numValue)) {
          parsedEntries.push({
            number: numValue,
            name: i < secondRow.length ? secondRow[i] : ''
          });
        } else {
          console.log(`Invalid number at index ${i}: "${firstRow[i]}"`);
        }
      }

      if (parsedEntries.length === 0) {
        toast.error('No valid numbers found in CSV');
        return [];
      }

      // Check for duplicate numbers
      const uniqueNumbers = new Set(parsedEntries.map(entry => entry.number));
      if (uniqueNumbers.size !== parsedEntries.length) {
        toast.warning('Duplicate numbers detected - please ensure all numbers are unique');
        return [];
      }

      console.log('Successfully parsed entries:', parsedEntries);
      return parsedEntries;
    } catch (error) {
      console.error('CSV parsing error:', error);
      toast.error('Failed to parse CSV file');
      return [];
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        console.log('CSV content:', content);
        const parsedEntries = processCSVData(content);
        
        if (parsedEntries.length > 0) {
          onEntriesLoaded(parsedEntries);
          toast.success(`Successfully imported ${parsedEntries.length} entries`);
        }
      } catch (error) {
        toast.error('Error processing CSV file');
        console.error(error);
      } finally {
        setIsLoading(false);
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    };
    
    reader.onerror = () => {
      toast.error('Error reading file');
      setIsLoading(false);
    };
    
    reader.readAsText(file);
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6">
      <div className="text-center space-y-4">
        <div className="mx-auto w-12 h-12 bg-picker-purple/10 flex items-center justify-center rounded-full">
          <Upload size={24} className="text-picker-purple" />
        </div>
        <h3 className="text-lg font-semibold">Import from CSV</h3>
        <p className="text-gray-600 text-sm">
          First row: numbers, second row (optional): names or labels
        </p>
        
        <div className="flex flex-col space-y-2">
          <Label htmlFor="csv-file" className="sr-only">
            Choose CSV file
          </Label>
          <Input
            ref={fileInputRef}
            id="csv-file"
            type="file"
            accept=".csv,text/csv"
            onChange={handleFileChange}
            disabled={isLoading}
            className="cursor-pointer"
          />
          <p className="text-xs text-gray-500">
            Example: 1,2,3,4,5<br />Alice,Bob,Charlie,Dave,Eve
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSVImport;
