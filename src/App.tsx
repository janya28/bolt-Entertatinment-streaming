import React from 'react';
import Layout from './components/Layout';
import MediaGrid from './components/MediaGrid';
import MediaPlayer from './components/MediaPlayer';
import CategoryFilter from './components/CategoryFilter';
import FeaturedMedia from './components/FeaturedMedia';
import { useMedia } from './hooks/useMedia';

function App() {
  const {
    filteredMedia,
    trendingMedia,
    featuredMedia,
    categories,
    selectedCategory,
    selectedMedia,
    playMedia,
    closePlayer,
    handleCategoryChange,
  } = useMedia();

  return (
    <Layout>
      {selectedMedia ? (
        <MediaPlayer media={selectedMedia} onClose={closePlayer} />
      ) : (
        <>
          <FeaturedMedia media={featuredMedia} onPlay={playMedia} />
          
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Browse by Category</h2>
            </div>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          
          {trendingMedia.length > 0 && selectedCategory === 'All' && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {trendingMedia.map((media) => (
                  <div key={media.id} className="col-span-1">
                    <div 
                      className="relative rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                      onClick={() => playMedia(media)}
                    >
                      <img 
                        src={media.thumbnailUrl} 
                        alt={media.title} 
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <h3 className="text-white font-bold">{media.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {selectedCategory === 'All' ? 'All Media' : selectedCategory}
            </h2>
            <MediaGrid 
              mediaList={filteredMedia} 
              onMediaSelect={playMedia} 
            />
          </div>
        </>
      )}
    </Layout>
  );
}

export default App;