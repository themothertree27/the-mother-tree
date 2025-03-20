
import React from 'react';
import MembershipCard from './MembershipCard';
import { Leaf, TreeDeciduous, TreePine } from 'lucide-react';

const MembershipTiers = () => {
  return <section id="membership" className="section-padding pb-10 relative overflow-hidden bg-gray-50/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-nature-leaf/5"></div>
        <div className="absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-nature-sky/5"></div>
        
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-scroll-in">
          <div className="inline-flex items-center justify-center rounded-full bg-nature-leaf/10 px-3 py-1 text-sm font-medium text-nature-leaf mb-4">Giving Options</div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-4">Choose Your Seed</h2>
          <p className="text-left text-gray-600">We kindly ask to support us in any which way you can. Whether its through financial means or showing up with a hammer when its ready to build, The Mother Tree is not possible without your help! Below are the various levels of contributions we are asking during this 'Seed Money' fundraising round of Family & Friends.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Tier 1: Be-leave'rs - Changed to light brown/tan */}
          <div className="animate-scroll-in" style={{
          transitionDelay: '0.2s'
        }}>
            <MembershipCard 
              tier="LEVEL 1" 
              name="Be-leave'rs" 
              price="$222 one-time" 
              description="Your first step into our community, with essentials to begin your journey." 
              benefits={["Physical welcome package", "Monthly community newsletter", "Access to online community forum", "Early access to events", "10% discount on workshops"]} 
              accentColor="text-nature-sunlight" 
              iconColor="bg-nature-sunlight/10" 
              bgGradient="bg-gradient-to-br from-nature-sunlight/90 to-nature-sunlight" 
              icon={<Leaf className="h-6 w-6 text-nature-sunlight" />} 
            />
          </div>
          
          {/* Tier 2: Rooted Membership - Changed to brown */}
          <div className="animate-scroll-in" style={{
          transitionDelay: '0.4s'
        }}>
            <MembershipCard 
              tier="LEVEL 2" 
              name="Rooted Membership" 
              price="$777 annually" 
              description="Deepen your connection with exclusive benefits and enhanced support." 
              benefits={["All Be-leave'rs benefits", "Seasonal care packages", "Private member events", "Priority registration for workshops", "Quarterly 1:1 guidance sessions", "25% discount on all programs"]} 
              accentColor="text-nature-soil" 
              iconColor="bg-nature-soil/10" 
              bgGradient="bg-gradient-to-br from-nature-soil/90 to-nature-soil" 
              icon={<TreeDeciduous className="h-6 w-6 text-nature-soil" />} 
              popular={true} 
            />
          </div>
          
          {/* Tier 3: The Mother Board - Changed to green */}
          <div className="animate-scroll-in" style={{
          transitionDelay: '0.6s'
        }}>
            <MembershipCard 
              tier="LEVEL 3" 
              name="The Mother Board" 
              price="$1111+ donation" 
              description="Become a guardian of our mission with the highest level of connection and influence." 
              benefits={["All Rooted Membership benefits", "VIP retreat invitations", "Advisory board membership", "Personalized mentorship", "Recognition at events & online", "Unlimited access to all content", "First access to special initiatives"]} 
              accentColor="text-nature-leaf" 
              iconColor="bg-nature-leaf/10" 
              bgGradient="bg-gradient-to-br from-nature-leaf/90 to-nature-leaf" 
              icon={<TreePine className="h-6 w-6 text-nature-leaf" />} 
            />
          </div>
        </div>
        
        <div className="mt-10 text-center animate-scroll-in">
          
          
        </div>
      </div>
    </section>;
};

export default MembershipTiers;
