import { PageCard } from './PageCard';

export default {
    title: 'GalleryToy/PageCard',
    component: PageCard,
    parameters: {
        layout: 'centered',
      },
};

export const ExamplePage = {
  args: { 
    pageUrl: "https://media.graphassets.com/PNb3vHWDSFuyehrRcfI2",
    pageIndex: 1,
    openModalToImage: () => {console.log("openModalToImage called");}
  }
};