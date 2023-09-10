import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      {/* -------------------- left side ------------------- */}
      <div
        style={{
          maxWidth: "1240px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#a98467]"> Anjali</span>
          </h1>
          <h1 className="py-2 text-gray-700">Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>

          {/* --------------------------- Social media icons ------------------------- */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            {/* --- Linkedin------ */}
            <a
              href="https://www.linkedin.com/in/anjallliii/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer 
                hover:scale-110 ease-in duration-300 hover:bg-[#a98467] hover:text-white"
              >
                <FaLinkedinIn />
              </div>
            </a>

            {/* --- Github------ */}
            <a
              href="https://github.com/Anjali2201"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#a98467] hover:text-white">
                <FaGithub />
              </div>
            </a>

            {/* --- Email------ */}
            <Link href="mailto:anjalikushwaha031@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#a98467] hover:text-white">
                <AiOutlineMail />
              </div>
            </Link>

            {/* --- Resume------ */}
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#a98467] hover:text-white">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
