import { useState, useEffect } from 'react';
import Album from './services/Album';
import Header from './stories/Header';
import AlbumGrid from './stories/AlbumGrid';
import './index.css';

function App() {
  const [albumList, setAlbumlist] = useState(null);

  useEffect( () => {
    const albums = Album.getAlbumList();
    albums.then( albums => {
      console.log(albums);
      setAlbumlist(albums);
    } )
  }, []);
  return (
    <div className="App">
      <Header/>
      <AlbumGrid albumList={albumList}/>
    </div>
  );
}

export default App;
