import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Anjali | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Anjali Kushwaha</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/anjallliii/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Anjali2201"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Data Science
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>MUI
            <span className="px-2">|</span>Node
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span>AWS
            <span className="px-2">|</span>Mongodb
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Athira health</span>
            <span className="px-2">|</span>Nagpur
          </p>
          <p className="py-1 italic">
            Full Stack Web Developer Intern (June, 2023 – August, 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Worked to Develop an AI based health monitoring Web
              Application.(React, MUI)
            </li>
            <li>
              Worked with REST APIs and Ml models to develop robust and scalable
              back ends (Flask, MongoDB)
            </li>
            <li>
              Improved website performance and speed through optimization
              techniques. (AWS,Hostinger)
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Frontend Developer Intern</span>
            <span className="px-2">|</span>Gurgaon, Delhi
          </p>
          <p className="py-1 italic">Briefly (July, 2022 – August, 2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Worked on a project titled Briefly Client Dashboard which was
              aimed at designing the frontend design for onboarding clients on
              the platform
            </li>
            <li>
              Collaborated with the design team to ensure website design and
              layout were visually appealing and user-friendly
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Technical Co lead</span>
            <span className="px-2">|</span>Nagpur, Maharashtra
          </p>
          <p className="py-1 italic">
            Geeks for geeks RCOEM chapter ( August, 2022 - August 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Managed a team of skilled developers to create multiple projects
              related to chapter.
            </li>
            <li>
              Collaborated with various industry experts for conducting webinar
              in college.
            </li>
            <li>
              Conducted a seminar on Web development and data science
              fundamentals
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
