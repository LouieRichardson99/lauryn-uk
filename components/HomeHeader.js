import { useState } from "react";
import NavLinks from "./NavLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen === true) {
    return (
      <header>
        <div className="mb-12 transition duration-500 ease-in-out">
          <div className="mb-4 font-serif sm:flex mt-6 text-center border-b-2 border-red-700 shadow-md">
            <NavLinks />
            <button onClick={handleMenu} className="w-6 text-red-700 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header>
      <div className="pt-8 pb-2 text-gray-800 flex justify-between sm:block mb-10 sm:mb-0 relative">
        <div className="hidden sm:flex space-x-20 mb-6 font-serif justify-center mt-6">
          <NavLinks />
        </div>
        <div className="sm:hidden block right-10 float-right absolute">
          <button type="button" className="block h-full" onClick={handleMenu}>
            <svg
              className="h-6 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
