// components/EducationCarousel.jsx
import React from "react";
import { Link } from "react-router-dom";

// Sample data (replace images/titles as needed)
const posts = [
  {
    id: 1,
    image:
      "https://edge.app/wp-content/uploads/2025/07/Botanix-Blog-Feature-Graphic-768x433.png",
    title: "Edge Now Supports Botanix: Unlocking EVM Smart Contracts on Bitcoin",
  },
  {
    id: 2,
    image:
      "https://edge.app/wp-content/uploads/2025/07/Feature-Graphic-768x432.png",
    title: "New Zano Features: Private View Key, Tokens, and Aliases",
  },
  {
    id: 3,
    image:
      "https://edge.app/wp-content/uploads/2025/07/Sui-Blog-Feature-Graphic-768x433.png",
    title: "Built for Speed, Made to Scale: SUI Now Available in Edge",
  },
  {
    id: 4,
    image:
      "https://edge.app/wp-content/uploads/2025/06/Signal-Feature-Graphic-768x433.png",
    title: "Encrypted Customer Support Is Now Available Via Signal",
  },
  {
    id: 5,
    image:
      "https://edge.app/wp-content/uploads/2025/05/Zano-Blog-Graphic-768x433.png",
    title: "Private Crypto Made Easy: Zano Is Now Live in Edge",
  },
];

const EducationCarousel = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-2">Edge-ucation</h2>
        <p className="text-center text-gray-600 mb-8">Crypto Questions, Answered</p>

        {/* Carousel */}
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex-none w-72 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <Link to="/wallet">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 object-cover rounded-t-lg"
                  loading="lazy"
                />
              </Link>
              <div className="p-4 flex flex-col justify-between h-36">
                <Link to="/wallet" className="text-lg font-semibold hover:text-blue-600">
                  {post.title}
                </Link>
                <Link
                  to="/wallet"
                  className="mt-2 inline-block text-blue-600 underline hover:text-blue-800"
                >
                  Learn more &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCarousel;
