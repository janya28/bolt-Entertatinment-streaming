import React from 'react';
import { Play, Info } from 'lucide-react';
import { Media } from '../types';

interface FeaturedMediaProps {
  media: Media;
  onPlay: (media: Media) => void;
}

const FeaturedMedia: React.FC<FeaturedMediaProps> = ({ media, onPlay }) => {
  return (
    <div className="relative rounded-lg overflow-hidden mb-10">
      <div className="aspect-[21/9] relative">
        <img 
          src={media.thumbnailUrl} 
          alt={media.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">{media.title}</h1>
          <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl">{media.description}</p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onPlay(media)}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full font-medium transition-colors"
            >
              <Play className="h-5 w-5" />
              Play Now
            </button>
            
            <button className="flex items-center gap-2 bg-gray-700/80 hover:bg-gray-600 text-white py-2 px-6 rounded-full font-medium transition-colors">
              <Info className="h-5 w-5" />
              More Info
            </button>
          </div>
          
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <span className="text-sm bg-purple-600/80 py-1 px-2 rounded text-purple-100">{media.category}</span>
              <span className="text-sm text-gray-400">{media.duration}</span>
              <span className="text-sm text-gray-400">{media.releaseDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMedia;