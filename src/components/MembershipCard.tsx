import React, { useEffect, useRef, useState } from 'react';
import { Check, X, ToggleLeft, ToggleRight } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from './ui/dialog';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Switch } from './ui/switch';

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
  popular?: boolean;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  buttonBgColor?: string;
  clarificationText?: string;
}

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().optional(),
  mommyMeDiscount: z.boolean().default(false)
});

type FormValues = z.infer<typeof formSchema>;

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
  popular = false,
  buttonText,
  buttonIcon,
  buttonBgColor,
  clarificationText
}) => {
  const squareCheckoutRef = useRef<HTMLDivElement>(null);
  const [showSquareModal, setShowSquareModal] = useState(false);
  const givebutterModalRef = useRef<HTMLDivElement | null>(null);
  const [showMommyMeDiscount, setShowMommyMeDiscount] = useState(false);
  const [showMotherBoardForm, setShowMotherBoardForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      mommyMeDiscount: false
    }
  });

  useEffect(() => {
    if (!document.getElementById('givebutter-widget-script-j1kk5g')) {
      const script = document.createElement('script');
      script.id = 'givebutter-widget-script-j1kk5g';
      script.src = "https://widgets.givebutter.com/latest.umd.cjs?acct=jPj6c0yePfoJ9f8L&p=other";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (name === "The Mother Board") {
      form.setValue('mommyMeDiscount', showMommyMeDiscount);
    }
  }, [showMommyMeDiscount, form, name]);

  const handleButtonClick = () => {
    if (buttonText === "Be-leave") {
      let modalContainer = document.getElementById('givebutter-modal-container');
      if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'givebutter-modal-container';
        modalContainer.style.position = 'fixed';
        modalContainer.style.top = '0';
        modalContainer.style.left = '0';
        modalContainer.style.width = '100%';
        modalContainer.style.height = '100%';
        modalContainer.style.backgroundColor = 'rgba(0,0,0,0.7)';
        modalContainer.style.display = 'flex';
        modalContainer.style.justifyContent = 'center';
        modalContainer.style.alignItems = 'center';
        modalContainer.style.zIndex = '9999';
        
        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '20px';
        closeButton.style.right = '20px';
        closeButton.style.backgroundColor = 'white';
        closeButton.style.color = 'black';
        closeButton.style.border = 'none';
        closeButton.style.borderRadius = '50%';
        closeButton.style.width = '40px';
        closeButton.style.height = '40px';
        closeButton.style.fontSize = '20px';
        closeButton.style.cursor = 'pointer';
        closeButton.onclick = () => {
          document.body.removeChild(modalContainer);
        };
        
        const widgetContainer = document.createElement('div');
        widgetContainer.style.backgroundColor = 'white';
        widgetContainer.style.borderRadius = '10px';
        widgetContainer.style.padding = '10px';
        widgetContainer.style.maxWidth = '500px';
        widgetContainer.style.width = 'auto';
        widgetContainer.style.maxHeight = '90vh';
        widgetContainer.style.overflow = 'auto';
        
        const widget = document.createElement('givebutter-widget');
        widget.setAttribute('id', 'j1kk5g');
        
        widget.addEventListener('load', () => {
          setTimeout(() => {
            const widgetContent = (widget as any).shadowRoot?.querySelector('.givebutter-widget-content');
            if (widgetContent) {
              const rect = widgetContent.getBoundingClientRect();
              widgetContainer.style.width = `${rect.width + 20}px`;
              
              const maxHeight = window.innerHeight * 0.9;
              if (rect.height + 20 > maxHeight) {
                widgetContainer.style.height = `${maxHeight}px`;
              } else {
                widgetContainer.style.height = `${rect.height + 20}px`;
              }
            }
          }, 300);
        });
        
        widgetContainer.appendChild(widget);
        modalContainer.appendChild(closeButton);
        modalContainer.appendChild(widgetContainer);
        document.body.appendChild(modalContainer);
        givebutterModalRef.current = modalContainer;
      } else {
        modalContainer.style.display = 'flex';
      }
    } else if (buttonText === "Rooted") {
      setShowSquareModal(true);
    } else if (buttonText === "The Mother Board") {
      setShowMotherBoardForm(true);
      setFormSubmitted(false);
    } else {
      const gbLink = document.createElement('a');
      gbLink.href = 'https://givebutter.com/mothertreenyc';
      gbLink.target = '_blank';
      gbLink.click();
    }
  };

  const onSubmit = async (data: FormValues) => {
    try {
      const { error } = await supabase
        .from('mother_board_submissions')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone || null,
          mommy_me_discount: data.mommyMeDiscount
        });

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Submission Error",
          description: "There was an error submitting your information. Please try again.",
          variant: "destructive"
        });
      } else {
        setFormSubmitted(true);
        form.reset();
        toast({
          title: "Submission Successful",
          description: "Your information has been recorded. We'll be in touch shortly.",
        });
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    return () => {
      const givebutterModal = document.getElementById('givebutter-modal-container');
      if (givebutterModal) {
        document.body.removeChild(givebutterModal);
      }
    };
  }, []);

  return (
    <>
      <div className={`membership-card group z-10 ${popular ? 'scale-105 shadow-xl' : ''}`}>
        {popular && <div className="absolute top-0 right-0 bg-nature-leaf text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl z-20">Popular</div>}
        
        <div className={`flex flex-col h-full overflow-hidden rounded-3xl border bg-white ${popular ? 'border-nature-leaf' : 'border-gray-100'}`}>
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
                {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6 text-white" })}
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-white">{price}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col flex-1 p-6">
            <p className="text-gray-500 mb-6">{description}</p>
            
            <div className="space-y-3 flex-1">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                  <Check className={`h-5 w-5 mr-2 shrink-0 ${accentColor}`} />
                  <span className="text-sm">{benefit}</span>
                </div>)}
              
              {exclusions && exclusions.map((exclusion, index) => <div key={`exclusion-${index}`} className="flex items-start">
                  <X className="h-5 w-5 mr-2 shrink-0 text-red-500" />
                  <span className="text-sm text-red-500">{exclusion}</span>
                </div>)}
            </div>
            
            <div className="mt-8">
              {name === "The Mother Board" && (
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="mommy-me-discount"
                      checked={showMommyMeDiscount}
                      onCheckedChange={setShowMommyMeDiscount}
                    />
                    <Label htmlFor="mommy-me-discount" className="text-sm cursor-pointer">
                      Mommy & Me Discount (Rooted Membership & The Mother Board)
                    </Label>
                  </div>
                </div>
              )}
              
              <button 
                onClick={handleButtonClick}
                className={`w-full py-3 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105 ${
                  buttonBgColor ? buttonBgColor : 
                    popular 
                      ? 'bg-nature-leaf hover:shadow-lg hover:shadow-nature-leaf/20' 
                      : tier === "LEVEL 1" 
                        ? 'bg-[#C4A484] hover:shadow-lg hover:shadow-[#C4A484]/20' 
                        : `${accentColor.replace('text', 'bg')} hover:opacity-90`
                } hover:shadow-lg`}
              >
                <div className="flex items-center justify-center gap-2">
                  {buttonIcon && React.cloneElement(buttonIcon as React.ReactElement, { className: "h-5 w-5 text-white" })}
                  <span>{buttonText || `Choose ${name}`}</span>
                </div>
              </button>
              
              {clarificationText && (
                <div className="text-xs text-gray-500 text-center mt-2">
                  {clarificationText}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showSquareModal} onOpenChange={setShowSquareModal}>
        <DialogContent className="sm:max-w-[500px] p-0 bg-white overflow-hidden border-none">
          <DialogClose className="absolute z-10 right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          <div className="w-full">
            <iframe 
              src="https://square.link/u/spVxxpMm" 
              id="square-checkout-iframe"
              title="Square Online Checkout"
              width="100%"
              height="600px"
              frameBorder="0"
              allowTransparency={true}
              style={{ 
                width: '100%', 
                minHeight: '600px',
                border: 'none'
              }}
            />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showMotherBoardForm} onOpenChange={setShowMotherBoardForm}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          {formSubmitted ? (
            <div className="text-center py-8">
              <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
              <p className="text-lg mb-6">Your information has been recorded.</p>
              <Button 
                onClick={() => setShowMotherBoardForm(false)}
                className="bg-nature-leaf hover:bg-nature-leaf/90"
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">The Mother Board</h2>
                <p className="text-gray-600">
                  Thank you for wanting to be part of something special. Please fill out the form below and we will be in touch shortly.
                </p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" type="email" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" type="tel" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mommyMeDiscount"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0 mt-4">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm cursor-pointer">
                          Mommy & Me Discount (Rooted Membership & The Mother Board): 27% SAFE Discount Rate
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-nature-leaf hover:bg-nature-leaf/90 mt-6"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MembershipCard;
