import { Link } from "react-router-dom";
import bar from '../../assets/bar.png'
import phone from '../../assets/phone.png'

const Eco = () => {
  return (
    <section className="pt-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Get Edge to manage all of your crypto assets.
            </h1>

            <p className="text-gray-600 text-lg">
              The most secure way to buy, store <br className="hidden sm:block" />
              and trade crypto under your control
            </p>

            {/* QR Code (Desktop only) */}
            <div className="hidden md:block">
              <Link to="/wallet" className="inline-block">
                <img
                  src={bar}
                  alt="QR Code"
                  className="w-32"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Scan or tap to get started
                </p>
              </Link>
            </div>

            {/* App Buttons (Mobile / Tablet) */}
            <div className="flex items-center gap-4 md:hidden">
              <Link to="/wallet">
                <img
                  src="https://edge.app/wp-content/uploads/2022/02/DownloadButton_AppStore.svg"
                  alt="Download on App Store"
                  className="h-8"
                />
              </Link>

              <Link to="/wallet">
                <img
                  src="https://edge.app/wp-content/uploads/2022/02/DownloadButton_Google.svg"
                  alt="Get it on Google Play"
                  className="h-8"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            {/* Desktop image */}
            <img
              src="https://edge.app/wp-content/uploads/2025/05/Artboard-1-1-1024x761.png"
              alt="Edge App Preview"
              className="hidden md:block max-w-full"
            />

            {/* Tablet image */}
            <img
              src="https://edge.app/wp-content/uploads/2025/05/Artboard-2.png"
              alt="Edge Mobile Preview"
              className="block md:hidden max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eco;
