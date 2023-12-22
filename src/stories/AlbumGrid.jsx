import React from 'react';
import '../index.css';

export const AlbumGrid = ({albumList}) => {

  
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {albumList?.map((album) => (
          <div key={album.id} className="overflow-hidden rounded-lg shadow-lg">
            <img src={album.thumbnail.url} alt={album.title} className="w-full h-auto" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{album.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default AlbumGrid;