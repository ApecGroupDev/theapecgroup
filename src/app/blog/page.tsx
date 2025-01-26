const Blogs: React.FC = () => {
  const articles = [
    {
      title: "Best Gas Station Financing Companies In Atlanta",
      excerpt: "If you are looking for the best gas station financing companies to run your own gas station...",
      date: "July 30, 2024",
      category: "Blog",
    },
    {
      title: "Top Strategies for C-Store Renovations",
      excerpt: "Learn the top strategies to renovate your convenience store and attract more customers...",
      date: "August 10, 2024",
      category: "Tips",
    },
    {
      title: "EV Charging Solutions: What You Need to Know",
      excerpt: "As electric vehicles grow in popularity, understanding EV charging solutions is key...",
      date: "August 20, 2024",
      category: "Technology",
    },
    {
      title: "Environmental Compliance: Key Steps for Gas Stations",
      excerpt: "Stay ahead of regulations with our guide to environmental compliance for gas stations...",
      date: "September 1, 2024",
      category: "Guides",
    },
    {
      title: "Digital Marketing for Fuel Dispensers",
      excerpt: "Discover innovative digital marketing strategies to boost visibility for your fuel dispensers...",
      date: "September 15, 2024",
      category: "Marketing",
    },
    {
      title: "How to Attract More Customers to Your Gas Station",
      excerpt: "From loyalty programs to unique promotions, learn how to drive more traffic to your gas station...",
      date: "October 5, 2024",
      category: "Business",
    },
    {
      title: "The Future of Fuel: Trends to Watch in 2025",
      excerpt: "A glimpse into the upcoming trends shaping the fuel and energy industry for 2025...",
      date: "October 15, 2024",
      category: "Industry Insights",
    },
    {
      title: "Top 5 Maintenance Tips for Gas Station Equipment",
      excerpt: "Keep your equipment running smoothly with these essential maintenance tips...",
      date: "October 20, 2024",
      category: "Maintenance",
    },
    {
      title: "Leveraging Social Media for Your C-Store",
      excerpt: "Engage customers and boost your online presence with effective social media strategies...",
      date: "October 25, 2024",
      category: "Social Media",
    },
    {
      title: "Understanding Gas Station Insurance Needs",
      excerpt: "Protect your investment with the right insurance policies for your gas station...",
      date: "November 1, 2024",
      category: "Insurance",
    },
    {
      title: "The Rise of AI in Fuel Management",
      excerpt: "How artificial intelligence is transforming fuel management and operations...",
      date: "November 10, 2024",
      category: "Technology",
    },
    {
      title: "Tips for Hiring the Best Staff for Your Gas Station",
      excerpt: "Build a reliable and efficient team with these hiring tips and practices...",
      date: "November 20, 2024",
      category: "Human Resources",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 pt-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12 drop-shadow-md">
          News & Blog
        </h1>

        {/* Articles Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{article.date}</span>
                <span>{article.category}</span>
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;