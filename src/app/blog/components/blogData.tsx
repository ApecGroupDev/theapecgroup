export type BlogThumbnail = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  content?: string;
};

export const blogData: BlogThumbnail[] = [
  {
    title: 'The Future of Gas Stations: 1',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog1.png',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
  },
  {
    title: 'How much does it cost 2',
    subtitle: 'to build a gas station?',
    imageUrl: '/blogImages/blog2.jpg',
    content: 'This is the full content of the second blog post.',
  },
  {
    title: 'How much does it cost 3',
    subtitle: 'to build a gas station?',
    imageUrl: '/blogImages/blog3.jpg',
  },
  {
    title: 'The Future of Gas Stations: 4',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog4.jpg',
  },
  {
    title: 'The Future of Gas Stations: 5',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog5.jpg',
  },
  {
    title: 'How much does it cost 6',
    subtitle: 'to build a gas station?',
    imageUrl: '/blogImages/blog6.jpg',
  },
  {
    title: 'How much does it cost 7',
    subtitle: 'to build a gas station?',
    imageUrl: '/blogImages/blog7.jpg',
  },
  {
    title: 'The Future of Gas Stations: 8',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog8.jpg',
  },
  // ...rest of your blogData
];