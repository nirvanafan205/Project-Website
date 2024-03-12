import React, { useEffect, useState } from "react";
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

const ProjectInfo = () => {
  return (
    <div>
      <section className="tw-bg-pink-100 tw-flex tw-flex-col tw-justify-center tw-items-center">
        <h2 className="tw-text-2xl tw-font-bold tw-mb-4">
          Technologies and Skills
        </h2>
        <div className="tw-flex tw-pt-4 tw-pb-4 tw-flex-wrap">
          <Icon className="tw-text-6xl tw-mr-8 tw-mb-4" icon={githubIcon} />
          <Icon className="tw-text-6xl tw-mr-8 tw-mb-4" icon={kotlinIcon} />
          <Icon className="tw-text-6xl tw-mr-8 tw-mb-4" icon={jiraIcon} />
          <Icon className="tw-text-6xl tw-mr-8 tw-mb-4" icon={figmaIcon} />
          <Icon className="tw-text-6xl tw-mr-8 tw-mb-4" icon={reactIcon} />
          <Icon className="tw-text-6xl tw-mr-8 tw-mb-4" icon={swiftIcon} />
          <Icon className="tw-text-6xl tw-mr-8 tw-mb-4" icon={firebaseIcon} />
          <Icon className="tw-text-6xl tw-mr-8 tw-mb-4" icon={bootstrapIcon} />
          <Icon className="tw-text-6xl tw-mb-4" icon={reduxIcon} />
        </div>
      </section>
    </div>
  );
};

export default ProjectInfo;
