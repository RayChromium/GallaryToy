import React from 'react';

export const PageCard = ( {pageUrl, pageIndex, openModalToImage} ) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-95 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => {openModalToImage(pageIndex)}}>
        <img src={pageUrl} alt={pageIndex} className="w-full h-auto" />
        <div className="px-6 py-4  flex items-center justify-center">
            <div className="text-l mb-2">{pageIndex + 1}</div>
        </div>
    </div>
  )
}

export default PageCard;