import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#a98467]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hey there! I'm Anjali, and I'm passionate about bringing ideas to
            life through technology. With two enriching internships, I've laid a
            strong foundation in web development, specializing in React for the
            front end and Node.js for the backend. I've had the pleasure of
            working with various technologies, including MongoDB and Firebase,
            to create robust and dynamic web applications. Beyond web
            development, I've delved into the exciting world of data science,
            working on a range of projects that showcase my analytical skills.
            My journey has also led me to hackathons, where I've not only honed
            my problem-solving abilities but also reached the finals, a
            testament to my dedication.{" "}
          </p>

          <p className="py-2 text-gray-600">
            In every project and experience, I've embraced the opportunity to
            learn, grow, and make a tangible impact. I'm excited about the
            endless possibilities that technology offers, and I'm eager to
            continue pushing boundaries and creating meaningful solutions. Let's
            connect and explore how we can innovate together.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
