
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
      const processedNumbers = new Set<number>(); // Track numbers we've already processed
      
      // Parse CSV into rows and columns and clean up quotes
      const rows = lines.map(line => 
        line.split(',').map(item => item.trim().replace(/^"(.*)"$/, '$1'))
      );
      
      if (rows.length === 0 || rows[0].length === 0) {
        toast.error('No data found in CSV');
        return [];
      }

      console.log('Raw CSV rows:', rows);
      
      // Identify which columns contain numbers and which contain names
      // We'll analyze all columns to determine the best match
      const columnTypes = identifyColumnTypes(rows);
      console.log('Column types analysis:', columnTypes);
      
      // Find the first column that is primarily numeric to use as the number column
      const numberColumnIndex = columnTypes.findIndex(col => col.type === 'number');
      if (numberColumnIndex === -1) {
        toast.error('Could not find a column with numbers in the CSV');
        return [];
      }
      
      // Find a column that contains mostly strings but not numbers to use as names
      const nameColumnIndex = columnTypes.findIndex(col => 
        col.type === 'string' && col.index !== numberColumnIndex
      );
      
      console.log(`Using column ${numberColumnIndex} for numbers and column ${nameColumnIndex} for names`);
      
      // Skip header row if detected
      let dataStartRow = 0;
      const firstRow = rows[0];
      const hasHeaderRow = firstRow.some(cell => isNaN(Number(cell)) && cell.length > 0);
      if (hasHeaderRow) {
        console.log('Header row detected, starting data from row 1');
        dataStartRow = 1;
      }
      
      // Extract data using identified columns
      for (let i = dataStartRow; i < rows.length; i++) {
        const row = rows[i];
        
        if (row.length <= numberColumnIndex) continue; // Skip rows that don't have enough columns
        
        const numValue = Number(row[numberColumnIndex]);
        if (!isNaN(numValue)) {
          // Only add this number if we haven't seen it before
          if (!processedNumbers.has(numValue)) {
            processedNumbers.add(numValue);
            
            let name = '';
            if (nameColumnIndex !== -1 && row.length > nameColumnIndex) {
              name = row[nameColumnIndex];
            }
            
            parsedEntries.push({
              number: numValue,
              name
            });
          } else {
            console.log(`Duplicate number found in row ${i}: ${numValue} - ignoring this entry`);
          }
        } else {
          console.log(`Invalid number in row ${i}, column ${numberColumnIndex}: "${row[numberColumnIndex]}"`);
        }
      }

      if (parsedEntries.length === 0) {
        toast.error('No valid entries could be created from the CSV');
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

  // Helper function to identify column types
  const identifyColumnTypes = (rows: string[][]) => {
    // Skip empty rows and ensure we have data to analyze
    const dataRows = rows.filter(row => row.length > 0);
    if (dataRows.length === 0) return [];
    
    // Determine how many columns to analyze
    const maxColumns = Math.max(...dataRows.map(row => row.length));
    
    // Initialize column analysis arrays
    const columnAnalysis = Array(maxColumns).fill(0).map((_, index) => ({
      index,
      numericCount: 0,
      stringCount: 0,
      emptyCount: 0,
      totalCount: 0,
      type: 'unknown' as 'number' | 'string' | 'unknown'
    }));
    
    // Analyze each column
    dataRows.forEach(row => {
      for (let i = 0; i < maxColumns; i++) {
        if (i < row.length) {
          const value = row[i].trim();
          columnAnalysis[i].totalCount++;
          
          if (value === '') {
            columnAnalysis[i].emptyCount++;
          } else if (!isNaN(Number(value)) && value !== '') {
            columnAnalysis[i].numericCount++;
          } else {
            columnAnalysis[i].stringCount++;
          }
        }
      }
    });
    
    // Determine the type of each column
    columnAnalysis.forEach(column => {
      const nonEmptyCount = column.totalCount - column.emptyCount;
      if (nonEmptyCount === 0) {
        column.type = 'unknown';
      } else {
        const numericPercentage = column.numericCount / nonEmptyCount;
        const stringPercentage = column.stringCount / nonEmptyCount;
        
        if (numericPercentage > 0.75) {
          column.type = 'number';
        } else if (stringPercentage > 0.5) {
          column.type = 'string';
        } else {
          column.type = 'unknown';
        }
      }
    });
    
    return columnAnalysis;
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
          Upload your CSV file with numbers and optional names
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
            Supports: numbers (required), names (optional)<br />
            Also supports CSV files with headers in the first row
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSVImport;
