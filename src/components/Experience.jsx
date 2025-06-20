import React from "react";
import Image from "next/image";
import ReactImage from "../assets/reactjs-966214a8.png";
import MetaImage from "../assets/meta-e386841a.png";
import FullStackImage from "../assets/fullstack-65a5495e.png";

const Experience = () => {
  return (
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
                  September 2023 - Present
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
  );
}

export default Experience;