import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">

          {/* Left Section */}
          <div className="flex flex-col items-center mb-6 lg:mb-0">
            <ul className="flex gap-6 text-sm mb-3">
              <li>
                <Link to="/wallet" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/wallet" className="hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <p className="text-sm text-gray-400">© 2024, Decentralized Dapps</p>
          </div>

          {/* Social Icons Section */}
          <ul className="flex gap-6">

            <li>
              <Link to="/wallet">
                {/* Facebook */}
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
                  <path d="M2.58 9.04H0.6C0.28 9.04 0.18 8.92 0.18 8.62V6.20C0.18 5.88 0.3 5.78 0.6 5.78H2.58V4.02C2.58 3.22 2.72 2.46 3.12 1.76C3.54 1.04 4.14 0.56 4.9 0.28C5.4 0.1 5.9 0.02 6.44 0.02H8.4C8.68 0.02 8.8 0.14 8.8 0.42V2.7C8.8 2.98 8.68 3.1 8.4 3.1H6.78C6.24 3.1 5.96 3.38 5.96 3.94V5.74H8.28C8.6 5.74 8.72 5.86 8.72 6.18V8.6C8.72 8.92 8.62 9.02 8.28 9.02H5.96V15.54C5.96 15.88 5.86 16 5.5 16H3C2.7 16 2.58 15.88 2.58 15.58V9.04Z" fill="white"/>
                </svg>
              </Link>
            </li>

            <li>
              <Link to="/wallet">
                {/* Twitter */}
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                  <path d="M14.5 1.42C13.98 1.66 13.42 1.82 12.85 1.9C13.44 1.52 13.9 0.93 14.11 0.23C13.55 0.57 12.94 0.82 12.29 0.96C11.76 0.37 11.01 0 10.19 0C8.6 0 7.32 1.36 7.32 3.03C7.32 3.27 7.34 3.5 7.39 3.72C5 3.6 2.89 2.39 1.47 0.55C1.23 1.01 1.08 1.52 1.08 2.08C1.08 3.13 1.59 4.06 2.36 4.6C1.9 4.59 1.44 4.45 1.06 4.23C1.06 5.73 2.05 6.95 3.36 7.23C3.13 7.3 2.87 7.33 2.61 7.33C2.42 7.33 2.24 7.32 2.06 7.28C2.43 8.48 3.49 9.36 4.75 9.39C3.77 10.2 2.53 10.68 1.19 10.68C0.95 10.68 0.72 10.67 0.5 10.64C1.77 11.51 3.28 12 4.9 12C10.18 12 13.07 7.38 13.07 3.38C13.07 3.25 13.07 3.12 13.06 2.99C13.63 2.56 14.11 2.03 14.5 1.42Z" fill="white"/>
                </svg>
              </Link>
            </li>

            <li>
              <Link to="/wallet">
                {/* LinkedIn */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M14 14V8.87C14 6.35 13.46 4.43 10.52 4.43C9.1 4.43 8.16 5.2 7.77 5.93H7.74V4.65H4.95V14H7.86V9.36C7.86 8.14 8.09 6.96 9.59 6.96C11.08 6.96 11.1 8.35 11.1 9.43V14H14Z" fill="white"/>
                  <path d="M0.23 4.65H3.13V14H0.23V4.65Z" fill="white"/>
                  <path d="M1.68 0C0.75 0 0 0.75 0 1.68C0 2.61 0.75 3.38 1.68 3.38C2.61 3.38 3.36 2.61 3.36 1.68C3.36 0.75 2.61 0 1.68 0Z" fill="white"/>
                </svg>
              </Link>
            </li>

            <li>
              <Link to="/wallet">
                {/* YouTube */}
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path d="M17.23 1.96C17.15 1.22 16.45 0.51 15.71 0.42C11.26 -0.14 6.75 -0.14 2.29 0.42C1.56 0.51 0.86 1.22 0.77 1.96C0.45 4.68 0.45 7.32 0.77 10.04C0.86 10.78 1.56 11.49 2.29 11.58C6.75 12.14 11.26 12.14 15.71 11.58C16.45 11.49 17.15 10.78 17.23 10.04C17.55 7.32 17.55 4.68 17.23 1.96ZM7.59 8.82V3.18L11.82 6L7.59 8.82Z" fill="white"/>
                </svg>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </footer>
  );
}
