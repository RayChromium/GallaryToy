import React from 'react';
import PageCard from './PageCard';
import '../index.css';

export const PageGrid = ({albumPages, openModalToImage}) => {
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {albumPages?.map((page, index) => (
          <PageCard key={page.id} pageUrl={page.url} pageIndex={index} openModalToImage={openModalToImage}/>
        ))}
      </div>
    </div>
  )
};

export default PageGrid;