
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send, Check } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ConnectWithUs = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Insert the email into the Supabase database
      const { error } = await supabase
        .from('subscribers')
        .insert([
          { email, phone: phone || null }
        ]);
      
      if (error) {
        if (error.code === '23505') {
          // Unique violation error code - email already exists
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "default",
          });
        } else {
          throw error;
        }
      } else {
        // Success!
        setIsSubmitted(true);
        setEmail('');
        setPhone('');
        
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for joining The Mother Tree community.",
          variant: "default",
        });

        // Reset the success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error saving subscription:', error);
      toast({
        title: "Subscription failed",
        description: "There was an error saving your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="connect" className="section-padding bg-nature-leaf/5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-nature-leaf/10"></div>
        <div className="absolute bottom-0 -left-20 h-40 w-40 rounded-full bg-nature-bark/10"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-scroll-in">
          <div className="inline-flex items-center justify-center rounded-full bg-nature-bark/10 px-3 py-1 text-sm font-medium text-nature-bark mb-4">
            Stay Connected
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-4">
            Join <span className="text-nature-leaf">The Mother Tree</span> and <span className="text-nature-leaf">The Fellowship of The Rings</span>
          </h2>
          <p className="text-gray-600 mb-8">Subscribe to stay updated about The Mother Tree community, upcoming events, and ways to get involved.</p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-left block">Email address</Label>
                <div className="flex">
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    className="rounded-r-none border-r-0"
                    disabled={isSubmitting}
                    required 
                  />
                  <Button 
                    type="submit" 
                    className="rounded-l-none bg-nature-leaf hover:bg-nature-leaf/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitted ? <Check className="h-4 w-4" /> : isSubmitting ? "Subscribing..." : <Send className="h-4 w-4" />}
                    <span className="ml-2">{isSubmitted ? 'Sent!' : isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-left block">Phone number (optional)</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="(123) 456-7890" 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)}
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>
              
              {isSubmitted && <p className="text-nature-leaf text-sm mt-2">
                  Thank you for subscribing! We'll be in touch soon.
              </p>}
              <p className="text-xs text-gray-500 text-left">
                By subscribing, you agree to receive emails from The Mother Tree. We respect your privacy and will never share your information.
              </p>
            </div>
          </form>
        </div>
        
        {/* Fellowship of the Rings logo */}
        <div className="mt-12 text-center">
          <img 
            src="/lovable-uploads/2302ae9a-b8bf-4677-9423-e2b87cafcb61.png" 
            alt="The Fellowship of the Rings" 
            className="mx-auto w-full md:w-3/4 md:max-w-lg"
          />
        </div>
      </div>
    </section>;
};

export default ConnectWithUs;
