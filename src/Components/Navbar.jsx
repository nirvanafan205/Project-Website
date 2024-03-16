import React from 'react';

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <nav className="tw-sticky tw-top-0 tw-z-50 tw-bg-gray-800 tw-text-white tw-p-4">
      <ul className="tw-flex tw-justify-between tw-items-center">
        <li className="tw-mx-4 tw-hover:text-gray-300 tw-cursor-pointer" onClick={scrollToTop}>Smart Textile</li>
        <li className="tw-mx-4 tw-hover:text-gray-300 tw-cursor-pointer">Gallery</li>
        <li className="tw-mx-4 tw-hover:text-gray-300 tw-cursor-pointer">About Us</li>
        <li className="tw-mx-4 tw-hover:text-gray-300 tw-cursor-pointer">Purpose</li>
        <li className="tw-mx-4 tw-hover:text-gray-300 tw-cursor-pointer">Technology</li>
      </ul>
    </nav>
  );
};

export default NavBar;
