import React, { forwardRef } from "react";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify-icons/logos/github-icon";
import kotlinIcon from "@iconify-icons/devicon/kotlin";
import jiraIcon from "@iconify-icons/logos/jira";
import figmaIcon from "@iconify-icons/logos/figma";
import swiftIcon from "@iconify-icons/logos/swift";
import reactIcon from "@iconify-icons/logos/react";
import firebaseIcon from "@iconify-icons/logos/firebase";
import bootstrapIcon from "@iconify-icons/devicon/bootstrap";
import reduxIcon from "@iconify-icons/logos/redux";

const ProjectInfo = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <section className="tw-bg-pink-100 tw-flex tw-flex-col tw-justify-center tw-items-center">
        <h2 className="tw-text-2xl tw-font-bold tw-mb-4">
          Technologies and Skills
        </h2>
        <div className="tw-flex tw-pt-4 tw-pb-4 tw-flex-wrap">
          <a
            href="https://git-scm.com/doc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="tw-text-6xl tw-mr-8 tw-mb-4 hover:tw-w-20 hover:tw-h-20 transition duration-300"
              icon={githubIcon}
            />
          </a>
          <a
            href="https://kotlinlang.org/docs/home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="tw-text-6xl tw-mr-8 tw-mb-4 hover:tw-w-20 hover:tw-h-20 transition duration-300"
              icon={kotlinIcon}
            />
          </a>
          <a
            href="https://confluence.atlassian.com/jira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="tw-text-6xl tw-mr-8 tw-mb-4 hover:tw-w-20 hover:tw-h-20 transition duration-300"
              icon={jiraIcon}
            />
          </a>
          <a
            href="https://help.figma.com/hc/en-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="tw-text-6xl tw-mr-8 tw-mb-4 hover:tw-w-20 hover:tw-h-20 transition duration-300"
              icon={figmaIcon}
            />
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="tw-text-6xl tw-mr-8 tw-mb-4 hover:tw-w-20 hover:tw-h-20 transition duration-300"
              icon={reactIcon}
            />
          </a>
          <a
            href="https://www.swift.org/documentation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="tw-text-6xl tw-mr-8 tw-mb-4 hover:tw-w-20 hover:tw-h-20 transition duration-300"
              icon={swiftIcon}
            />
          </a>
          <a
            href="https://firebase.google.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="tw-text-6xl tw-mr-8 tw-mb-4 hover:tw-w-20 hover:tw-h-20 transition duration-300"
              icon={firebaseIcon}
            />
          </a>
          <a
            href="https://getbootstrap.com/docs/4.1/getting-started/introduction/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="tw-text-6xl tw-mr-8 tw-mb-4 hover:tw-w-20 hover:tw-h-20 transition duration-300"
              icon={bootstrapIcon}
            />
          </a>
          <a
            href="http://devs.redux.io/guides/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="tw-text-6xl tw-mb-4 hover:tw-w-20 hover:tw-h-20 transition duration-300"
              icon={reduxIcon}
            />
          </a>
        </div>
      </section>
    </div>
  );
});

export default ProjectInfo;
