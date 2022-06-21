import React from "react";
import laptop from "../assets/laptop.png";
import Socmed from "../utils/Socmed";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header>
      <div className="container flex flex-col items-center justify-center h-screen">
        <h1 className="">
          Hi there! <span className="hand-wave">👋🏻</span>
        </h1>
        <h2 className="mt-4 font-bold text-center">
          I'm <span className="text-gradient-green">Surya Bhakti Kusuma</span>
        </h2>
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
        {/* <img className="w-1/2 md:w-1/4" src={laptop} alt="" /> */}
      </div>
      {/* <Socmed className="socmed-header" /> */}
    </header>
  );
};

export default Header;
