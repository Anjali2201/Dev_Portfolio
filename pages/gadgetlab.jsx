import Image from "next/image";
import React from "react";
import gl from "../public/assets/projects/gl.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full px-4 py-20 justify-center items-center   ">
      <div className="flex h-[70vh] w-[70vw] p-1  rounded-lg shadow-xl max-w-[1240px] mx-auto ">
        <Image src={gl} alt="/" objectFit="fill" className="rounded-lg" />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h1 className="text-3xl font-bold">The Gadget lab</h1>
          <h3 className="mt-4">Overview</h3>
          <p>
            A platform to review gadgets and compare them with other gadgets. It
            is a web application built using node.js, express.js, mongoDB,
            mongoose. Many times we are confused about which gadget to buy. We
            have to search for reviews of different gadgets on different
            websites. This platform will help you to compare different gadgets
            and also to read reviews of different gadgets Post your review of
            any gadget and help others to make a decision.
          </p>

          <div className="flex items-center">
            <a
              href="https://github.com/Anjali2201/The-GadgetLab"
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
              href="https://the-gadget-lab.vercel.app/"
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
              <RiRadioButtonFill className="pr-1" /> AWS
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> MongoDB
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
