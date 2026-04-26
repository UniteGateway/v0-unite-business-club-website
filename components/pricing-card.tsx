import { Button } from './ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string | number;
  description: string;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-lg border p-8 flex flex-col transition-all ${
        highlighted
          ? 'border-accent bg-gradient-to-br from-accent/5 to-accent/10 ring-2 ring-accent/20 shadow-lg scale-105'
          : 'border-gray-200 bg-white hover:border-primary/50 hover:shadow-md'
      }`}
    >
      {highlighted && (
        <div className="inline-block px-3 py-1 bg-accent text-primary rounded-full text-xs font-semibold mb-4 w-fit">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-6">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-primary">
          {typeof price === 'string' ? price : `$${price}`}
        </span>
        <span className="text-gray-600 text-sm"> per month</span>
      </div>

      <Button asChild className="w-full mb-8">
        <Link href={cta.href}>{cta.label}</Link>
      </Button>

      <div className="space-y-4 flex-1">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 items-start">
            <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
