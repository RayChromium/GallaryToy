import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Album from './services/Album';
import Header from './stories/Header';
import AlbumGrid from './stories/AlbumGrid';
import AlbumDetail from './AlbumDetail';
import './index.css';

function App() {
  const [albumList, setAlbumlist] = useState(null);

  useEffect(() => {
    let isMounted = true;
  
    Album.getAlbumList().then(albums => {
      if (isMounted) {
        console.log(albums);
        setAlbumlist(albums);
      }
    });
  
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path='/' element={<AlbumGrid albumList={albumList}/>}></Route>
          <Route path="/album/:albumId" element={<AlbumDetail />} />
        </Routes>
        {/* <AlbumGrid albumList={albumList}/> */}
      </div>
    </Router>
    
  );
}

export default App;
