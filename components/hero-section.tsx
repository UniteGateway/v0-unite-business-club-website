import Link from 'next/link';
import { Button } from './ui/button';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  backgroundGradient?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  cta,
  secondaryCta,
  backgroundGradient = true,
}: HeroSectionProps) {
  return (
    <section
      className={`py-20 md:py-32 ${
        backgroundGradient
          ? 'bg-gradient-to-br from-primary via-secondary to-primary text-white'
          : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className={`text-sm font-semibold uppercase tracking-wide mb-2 ${backgroundGradient ? 'text-blue-100' : 'text-accent'}`}>
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          {title}
        </h1>
        {description && (
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${backgroundGradient ? 'text-blue-100' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
        {(cta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta && (
              <Button size="lg" asChild className={backgroundGradient ? 'bg-accent hover:bg-accent/90 text-primary' : ''}>
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className={backgroundGradient ? 'border-white text-white hover:bg-white/10' : ''}
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
