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
    pageUrl: "https://media.graphassets.com/9RZJXjPQAyanshrq92Yw",
    pageIndex: 1,
  }
};