import React from "react";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <header>
      <div className="container flex flex-col items-center justify-center h-screen">
        <Fade direction="left" triggerOnce={true} delay={1000} duration={2000}>
          <h1 className="mb-4 text-center">
            Hi there! <span className="hand-wave">👋🏻</span>
          </h1>
        </Fade>
        <Fade direction="right" triggerOnce={true} delay={1000} duration={2000}>
          <h2 className="mt-4 font-bold text-center">
            I'm <span className="text-gradient-green">Surya Bhakti Kusuma</span>
          </h2>
        </Fade>
        <Fade direction="up" triggerOnce={true} delay={2000} duration={3000}>
          <h2 className="font-semibold" style={{ marginTop: "2rem" }}>
            <Typewriter
              options={{
                strings: ["Front-end Developer"],
                wrapperClassName: "role",
                cursorClassName: "type-cursor",
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </Fade>
      </div>
    </header>
  );
};

export default Header;
