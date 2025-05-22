import FutureOfGasStations from "../blogs/FutureOfGasStations";
import HowDoGasPumpsWork from "../blogs/HowDoGasPumpsWork";

export type BlogThumbnail = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  ContentComponent: React.FC;
};

export const blogData: BlogThumbnail[] = [
  {
    title: 'The Future of Gas Stations:',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog1.png',
    ContentComponent: FutureOfGasStations,
  },
  {
    title: 'How do Gasoline Pumps work?',
    subtitle: '',
    imageUrl: '/blogImages/blog2.jpg',
    ContentComponent: HowDoGasPumpsWork,
  },
  {
    title: 'How much does it cost 3',
    subtitle: 'to build a gas station?',
    imageUrl: '/blogImages/blog3.jpg',
    ContentComponent: FutureOfGasStations,
  },
  {
    title: 'The Future of Gas Stations: 4',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog4.jpg',
    ContentComponent: FutureOfGasStations,
  },
  {
    title: 'The Future of Gas Stations: 5',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog5.jpg',
    ContentComponent: FutureOfGasStations,
  },
  {
    title: 'How much does it cost 6',
    subtitle: 'to build a gas station?',
    imageUrl: '/blogImages/blog6.jpg',
    ContentComponent: FutureOfGasStations,
  },
  {
    title: 'How much does it cost 7',
    subtitle: 'to build a gas station?',
    imageUrl: '/blogImages/blog7.jpg',
    ContentComponent: FutureOfGasStations,
  },
  {
    title: 'The Future of Gas Stations: 8',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog8.jpg',
    ContentComponent: FutureOfGasStations,
  },
  // ...rest of your blogData
];