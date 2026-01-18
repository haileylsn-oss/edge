const FeaturesSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dark Header */}
        <div className="rounded-2xl bg-gradient-to-r from-[#111111] to-[#1a1a1a] px-10 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <h2 className="text-white text-3xl md:text-4xl font-semibold leading-snug">
            Private, Secure
            <br />
            &amp; Easy to Use
          </h2>

          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Cutting edge security, user privacy, and ease of use are at the
            foundation of everything we build. Edge combines these features
            into one user friendly platform for beginners and experts alike.
          </p>
        </div>

        {/* White Feature Card */}
        <div className="relative -mt-10 bg-white rounded-2xl shadow-lg px-10 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Feature 1 */}
            <div className="flex gap-5 items-start">
              <img
                src="https://edge.app/wp-content/uploads/2024/01/btc-and-eth-edge-icon.svg"
                alt="Multi Asset Support"
                className="w-14 h-14"
              />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  Multi-Asset Support
                </h4>
                <p className="text-gray-700 mt-1">
                  Bitcoin, Ethereum, XRP, Dash, Dogecoin &amp; more
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5 items-start">
              <img
                src="https://edge.app/wp-content/uploads/2024/01/toggle-Edge-icon.svg"
                alt="Exchange Assets"
                className="w-14 h-14"
              />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  Exchange between assets
                </h4>
                <p className="text-gray-700 mt-1">
                  Seamlessly trade between digital currencies/assets on the go.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-5 items-start">
              <img
                src="https://edge.app/wp-content/uploads/2024/01/hand-edge-icon.svg"
                alt="Buy and Sell"
                className="w-14 h-14"
              />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  In-app buy, sell and more
                </h4>
                <p className="text-gray-700 mt-1">
                  Exchange your fiat money for the financial assets of the future.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
