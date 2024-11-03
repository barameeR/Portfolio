import { SectionWrapper } from "@/data";
import React from "react";
import { Timeline, TimelineEntry } from "./ui/TimeLine";
import Divider from "./ui/Devider";

const Experiences = () => {
  const data: TimelineEntry[] = [
    {
      title: "Sep 2023 - Present",
      content: (
        <div>
          <p className="text-white-100  text-2xl md:text-xl font-bold">
            CloudCon Pty Ltd
          </p>
          <p className="text-white-200  text-xl md:text-sm font-bold mb-3">
            Associated Software Developer
          </p>
          <Divider />
          <ul className="list-disc ml-5">
            <li className="text-white-200 text-lg md:text-sm font-semibold mb-4">
              Developed full-stack software solutions using Vue.js and .NET for
              web applications.
            </li>
            <li className="text-white-200 text-lg md:text-sm font-semibold mb-4">
              Implemented integrations with third-party services like Xero,
              demonstrating an understanding of data exchange and API
              integrations.
            </li>
            <li className="text-white-200 text-lg md:text-sm font-semibold mb-4">
              Collaborated effectively with cross-functional teams to design and
              develop new features, showcasing strong communication and teamwork
              skills.
            </li>
            <li className="text-white-200 text-lg md:text-sm font-semibold mb-4">
              Conducted thorough troubleshooting and debugging of software
              issues to ensure optimal performance, highlighting a meticulous
              approach to problem-solving.
            </li>
            <li className="text-white-200 text-lg md:text-sm font-semibold mb-4">
              Participated in code reviews to maintain high-quality code
              standards, demonstrating a commitment to best practices.
            </li>
            <li className="text-white-200 text-lg md:text-sm font-semibold mb-4">
              Contributed to the development and maintenance of technical
              documentation, reflecting a strong attention to detail and ability
              to communicate complex information clearly.
            </li>
            <li className="text-white-200 text-lg md:text-sm font-semibold mb-4">
              Assisted in the deployment and monitoring of applications in
              production environments, gaining practical experience with
              software deployment processes
            </li>
            <li className="text-white-200 text-lg md:text-sm font-semibold mb-4">
              Engaged in continuous learning and professional development to
              stay current with industry trends and technologies, demonstrating
              a proactive and adaptable mindset.
            </li>
            <li className="text-white-200 text-lg md:text-sm font-semibold mb-4">
              Developed and deployed multiple cloud applications utilizing
              UpviseJS framework for seamless mobile and web integration,
              leveraging its native app capabilities and cloud IDE for efficient
              development.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "May 2023 - July 2023",
      content: (
        <div>
          <p className="text-white-100  text-2xl md:text-xl font-bold">
            CloudCon Pty Ltd
          </p>
          <p className="text-white-200  text-xl md:text-sm font-bold mb-3">
            Interns - Software Developer
          </p>
          <Divider />
          <ul className="list-disc ml-5">
            <li className="text-white-200 text-lg md:text-sm font-semibold mb-4">
              Collaborated in a team environment and developed unit tests to
              ensure reliability and functionality of Cloudcon products.
            </li>
            <li className="text-white-200 text-lg md:text-sm font-semibold mb-4">
              Analyzed proof of concepts for both frontend (Vue.js) and backend
              (.NET), enhancing technical skills and understanding.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default SectionWrapper(Experiences, "experience");
