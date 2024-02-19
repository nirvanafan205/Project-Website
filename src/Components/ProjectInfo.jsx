import React from "react";
import { FaReact, FaGithub, FaJira, FaFigma } from "react-icons/fa";

const ProjectInfo = () => {
  return (
    <div>
      {/* About Section */}
      <section className="tw-bg-indigo-300">
        <h2>About</h2>
        <p>Write about your project here...</p>
      </section>

      {/* Feature Section */}
      <section className="tw-bg-violet-200">
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
        </ul>
      </section>

      {/* Framework Design Section */}
      <section className="tw-bg-emerald-100">
        <h2>Framework Design</h2>
        <p>Describe the framework design of your project...</p>
      </section>

      {/* Technologies and Skills Section */}
      <section className="tw-bg-pink-100 tw-flex tw-items-center">
        <h2 className="tw-mr-4">Technologies and Skills</h2>
        <div className="tw-flex">
          <FaReact className="tw-text-3xl tw-mr-4" />
          <FaGithub className="tw-text-3xl tw-mr-4" />
          <FaJira className="tw-text-3xl tw-mr-4" />
          <FaFigma className="tw-text-3xl tw-mr-4" />
        </div>
      </section>
    </div>
  );
};

export default ProjectInfo;
