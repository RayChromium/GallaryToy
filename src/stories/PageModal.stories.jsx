import { within, userEvent, expect } from '@storybook/test';

import { PageModal } from './PageModal';

export default {
    title: 'GalleryToy/PageModal',
    component: PageModal,
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
};

export const ExampleModal = {
    args:{
        "images": [
            {
              "url": "https://media.graphassets.com/EZj1UIHETLq1KykoLRQk",
              "createdAt": "2023-12-20T19:30:23.73157+00:00"
            },
            {
              "url": "https://media.graphassets.com/9RZJXjPQAyanshrq92Yw",
              "createdAt": "2023-12-20T19:30:23.62243+00:00"
            },
            {
              "url": "https://media.graphassets.com/v0oVsPP2RjqnPTRQXdjG",
              "createdAt": "2023-12-20T19:30:23.627776+00:00"
            },
            {
              "url": "https://media.graphassets.com/l0CBQ3sSraDevhQd4riA",
              "createdAt": "2023-12-20T19:30:23.721489+00:00"
            },
            {
              "url": "https://media.graphassets.com/5mv0ZbPYR2iojT4mwp6d",
              "createdAt": "2023-12-20T19:30:23.775628+00:00"
            },
            {
              "url": "https://media.graphassets.com/98rzMO6RWGL8W2IjScY8",
              "createdAt": "2023-12-20T19:30:23.742039+00:00"
            },
            {
              "url": "https://media.graphassets.com/ft49Tje1SCOT8Hn88JE3",
              "createdAt": "2023-12-20T19:30:23.779456+00:00"
            },
            {
              "url": "https://media.graphassets.com/mHjSOS4wRZe82z1Yqefp",
              "createdAt": "2023-12-20T19:30:23.72119+00:00"
            },
            {
              "url": "https://media.graphassets.com/5yBAkUeBQGiBo762WjeY",
              "createdAt": "2023-12-20T19:30:23.738155+00:00"
            },
            {
              "url": "https://media.graphassets.com/Twr6NK63RcOvuAHQyFAu",
              "createdAt": "2023-12-20T19:30:23.751057+00:00"
            },
        ],
        "index": 5,
        "setIndex": () => {},
        "onClose": () => {},
    }
};