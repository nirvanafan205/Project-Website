import React from "react";

const Purpose = () => {
  return (
    <div>
      <section className="tw-bg-green-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-4">
        <h2 className="tw-text-2xl tw-font-bold tw-mb-4">
          About Smart Textile App
        </h2>
        <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-stretch tw-w-full tw-max-w-4xl">
          <div className="tw-flex tw-flex-col tw-w-full tw-p-4 tw-md:w-1/3">
            <h3 className="tw-font-semibold tw-mb-2">The Purpose:</h3>
            <p>
              The proposed research is to help student athletes and coaches in
              selecting, wearing and using the smart textile products, in
              utilizing the real-time biometric data collected from wearing
              these smart textiles to avoid any unnecessary injuries and improve
              student athletes’ performance and quality of lives.
            </p>
          </div>
          <div className="tw-flex tw-flex-col tw-w-full tw-p-4 tw-md:w-1/3">
            <h3 className="tw-font-semibold tw-mb-2">
              Major Features in the mobile application
            </h3>
            <ol>
              <li>Login/Logout</li>
              <li>Activity Rings</li>
              <li>Sleep/Heart Rate Data</li>
              <li>Profile Update/Creation/Deletion</li>
            </ol>
          </div>
          <div className="tw-flex tw-flex-col tw-w-full tw-p-4 tw-md:w-1/3">
            <h3 className="tw-font-semibold tw-mb-2">Apple Health:</h3>
            <p>
              Talk about inregards of the rings, sleep/heart data, and anything
              else worth mentioning
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purpose;
