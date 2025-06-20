import React from "react";
import BoostgradeIcon from "../assets/Boostgrade.png";
import AyooIcon from "../assets/ayoo.png";
import EprintIcon from "../assets/eprint.png";
import LeadtrailorIcon from "../assets/leadtrailor.png";
import Club3 from "../assets/club3.png";

const Projects = () => {
  return (
    <section class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span class="hash-span" id="">
          &nbsp;
        </span>
        <div style={{ opacity: "1", transform: "none" }}>
          <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider ">
            My work
          </p>
          <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects
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
  );
}

export default Projects;