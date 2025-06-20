import React from "react";
import { EarthCanvas } from "./canvas";

const Footer = () => {
  return (
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
  );
};

export default Footer;
