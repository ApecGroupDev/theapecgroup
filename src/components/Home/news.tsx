import React from 'react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    title: 'Breaking News 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    image: 'https://via.placeholder.com/150',
    date: '2024-12-21',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'Breaking News 2',
    description: 'Cras vehicula euismod sapien, id faucibus nunc fermentum eu. Fusce et metus nec sapien.',
    image: 'https://via.placeholder.com/150',
    date: '2024-12-20',
    author: 'Jane Smith',
  },
  {
    id: 3,
    title: 'Breaking News 3',
    description: 'Curabitur vehicula ipsum vel justo placerat, nec consectetur nulla consequat.',
    image: 'https://via.placeholder.com/150',
    date: '2024-12-19',
    author: 'Alex Johnson',
  },
  // {
  //   id: 4,
  //   title: 'Breaking News 4',
  //   description: 'Sed id diam consequat, sodales enim sit amet, blandit libero.',
  //   image: 'https://via.placeholder.com/150',
  //   date: '2024-12-18',
  //   author: 'Chris Lee',
  // },
  // {
  //   id: 5,
  //   title: 'Breaking News 5',
  //   description: 'Etiam nec eros sed ligula porttitor dignissim.',
  //   image: 'https://via.placeholder.com/150',
  //   date: '2024-12-17',
  //   author: 'Pat Taylor',
  // },
  // {
  //   id: 6,
  //   title: 'Breaking News 6',
  //   description: 'Quisque fermentum, lacus ut ultricies tincidunt, nisl elit dictum est.',
  //   image: 'https://via.placeholder.com/150',
  //   date: '2024-12-16',
  //   author: 'Morgan Brown',
  // },
];

const News: React.FC = () => {
  return (
    <div className="container bg-white mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mockNews.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
              <p className="text-gray-500 text-sm mb-1">By {news.author} on {news.date}</p>
              <p className="text-gray-700 text-sm mb-4">{news.description}</p>
              <a
                href="#"
                className="text-red-600 hover:underline text-sm font-medium"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
