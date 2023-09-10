import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";
import Mui from "../public/assets/skills/Mui.png";
import Mongo from "../public/assets/skills/mongo.png";
import Node from "../public/assets/skills/node.png";
import GCP from "../public/assets/skills/GCP.png";

const data = [
  {
    img: Html,
    name: "HTML",
  },
  {
    img: Css,
    name: "CSS",
  },
  {
    img: Javascript,
    name: "Javascript",
  },
  {
    img: ReactImg,
    name: "ReactJS",
  },
  {
    img: NextJS,
    name: "NextJS",
  },
  {
    img: Node,
    name: "NodeJS",
  },
  {
    img: Mui,
    name: "MUI",
  },
  {
    img: Mongo,
    name: "MongoDB",
  },
  {
    img: Firebase,
    name: "Firebase",
  },
  {
    img: Github,
    name: "Github",
  },
  {
    img: AWS,
    name: "AWS",
  },

  {
    img: GCP,
    name: "Google Cloud",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#a98467]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        {/* --------------------------- Skills ------------------------- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-3">
          {data.map((item) => (
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={item.img} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
