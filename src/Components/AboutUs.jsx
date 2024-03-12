import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
  {
    name: "Thomas Dinh",
    role: "Team Lead/Full Stack Developer",
    imageUrl: "/Thomas.png",
    linkedinUrl: "https://www.linkedin.com/in/qtdinh/",
    githubUrl: "https://github.com/qtdinh",
  },
  {
    name: "Carlos Figueroa",
    role: "Quality Assurance Developer",
    imageUrl: "/Carlos.jpg",
    linkedinUrl: "https://www.linkedin.com/in/carlos-figueroa-3a8358176/",
    githubUrl: "https://github.com/cfiguer055",
  },
  {
    name: "Taylor Nastally",
    role: "Android Developer",
    imageUrl: "/Taylor.jpg",
    linkedinUrl: "https://www.linkedin.com/in/taylor-nastally-01aa11219/",
    githubUrl: "https://github.com/Viper-one-one",
  },
  {
    name: "Matthew Garcia",
    role: "Front End Developer",
    imageUrl: "/Matthew.jpg",
    linkedinUrl: "https://www.linkedin.com/in/matthew-garcia-b0301b217/",
    githubUrl: "https://github.com/nirvanafan205",
  },
];

const AboutUs = () => {
  return (
    <div className="tw-mx-auto tw-p-5">
      <div className="tw-overflow-x-auto">
        <table className="tw-min-w-full tw-table-auto">
          <thead className="tw-bg-gray-200">
            <tr>
              <th className="tw-px-4 tw-py-2 tw-text-left">Name</th>
              <th className="tw-px-4 tw-py-2 tw-text-left">Role</th>
              <th className="tw-px-4 tw-py-2 tw-text-left">Social</th>
            </tr>
          </thead>
          <tbody className="tw-bg-white">
            {teamMembers.map((member, index) => (
              <tr key={index} className="tw-border-b">
                <td className="tw-flex tw-items-center tw-px-4 tw-py-2">
                  <img
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    className="tw-h-14 tw-w-14 tw-rounded-full tw-mr-4"
                  />
                  {member.name}
                </td>
                <td className="tw-px-4 tw-py-2">{member.role}</td>
                <td className="tw-px-4 tw-py-2">
                  <a
                    href={member.linkedinUrl}
                    className="tw-mr-3 tw-text-blue-600 hover:tw-text-blue-800"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                  </a>
                  <a
                    href={member.githubUrl}
                    className="tw-text-black hover:tw-text-gray-800"
                  >
                    <FontAwesomeIcon icon={faGithubSquare} size="2xl" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutUs;
