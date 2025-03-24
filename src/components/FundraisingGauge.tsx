
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Leaf, Moon, Sprout, DollarSign, TreeDeciduous } from 'lucide-react';
interface FundraisingGaugeProps {
  currentAmount: number;
  goalAmount: number;
  checkpoints: number[];
}
const FundraisingGauge = ({
  currentAmount,
  goalAmount,
  checkpoints
}: FundraisingGaugeProps) => {
  // Calculate progress percentage
  const progressPercentage = Math.min(100, currentAmount / goalAmount * 100);

  // Format currency values
  const formatCurrency = (amount: number) => {
    // Special case for goal amount - always show as $1.11M
    if (amount === 1111111) {
      return "$1.11M";
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      notation: amount >= 1000000 ? 'compact' : 'standard'
    }).format(amount);
  };

  // Calculate checkpoint positions as percentages
  const checkpointPositions = checkpoints.map(checkpoint => checkpoint / goalAmount * 100);
  return <div className="w-full space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif font-medium mb-2">
          <span className="text-nature-leaf">Growing</span> Our Forest
        </h3>
        <p className="text-gray-600">
          Help us reach our fundraising goal of $727K
        </p>
      </div>
      
      <div className="relative pt-8 pb-4">
        {/* Progress bar */}
        <Progress value={progressPercentage} className="h-8 bg-nature-leaf/10" />
        
        {/* Forest decorations on top of progress bar */}
        <div className="absolute top-0 left-0 w-full">
          {/* Left decoration (starting point) */}
          <div className="absolute -top-6 left-0">
            <Sprout className="h-6 w-6 text-nature-leaf" />
          </div>
          
          {/* Middle checkpoint decorations */}
          {checkpointPositions.map((position, index) => <div key={index} className="absolute -top-6" style={{
          left: `${position}%`,
          transform: 'translateX(-50%)'
        }}>
              {/* Use TreeDeciduous icon for the first checkpoint ($727K) with the same green color */}
              {checkpoints[index] === 727000 ? <TreeDeciduous className="h-6 w-6 text-nature-leaf" /> : <Leaf className="h-6 w-6 text-nature-leaf" />}
            </div>)}
          
          {/* Right decoration (goal) - Moon icon */}
          <div className="absolute -top-6 right-0">
            <Moon className="h-6 w-6 text-nature-leaf" />
          </div>
          
          {/* Current progress indicator */}
          <div className="absolute -top-8" style={{
          left: `${progressPercentage}%`,
          transform: 'translateX(-50%)'
        }}>
            <div className="relative">
              <DollarSign className="h-8 w-8 text-nature-leaf animate-bounce slow" />
              <div className="bg-white text-nature-leaf text-xs font-bold px-2 py-1 rounded-md shadow-md absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                {formatCurrency(currentAmount)}
              </div>
            </div>
          </div>
        </div>
        
        {/* Amount labels below */}
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <div>$0</div>
          {checkpoints.map((checkpoint, index) => <div key={index} className="absolute" style={{
          left: `${checkpointPositions[index]}%`,
          transform: 'translateX(-50%)'
        }}>
              {formatCurrency(checkpoint)}
              
              {/* Add "Family & Friends Goal" label below the $272K mark - Perfect alignment */}
              {checkpoint === 272000 && <div className="text-xs font-medium text-gray-600 text-center whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 mt-4">
                  Family &amp; Friends Goal
                </div>}
              
              {/* Add "The Mother Tree Home is Secured!" label below the $727K mark */}
              {checkpoint === 727000 && <div className="text-xs font-medium text-gray-600 text-center whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 mt-4">
                  The Mother Tree Home is Secured!
                </div>}
            </div>)}
          <div>{formatCurrency(goalAmount)}</div>
          
          {/* Add "To the Moon!" text below the $1.11M mark - Properly aligned with other labels */}
          <div className="text-xs font-medium text-gray-600 text-center whitespace-nowrap absolute right-0 transform -translate-x-1/2 mt-4">
            To the Moon!
          </div>
        </div>
      </div>
    </div>;
};
export default FundraisingGauge;
