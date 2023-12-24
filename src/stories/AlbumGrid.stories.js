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

export const ShowAll = {
  args: { 
    "albumList": [
      {
        "id": "clqe66p2x7dtt0cuw49duqtft",
        "title": "Sibelius Museum",
        "thumbnail": {
          "id": "clqe6503h56ko0busbd5sheab",
          "url": "https://media.graphassets.com/J2j3WZwQw6b85ygav2Hg"
        }
      },
      {
        "id": "clqe6ac4j58z00busjqrlh7l4",
        "title": "Winter coming to Lao Shu",
        "thumbnail": {
          "id": "clqe69e2t58o10bus1fi9bnmf",
          "url": "https://media.graphassets.com/WBlshVGSSH2ytQKesdlF"
        }
      },
      {
        "id": "clqe6u21l7pmf0cuw1avljqgi",
        "title": "Turku Day 2023",
        "thumbnail": {
          "id": "clqe6tllo7pgs0cuw6zo86618",
          "url": "https://media.graphassets.com/9lKWUBLOSgaL51zdjYY1"
        }
      },
      {
        "id": "clqe7sxrh85ow0cuw8vucuixc",
        "title": "Onni Joulu concert",
        "thumbnail": {
          "id": "clqe7mogi82uf0cuwi00zss2r",
          "url": "https://media.graphassets.com/HpCaJn7TQbmtEolzIRHA"
        }
      },
      {
        "id": "clqe7w3hr87rd0cuwgbgjcvqj",
        "title": "Turku Cathedral",
        "thumbnail": {
          "id": "clqe7v4lp876c0cuwsm6ppo8i",
          "url": "https://media.graphassets.com/tuLTm4XWRhe6FCv4HxHC"
        }
      },
      {
        "id": "clqe7yrow89ak0cuwcsrnmiwu",
        "title": "Fun Memes",
        "thumbnail": {
          "id": "clqe7y62b88xm0cuw4o3cwxh8",
          "url": "https://media.graphassets.com/IG4PeBhcSamnPCdh8hPQ"
        }
      },
      {
        "id": "clqe81crk8any0cuwtbclty2w",
        "title": "Turku Book Fair 2023",
        "thumbnail": {
          "id": "clqe80iqc8a460cuw9r5ixksy",
          "url": "https://media.graphassets.com/ZcozKPJQOqX0mUwJ0jUw"
        }
      },
      {
        "id": "clqfv1r82ds720buzmgi2v60r",
        "title": "Day Trip to Tampere 2023",
        "thumbnail": {
          "id": "clqfv0girdolu0bw7w5afpad0",
          "url": "https://media.graphassets.com/PNb3vHWDSFuyehrRcfI2"
        }
      },
      {
        "id": "clqfv45jxdtjy0buzj5zvq46y",
        "title": "Summer Hangout",
        "thumbnail": {
          "id": "clqfv3iuddqab0bw72vuuah2w",
          "url": "https://media.graphassets.com/TERZRadRXK8X6b8QA0E7"
        }
      },
      {
        "id": "clqfv6hh2duxl0buzl33cp0l6",
        "title": "Pitch presentation",
        "thumbnail": {
          "id": "clqfv5iypdrd30bw7dsxrzx8p",
          "url": "https://media.graphassets.com/ydOKGLOKTGmvoD7j91Pg"
        }
      }
    ]
  }
};