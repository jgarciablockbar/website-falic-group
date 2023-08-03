import { ObjectType } from "typescript";

const data = {
  wines: {
    heroBg: 'https://loremflickr.com/1000/720/newyork',
    title: 'Wines & Spirits',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    quote: 'empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'sit voluptatem accusantium natus erro',
    brands: [
      {
        title: 'e velit esse cillum dol',
        date: 'Since 1234',
        img: 'https://loremflickr.com/400/300/newyork',
      },
      {
        title: 'e velit esse cillum dol',
        date: 'Since 1234',
        img: 'https://loremflickr.com/400/300/newyork',
      },
      {
        title: 'e velit esse cillum dol',
        date: 'Since 1234',
        img: 'https://loremflickr.com/400/300/newyork',
      },
      {
        title: 'e velit esse cillum dol',
        date: 'Since 1234',
        img: 'https://loremflickr.com/400/300/newyork',
      },
      {
        title: 'e velit esse cillum dol',
        date: 'Since 1234',
        img: 'https://loremflickr.com/400/300/newyork',
      },
      {
        title: 'e velit esse cillum dol',
        date: 'Since 1234',
        img: 'https://loremflickr.com/400/300/newyork',
      },
    ],
    otherSectors: {
      title: 'Other Sectors',
      brands: [
        {
          title: 'e velit esse cillum dol',
          date: 'Since 1234',
          img: 'https://loremflickr.com/400/300/newyork',
        },
        {
          title: 'e velit esse cillum dol',
          date: 'Since 1234',
          img: 'https://loremflickr.com/400/300/newyork',
        },
        {
          title: 'e velit esse cillum dol',
          date: 'Since 1234',
          img: 'https://loremflickr.com/400/300/newyork',
        },
        {
          title: 'e velit esse cillum dol',
          date: 'Since 1234',
          img: 'https://loremflickr.com/400/300/newyork',
        },
        {
          title: 'e velit esse cillum dol',
          date: 'Since 1234',
          img: 'https://loremflickr.com/400/300/newyork',
        },
        {
          title: 'e velit esse cillum dol',
          date: 'Since 1234',
          img: 'https://loremflickr.com/400/300/newyork',
        },
      ]
    }
  },
  retailing: {
    title: 'Retailing',
    heroBg: '',
    desc: '',
    quote: '',
    author: '',
    brands: [
      {
        title: '',
        date: '',
        img: '',
      },
    ],
    otherSectors: {
      title: 'Other Sectors',
      brands: [
        {
          title: '',
          date: '',
          img: '',
        },
      ]
    }
  },
  fragance: {
    title: 'Fragance & Cosmetics',
    heroBg: '',
    desc: '',
    quote: '',
    author: '',
    brands: [
      {
        title: '',
        date: '',
        img: '',
      },
    ],
    otherSectors: {
      title: 'Other Sectors',
      brands: [
        {
          title: '',
          date: '',
          img: '',
        },
      ]
    }
  },
  fashion: {
    title: 'Fashion & Interiors',
    heroBg: '',
    desc: '',
    quote: '',
    author: '',
    brands: [
      {
        title: '',
        date: '',
        img: '',
      },
    ],
    otherSectors: {
      title: 'Other Sectors',
      brands: [
        {
          title: '',
          date: '',
          img: '',
        },
      ]
    }
  },
  realEstate: {
    title: 'Real Estate & Hospitality',
    heroBg: '',
    desc: '',
    quote: '',
    author: '',
    brands: [
      {
        title: '',
        date: '',
        img: '',
      },
    ],
    otherSectors: {
      title: 'Other Sectors',
      brands: [
        {
          title: '',
          date: '',
          img: '',
        },
      ]
    }
  },
  media: {
    title: 'Media',
    heroBg: '',
    desc: '',
    quote: '',
    author: '',
    brands: [
      {
        title: '',
        date: '',
        img: '',
      },
    ],
    otherSectors: {
      title: 'Other Sectors',
      brands: [
        {
          title: '',
          date: '',
          img: '',
        },
      ]
    }
  },
  distribution: {
    title: 'Distribution',
    heroBg: '',
    desc: '',
    quote: '',
    author: '',
    brands: [
      {
        title: '',
        date: '',
        img: '',
      },
    ],
    otherSectors: {
      title: 'Other Sectors',
      brands: [
        {
          title: '',
          date: '',
          img: '',
        },
      ]
    }
  },
  tobacco: {
    title: 'Tobacco',
    heroBg: '',
    desc: '',
    quote: '',
    author: '',
    brands: [
      {
        title: '',
        date: '',
        img: '',
      },
    ],
    otherSectors: {
      title: 'Other Sectors',
      brands: [
        {
          title: '',
          date: '',
          img: '',
        },
      ]
    }
  },
  other: {
    title: 'Other Activities',
    heroBg: '',
    desc: '',
    quote: '',
    author: '',
    brands: [
      {
        title: '',
        date: '',
        img: '',
      },
    ],
    otherSectors: {
      title: 'Other Sectors',
      brands: [
        {
          title: '',
          date: '',
          img: '',
        },
      ]
    }
  }
}

const getHouse = (hid : string) => {
  return data[hid as keyof typeof data] || null;
}

export default getHouse;
