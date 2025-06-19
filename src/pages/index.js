import React from "react";
import Image from "next/image";
import MenuBarIcon from "../assets/MenuBarIcon";
import WebIcon from "../assets/web-development.png";
import BackendIcon from "../assets/backend-development.png";
import MobileIcon from "../assets/mobile-development.png";
import CreatorIcon from "../assets/creator.png";
import ReactImage from "../assets/reactjs-966214a8.png";
import MetaImage from "../assets/meta-e386841a.png";
import FullStackImage from "../assets/fullstack-65a5495e.png";
import HtmlIcon from "../assets/tech/html.png";
import CssIcon from "../assets/tech/css.png";
import JavascriptIcon from "../assets/tech/javascript.png";
import TypescriptIcon from "../assets/tech/typescript.png";
import ReactIcon from "../assets/tech/reactjs.png";
import ReduxIcon from "../assets/tech/redux.png";
import TailwindIcon from "../assets/tech/tailwind.png";
import NodejsIcon from "../assets/tech/nodejs.png";
import MongoDBIcon from "../assets/tech/mongodb.png";
import GitIcon from "../assets/tech/git.png";
import FegmaIcon from "../assets/tech/figma.png";
import SassIcon from "../assets/tech/sass.png";
import SqlIcon from "../assets/tech/sql.png";
import BoostgradeIcon from "../assets/Boostgrade.png";
import AyooIcon from "../assets/ayoo.png";
import EprintIcon from "../assets/eprint.png";
import LeadtrailorIcon from "../assets/leadtrailor.png";
import Club3 from "../assets/club3.png";
import { BallCanvas, ComputersCanvas, EarthCanvas } from "@/components/canvas";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-transparent">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <a className="flex items-center gap-2" href="/">
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              Hiren Savaliya &nbsp;
              <span className="sm:block hidden"> | Full Stack Developer</span>
            </p>
          </a>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#work">Work</a>
            </li>
            <li></li>
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <MenuBarIcon />
            <div className="hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                  <a href="#about">About</a>
                </li>
                <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                  <a href="#work">Work</a>
                </li>
                <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative w-full h-screen mx-auto">
        <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]"></div>
            <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
          </div>
          <div>
            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
              Hi, I'm <span class="text-[#915EFF]">Hiren Savaliya</span>
            </h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
              Front End Developer
            </p>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "auto",
            touchAction: "none",
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <ComputersCanvas />
          </div>
        </div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <div
                className="w-3 h-3 rounded-full bg-secondary mb-1"
                style={{ transform: "translateY(0.871635px) translateZ(0px)" }}
              ></div>
            </div>
          </a>
        </div>
      </section>
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="about">
          &nbsp;
        </span>
        <div style={{ opacity: 1, transform: "none;" }}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Introduction
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Overview.
          </h2>
        </div>
        <p
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          style={{ opacity: 1, transform: "none;" }}
        >
          I'm a skilled full-stack developer with expertise in TypeScript and
          JavaScript, specializing in modern frontend and backend frameworks
          such as React, Next.js, and Node.js. I design and develop scalable,
          high-performance, and user-centric web applications, addressing
          real-world challenges through clean code and robust architecture.
          <br />
          <br />
          On the frontend, I craft responsive and accessible interfaces using
          React, Tailwind CSS, and Next.js, ensuring seamless user experiences
          across devices. I have experience implementing state management with
          Redux and Context API, integrating third-party APIs, and optimizing
          frontend performance.
          <br />
          <br />
          On the backend, I build RESTful and GraphQL APIs using Node.js and
          Express.js, with a focus on security, efficiency, and scalability. I'm
          proficient in working with MongoDB, PostgreSQL, and MySQL, and I have
          hands-on experience in authentication, authorization, role-based
          access control, and API integration.
          <br />
          <br />I thrive in Agile development environments, collaborate
          effectively with cross-functional teams, and follow best practices
          like clean architecture, code reviews, and continuous
          integration/deployment. I'm a fast learner, highly adaptable, and
          continuously stay updated with the latest trends and tools in web
          development.
        </p>
        <div
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          style={{ opacity: 1, transform: "none;" }}
        >
          <p>My main skills:</p>
          <p>- Languages: HTML, CSS, JavaScript, TypeScript</p>
          <p>- Frontend: React.js, Next.js, Bootstrap, Tailwind CSS, SCSS</p>
          <p>- State Management: Redux Toolkit, Context API</p>
          <p>- Backend: Node.js, Express.js, AWS Lambda</p>
          <p>- Databases: MongoDB, MySQL, PostgreSQL, Redis</p>
          <p>
            - Cloud & DevOps: AWS (EC2, S3, Lambda), Google Cloud, Azure,
            Vercel, Netlify
          </p>
          <p>- APIs & Tools: REST APIs, GraphQL, Swagger, Postman</p>
          <p>- Testing: Jest, React Testing Library, Cypress, Sentry</p>
          <p>- Version Control: Git, GitHub, GitLab</p>
          <p>- Project Management: Jira, Azure DevOps</p>
        </div>
        <div className="mt-20 flex flex-wrap gap-10">
          <div className="xs:w-[250px] w-full">
            <div
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              style={{ opacity: 1, transform: "none;" }}
            >
              <div
                options="[object Object]"
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <Image
                  src={WebIcon}
                  alt="web-development"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  Front Developer
                </h3>
              </div>
            </div>
          </div>
          <div
            className="xs:w-[250px] w-full"
            style={{
              transform:
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);",
            }}
          >
            <div
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              style={{ opacity: 1, transform: "none;" }}
            >
              <div
                options="[object Object]"
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <Image
                  src={BackendIcon}
                  alt="backend-development"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  Backend Developer
                </h3>
              </div>
            </div>
          </div>
          <div
            className="xs:w-[250px] w-full"
            style={{
              transform:
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);",
            }}
          >
            <div
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              style={{ opacity: 1, transform: "none;" }}
            >
              <div
                options="[object Object]"
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <Image
                  src={MobileIcon}
                  alt="mobile-development"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  JavaScript Developer
                </h3>
              </div>
            </div>
          </div>
          <div className="xs:w-[250px] w-full">
            <div
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              style={{ opacity: 1, transform: "none;" }}
            >
              <div
                options="[object Object]"
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <Image
                  src={CreatorIcon}
                  alt="creator"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  Software Developer
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span class="hash-span" id="work">
          &nbsp;
        </span>
        <div style={{ opacity: "1", transform: "none" }}>
          <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
            What I have done so far
          </p>
          <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
            Work Experience.
          </h2>
        </div>
        <div class="mt-20 flex flex-col">
          <div class="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
            <div id="" class="vertical-timeline-element">
              <span
                class="vertical-timeline-element-icon bounce-in"
                style={{ background: "rgb(56, 62, 86)" }}
              >
                <div class="flex justify-center items-center w-full h-full">
                  <Image
                    src={ReactImage}
                    alt=""
                    width={60}
                    height={60}
                    class="w-[60%] h-[60%] object-contain"
                  />
                </div>
              </span>
              <div
                class="vertical-timeline-element-content bounce-in"
                style={{
                  background: "rgb(29, 24, 54)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <div
                  class="vertical-timeline-element-content-arrow"
                  style={{ borderRight: "7px solid rgb(35, 38, 49)" }}
                ></div>
                <div>
                  <h3 class="text-white text-[24px] font-bold">
                    Front End Developer
                  </h3>
                  <p
                    class="text-secondary text-[16px] font-semibold"
                    style={{ margin: "0px" }}
                  ></p>
                </div>
                <ul class="mt-5 list-disc ml-5 space-y-2">
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Built high-performance web applications using React, Vue,
                    and Next.js/Nuxt.js
                  </li>
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Optimized front-end performance, improving load times by 30%
                    with lazy loading and efficient state management
                  </li>
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Integrated RESTful APIs and GraphQL for seamless data
                    fetching
                  </li>
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Developed reusable component libraries to maintain UI
                    consistency across projects
                  </li>
                </ul>
                <span class="vertical-timeline-element-date">
                  April 2021 - Present
                </span>
              </div>
            </div>
            <div id="" class="vertical-timeline-element">
              <span
                class="vertical-timeline-element-icon bounce-in"
                style={{ background: "rgb(230, 222, 221)" }}
              >
                <div class="flex justify-center items-center w-full h-full">
                  <Image
                    src={MetaImage}
                    alt=""
                    width={60}
                    height={60}
                    class="w-[60%] h-[60%] object-contain"
                  />
                </div>
              </span>
              <div
                class="vertical-timeline-element-content bounce-in"
                style={{
                  background: "rgb(29, 24, 54)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <div
                  class="vertical-timeline-element-content-arrow"
                  style={{ borderRight: "7px solid rgb(35, 38, 49)" }}
                ></div>
                <div>
                  <h3 class="text-white text-[24px] font-bold">
                    Backend Developer
                  </h3>
                  <p
                    class="text-secondary text-[16px] font-semibold"
                    style={{ margin: "0px" }}
                  ></p>
                </div>
                <ul class="mt-5 list-disc ml-5 space-y-2">
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Built and maintained scalable backend systems using Laravel,
                    Node.js, and Python (Django, FastAPI)
                  </li>
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Designed and optimized MySQL, PostgreSQL, and MongoDB
                    databases
                  </li>
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Implemented authentication and security measures using JWT,
                    OAuth, and Firebase
                  </li>
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Developed automation scripts and data processing pipelines
                    using Python
                  </li>
                </ul>
                <span class="vertical-timeline-element-date">
                  September 2013 - Present
                </span>
              </div>
            </div>
            <div id="" class="vertical-timeline-element">
              <span
                class="vertical-timeline-element-icon bounce-in"
                style={{ background: "rgb(230, 222, 221)" }}
              >
                <div class="flex justify-center items-center w-full h-full">
                  <Image
                    width={60}
                    height={60}
                    src={FullStackImage}
                    alt=""
                    class="w-[60%] h-[60%] object-contain"
                  />
                </div>
              </span>
              <div
                class="vertical-timeline-element-content bounce-in"
                style={{
                  background: "rgb(29, 24, 54)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <div
                  class="vertical-timeline-element-content-arrow"
                  style={{ borderRight: "7px solid rgb(35, 38, 49)" }}
                ></div>
                <div>
                  <h3 class="text-white text-[24px] font-bold">
                    Full Stack Developer
                  </h3>
                  <p
                    class="text-secondary text-[16px] font-semibold"
                    style={{ margin: "0px" }}
                  ></p>
                </div>
                <ul class="mt-5 list-disc ml-5 space-y-2">
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Developed high-performance web applications using React,
                    Next.js, and Node.js,{" "}
                  </li>
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Optimized API and database queries, improving response time
                    by 40%
                  </li>
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Built scalable server infrastructure using AWS and Firebase
                    for enhanced performance
                  </li>
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Improved UI/UX, leading to a 25% increase in user retention
                  </li>
                  <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                    Led code reviews and team collaboration to enhance code
                    quality and maintainability
                  </li>
                </ul>
                <span class="vertical-timeline-element-date">
                  June 2023 - Present
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span class="hash-span" id="">
          &nbsp;
        </span>
        <div class="flex flex-row flex-wrap justify-center gap-10">
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={HtmlIcon?.default || HtmlIcon?.src || HtmlIcon}
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={CssIcon?.default || CssIcon?.src || CssIcon}
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={
                    JavascriptIcon?.default ||
                    JavascriptIcon?.src ||
                    JavascriptIcon
                  }
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={
                    TypescriptIcon?.default ||
                    TypescriptIcon?.src ||
                    TypescriptIcon
                  }
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={ReactIcon?.default || ReactIcon?.src || ReactIcon}
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={ReduxIcon?.default || ReduxIcon?.src || ReduxIcon}
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={
                    TailwindIcon?.default || TailwindIcon?.src || TailwindIcon
                  }
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={NodejsIcon?.default || NodejsIcon?.src || NodejsIcon}
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={MongoDBIcon?.default || MongoDBIcon?.src || MongoDBIcon}
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={GitIcon?.default || GitIcon?.src || GitIcon}
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={FegmaIcon?.default || FegmaIcon?.src || FegmaIcon}
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={SassIcon?.default || SassIcon?.src || SassIcon}
                />
              </div>
            </div>
          </div>
          <div class="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <BallCanvas
                  icon={SqlIcon?.default || SqlIcon?.src || SqlIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span class="hash-span" id="">
          &nbsp;
        </span>
        <div style={{ opacity: "1", transform: "none" }}>
          <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider ">
            My work
          </p>
          <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>
        </div>
        <div class="w-full flex">
          <p
            class="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            style={{ opacity: "1", transform: "none" }}
          >
            Following projects showcases my skills and experience through
            real-world examples of my work.It reflects my ability to solve
            complex problems, work with different technologies, and manage
            projects effectively.
          </p>
        </div>
        <div class="mt-20 flex flex-wrap gap-7">
          <div style={{ opacity: "1", transform: "none" }}>
            <div
              class="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
              style={{
                transform:
                  "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
              }}
            >
              <div class="relative w-full h-[230px]">
                <img
                  src={
                    BoostgradeIcon?.default ||
                    BoostgradeIcon?.src ||
                    BoostgradeIcon
                  }
                  alt="Boostgrad"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover rounded-2xl"
                  width="360"
                  height="230"
                />
              </div>
              <div class="mt-5">
                <h3 class="text-white font-bold text-[24px]">
                  Boostgrad – EdTech Learning Platform
                </h3>
                <p class="mt-2 text-secondary text-[14px]">
                  A modern, interactive web application designed to streamline
                  online education. Boostgrad allows students to enroll in
                  courses, track their learning progress, complete assignments,
                  and engage with instructors in real-time. The platform is
                  designed with a focus on usability, performance, and
                  accessibility, making learning simple and engaging across all
                  devices.
                </p>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <p class="text-[14px] blue-text-gradient">#react</p>
                <p class="text-[14px] green-text-gradient">#node</p>
                <p class="text-[14px] pink-text-gradient">#scss</p>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: "none" }}>
            <div class="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
              <div class="relative w-full h-[230px]">
                <img
                  src={AyooIcon?.default || AyooIcon?.src || AyooIcon}
                  alt="Ayoo Care"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover rounded-2xl"
                  width="360"
                  height="230"
                />
              </div>
              <div class="mt-5">
                <h3 class="text-white font-bold text-[24px]">
                  Ayoo Care – Healthcare Appointment & Consultation Platform
                </h3>
                <p class="mt-2 text-secondary text-[14px]">
                  Web application that enables users to search for healthcare
                  providers, book appointments, and manage their health records
                  online. Ayoo Care aims to simplify the healthcare experience
                  for patients and providers alike.
                </p>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <p class="text-[14px] blue-text-gradient">#React</p>
                <p class="text-[14px] pink-text-gradient">#css</p>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: "none" }}>
            <div class="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
              <div class="relative w-full h-[230px]">
                <img
                  src={EprintIcon?.default || EprintIcon?.src || EprintIcon}
                  alt="ePrintSaaS"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover rounded-2xl"
                  width="360"
                  height="230"
                />
              </div>
              <div class="mt-5">
                <h3 class="text-white font-bold text-[24px]">
                  ePrintSaaS – Online Printing & Document Management SaaS
                </h3>
                <p class="mt-2 text-secondary text-[14px]">
                  ePrintSaaS is a cloud-based printing and document management
                  platform that enables users to upload, customize, and order
                  prints for documents, posters, and branded materials. Designed
                  for both individuals and businesses, the platform simplifies
                  the printing process while ensuring high-quality output and
                  real-time order tracking.
                </p>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <p class="text-[14px] blue-text-gradient">#vue</p>
                <p class="text-[14px] green-text-gradient">#python</p>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: "none" }}>
            <div class="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
              <div class="relative w-full h-[230px]">
                <img
                  src={
                    LeadtrailorIcon?.default ||
                    LeadtrailorIcon?.src ||
                    LeadtrailorIcon
                  }
                  alt="LeadTailor"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover rounded-2xl"
                  width="360"
                  height="230"
                />
              </div>
              <div class="mt-5">
                <h3 class="text-white font-bold text-[24px]">
                  LeadTailor – AI-Powered Lead Generation & CRM Tool
                </h3>
                <p class="mt-2 text-secondary text-[14px]">
                  A comprehensive lead generation and CRM platform that
                  leverages AI to help businesses identify and engage potential
                  customers more effectively.
                </p>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <p class="text-[14px] blue-text-gradient">#nextjs</p>
                <p class="text-[14px] green-text-gradient">#node</p>
                <p class="text-[14px] pink-text-gradient">#tailwind</p>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: "none" }}>
            <div class="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
              <div class="relative w-full h-[230px]">
                <img
                  src={Club3?.default || Club3?.src || Club3}
                  alt="Club3"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover rounded-2xl"
                  width="360"
                  height="230"
                />
              </div>
              <div class="mt-5">
                <h3 class="text-white font-bold text-[24px]">
                  Club3 – NFT Membership & Event Management Platform
                </h3>
                <p class="mt-2 text-secondary text-[14px]">
                  Club3 is a cutting-edge Web3-based membership platform that
                  leverages NFTs to manage exclusive access to clubs, events,
                  and digital communities. Built with a focus on
                  decentralization and security, Club3 allows users to mint
                  NFTs, verify ownership, and gain access to premium content,
                  physical venues, or virtual experiences.
                </p>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <p class="text-[14px] blue-text-gradient">#next</p>
                <p class="text-[14px] green-text-gradient">#tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="relative z-0">
        <section class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
          <span class="hash-span" id="contact">
            &nbsp;
          </span>
          <div class="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
            <div
              class="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
              style={{
                height: "500px",
                transform: "translateX(0%) translateY(0px) translateZ(0px)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  pointerEvents: "auto",
                  touchAction: "none",
                }}
              >
                <div style={{ width: "100%", height: "100%" }}>
                  <canvas
                    data-engine="three.js r149"
                    width="2304"
                    height="1000"
                    style={{
                      display: "block",
                      width: "1152px",
                      height: "500px",
                    }}
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="w-full h-auto absolute inset-0 z-[-1]">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              pointerEvents: "auto",
            }}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <EarthCanvas />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
