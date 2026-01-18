// SecuritySection.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "https://edge.app/wp-content/uploads/2021/10/Frame-2402-4-min.svg",
    title: "Private By Default",
    subtitle: "Your assets. Your keys.",
    description:
      "Client-side encryption means all of your data is encrypted on your device before any of your information touches our web servers. No server-side hacks and no malware = safe assets. Only you and you alone have access to control your cryptocurrency assets — the way it should be.",
  },
  {
    id: 2,
    image: "https://edge.app/wp-content/uploads/2021/10/Frame-2406-min.svg",
    title: "Private By Default",
    subtitle: "Your assets. Your keys.",
    description:
      "Edge has a zero-knowledge security architecture meaning we don’t need, nor do we want, any of your private information. Respecting your privacy is a core value in everything we engineer.",
  },
  {
    id: 3,
    image: "https://edge.app/wp-content/uploads/2021/10/Frame-2407-2-min.svg",
    title: "Redundant peer-to-peer cloud servers",
    subtitle: "Duress Mode (New!)",
    description:
      "Once your account and everything in it has been encrypted, we automatically back it up. We can’t access your assets or any other information in any usable form but if anything happens to your device, you can just download the Edge app on a new device, enter your username and password and your assets are right where you left them. A brand-new way to protect your crypto in high-pressure situations. Simply enter a Duress PIN to unlock a decoy account and keep your real assets safe from real-world threats.",
    link: {
      text: "Read full setup guide",
      url: "/wallet", // changed to internal route
    },
  },
];

const SecuritySection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Security is our foundation, not a feature
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Many wallet options are compelling, but very few of them have the
          security track record Edge has. Want to learn more?{" "}
          <Link
            to="/wallet"
            className="text-blue-600 underline"
          >
            Download our White Paper here
          </Link>
          .
        </p>

        {/* Pills Navigation */}
        <ul className="flex justify-center mb-8 space-x-4">
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer px-4 py-2 rounded-full border transition ${
                current === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {slide.title}
            </li>
          ))}
        </ul>

        {/* Slide Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold">{slides[current].subtitle}</h3>
            <p className="text-gray-600">{slides[current].description}</p>
            {slides[current].link && (
              <Link
                to={slides[current].link.url}
                className="text-blue-600 underline"
              >
                {slides[current].link.text}
              </Link>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
