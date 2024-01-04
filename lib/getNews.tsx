const data = [
  {
    aid: "sample-2",
    img: "/homepage/hero.webp",
    title: "Wines & Spirits",
    category: "",
    date: "",
    desc: 'The Macallan and Duty Free Americas open first-of-it’s kind shop in Americas travel retail.',
  },
  {
    aid: "sample-1",
    img: "https://elitetraveler.com/wp-content/uploads/sites/8/2023/08/RitchieJamie1-SOTHEBYS2022_0610_150815-3713_ALIVECOVERAGE1-min-scaled-e1691505430598-1038x778.jpeg",
    title: "Wines & Spirits",
    category: "",
    date: "",
    desc: 'Sotheby’s worldwide chairman of wines and spirits joins BlockBar.',
  },
  {
    aid: "sample-3",
    img: "https://ipfs.blockbar.com/ipfs/QmXdqFVHfeWfJKM9N5agZ7T6kVeS2FKdxLfpJ9YVb35zWS",
    title: "Glenfiddich launches 30 Year Old Suspended Time with BlockBar",
    category: "",
    date: "",
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<img src="https://loremflickr.com/1024/768/dogs" />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetup',
  },
  {
    aid: "sample-4",
    img: "https://www.traveldailynews.com/wp-content/uploads/2023/09/DFA-Panama-PromoVISA-2023-1-2048x1365.jpg",
    title:"Visa and Duty Free Americas Partner to Provide Exclusive Benefits to Travellers",
    category: "",
    date: "",
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<img src="https://loremflickr.com/1024/768/dogs" />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
  },
];

const getArticle = (aid: string) => {
  return data.find((article) => article.aid === aid) || null;
};

export const getNews = () => {
  return data.map((article) => {
    return {
      img: article.img,
      aid: article.aid,
      title: article.title,
      desc: article.desc,
      date: article.date,
      category: article.category,
    };
  });
};

export default getArticle;
