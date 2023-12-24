import React from 'react'

export const AlbumInfo = ( { album } ) => {
    if (!album) return null; 

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex bg-white rounded-lg shadow-lg">
          {/* Thumbnail */}
          <div className="flex-none w-48 relative">
            <img src={album.thumbnail.url} alt={album.title} className="absolute inset-0 w-full h-full  object-cover rounded-l-lg" />
          </div>
  
          {/* Album Info */}
          <div className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold">
                  {album.title}
                </h1>
              </div>

              <div className="flex items-baseline mt-4 mb-6">
                  <div className="space-y-2">
                      <p className="text-gray-700">Description:{album.description}</p>
                      <p className="text-gray-700">Tags: {album.tags.tagName.join(', ')}</p>
                  </div>
              </div>

          </div>
        </div>
      </div>
      
    );
}

export default AlbumInfo