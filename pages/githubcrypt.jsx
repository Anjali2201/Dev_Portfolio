import Image from "next/image";
import React from "react";
import githubcrypt from "../public/assets/projects/githubcrypt.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full px-4 py-20 justify-center items-center   ">
      <div
        className="flex h-[70vh] w-[70vw] p-1  rounded-lg shadow-xl max-w-[1240px] mx-auto 
        justify-center items-center hidden md:flex "
      >
        <Image
          src={githubcrypt}
          alt="/"
          objectFit="fill"
          className="rounded-lg"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h1 className="text-3xl font-bold">GithubCrypt</h1>
          <h3 className="mt-4">Overview</h3>
          <p>
            GithubCrypt is a Decentralized Platform for Open Source developers.
            It provides a platform for developers to find projects to work on
            and get rewarded for their work. It also provides a platform for
            project owners to find developers to work on their projects and pay
            them in crypto. Developers can post their projects issues and get it
            solved by other developers
          </p>

          <h3 className="py-2">Features</h3>

          <p>
            A few of the things you can do with GithubCrypt: <br />
            - Post your project: Post your project issues and get it solved by
            other developers. <br />
            - Explore Open Source Projects: Find and get involved in open source
            projects. <br />- Get Rewarded for your work: Get rewarded for your
            work in crypto. <br />- Find Developers for your project: Find
            developers to work on your project and pay them in crypto.
          </p>

          <div className="flex items-center">
            <a
              href="https://github.com/Anjali2201/GithubCrypt"
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
              href="https://githubcrypt.netlify.app/"
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
              <RiRadioButtonFill className="pr-1" /> Blockchain
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Shardeum
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Polygon
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Alchemy
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Hardhat
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
