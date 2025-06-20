import React from "react";
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
import { BallCanvas } from "./canvas";

const Skills = () => {
  return (
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
              <BallCanvas icon={CssIcon?.default || CssIcon?.src || CssIcon} />
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
              <BallCanvas icon={GitIcon?.default || GitIcon?.src || GitIcon} />
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
              <BallCanvas icon={SqlIcon?.default || SqlIcon?.src || SqlIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
