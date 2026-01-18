// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Column 1: Logo + Newsletter */}
        <div className="space-y-4">
          <img
            src="https://edge.app/wp-content/uploads/2021/10/Edge-Logo-Dark.svg"
            alt="Edge Logo"
            className="w-32"
          />
          <h2 className="text-lg font-semibold">
            Get the latest on Crypto
            <br />
            Sign up for our newsletter
          </h2>
          {/* Dummy Newsletter Form */}
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 border border-gray-300 rounded flex-1"
            />
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 2: Menus */}
        <div className="grid grid-cols-3 gap-4">
          {/* Wallets */}
          <div>
            <h3 className="font-semibold mb-2">Wallets</h3>
            <ul className="space-y-1">
              {["Bitcoin", "Ethereum", "Litecoin", "Stellar", "XRP", "Dash", "Monero"].map(
                (wallet) => (
                  <li key={wallet}>
                    <Link to="/wallet" className="hover:text-purple-600">
                      {wallet}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              {[
                "About",
                "Edge-ucation",
                "Events",
                "Get Started",
                "White Paper",
                "Careers",
                "FAQ",
                "Privacy Manifesto",
                "Brand Guide",
              ].map((item) => (
                <li key={item}>
                  <Link to="/wallet" className="hover:text-purple-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <ul className="space-y-1">
              {[
                "Submit Ticket",
                "Request In-Person/Virtual Support",
              ].map((contact) => (
                <li key={contact}>
                  <Link to="/wallet" className="hover:text-purple-600">
                    {contact}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Social + App Buttons */}
        <div className="space-y-4">
          <div className="flex space-x-4 text-gray-600 text-xl">
            <Link to="/wallet" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
            <Link to="/wallet" aria-label="Github">
              <FaGithub />
            </Link>
            <Link to="/wallet" aria-label="Youtube">
              <FaYoutube />
            </Link>
            <Link to="/wallet" aria-label="X-Twitter">
              <FaTwitter />
            </Link>
          </div>

          <p className="font-semibold">Get the App</p>
          <div className="flex flex-wrap gap-2">
            <Link to="/wallet">
              <img
                src="https://edge.app/wp-content/uploads/2022/02/DownloadButton_AppStore.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </Link>
            <Link to="/wallet">
              <img
                src="https://edge.app/wp-content/uploads/2022/02/DownloadButton_Google.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </Link>
            <Link to="/wallet">
              <img
                src="https://edge.app/wp-content/uploads/2022/02/DownloadButton_APK.svg"
                alt="Android Direct Download"
                className="h-10"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-8 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <span>© Edge App 2026</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/wallet" className="hover:text-purple-600">
            Terms of Service
          </Link>
          <Link to="/wallet" className="hover:text-purple-600">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
