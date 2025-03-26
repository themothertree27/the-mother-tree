import React, { useEffect, useRef, useState } from 'react';
import { Check, X, ToggleLeft, ToggleRight } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Switch } from './ui/switch';

interface MembershipCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  additionalText?: string;
  buttonLink: string;
  isFeatured?: boolean;
}

const MembershipCard: React.FC<MembershipCardProps> = ({
  id,
  title,
  description,
  price,
  features,
  additionalText,
  buttonLink,
  isFeatured,
}) => {
  const [open, setOpen] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const descriptionHeight = useDynamicLabelHeight(descriptionRef);
  const featuresHeight = useDynamicLabelHeight(featuresRef);

  // This fixes the TypeScript error by ensuring the ref's current value is treated as HTMLDivElement
  const useDynamicLabelHeight = (ref: React.RefObject<HTMLDivElement>) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
      const updateHeight = () => {
        if (ref.current) {
          setHeight(ref.current.offsetHeight);
        }
      };

      updateHeight();
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }, [ref]);

    return height;
  };

  const togglePrice = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div id={id} className="relative rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden" data-v0-t="card">
      {isFeatured && (
        <div className="absolute top-4 left-4 w-auto bg-green-500 text-white p-2 rounded-md text-sm font-bold z-10">
          Featured
        </div>
      )}
      <div className="p-6 flex flex-col h-full">
        <h3 className="font-semibold text-2xl leading-none tracking-tight mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4" style={{ height: descriptionHeight }} ref={descriptionRef}>
          {description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold">
            {isMonthly ? `$${price}/month` : `$${parseInt(price) * 12 - (parseInt(price) * 2)}/year`}
          </span>
          <div className="space-x-2 flex items-center">
            <Label htmlFor="monthly">Monthly</Label>
            <Switch id="monthly" checked={isMonthly} onCheckedChange={togglePrice} />
            <Label htmlFor="yearly">Yearly</Label>
          </div>
        </div>

        <ul className="mb-4 space-y-2 flex-grow" style={{ height: featuresHeight }} ref={featuresRef}>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>

        {additionalText && (
          <p className="text-xs text-muted-foreground mt-auto mb-4">{additionalText}</p>
        )}

        <Button asChild className="mt-auto">
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            Join Now
          </a>
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <input type="text" id="name" placeholder="Your Name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <input type="email" id="email" placeholder="Your Email" className="col-span-3" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MembershipCard;
