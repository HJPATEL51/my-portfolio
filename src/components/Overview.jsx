import React from "react";
import Image from "next/image";
import WebIcon from "../assets/web-development.png";
import BackendIcon from "../assets/backend-development.png";
import MobileIcon from "../assets/mobile-development.png";
import CreatorIcon from "../assets/creator.png";

const Overview = () => {
    return (
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
                <div className="mt-20 flex flex-wrap justify-center items-center gap-10">
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
                          Frontend Developer
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
                </div>
              </section>
    );
}

export default Overview;