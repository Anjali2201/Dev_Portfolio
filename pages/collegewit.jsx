import Image from "next/image";
import React from "react";
import CollegeWIT from "../public/assets/projects/collegewit2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full px-4 py-20 justify-center items-center   ">
      {/* //hide image in mobile */}
      <div
        className="flex h-[70vh] w-[70vw] p-1  rounded-lg shadow-xl max-w-[1240px] mx-auto 
        justify-center items-center hidden md:flex "
      >
        <Image
          src={CollegeWIT}
          alt="/"
          objectFit="fill"
          className="rounded-lg"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h1 className="text-3xl font-bold">CollegeWIT</h1>
          <h3 className="mt-4">Overview</h3>
          <p>
            CollegeWIT is a platform that aims to provide a one-stop solution to
            cover the most commonly occurred problems that students face in
            their college academics. The purpose of this application is to help
            students tackle their academic challenges in a more efficient and
            effective way.{" "}
          </p>

          <h3 className="py-2">Features</h3>

          <p>
            1. Events Section : Upcoming Events Information (organizations can
            contact us to host their event on our site) <br />
            2. Questions Section : Ask Questions/Doubts(user can ask
            anonymously). Tags ,which makes it easier to find content of
            relevant topic. <br />
            3. Resources Section: PYQs and Notes (semester wise) Resources for
            Placement Preparation. Create connection with other students and
            mentors. <br />
            4. Contributors Section: Register as a contributor to answer
            questions. Get points on each answer and see your name on Top
            Contributors Leader board.
          </p>

          <div className="flex items-center">
            <a
              href="https://github.com/College-WIT/College_Wit_Website"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="  justify-center items-center flex w-24 h-12 mt-4
              rounded-md shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#a98467] hover:text-white"
              >
                Code
              </div>
            </a>
            <a
              href="https://collegewit.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="  justify-center items-center flex w-24 h-12 mt-4 ml-4
              rounded-md shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#a98467] hover:text-white"
              >
                Demo
              </div>
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>

            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> React
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> MUI
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Javascript
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Firebase
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Django
            </p>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
