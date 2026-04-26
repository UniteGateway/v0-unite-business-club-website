import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: boolean;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  accent = false,
}: FeatureCardProps) {
  return (
    <div
      className={`p-6 rounded-lg border transition-all hover:shadow-lg ${
        accent
          ? 'bg-gradient-to-br from-primary to-secondary text-white border-primary/20'
          : 'bg-white border-gray-200 hover:border-primary/50'
      }`}
    >
      <div
        className={`inline-block p-3 rounded-lg mb-4 ${
          accent
            ? 'bg-white/20'
            : 'bg-gradient-to-br from-primary/10 to-accent/10'
        }`}
      >
        <Icon size={24} className={accent ? 'text-accent' : 'text-primary'} />
      </div>
      <h3 className={`text-lg font-semibold mb-2 ${accent ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`text-sm ${accent ? 'text-blue-100' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}
