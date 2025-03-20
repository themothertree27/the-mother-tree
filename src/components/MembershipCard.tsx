
import React from 'react';
import { Check } from 'lucide-react';

interface MembershipCardProps {
  tier: string;
  name: string;
  price: string;
  description: string;
  benefits: string[];
  accentColor: string;
  iconColor: string;
  bgGradient: string;
  icon: React.ReactNode;
  popular?: boolean;
  buttonText?: string;
}

const MembershipCard: React.FC<MembershipCardProps> = ({
  tier,
  name,
  price,
  description,
  benefits,
  accentColor,
  iconColor,
  bgGradient,
  icon,
  popular = false,
  buttonText
}) => {
  return <div className={`membership-card group z-10 ${popular ? 'scale-105 shadow-xl' : ''}`}>
      {popular && <div className="absolute top-0 right-0 bg-nature-leaf text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl z-20">Popular</div>}
      
      <div className={`flex flex-col h-full overflow-hidden rounded-3xl border bg-white ${popular ? 'border-nature-leaf' : 'border-gray-100'}`}>
        {/* Card header with gradient */}
        <div className={`px-6 py-8 ${bgGradient}`}>
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-white/80 mb-1">
                {tier}
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {name}
              </h3>
            </div>
            <div className={`p-3 rounded-full ${iconColor}`}>
              {icon}
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">{price}</span>
            </div>
          </div>
        </div>
        
        {/* Card content */}
        <div className="flex flex-col flex-1 p-6">
          <p className="text-gray-500 mb-6">{description}</p>
          
          <div className="space-y-3 flex-1">
            {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                <Check className={`h-5 w-5 mr-2 shrink-0 ${accentColor}`} />
                <span className="text-sm">{benefit}</span>
              </div>)}
          </div>
          
          <div className="mt-8">
            <button className={`w-full py-3 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105 ${popular ? 'bg-nature-leaf hover:shadow-lg hover:shadow-nature-leaf/20' : `${accentColor.replace('text', 'bg')} hover:opacity-90`}`}>
              {buttonText || `Choose ${name}`}
            </button>
          </div>
        </div>
      </div>
    </div>;
};

export default MembershipCard;
