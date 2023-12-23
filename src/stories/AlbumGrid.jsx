import React from 'react';
import AlbumCard from './AlbumCard';
import '../index.css';

export const AlbumGrid = ({albumList}) => {

  
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {albumList?.map((album) => (
          <AlbumCard key={album.id} album={album}/>
        ))}
      </div>
    </div>
  )
};

export default AlbumGrid;