import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify-icons/logos/github-icon";
import kotlinIcon from "@iconify-icons/devicon/kotlin";
import jiraIcon from "@iconify-icons/logos/jira";
import figmaIcon from "@iconify-icons/logos/figma";
import reactIcon from "@iconify-icons/logos/react";
import firebaseIcon from "@iconify-icons/logos/firebase";
import reduxIcon from "@iconify-icons/logos/redux";
import "../style.css";

const initialIcons = [
  githubIcon,
  kotlinIcon,
  jiraIcon,
  figmaIcon,
  reactIcon,
  firebaseIcon,
  reduxIcon,
];

const ProjectInfo = () => {
  const [icons, setIcons] = useState(initialIcons);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIcons((prevIcons) => {
        // Move the first icon to the end to create an infinite loop
        return [...prevIcons.slice(1), prevIcons[0]];
      });
    }, 2000); // 2000ms interval for each icon move

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* Existing sections... */}

      {/* Technologies and Skills Section */}
      <section className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-pink-100 tw-py-8">
        <h2 className="tw-text-2xl tw-mb-4">Technologies and Skills</h2>
        <div className="carousel-container tw-relative tw-w-full tw-flex tw-justify-center">
          <div className="sliding-container tw-flex">
            {icons.map((icon, index) => (
              <Icon
                key={index}
                className="icon tw-text-6xl tw-mx-4" // Adjust margins as necessary
                icon={icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectInfo;
