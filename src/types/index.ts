export interface Media {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category: string;
  trending: boolean;
  releaseDate: string;
  views: number;
}

export type Category = 'All' | 'Movies' | 'TV Shows' | 'Music' | 'Sports';