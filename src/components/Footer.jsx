import React from "react";

function Footer() {
  return (
    <section className="bg-costum-dark-variant pt-2 md:pt-4 lg:pt-8 mx-auto h-full my-0">
      <div className="divider"></div>
      <div className="flex md:flex-row flex-wrap gap-x-4 justify-center md:justify-between w-full">
        <p className="text-xs mb-2 md:mb-0 ">
          @2022 &#8226; Surya Bhakti Kusuma
        </p>
        <p className="text-xs">Design and Code by Surya</p>
      </div>
    </section>
  );
}

export default Footer;
