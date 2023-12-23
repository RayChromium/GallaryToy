import React from 'react'

export const AlbumCard = ( {album} ) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-95 transition-all duration-200 ease-in-out">
        <img src={album.thumbnail.url} alt={album.title} className="w-full h-auto" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{album.title}</div>
        </div>
    </div>
  )
}

export default AlbumCard