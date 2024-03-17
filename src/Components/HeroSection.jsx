import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, faFutbol } from "@fortawesome/free-solid-svg-icons"; // Assuming faRunning for the second icon

const HeroSection = () => {
  return (
    <section className="tw-bg-blue-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-10">
      <div className="tw-flex tw-flex-col tw-items-center md:tw-flex-row md:tw-justify-around tw-w-full tw-px-4 md:tw-px-10 tw-mb-6">
        <div className="tw-flex tw-flex-col tw-items-center tw-mb-6 md:tw-mb-0">
          <img
            className="tw-h-64 tw-w-64 tw-rounded-lg tw-mx-auto"
            src="/projectLogo.png"
            alt="project logo"
          />
          <FontAwesomeIcon
            icon={faHeartPulse}
            className="tw-text-red-600 tw-my-2 tw-w-12 tw-h-12"
          />
          <p className="tw-text-center tw-text-black tw-text-lg">
            Empowering the Future of Athletics: Unleashing the Potential of Smart Textiles
          </p>
        </div>
        
        <div className="tw-flex tw-flex-col tw-items-center">
          <img
            className="tw-h-64 tw-w-64 tw-rounded-lg tw-mx-auto"
            src="/coach.png" 
            alt="second project theme"
          />
          <FontAwesomeIcon
            icon={faFutbol} 
            className="tw-text-blue-600 tw-my-2 tw-w-12 tw-h-12"
          />
          <p className="tw-text-center tw-text-black tw-text-lg">
            Enhancing Performance and Well-being of Student Athletes 
          </p>
        </div>
      </div>
      <img
          className="tw-h-64 tw-w-128 md:tw-w-128 tw-mt-4 tw-shadow-2xl"
        src="/ARCS.png"
        alt="additional context"
      />
    </section>
  );
};

export default HeroSection;
