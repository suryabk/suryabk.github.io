import React from "react";
import Socmed from "../utils/Socmed";
import { Fade } from "react-awesome-reveal";

const mySocialMedia = [
  "Dribbble",
  "Linkedin",
  "Github",
  "Instagram",
  "Email",
  "Location",
];

function Contact() {
  return (
    <section className="bg-costum-dark-variant pt-8 mx-auto h-full">
      <div className="container mx-auto h-full flex flex-col">
        <div className="my-4 md:my-8">
          <Fade direction="left" delay={500} duration={2000} triggerOnce={true}>
            <h1 className="text-costum-green  text-center md:text-left px-6 py-4 font-bold">
              Get in{" "}
              <span className="text-white underline underline-offset-2 decoration-costum-green">
                Touch
              </span>
            </h1>
          </Fade>
        </div>
      </div>
      <Fade direction="right" delay={500} duration={2000} triggerOnce={true}>
        <div className="container mx-auto text-center">
          I'm looking for oppotunity to gain experience in real job. Feel free
          to reach out for work and collaboration or just friendly hello.
        </div>
      </Fade>
      <div className="my-8 flex justify-center flex-wrap gap-y-8 gap-x-8 w-full text-4xl">
        <Fade direction="up" duration={1000} cascade={true} triggerOnce={true}>
          {mySocialMedia.map((socmed) => (
            <Socmed socmed={socmed} key={socmed} />
          ))}
        </Fade>
      </div>
    </section>
  );
}

export default Contact;
