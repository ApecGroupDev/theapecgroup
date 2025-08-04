export type BlogThumbnail = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  slug: string;
};

export const blogData: BlogThumbnail[] = [
  {
    title: 'The Future of Gas Stations:',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog1.png',
    slug: 'future-of-gas-stations',
  },
  {
    title: 'Gasoline Pumps:',
    subtitle: 'How Do They Work?',
    imageUrl: '/blogImages/blog2.jpg',
    slug: 'how-gasoline-pumps-work',
  },
  {
    title: 'Main Parts Of The',
    subtitle: 'Petroleum Industry',
    imageUrl: '/blogImages/blog3.jpg',
    slug: 'petroleum-industry-segments',
  },
  {
    title: 'Petroleum Research Industry:',
    subtitle: 'What are they studying?',
    imageUrl: '/blogImages/blog4.jpg',
    slug: 'petroleum-research',
  },
  {
    title: 'Best In Atlanta:',
    subtitle: 'Gas Station Financing Companies',
    imageUrl: '/blogImages/blog5.jpg',
    slug: 'gas-station-financing-atlanta',
  },
  {
    title: 'Biggest In The USA:',
    subtitle: 'Oil And Gas Equipment And Services Companies',
    imageUrl: '/blogImages/blog6.jpg',
    slug: 'top-oil-and-gas-equipment-companies-usa',
  },
  {
    title: 'Innovations in Petroleum Equipment:',
    subtitle: 'How Leading Companies Are Shaping the Future',
    imageUrl: '/blogImages/blog7.jpg',
    slug: 'petroleum-equipment-innovations',
  },
  {
    title: 'Gas Station',
    subtitle: 'Inspection Checklist',
    imageUrl: '/blogImages/blog8.jpg',
    slug: 'gas-station-inspection-checklist',
  },
  // ...rest of your blogData
];