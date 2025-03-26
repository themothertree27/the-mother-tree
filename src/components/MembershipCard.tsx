
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

// Proper type definitions for the component
interface MembershipCardProps {
  tier: string;
  name: string;
  price: string;
  description: string;
  benefits: string[];
  exclusions?: string[];
  accentColor: string;
  iconColor: string;
  bgGradient: string;
  icon: React.ReactNode;
  buttonIcon: React.ReactNode;
  buttonText: string;
  buttonBgColor?: string;
  clarificationText?: string;
  popular?: boolean;
}

// Proper type checking for scrolling to element
const scrollToMotherBoard = () => {
  const element = document.getElementById('themotherboard');
  if (element && element instanceof HTMLDivElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Make sure to export the component function
export { scrollToMotherBoard };

const MembershipCard: React.FC<MembershipCardProps> = ({
  tier,
  name,
  price,
  description,
  benefits,
  exclusions,
  accentColor,
  iconColor,
  bgGradient,
  icon,
  buttonIcon,
  buttonText,
  buttonBgColor,
  clarificationText,
  popular
}) => {
  return (
    <div className={cn(
      "relative rounded-xl overflow-hidden",
      popular && "ring-2 ring-offset-2 ring-nature-leaf"
    )}>
      {popular && (
        <div className="absolute top-0 right-0 bg-nature-leaf text-white px-3 py-1 text-xs font-medium z-10 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <div className="bg-white shadow-lg rounded-xl overflow-hidden h-full flex flex-col">
        {/* Card header */}
        <div className={`p-6 ${bgGradient} text-white`}>
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs font-medium opacity-80 mb-1">{tier}</div>
              <h3 className="text-xl font-bold mb-1">{name}</h3>
              <div className="text-lg font-medium">{price}</div>
            </div>
            <div className={cn("p-3 rounded-full", iconColor)}>
              {icon}
            </div>
          </div>
        </div>
        
        {/* Card body */}
        <div className="p-6 flex-grow flex flex-col">
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="mb-4 flex-grow">
            <h4 className={cn("font-medium mb-2", accentColor)}>What's Included:</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg className={cn("h-5 w-5 flex-shrink-0", accentColor)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
            
            {exclusions && exclusions.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-2 text-red-500">Exclusions:</h4>
                <ul className="space-y-2">
                  {exclusions.map((exclusion, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <Button 
            variant="default" 
            className={cn(
              "w-full justify-center mt-4",
              buttonBgColor || `bg-${accentColor} hover:bg-${accentColor}/90`
            )}
          >
            {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
            {buttonText}
          </Button>
          
          {clarificationText && (
            <p className="text-xs text-gray-500 mt-2 text-center italic">{clarificationText}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
