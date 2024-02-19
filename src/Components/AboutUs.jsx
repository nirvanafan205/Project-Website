import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
  // Define team members with their names, descriptions, image file names, LinkedIn, and GitHub profiles
  const teamMembers = [
    {
      name: "Thomas Dinh",
      description: "Team Lead/Full Stack Engineer",
      image: "/Thomas.png",
      linkedin: "https://www.linkedin.com/in/qtdinh/",
      github: "https://github.com/qtdinh",
    },
    {
      name: "Carlos Figueroa",
      description: "Quality Assurance Engineer",
      image: "/Carlos.jpg",
      linkedin: "https://www.linkedin.com/in/carlos-figueroa-3a8358176/",
      github: "https://github.com/cfiguer055",
    },
    {
      name: "Taylor Nastally",
      description: "Android Engineer",
      image: "/Taylor.jpg",
      linkedin: "https://www.linkedin.com/in/taylor-nastally-01aa11219/",
      github: "https://github.com/Viper-one-one",
    },
    {
      name: "Matthew Garcia",
      description: "Front End Engineer",
      image: "/Matthew.jpg",
      linkedin: "https://www.linkedin.com/in/matthew-garcia-b0301b217/",
      github: "https://github.com/nirvanafan205",
    },
  ];

  // Define state to manage which card is expanded
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // Function to handle card click
  const handleCardClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="tw-bg-blue-300 tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-8">
      <h1 className="tw-text-center tw-font-bold tw-text-4xl tw-mb-8">
        MEET THE TEAM
      </h1>
      <div
        className={`tw-grid tw-grid-cols-2 tw-gap-4 ${
          expandedIndex !== -1 ? "tw-hidden" : ""
        }`}
      >
        {/* Map over team members and render cards */}
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-4 tw-cursor-pointer tw-transition-all tw-h-20"
            onClick={() => handleCardClick(index)}
          >
            <div className="tw-flex tw-justify-between tw-items-center">
              <div className="tw-font-bold">{member.name}</div>
            </div>
          </div>
        ))}
      </div>
      {expandedIndex !== -1 && (
        <div
          className="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-4 tw-cursor-pointer tw-transition-all tw-mx-auto tw-my-4 tw-max-w-2xl"
          onClick={() => setExpandedIndex(-1)}
        >
          <div className="tw-flex tw-flex-col tw-items-center">
            <img
              src={teamMembers[expandedIndex].image}
              alt={teamMembers[expandedIndex].name}
              className="tw-w-20 tw-h-20 tw-rounded-full tw-mb-4"
            />
            <div className="tw-font-bold">
              {teamMembers[expandedIndex].name}
            </div>
            <div className="tw-text-sm tw-mt-2">
              {teamMembers[expandedIndex].description}
            </div>
            <div className="tw-flex tw-mt-2">
              <a
                href={teamMembers[expandedIndex].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tw-mr-2 tw-text-blue-600"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="tw-w-12 tw-h-12"
                />
              </a>
              <a
                href={teamMembers[expandedIndex].github}
                target="_blank"
                rel="noopener noreferrer"
                className="tw-text-gray-700"
              >
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className="tw-w-12 tw-h-12"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
