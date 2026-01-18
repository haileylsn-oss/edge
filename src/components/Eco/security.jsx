
import React from "react";
import { useNavigate } from "react-router-dom";


const SecurityComparison = () => {

      const navigate = useNavigate();

  const goToWallet = () => {
    navigate("/wallet");
  };



  return (
    <>
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">

          {/* Left Content */}
          <div>
            <img
              src="https://edge.app/wp-content/uploads/2024/01/edge-secured.svg"
              alt="Edge secured"
              className="w-full max-w-xl mb-10"
            />

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Securing digital assets doesn&apos;t have to be difficult
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Managing multiple wallets for multiple cryptocurrency assets is hard.
              Add in complicated backups like sensitive seed phrases and private keys,
              and you’ve got serious usability challenges. Not at Edge. Hold all of your
              assets in one place with the Edge app — all you need is a username and password.
            </p>
          </div>

          {/* Right Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Edge Side */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Edge vs other guys
              </h3>

              <img
                src="https://edge.app/wp-content/uploads/2024/01/edge-safe.svg"
                alt="Edge safe"
                className="w-full mb-8"
              />

              <ul className="space-y-4">
                {[
                  "One app for all of your assets",
                  "Backup with just username and password",
                  "Easy, secure access with PIN or Biometric Login",
                  "Seamlessly login using multiple devices",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1">
                      <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path
                          d="M3.3 7.5v7.3l11-11"
                          stroke="#66EDA8"
                          strokeWidth="2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Guys Side */}
            <div>
              <img
                src="https://edge.app/wp-content/uploads/2024/01/scary-hand.svg"
                alt="Scary hand"
                className="w-full mb-8"
              />

              <ul className="space-y-4">
                {[
                  "Several apps to manage multiple assets",
                  "Difficult to use backups",
                  "No auto-sync between devices",
                  "No forgiveness for user mistakes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-gray-400">
                      <svg width="15" height="15" viewBox="0 0 15.2 15.2" fill="currentColor">
                        <path d="M12.4 13.7l.7.7 1.4-1.4-.7-.7L9 7.5l4.8-4.8L14.5 2 13.1.6l-.7.7L7.6 6.1 2.8 1.3 2.1.6.7 2l.7.7 4.8 4.8-4.8 4.8.7.7 1.4 1.4.7-.7 4.8-4.8 4.8 4.8z" />
                      </svg>
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
     <section className="bg-black py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
        
        {/* Left Column */}
        <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
          <h2 className="text-xl md:text-4xl font-bold leading-snug text-white">
            One app for all your <br /> cryptocurrency needs
          </h2>
        
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 animate-fadeIn">
          <p className="text-gray-100 text-lg">
            We partner with top blockchain services around the world so users
            can maximize their assets. In-app buy/sell, mobile top-ups, gift
            cards, and crypto-to-crypto exchange, all inside Edge.
          </p>
        </div>
      </div>
    </section></>
  );
};

export default SecurityComparison;
