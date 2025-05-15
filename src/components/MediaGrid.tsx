import React from 'react';
import MediaCard from './MediaCard';
import { Media } from '../types';

interface MediaGridProps {
  mediaList: Media[];
  onMediaSelect: (media: Media) => void;
}

const MediaGrid: React.FC<MediaGridProps> = ({ mediaList, onMediaSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mediaList.map((media) => (
        <MediaCard 
          key={media.id} 
          media={media} 
          onClick={onMediaSelect} 
        />
      ))}
    </div>
  );
};

export default MediaGrid;