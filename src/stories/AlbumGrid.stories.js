import { within, userEvent, expect } from '@storybook/test';

import { AlbumGrid } from './AlbumGrid';

export default {
    title: 'GalleryToy/AlbumGrid',
    component: AlbumGrid,
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
};

export const showAll = {
};