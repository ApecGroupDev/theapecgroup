import BestGasStationFinancing from "../blogs/BestGasStationFinancing";
import BiggestInTheUSA from "../blogs/BiggestInTheUSA";
import FutureOfGasStations from "../blogs/FutureOfGasStations";
import HowDoGasPumpsWork from "../blogs/HowDoGasPumpsWork";
import InnovationsInPetroleumEquipment from "../blogs/InnovationsInPetroleumEquipment";
import MainPartsOfTheIndustry from "../blogs/MainPartsOfTheIndustry";
import PetroleumResearchIndustry from "../blogs/PetroleumResearchIndustry";

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
    title: 'Gasoline Pumps:',
    subtitle: 'How Do They Work?',
    imageUrl: '/blogImages/blog2.jpg',
    ContentComponent: HowDoGasPumpsWork,
  },
  {
    title: 'Main Parts Of The',
    subtitle: 'Petroleum Industry',
    imageUrl: '/blogImages/blog3.jpg',
    ContentComponent: MainPartsOfTheIndustry,
  },
  {
    title: 'Petroleum Research Industry:',
    subtitle: 'What are they studying?',
    imageUrl: '/blogImages/blog4.jpg',
    ContentComponent: PetroleumResearchIndustry,
  },
  {
    title: 'Best In Atlanta:',
    subtitle: 'Gas Station Financing Companies',
    imageUrl: '/blogImages/blog5.jpg',
    ContentComponent: BestGasStationFinancing,
  },
  {
    title: 'Biggest In The USA:',
    subtitle: 'Oil And Gas Equipment And Services Companies',
    imageUrl: '/blogImages/blog6.jpg',
    ContentComponent: BiggestInTheUSA,
  },
  {
    title: 'Innovations in Petroleum Equipment:',
    subtitle: 'How Leading Companies Are Shaping the Future',
    imageUrl: '/blogImages/blog7.jpg',
    ContentComponent: InnovationsInPetroleumEquipment,
  },
  {
    title: 'The Future of Gas Stations: 8',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog8.jpg',
    ContentComponent: FutureOfGasStations,
  },
  // ...rest of your blogData
];