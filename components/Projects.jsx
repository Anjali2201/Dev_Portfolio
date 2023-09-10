import Image from "next/image";
import Link from "next/link";
import React from "react";
import CollegeWIT from "../public/assets/projects/Collegewit.png";
import GithubCrypt from "../public/assets/projects/githubCryp.png";
import athira from "../public/assets/projects/hridayam.png";
import gl from "../public/assets/projects/gl.png";

const data = [
  {
    title: "CollegeWIT",
    backgroundImg: CollegeWIT,
    // props
    projectUrl: "/collegewit",
    tech: "React JS",
  },
  {
    title: "GithubCrypt",
    backgroundImg: GithubCrypt,
    projectUrl: "/githubcrypt",
    tech: "Blockchain",
  },
  {
    title: "Hridayam",
    backgroundImg: athira,
    projectUrl: "/hridayam",
    tech: "React JS",
  },
  {
    title: "Gadget lab",
    backgroundImg: gl,
    projectUrl: "/gadgetlab",
    tech: "Material UI",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#a98467]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
              <Image
                className="rounded-xl group-hover:opacity-10"
                src={item.backgroundImg}
                alt="/"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                  {item.title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">{item.tech}</p>
                <Link href={item.projectUrl}>
                  <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
