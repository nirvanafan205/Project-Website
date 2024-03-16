import React from 'react';

const NavBar = ({ scrollToRefs }) => {
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
        <li className="tw-mx-4 tw-hover:text-gray-300 tw-cursor-pointer" onClick={scrollToRefs.scrollToGallery}>Gallery</li>
        <li className="tw-mx-4 tw-hover:text-gray-300 tw-cursor-pointer" onClick={scrollToRefs.scrollToAboutUs}>About Us</li>
        <li className="tw-mx-4 tw-hover:text-gray-300 tw-cursor-pointer" onClick={scrollToRefs.scrollToPurpose}>Purpose</li>
        <li className="tw-mx-4 tw-hover:text-gray-300 tw-cursor-pointer" onClick={scrollToRefs.scrollToProjectInfo}>Technology</li>
      </ul>
    </nav>
  );
};

export default NavBar;
