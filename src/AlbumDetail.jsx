import React from 'react'
import { useState, useEffect } from 'react';
import Album from './services/Album';
import AlbumInfo from './stories/AlbumInfo';
import PageGrid from './stories/PageGrid';
import PageModal from './stories/PageModal';
import './index.css';
import { useParams  } from 'react-router-dom';

const AlbumDetail = () => {
  const {albumId} = useParams();
  const [album, setAlbum] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


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

  const openModalToImage = (index) => {
    // console.log("openModalToImage called, index:", index);
    setCurrentIndex(index);
    setModalShow(true);
  };

  return (
    <div className="App">
      {/* <Header/> */}
      <AlbumInfo album={album}/>
      <PageGrid albumPages={album?.images} openModalToImage={openModalToImage}/>
      {modalShow && (
        <PageModal
          images={album?.images}
          index={currentIndex}
          setIndex={setCurrentIndex}
          onClose={() => setModalShow(false)}
        />
      )}
    </div>
  )
}

export default AlbumDetail;