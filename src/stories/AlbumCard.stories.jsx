import { AlbumCard } from './AlbumCard';
import { BrowserRouter } from 'react-router-dom';

export default {
    title: 'GalleryToy/AlbumCard',
    component: AlbumCard,
    parameters: {
        layout: 'centered',
      },
    decorators: [(Story) => <BrowserRouter><Story/></BrowserRouter>], 
};

const Template = (args) => <AlbumCard {...args} />;

// export const Default = () => (
//   <BrowserRouter>
//     <AlbumCard />
//   </BrowserRouter>
// );

export const ExampleAlbumCard = {
  render: (args) => <AlbumCard {...args} />,
  args: {
    album: {
      id: "clqe66p2x7dtt0cuw49duqtft",
      title: "Sibelius Museum",
      thumbnail: {
        id: "clqe6503h56ko0busbd5sheab",
        url: "https://media.graphassets.com/J2j3WZwQw6b85ygav2Hg",
      }
    }
  }
};