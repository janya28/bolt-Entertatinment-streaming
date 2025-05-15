import { useState, useEffect, useMemo } from 'react';
import { Media, Category } from '../types';
import { mediaData } from '../data/media';

export const useMedia = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);

  const categories: Category[] = useMemo(() => {
    return ['All', ...Array.from(new Set(mediaData.map(item => item.category)))] as Category[];
  }, []);

  const filteredMedia = useMemo(() => {
    return mediaData.filter(media => {
      const matchesCategory = selectedCategory === 'All' || media.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        media.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        media.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const trendingMedia = useMemo(() => {
    return mediaData.filter(media => media.trending);
  }, []);

  const featuredMedia = useMemo(() => {
    return trendingMedia.length > 0 ? trendingMedia[0] : mediaData[0];
  }, [trendingMedia]);

  const playMedia = (media: Media) => {
    setSelectedMedia(media);
  };

  const closePlayer = () => {
    setSelectedMedia(null);
  };

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return {
    mediaData,
    filteredMedia,
    trendingMedia,
    featuredMedia,
    categories,
    selectedCategory,
    searchQuery,
    selectedMedia,
    playMedia,
    closePlayer,
    handleCategoryChange,
    handleSearch,
  };
};