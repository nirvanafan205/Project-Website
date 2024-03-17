import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="tw-bg-black tw-py-10 tw-flex tw-flex-col tw-items-center">
      <div className="tw-flex tw-justify-center tw-mb-4">
        <a href="https://www.linkedin.com/school/california-state-university-northridge/mycompany/verification/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="tw-text-blue-600 tw-mb-2 tw-mr-4 tw-w-12 tw-h-12 hover:tw-text-red-500"
          />
        </a>
        <a href="https://github.com/CSU-Northridge-ARCS-Dev/smart-clothing-app">
          <FontAwesomeIcon
            icon={faGithubSquare}
            className="tw-text-blue-600 tw-mb-2 tw-mr-4 tw-w-12 tw-h-12 hover:tw-text-red-500"
          />
        </a>
        <a href="https://www.instagram.com/csun_edu/?hl=en">
          <FontAwesomeIcon
            icon={faInstagram}
            className="tw-text-blue-600 tw-mb-2 tw-mr-4 tw-w-12 tw-h-12 hover:tw-text-red-500"
          />
        </a>
        <a href="https://twitter.com/csunorthridge?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <FontAwesomeIcon
            icon={faTwitter}
            className="tw-text-blue-600 tw-mb-2 tw-mr-4 tw-w-12 tw-h-12 hover:tw-text-red-500"
          />
        </a>
        <a href="https://www.facebook.com/calstatenorthridge">
          <FontAwesomeIcon
            icon={faFacebook}
            className="tw-text-blue-600 tw-mb-2 tw-w-12 tw-h-12 hover:tw-text-red-500"
          />
        </a>
      </div>
      <a href="https://www.csun.edu/~xjiang/SeniorDesign/">
        <p className="tw-text-xl tw-text-white tw-pb-6 hover:tw-text-red-500">
          Click here to return to the course!
        </p>
      </a>
      <img src="/csun.png" alt="CSUN" className="tw-w-64 h-48 tw-mb-4" />
      <p className="tw-text-xl tw-text-white tw-pt-6 tw-text-center">
        Copyright &copy; California State University, Northridge
      </p>
    </footer>
  );
};

export default Footer;
