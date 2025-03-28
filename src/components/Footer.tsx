import React, { useState } from 'react';
import { TreeDeciduous, Mail, Instagram, MessageSquare, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const Footer = () => {
  const {
    toast
  } = useToast();
  const [copying, setCopying] = useState(false);
  const isMobile = useIsMobile();
  const handleCopyEmail = () => {
    const email = "finding@themothertreenyc.org";
    navigator.clipboard.writeText(email).then(() => {
      setCopying(true);
      toast({
        title: "Email copied to clipboard",
        description: email,
        duration: 2000
      });
      setTimeout(() => setCopying(false), 1000);
    }).catch(err => {
      toast({
        title: "Failed to copy",
        description: "Please copy manually: finding@themothertreenyc.org",
        variant: "destructive"
      });
    });
  };
  return <footer id="contact" className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <TreeDeciduous className="h-6 w-6 text-nature-leaf" />
              <span className="font-serif text-xl font-medium text-nature-leaf">The Mother Tree</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">Our vision is to regrow a forest of Mother Trees, inspiring communities across the world that empower co-creation and collaboration for the posterity of our people and the planet.</p>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-4">Contact Us</h4>
            <div className="flex space-x-4">
              <button onClick={handleCopyEmail} className={cn("p-2 rounded-full text-gray-600 transition-colors duration-300", copying ? "bg-nature-leaf text-white" : "bg-gray-100 hover:bg-nature-leaf hover:text-white")} title="Click to copy finding@themothertreenyc.org">
                <Mail className="h-5 w-5" />
              </button>
              <a href="https://www.instagram.com/themothertree.nyc/?igsh=MWo2bjFoemxsNWdndA%3D%3D&utm_source=qr#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-nature-leaf hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              {isMobile ? <a href="https://sltxt.io/ah6" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-nature-leaf hover:text-white transition-colors duration-300" title="Text us">
                  <MessageSquare className="h-5 w-5" />
                </a> : <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-nature-leaf hover:text-white transition-colors duration-300">
                        <MessageSquare className="h-5 w-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Need to click with a mobile device. Text "The Mother Tree" to 888-438-1012</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>}
              
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-4">Membership</h4>
            <ul className="space-y-3">
              <li><a href="#membership" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Be-leave'rs</a></li>
              <li><a href="#membership" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Rooted Membership</a></li>
              <li><a href="#membership" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">The Mother Board</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Our Mission</a></li>
              <li><a href="#spaces" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Our Space</a></li>
              <li><a href="#grow-community" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Mycelium Roots Campaign</a></li>
              <li><a href="#connect" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Stay Connected</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <span className="text-nature-leaf">The Mother Tree</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            
            
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;