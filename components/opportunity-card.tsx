import Image from 'next/image';
import { MapPin, Users, Tag, Bookmark } from 'lucide-react';
import Link from 'next/link';

interface OpportunityCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
  location: string;
  participants?: number;
  price?: string;
  savings?: string;
}

export function OpportunityCard({
  image,
  tag,
  title,
  description,
  location,
  participants,
  price,
  savings,
}: OpportunityCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all hover:border-primary/50">
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            {tag}
          </span>
        </div>
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-gray-50">
          <Bookmark size={18} className="text-gray-600" />
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="space-y-3 mb-4">
          <div className="flex gap-2 items-center text-sm text-gray-600">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          
          {participants && (
            <div className="flex gap-2 items-center text-sm text-gray-600">
              <Users size={16} />
              <span>+{participants} interested</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          {price && (
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-primary">{price}</span>
              {savings && (
                <span className="text-xs text-green-600 font-semibold">{savings}</span>
              )}
            </div>
          )}
          <Link
            href="#"
            className="text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}
