import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AlbumCard = ( {album} ) => {

  console.log('album in albumcard:', album);
  let navigate = useNavigate();

  function navigateToDetails() {
    navigate(`/album/${album.id}`);
  }
  return (
    <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-95 transition-all duration-200 ease-in-out cursor-pointer"  onClick={navigateToDetails}>
        <img src={album.thumbnail.url} alt={album.title} className="w-full h-auto" />
        <div className="px-6 py-4 flex items-center justify-center">
            <div className="font-bold text-xl mb-2">{album.title}</div>
        </div>
    </div>
  )
}

export default AlbumCard