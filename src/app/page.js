"use client";

import React from "react";
import Video from "./video/page";
import Service from "./services/page";
import WorkflowSection from "./work/page";
import MovingBrands from "./brand/page";
import Contact from "./contact/page";
import IndustriesSection from "./industry/page";

const Page = () => {
  return (
    <div>
      <Video />
      <Service />
      <WorkflowSection />
      <MovingBrands />
      <IndustriesSection />
      <Contact />
    </div>
  );
};

export default Page;
