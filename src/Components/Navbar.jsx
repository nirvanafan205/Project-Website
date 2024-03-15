import React from "react";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="tw-bg-black tw-fixed tw-top-0 tw-w-full tw-z-50 tw-flex tw-justify-center tw-items-center tw-py-14">
      <ul className="tw-flex tw-list-none">
        <li className="tw-mx-4">
          <a className="tw-text-white hover:tw-underline" onClick={scrollToTop}>
            Smart Textile App
          </a>
        </li>
        <li className="tw-mx-4">
          <a className="tw-text-white hover:tw-underline">About Us</a>
        </li>
        <li className="tw-mx-4">
          <a className="tw-text-white hover:tw-underline">Gallery</a>
        </li>
        <li className="tw-mx-4">
          <a className="tw-text-white hover:tw-underline">Project Info</a>
        </li>
        <li className="tw-mx-4">
          <a className="tw-text-white hover:tw-underline">Purpose</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
