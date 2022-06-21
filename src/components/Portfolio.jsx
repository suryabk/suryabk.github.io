import React from "react";
import portfolio from "../utils/PortfolioData";
import Skill from "../utils/Skill";

function Portfolio() {
  return (
    <section className="bg-costum-dark pt-8 mx-auto h-full">
      <div className="container mx-auto text-center">
        <div className="mx-auto my-8 px-2 sm:px-6 lg:px-8">
          <span className="badge badge-primary text-white text-base px-6 py-4">
            Portfolio
          </span>
          <h1 className="text-costum-green  text-center md:text-left px-6 py-4 font-bold">
            Some things{" "}
            <span className="text-white underline underline-offset-2 decoration-costum-green">
              I’ve built
            </span>
          </h1>
        </div>
        <div className="container mx-auto my-8 px-2 sm:px-6 lg:px-8 flex flex-wrap justify-evenly">
          {portfolio.map((item, idx) => {
            return (
              <div
                className="card w-96 bg-base-100 shadow-xl mb-10 gap-4"
                key={idx}>
                <figure>
                  <img
                    className="w-full overflow-hidden"
                    src={item.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.project}</h2>
                  <p className="text-left sm:text-xs md:text-sm hidden md:block">
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
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer">
                          Link
                        </a>
                      </button>
                    )}
                    <button className="btn bg-costum-green-variant hover:bg-success-content text-white">
                      <a
                        href={item.repo}
                        target="_blank"
                        rel="noopener noreferrer">
                        Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
