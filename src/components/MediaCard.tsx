import React from 'react';
import { Play, Clock } from 'lucide-react';
import { Media } from '../types';

interface MediaCardProps {
  media: Media;
  onClick: (media: Media) => void;
}

const MediaCard: React.FC<MediaCardProps> = ({ media, onClick }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={() => onClick(media)}
    >
      <div className="aspect-video bg-gray-800 overflow-hidden">
        <img 
          src={media.thumbnailUrl} 
          alt={media.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rounded-full bg-purple-600 p-3 text-white shadow-lg transform transition-transform hover:scale-110">
            <Play className="h-8 w-8" />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold line-clamp-1 text-white">{media.title}</h3>
          <div className="flex items-center text-gray-400 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{media.duration}</span>
          </div>
        </div>
        
        <p className="mt-1 text-sm text-gray-400 line-clamp-2">{media.description}</p>
        
        <div className="flex items-center justify-between mt-3">
          <span className="inline-flex items-center rounded-full bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-300">
            {media.category}
          </span>
          
          {media.trending && (
            <span className="inline-flex items-center rounded-full bg-purple-900/60 px-2.5 py-0.5 text-xs font-medium text-purple-300">
              Trending
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaCard;