
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SequenceGeneratorInstructions: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">How to Use the Sequence Generator</h2>
      
      <p className="text-gray-600">
        The Number Sequence Generator creates customized number sequences for various purposes. 
        Whether you need consecutive numbers, mathematical patterns, or custom formulas, this tool can help you generate them quickly.
      </p>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="types">
          <AccordionTrigger>Sequence Types Explained</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">The Sequence Generator offers three different ways to create number sequences:</p>
            
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Number Range:</strong> Generate a sequence from a starting number to an ending number with a specified step size. 
                For example, 1 to 10 with step 2 gives you [1, 3, 5, 7, 9].
              </li>
              <li>
                <strong>Mathematical Pattern:</strong> Create sequences following common mathematical patterns:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li><strong>Arithmetic:</strong> Each term differs from the previous by a constant value (e.g., [2, 5, 8, 11, 14] with first term 2 and common difference 3)</li>
                  <li><strong>Geometric:</strong> Each term is multiplied by a constant ratio (e.g., [3, 6, 12, 24, 48] with first term 3 and common ratio 2)</li>
                  <li><strong>Fibonacci-like:</strong> Each term is the sum of the two preceding terms (e.g., [2, 3, 5, 8, 13] with custom starting values)</li>
                </ul>
              </li>
              <li>
                <strong>Custom Formula:</strong> Define your own mathematical formula using 'n' as the variable representing the position.
                For example, "n*n" generates square numbers [1, 4, 9, 16, 25].
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="settings">
          <AccordionTrigger>Output Settings</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Customize how your sequence is generated and formatted:</p>
            
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Include zero and negative numbers:</strong> By default, only positive numbers are included. Enable this option to include zero and negative values.</li>
              <li><strong>Randomize order:</strong> Shuffle the sequence randomly instead of following the mathematical order.</li>
              <li>
                <strong>Output Format:</strong> Choose how the numbers appear in the result:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Comma separated (1, 2, 3)</li>
                  <li>New line (one number per line)</li>
                  <li>Space separated (1 2 3)</li>
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="custom">
          <AccordionTrigger>Using Custom Formulas</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">The custom formula option lets you create virtually any sequence by writing a JavaScript expression with 'n' as the variable:</p>
            
            <ul className="list-disc list-inside space-y-2">
              <li><strong>n*2:</strong> Even numbers [2, 4, 6, 8, 10]</li>
              <li><strong>n*2-1:</strong> Odd numbers [1, 3, 5, 7, 9]</li>
              <li><strong>n*n:</strong> Square numbers [1, 4, 9, 16, 25]</li>
              <li><strong>Math.pow(n,3):</strong> Cube numbers [1, 8, 27, 64, 125]</li>
              <li><strong>Math.pow(2,n):</strong> Powers of 2 [2, 4, 8, 16, 32]</li>
              <li><strong>n*(n+1)/2:</strong> Triangular numbers [1, 3, 6, 10, 15]</li>
            </ul>
            
            <p className="mt-2">You can use JavaScript Math functions like Math.sqrt(), Math.pow(), Math.floor(), etc.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="uses">
          <AccordionTrigger>Common Uses</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Educational purposes:</strong> Generate number sequences for math problems or patterns.</li>
              <li><strong>Sports and games:</strong> Create jersey numbers, team assignments, or game sequences.</li>
              <li><strong>Data entry:</strong> Generate sequential IDs or reference numbers.</li>
              <li><strong>Testing:</strong> Create test data sets with specific numerical patterns.</li>
              <li><strong>Math practice:</strong> Generate sequences for students to identify patterns or formulas.</li>
              <li><strong>Random draws:</strong> Generate lottery numbers or other random selections.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="tips">
          <AccordionTrigger>Tips and Tricks</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>For random numbers without a pattern, use a range sequence with randomize order enabled.</li>
              <li>The maximum recommended sequence length is 100 terms to ensure good performance.</li>
              <li>Use the "Copy" button to quickly transfer your generated sequence to other applications.</li>
              <li>When using custom formulas, be careful with large exponents or complex calculations that might produce very large numbers.</li>
              <li>For prime numbers, factorials, or other complex sequences, use a custom formula.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SequenceGeneratorInstructions;
