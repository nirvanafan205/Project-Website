import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section className="tw-bg-violet-950 tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-10">
      {/* Use tw-mx-auto on the image to center it */}
      <img
        className="tw-h-64 tw-w-64 tw-rounded-lg tw-mx-auto"
        src="/projectLogo.png"
        alt="project logo"
      />
      <div className="tw-text-center">
        <span className="tw-block tw-mt-2 tw-text-2xl">Research Project</span>
        <h1 className="tw-text-white tw-text-2xl tw-font-semibold tw-mt-4">
          A Framework for Smart Textile Large Scale Consumer Research
        </h1>
        <FontAwesomeIcon
          icon={faHeartPulse}
          className="tw-text-red-600 tw-my-2 tw-w-12 tw-h-12"
        />
        <h2 className="tw-text-white tw-text-lg tw-mt-4">
          Empowering the Future of Athletics: Unleashing the Potential of Smart
          Textiles for Enhanced Performance and Well-being
        </h2>
        <img
          className="tw-h-64 tw-w-128 md:tw-w-128 tw-mt-4"
          src="/ARCS.png"
          alt="project logo"
        />
      </div>
    </section>
  );
};

export default HeroSection;
