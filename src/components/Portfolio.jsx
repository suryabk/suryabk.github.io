import React from "react";
import portfolio from "../utils/PortfolioData";
import Skill from "../utils/Skill";
import { Fade, Zoom } from "react-awesome-reveal";
import { FiGithub, FiGlobe } from "react-icons/fi";

function Portfolio() {
  return (
    <section className="bg-costum-dark pt-8 mx-auto h-full">
      <div className="container mx-auto text-center">
        <div className="mx-auto my-8 px-2 sm:px-6 lg:px-8">
          <Fade direction="down" delay={750} duration={1000} triggerOnce={true}>
            <span className="badge badge-primary text-white text-base px-6 py-4">
              Portfolio
            </span>
          </Fade>
          <Fade direction="up" delay={500} duration={1000} triggerOnce={true}>
            <h1 className="text-costum-green text-center px-6 py-4 font-bold">
              Some things{" "}
              <span className="text-white underline underline-offset-2 decoration-costum-green">
                I’ve built
              </span>
            </h1>
          </Fade>
        </div>
        <div className="container mx-auto my-8 px-2 sm:px-6 lg:px-8 flex flex-wrap justify-evenly">
          <Fade direction="up" delay={750} duration={1000} triggerOnce={true}>
            {portfolio.map((item, idx) => {
              return (
                <div
                  className="card w-96 h-auto md:h-[512px] bg-neutral shadow-xl mb-10 gap-4"
                  key={idx}>
                  <figure>
                    <img
                      className="w-full overflow-hidden object-fill h-44"
                      src={item.image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.project}</h2>
                    <p className="text-left sm:text-xs md:text-sm hidden md:block h-24 overflow-auto scrollbar-thumb-slate-400 scrollbar-track-slate-800 scrollbar-thin pr-3 mb-4">
                      {item.desc}
                    </p>
                    <div className="my-2 flex justify-center flex-wrap gap-y-8 gap-x-4 w-full  md:text-4xl text-2xl">
                      {item.stack.map((icon) => (
                        <Skill logo={icon} key={icon} />
                      ))}
                    </div>
                    <div className="card-actions justify-center">
                      {item.link && (
                        <button className="btn btn-primary text-white">
                          <a
                            className="flex gap-x-2"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <FiGlobe />
                            <span>Link</span>
                          </a>
                        </button>
                      )}
                      <button className="btn bg-costum-green-variant hover:bg-success-content hover:border-transparent border-none text-white">
                        <a
                          className="flex gap-x-2"
                          href={item.repo}
                          target="_blank"
                          rel="noopener noreferrer">
                          <FiGithub />
                          <span>Github</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
        <Zoom triggerOnce={true} delay={500} duration={1000}>
          <div className="container mx-auto flex justify-center">
            <a
              className="flex justify-center items-center px-6 py-4 mb-4 bg-costum-green-variant w-auto gap-x-2 rounded-xl hover:bg-success-content hover:border-transparent border-none text-white"
              href="https://github.com/suryabk"
              target="_blank"
              rel="noopener noreferrer">
              <FiGithub />
              <span>More Project</span>
            </a>
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default Portfolio;
