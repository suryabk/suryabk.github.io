import React from "react";
import { Fade } from "react-awesome-reveal";
import surya from "../assets/surya-photo.png";
import Skill from "../utils/Skill";

function About() {
  const programming = [
    "Html",
    "Css",
    "Bootstrap",
    "Javascript",
    "React",
    "Tailwind",
    "Sass",
    "Php",
    "Mysql",
    "Git",
  ];
  const tools = ["Vscode", "Github", "Heroku", "Netlify", "Vercel"];
  return (
    <section className="bg-costum-dark-variant pt-8 mx-auto md:h-auto">
      <div className="container mx-auto h-full flex flex-col">
        <Fade direction="left" triggerOnce={true} delay={500} duration={2000}>
          <div className="my-2 md:my-4">
            <h1 className="text-costum-green  text-center md:text-left px-6 py-4 font-bold">
              Get to know{" "}
              <span className="text-white underline underline-offset-2 decoration-costum-green">
                about me
              </span>
            </h1>
          </div>
        </Fade>

        <div className="container flex flex-col md:flex-row-reverse justify-center items-center md:items-start">
          <Fade
            direction="right"
            triggerOnce={true}
            delay={1500}
            duration={3000}>
            <div className="m-8 ">
              <div className="w-40 mask mask-hexagon bg-costum-white">
                <img
                  className="object-cover relative top-4 "
                  src={surya}
                  alt="Surya"
                />
              </div>
              <button className="btn btn-outline btn-success w-40 self-center">
                About Me
              </button>
            </div>
          </Fade>

          <div className="m-2 md:mx-8 md:my-4 md:w-1/2">
            <Fade
              direction="down"
              triggerOnce={true}
              delay={1000}
              duration={2000}>
              <p className=" text-justify md:my-8 my-2">
                I'm a self-taught software engineer based in Tangerang City. I
                started focusing in programming since early 2022.
              </p>
              <p className="text-justify md:my-8 my-2">
                I have a great passion for technology and have completed several
                training and certification to develop my skills and becoming a
                software engineer.
              </p>
              <p className="text-justify md:my-8 my-2">
                I’m currently looking for opportunities to gain experience and
                expand my skill set in a professional environment.
              </p>
            </Fade>
            <div className="divider my-0"></div>
            <Fade direction="up" triggerOnce={true} delay={100} duration={2000}>
              <div className="my-8 flex justify-center flex-wrap gap-y-8 gap-x-4 w-full  text-4xl">
                {programming.map((icon) => (
                  <Skill logo={icon} key={icon} />
                ))}
                {tools.map((icon) => (
                  <Skill logo={icon} key={icon} />
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
