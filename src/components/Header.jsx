import React from "react";
import "./header.css";
import laptop from "../../assets/laptop.png";
import Socmed from "../../parts/Socmed";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header>
      <div className="intro flex flex-col items-center">
        <h1 className="greeting">
          Hi there! <span className="hand-wave">👋🏻</span>
        </h1>
        <h2 className="mt-4 font-bold">
          I'm <span className="text-gradient-green">Surya Bhakti Kusuma</span>
        </h2>
        <h2 style={{ marginTop: "2rem" }}>
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
        <img className="w-1/2 md:w-1/4" src={laptop} alt="" />
      </div>
      <Socmed className="socmed-header" />
    </header>
  );
};

export default Header;
