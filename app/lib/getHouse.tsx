import { ObjectType } from "typescript";

const data = {
  wines: {
    title: 'Wines & Spirits',
    desc: ''
  },
  retailing: {
    title: 'Retailing'
  },
  fragance: {
    title: 'Fragance & Cosmetics'
  },
  fashion: {
    title: 'Fashion & Interiors'
  },
  realEstate: {
    title: 'Real Estate & Hospitality'
  },
  media: {
    title: 'Media'
  },
  distribution: {
    title: 'Distribution'
  },
  tobacco: {
    title: 'Tobacco'
  },
  other: {
    title: 'Other Activities'
  }
}

const getHouse = (hid : string) => {
  return data[hid as keyof typeof data] || null;
}

export default getHouse;
