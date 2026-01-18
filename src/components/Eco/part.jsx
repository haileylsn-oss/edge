// PartnersTicker.jsx
import React from "react";
import Marquee from "react-fast-marquee";

const partners = [
  "https://edge.app/wp-content/uploads/2024/04/Bitrefill-website-01.png",
  "https://edge.app/wp-content/uploads/2025/03/PaybisWebsite.png",
  "https://edge.app/wp-content/uploads/2024/04/LetsExchangeNew-01.png",
  "https://edge.app/wp-content/uploads/2024/10/MayaProtocolLogoWhite-01.png",
  "https://edge.app/wp-content/uploads/2022/01/Simplex_New.png",
  "https://edge.app/wp-content/uploads/2021/12/BitsOfGold_White.png",
  "https://edge.app/wp-content/uploads/2021/12/Banxa_White.png",
  "https://edge.app/wp-content/uploads/2021/12/SideShift_White.png",
  "https://edge.app/wp-content/uploads/2021/12/Moonpay_White.png",
  "https://edge.app/wp-content/uploads/2021/12/Godex_White.png",
  "https://edge.app/wp-content/uploads/2021/12/ChangeNow_White.png",
  "https://edge.app/wp-content/uploads/2022/01/LibertyX_New.png",
  "https://edge.app/wp-content/uploads/2022/01/bity_New.png",
  "https://edge.app/wp-content/uploads/2022/05/exolix.svg",
  "https://edge.app/wp-content/uploads/2023/02/swapuz.svg",
  "https://edge.app/wp-content/uploads/2025/06/Algorand.svg",
  "https://edge.app/wp-content/uploads/2025/06/thorchain.svg",
  "https://edge.app/wp-content/uploads/2025/06/Optimism.svg",
  "https://edge.app/wp-content/uploads/2024/04/Coreum-website-01.png",
  "https://edge.app/wp-content/uploads/2022/01/ethereum-svg.svg",
  "https://edge.app/wp-content/uploads/2022/01/bitcoin-svg.svg",
  "https://edge.app/wp-content/uploads/2022/01/dogecoin-svg.svg",
  "https://edge.app/wp-content/uploads/2022/06/DashLogo-3.svg",
  "https://edge.app/wp-content/uploads/2022/01/tether-svg.svg",
  "https://edge.app/wp-content/uploads/2022/02/Avalanche.svg",
  "https://edge.app/wp-content/uploads/2022/02/Binance.svg",
  "https://edge.app/wp-content/uploads/2022/02/FIO.svg",
  "https://edge.app/wp-content/uploads/2022/02/Hedera.svg",
  "https://edge.app/wp-content/uploads/2022/02/Litecoin.svg",
  "https://edge.app/wp-content/uploads/2022/02/Monero.svg",
  "https://edge.app/wp-content/uploads/2022/02/Polygon.svg",
  "https://edge.app/wp-content/uploads/2022/02/QTM.svg",
  "https://edge.app/wp-content/uploads/2022/02/Ravencoin.svg",
  "https://edge.app/wp-content/uploads/2022/02/Ripple.svg",
  "https://edge.app/wp-content/uploads/2022/02/RSK.svg",
  "https://edge.app/wp-content/uploads/2022/02/Stellar.svg",
  "https://edge.app/wp-content/uploads/2022/02/ZCash.svg",
  "https://edge.app/wp-content/uploads/2022/02/AssetLogo_Solana.svg",
  "https://edge.app/wp-content/uploads/2022/03/AssetLogo_Celo-min.svg",
  "https://edge.app/wp-content/uploads/2022/08/polkadot.png",
  "https://edge.app/wp-content/uploads/2025/06/Zano.svg",
  "https://edge.app/wp-content/uploads/2025/06/suilogo.svg",
  "https://edge.app/wp-content/uploads/2025/06/soniclogo.svg",
  "https://edge.app/wp-content/uploads/2024/04/Pirate-website-01.png",
];

const PartnersTicker = () => {
  return (
    <div className="bg-black py-6">
      <Marquee speed={50} gradient={false}>
        {partners.map((logo, index) => (
          <div key={index} className="mx-4 flex-shrink-0">
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-24 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PartnersTicker;
