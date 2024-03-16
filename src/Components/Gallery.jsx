import React, { forwardRef } from 'react';

const Gallery = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <section className="tw-bg-blue-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-4">
        <h2 className="tw-text-2xl tw-font-bold tw-mb-4">Gallery & Demo</h2>
        <div className="tw-grid tw-grid-cols-4 tw-gap-8">
          <div className="tw-flex tw-flex-col tw-items-center">
            <img
              src="this.png"
              alt="Sign In page"
              className="tw-w-64 tw-h-94"
            />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">Sign In Page</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <img
              src="signup.png"
              alt="Sign Up page"
              className="tw-w-64 tw-h-94"
            />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">Sign Up Page</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <img
              src="terms.png"
              alt="Terms and conditions"
              className="tw-w-64 tw-h-94"
            />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">
              Terms & Conditions
            </p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <img
              src="landing.png"
              alt="Landing page"
              className="tw-w-64 tw-h-94"
            />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">Landing Page</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <img src="heart.png" alt="Heart page" className="tw-w-64 tw-h-94" />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">Heart Page</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <img src="sleep.png" alt="Sleep page" className="tw-w-64 tw-h-94" />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">Sleep Page</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <img
              src="viewHealth.png"
              alt="View Health page"
              className="tw-w-64 tw-h-94"
            />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">View Health Page</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <img
              src="ring.png"
              alt="activity rings"
              className="tw-w-64 tw-h-94"
            />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">Activity Ring</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <img
              src="calander.png"
              alt="Calander"
              className="tw-w-64 tw-h-94"
            />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">Calander</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <img
              src="edit.png"
              alt="Edit profile"
              className="tw-w-64 tw-h-94"
            />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">Account Settings</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <img
              src="editProfile.png"
              alt="Edit Profile"
              className="tw-w-64 tw-h-94"
            />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">
              Edit Profile Page
            </p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <img src="metrics.png" alt="Metrics" className="tw-w-64 tw-h-94" />
            <p className="tw-text-2xl tw-font-bold tw-mt-2">Metrics</p>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Gallery;
