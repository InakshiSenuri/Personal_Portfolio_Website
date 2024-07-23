import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// import { LuGraduationCap } from "react-icons/lu";
import portofolioImg from "@/public/portofolioImg.png";
import roboImg from "@/public/robo.jpeg"
import doneImg from "@/public/done.jpeg"
import ikonImg from "@/public/ikonImg.png"
import aboutImg from "@/public/about.jpg";
// import inakshiImg from "@/public/inakshi.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Moraspirit Web and Tech Pillar",
    Position: "Pillar Member",
    // description:
    //   "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    // icon: React.createElement(LuGraduationCap),
    date: "2022/23 and 2023/24 ",
    imageUrl: "/expImg/moraspirit.png",

  },
  {
    title: "DevLabs Developer",
    Position: "Developer",
    // description:
    //   "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    // icon: React.createElement(LuGraduationCap),
    date: "2022/23 and 2023/24",
    imageUrl: "/expImg/devlabs1.jpg",
  },
  {
    title: "Catholic Student Movement",
    Position: "Assistant Secretary",
    // description:
    //   "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    // icon: React.createElement(LuGraduationCap),
    date: "2023/24",
    imageUrl: "/expImg/csm.png",
  },
  {
    title: "DevLabs - Marketing Team",
    Position: "Crew Member",
    // description:
    //   "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    // icon: React.createElement(LuGraduationCap),
    date: "2022/23",
    imageUrl: "/expImg/devlabs2.jpg",
  },
  {
    title: "SEDS Web and Media Team",
    Position: "Pillar Member",
    // description:
    //   "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    // icon: React.createElement(LuGraduationCap),
    date: "2022/23",
    imageUrl: "/expImg/seds.png",
  },
  
  {
    title: "Aviation Club - DMC",
    Position: "Head Committee",
    // description:
    //   "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    // icon: React.createElement(LuGraduationCap),
    date: "2019/20",
    imageUrl: "/expImg/dmc.png",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    tags: ["Framer /", "TypeScript /" ,"Next.js /", "Tailwind "],
    imageUrl: portofolioImg,
    Type: "Individual",
    GitLink: "https://github.com/Inakshi-07/portfolio",
    AppLink: "https://inakshi-07.github.io/portfolio/",
  },
  {
    id: 2,
    title: "IKON Platform",
    tags: ["React /", "TypeScript /", "Node.js /", "Tailwind /", "MySQL /","Express"],
    imageUrl: ikonImg,
    Type: "Individual",
    GitLink: "https://github.com/Inakshi-07/portfolio",
    AppLink: "https://inakshi-07.github.io/portfolio/",
  },
  {
    id: 3,
    title: "Done With IT",
    tags: ["React Native /", "Tailwind"],
    imageUrl: doneImg,
    Type: "Individual",
    GitLink: "https://github.com/Inakshi-07/portfolio",
    AppLink: "https://inakshi-07.github.io/portfolio/",
  },
  {
    id: 4,
    title: "Kids Robot Car",
    tags: ["Arduino /", "C"],
    imageUrl: roboImg,
    Type: "Individual",
    GitLink: "https://github.com/Inakshi-07/portfolio",
    AppLink: "https://inakshi-07.github.io/portfolio/",
  },
] as const;

export const skillsData = [
    {
      name: "HTML & CSS",
      icon:"/iconsImg/css.png",
    },
      {
        name: "MySQL",  
        icon: "/iconsImg/sql.png",       
      },
      {
        name: "Bootstrap",
        icon: "/iconsImg/bootstrap.png",
      },
      {
        name: "React Native",  
        icon: "/iconsImg/native.png",       
      },
      {
        name: "Java",
        icon: "/iconsImg/java.png",
      },
      {
        name: "C",  
        icon: "/iconsImg/c.png",       
      },
      {
        name: "Python",
        icon: "/iconsImg/python.png",
      },
      {
        name: "MongoDB",
        icon: "/iconsImg/mongo.png",
      },
      {
        name: "Tailwind",  
        icon: "/iconsImg/tailwind.png",       
      },
      {
        name: "Next.js",
        icon: "/iconsImg/next.png",
      },

      {
        name: "React",  
        icon: "/iconsImg/react.png",       
      },
      {
        name: "TypeScript",
        icon: "/iconsImg/typescript.png",
      },
      {
        name: "JavaScript",  
        icon: "/iconsImg/js.png", 
      },
] as const;

export const SocialData = [
  {
    title: "Facebook",
    Link: "https://www.facebook.com/Inakshi07/",
    icon: React.createElement(FaFacebook),
    
  },
  {
    title: "Github",
    Link: "https://github.com/InakshiSenuri",
    icon: React.createElement(FaGithub),

  },
  {
    title: "Instagram",
    Link: "https://www.facebook.com/Inakshi07/",
    icon: React.createElement(FaInstagramSquare),

  },
  {
    title: "Linkedin",
    Link: "https://www.linkedin.com/in/senuri-inakshi-94b4b721a/",
    icon: React.createElement(FaLinkedin),

  },
  
] as const;
