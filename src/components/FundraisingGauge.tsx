import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Leaf, Moon, Sprout, DollarSign, TreeDeciduous } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

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
  const progressPercentage = Math.min(100, currentAmount / goalAmount * 100);
  const isMobile = useIsMobile();

  const formatCurrency = (amount: number) => {
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
        <Progress value={progressPercentage} className="h-8 bg-nature-leaf/10" />
        
        <div className="absolute top-0 left-0 w-full">
          <div className="absolute -top-6 left-0">
            <Sprout className="h-6 w-6 text-nature-leaf" />
          </div>
          
          {checkpointPositions.map((position, index) => <div key={index} className="absolute -top-6" style={{
          left: `${position}%`,
          transform: 'translateX(-50%)'
        }}>
              {checkpoints[index] === 727000 ? <TreeDeciduous className="h-6 w-6 text-nature-leaf" /> : <Leaf className="h-6 w-6 text-nature-leaf" />}
            </div>)}
          
          <div className="absolute -top-6 right-0">
            <Moon className="h-6 w-6 text-nature-leaf" />
          </div>
          
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
        
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <div>$0</div>
          {checkpoints.map((checkpoint, index) => <div key={index} className="absolute" style={{
          left: `${checkpointPositions[index]}%`,
          transform: 'translateX(-50%)'
        }}>
              {formatCurrency(checkpoint)}
              
              {checkpoint === 272000 && !isMobile && <div className="text-xs font-medium text-gray-600 text-center whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 mt-4">
                  Family &amp; Friends Goal
                </div>}
              
              {checkpoint === 727000 && !isMobile && <div className="text-xs font-medium text-gray-600 text-center whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 mt-4">
                  The Mother Tree Home is Secured!
                </div>}
            </div>)}
          <div>{formatCurrency(goalAmount)}</div>
          
          {!isMobile && (
            <div className="absolute right-0 text-xs font-medium text-gray-600 text-center whitespace-nowrap mt-9">
              To the Moon!
            </div>
          )}
        </div>
      </div>
      
      {isMobile && (
        <div className="mt-24 mx-auto max-w-md bg-white/80 rounded-lg p-4 border border-nature-leaf/20">
          <h4 className="text-center text-sm font-medium mb-3 text-gray-700">Fundraising Milestones</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Leaf className="h-5 w-5 text-nature-leaf" />
              <span className="text-sm text-gray-600">Family &amp; Friends Goal</span>
            </div>
            <div className="flex items-center gap-3">
              <TreeDeciduous className="h-5 w-5 text-nature-leaf" />
              <span className="text-sm text-gray-600">The Mother Tree Home is Secured!</span>
            </div>
            <div className="flex items-center gap-3">
              <Moon className="h-5 w-5 text-nature-leaf" />
              <span className="text-sm text-gray-600">To the Moon!</span>
            </div>
          </div>
        </div>
      )}
    </div>;
};

export default FundraisingGauge;
