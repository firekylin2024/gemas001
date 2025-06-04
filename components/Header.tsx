import Link from 'next/link';
import { FaGamepad, FaBars } from 'react-icons/fa'; // Example using react-icons

// Define props interface if needed, e.g., for active link or language
// interface HeaderProps {
//   activePath: string;
//   currentLang: 'en' | 'cn';
// }

// Functional component for the Header
const Header = (/* { activePath, currentLang }: HeaderProps */) => {
  // Note: Mobile menu toggle and language toggle logic would require "use client" and state management
  // This example is primarily a static structure with Tailwind classes

  return (
    <header className="bg-blue-500 text-white py-5 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-5 flex justify-between items-center flex-wrap">
        <Link href="/" className="text-2xl font-bold no-underline text-white">
          <FaGamepad className="inline-block mr-2" /> {/* Using react-icons component */}
          GameLife Space
        </Link>

        {/* Mobile Menu Button (requires client-side logic) */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          aria-label="Toggle mobile menu"
          // onClick={() => {/* mobile menu toggle logic */}}
        >
          <FaBars />
        </button>

        {/* Navigation Menu (requires client-side logic for toggle) */}
        <nav id="mainNav" className="w-full md:w-auto md:block hidden mt-5 md:mt-0">
          {/* Add 'active' class conditionally based on currentPath prop */}
          <ul className="flex flex-col md:flex-row list-none md:space-x-5">
            <li className="my-2 md:my-0">
              <Link href="/" className="text-white no-underline font-medium hover:opacity-80">
                Home
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link href="/fast-food-rush-page" className="text-white no-underline font-medium hover:opacity-80">
                Fast Food Rush
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link href="/2048-game-page" className="text-white no-underline font-medium hover:opacity-80">
                2048
              </Link>
            </li>
            {/* Language Selector (requires client-side logic) */}
            <li
              className="my-2 md:my-0 ml-0 md:ml-5 px-2 py-1 bg-white bg-opacity-20 rounded cursor-pointer"
              // onClick={() => {/* language toggle logic */}}
            >
              EN | 中文
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 