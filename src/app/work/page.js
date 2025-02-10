import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HowWeWork() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-600 mb-2 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-gray-400"></span>
            How We Work
            <span className="w-12 h-px bg-gray-400"></span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
            Enjoy seamless service through our simple,{" "}
            <span className="text-blue-600  px-2 py-1 rounded">
              streamlined process:
            </span>
          </h3>
          <div className="flex items-center justify-center gap-2 text-lg">
            <p className="text-gray-600">
              An efficient workflow, from requirements gathering to ongoing
              support and maintenance.
            </p>
            <Button
              variant="link"
              className="text-blue-500 px-2 py-1 rounded hover:bg-blue-600"
            >
              See All
            </Button>
          </div>
        </div>
      </div>
      <section className="w-full h-max flex-col-reverse lg:flex-row">
        <Image
          src="/roadmap.JPG"
          alt="Image"
          width={500}
          height={100}
          className="h-full w-[100vw]"
        />
        <div className="w-full flex flex-col gap-x-5 gap-y-16 mt-10 lg:flex-row flex-wrap justify-between p-5 pt-10">
          <div className="relative w-full lg:w-[calc(100%/3.2)] lg:h-[350px] py-20 px-10 bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[20px] text-center flex flex-col justify-center items-center lg:p-5">
            <h3 className="text-[28px] font-bold text-[#3482A3] mb-4">Requirement Gathering</h3>
            <p className="text-[20px] font-semibold">We begin our collaboration by gathering client requirements, listing, and compiling them. This allows us to build the process from the ground up, delivering results aligned with your goals.</p>
            <p className="absolute top-[-30px] bg-red-500 px-6 py-3 text-white text-3xl font-bold rounded-[50%] ">1</p>
          </div>
          <div className="relative w-full lg:w-[calc(100%/3.2)] lg:h-[350px] py-20 px-10 bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[20px] text-center flex flex-col justify-center items-center lg:p-5">
            <h3 className="text-[28px] font-bold text-[#3482A3] mb-4">Plan & Resources</h3>
            <p className="text-[20px] font-semibold">After gathering requirements, we develop a strategic plan and allocate resources. As a leading IT company, we provide clients with a roadmap, setting the foundation for a successful project.</p>
            <p className="absolute top-[-30px] bg-[#FEA31E] px-6 py-3 text-white text-3xl font-bold rounded-[50%] ">2</p>
          </div>
          <div className="relative w-full lg:w-[calc(100%/3.2)] lg:h-[350px] py-20 px-10 bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[20px] text-center flex flex-col justify-center items-center lg:p-5">
            <h3 className="text-[28px] font-bold text-[#3482A3] mb-4">Design & Develop</h3>
            <p className="text-[20px] font-semibold">In the design and development phase, we turn strategic ideas into digital products that are visually appealing, technically robust, focusing on user experience and functionality.</p>
            <p className="absolute top-[-30px] bg-[#355F06] px-6 py-3 text-white text-3xl font-bold rounded-[50%] ">3</p>
          </div>
          <div className="relative w-full lg:w-[calc(100%/3.2)] lg:h-[350px] py-20 px-10 bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[20px] text-center flex flex-col justify-center items-center lg:p-5">
            <h3 className="text-[28px] font-bold text-[#3482A3] mb-4">Quality Assurance</h3>
            <p className="text-[20px] font-semibold">In this phase, we carefully test and validate all elements to ensure they function correctly and meet standards, delivering the desired user experience. Our team examines each aspect for reliability.</p>
            <p className="absolute top-[-30px] bg-[#1C89FE] px-6 py-3 text-white text-3xl font-bold rounded-[50%] ">4</p>
          </div>
          <div className="relative w-full lg:w-[calc(100%/3.2)] lg:h-[350px] py-20 px-10 bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[20px] text-center flex flex-col justify-center items-center lg:p-5">
            <h3 className="text-[28px] font-bold text-[#3482A3] mb-4">Deployment</h3>
            <p className="text-[20px] font-semibold">Once the product meets the required standards, we deploy it, releasing the product or updates to the servers. This ensures seamless and efficient delivery.</p>
            <p className="absolute top-[-30px] bg-[#E36FE5] px-6 py-3 text-white text-3xl font-bold rounded-[50%] ">5</p>
          </div>
          <div className="relative w-full lg:w-[calc(100%/3.2)] lg:h-[350px] py-20 px-10 bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[20px] text-center flex flex-col justify-center items-center lg:p-5">
            <h3 className="text-[28px] font-bold text-[#3482A3] mb-4">Support & Maintenance</h3>
            <p className="text-[20px] font-semibold">In the final stage, we maintain systems to ensure smooth operation, security, and reliability. Ongoing optimization enhances performance, with a focus on client satisfaction and operational excellence.</p>
            <p className="absolute top-[-30px] bg-[#FF8031] px-6 py-3 text-white text-3xl font-bold rounded-[50%] ">6</p>
          </div>
        </div>
      </section>
    </>
  );
}
