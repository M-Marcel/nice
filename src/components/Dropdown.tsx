// src/components/Dropdown.tsx
import { useState } from "react";

type DropdownProps = {
  options: string[];
  children:React.ReactNode
};

const Dropdown = ({ options, children }:DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-xl  border border-gray-600 bg-white px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-600/55 focus:outline-none focus:ring-border-gray-600"
      >
        {children}
        <svg
          className={`ml-2 w-5 h-5 transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option, index) => (
              <a
                key={index}
                href="/"
                className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
