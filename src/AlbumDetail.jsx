import React from 'react'
import { useState, useEffect } from 'react';
import Album from './services/Album';
import AlbumInfo from './stories/AlbumInfo';
import PageGrid from './stories/PageGrid';
import './index.css';
import { useParams  } from 'react-router-dom';

const AlbumDetail = () => {
  const {albumId} = useParams();
  console.log('AlbumId from useLoaderData(): ', albumId)
  const [album, setAlbum] = useState(null);
  console.log("AlbumId", albumId);

  useEffect(() => {
    let isMounted = true; 

    const fetchAlbum = async () => {
      try {
        const albumObj = await Album.getAlbum(albumId);
        if (isMounted) {
          setAlbum(albumObj);
        }
      } catch (error) {
        console.error('Error fetching album:', error);
      }
    };

    fetchAlbum();

    return () => {
      isMounted = false;
    };
  }, [albumId]);

  console.log(album);

  return (
    <div className="App">
      {/* <Header/> */}
      <AlbumInfo album={album}/>
      <PageGrid albumPages={album?.images}/>
    </div>
  )
}

export default AlbumDetail;