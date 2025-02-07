import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";


const HireTalentPage = () => {
    return (
        <>
            <section className="flex flex-col gap-15 relative pl-[200px] pt-[100px] w-full h-[110vh]">
                <h2 className="text-[96px] font-semibold ">Discover your <br /> next hire !</h2>
                <p className="text-[25px]">Explore recruiter-reviewed and AI-matched candidates, <br /> or share details about your open role to start hiring
                    today. <br /> The decision is yours.</p>
                <div className="flex items-center shadow-2xl p-5 w-[50%] text-2xl mt-[50px] justify-between">
                    <div className="flex items-center gap-3 pb-[10px] pt-[10px] pr-[20px] border-r-2">
                        <i className="fa-solid fa-arrow-pointer"></i>
                        <p>Preview Candidates</p>
                    </div>
                    <div className="flex items-center gap-3 pt-[10px] pb-[10px] pl-[10px]">
                        <i className="fa-brands fa-hire-a-helper"></i>
                        <p>Hire now</p>
                    </div>
                    <a href="#" className="py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#033941] to-[#0892A7] text-white">Contact Us</a>
                </div>
                <Image
                    src="/Rectangle 4.png"
                    alt="Rectangle 4"
                    width={100}
                    height={100}
                    className="absolute left-0 top-[100px] z-[1]"
                />
                <Image
                    src="/Rectangle 2.png"
                    alt="Rectangle 2"
                    width={550}
                    height={10}
                    className="absolute right-0 top-0 z-[-1]"
                />
                <Image
                    src="/Rectangle 3.png"
                    alt="Rectangle 3"
                    width={300}
                    height={100}
                    className="absolute right-[400px] top-[150px] z-[-2]"
                />
                <Image
                    src="/image.png"
                    alt="Image"
                    width={500}
                    height={100}
                    className="absolute right-[100px] top-[230px] z-1"
                />
                {/* <img src="/assets/Rectangle 2.png" alt="Rectangle 2" class="absolute right-0 top-0 z-1" />
                <img src="/assets/Rectangle 3.png" alt="Rectangle 3" class="absolute right-[400px] top-[150px]" />
                <img src="/assets/image.png" alt="Image" class="absolute right-[100px] top-[230px] z-1" /> */}
            </section>
            <section className="w-full h-[100vh] pl-[200px] flex">
                <div className="w-[60%] flex flex-col gap-10">
                    <hr className="w-[100px] h-[10px] bg-black" />
                    <h2 className="text-[55px]">What makes <strong>KSVA Tech Solutions</strong> the best choice? </h2>
                    <p className="text-[24px]">Explore the full potential of your candidates and employees with our all-in-one Tech Solution.</p>
                    <a href="#" className="text-[24px] flex gap-5 items-center">See more information <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div>
                    {/* <img src="/assets/Capture.JPG" alt="Capture" class="h-full" /> */}
                    <Image
                        src="/4cards.jpg"
                        alt="Image"
                        width={500}
                        height={100}
                        className="h-full w-full"
                    />
                </div>
            </section>
            <section className="w-full flex h-[100vh]">
                <div className="w-[60%] h-full flex flex-col gap-10">
                    <Image
                        src="/ladyifront.jpg"
                        alt="Image"
                        width={500}
                        height={100}
                        className="w-full"
                    />
                </div>
                <div className="w-[60%] flex flex-col gap-10 p-5">
                    <hr className="w-[100px] h-[10px] bg-black" />
                    <h2 className="text-[55px]">Explore a Samples of Our Top Candidates</h2>
                    <p className="text-[20px]">Share your open role details and instantly view recruiter-assessed, AI-matched talent.</p>
                    <form className="flex flex-col gap-10">
                        <div className="flex gap-5 text-[26px]">I am looking for a
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input required type="text" placeholder="Job Title" className="px-3 bg-none outline-none border-b-2 rounded-[10px] border-blue-500"></input>
                            </div>
                        </div>
                        <div className="flex gap-5 text-[26px]">Located In
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-location-dot"></i>
                                <input required type="text" placeholder="'Remote', City or ZIP" className="px-3 bg-none outline-none border-b-2 rounded-[10px] border-blue-500"></input>
                            </div>
                        </div>
                        <button type="submit" className="w-max self-center rounded-[10px] py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#033941] to-[#0892A7] text-white">Preview Candidates</button>
                    </form>
                </div>
            </section>
            <section className="w-full h-max">
                <div className="px-20 py-16">
                    <hr className="w-[100px] h-[10px] bg-black" />
                    <h2 className="text-[55px] font-bold">Learn How We <br /> Work With You</h2>
                    <p>Your Guide to a seamless hiring process</p>
                </div>
                <Image
                    src="/roadmap.jpg"
                    alt="Image"
                    width={500}
                    height={100}
                    className="h-full w-full"
                />
                <div className="w-full flex justify-evenly p-5 pt-10">
                    <div className="relative w-[calc(100%/5.3)] h-[300px] bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[20px] text-center flex justify-center items-center p-5">
                        <p className="text-3xl font-semibold">Define Hiring Needs & User Flow</p>
                        <p className="absolute top-[-30px] bg-red-500 px-6 py-3 text-white text-3xl font-bold rounded-[50%] ">1</p>
                    </div>
                    <div className="relative w-[calc(100%/5.3)] h-[300px] bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[20px] text-center flex justify-center items-center p-5">
                        <p className="text-3xl font-semibold">Design & Develop the Page Layout</p>
                        <p className="absolute top-[-30px] bg-[#FEA31E] px-6 py-3 text-white text-3xl font-bold rounded-[50%] ">2</p>
                    </div>
                    <div className="relative w-[calc(100%/5.3)] h-[300px] bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[20px] text-center flex justify-center items-center p-5">
                        <p className="text-3xl font-semibold">Integrate Smart Filtering & Matching</p>
                        <p className="absolute top-[-30px] bg-[#355F06] px-6 py-3 text-white text-3xl font-bold rounded-[50%] ">3</p>
                    </div>
                    <div className="relative w-[calc(100%/5.3)] h-[300px] bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[20px] text-center flex justify-center items-center p-5">
                        <p className="text-3xl font-semibold">Optimize for Engagement & Conversion</p>
                        <p className="absolute top-[-30px] bg-[#1C89FE] px-6 py-3 text-white text-3xl font-bold rounded-[50%] ">4</p>
                    </div>
                    <div className="relative w-[calc(100%/5.3)] h-[300px] bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[20px] text-center flex justify-center items-center p-5">
                        <p className="text-3xl font-semibold">Test, Launch & Improve</p>
                        <p className="absolute top-[-30px] bg-[#FDACFD] px-6 py-3 text-white text-3xl font-bold rounded-[50%] ">5</p>
                    </div>
                </div>
            </section>
            <section className="w-full flex">
                <div className="w-[70%] h-full flex flex-col gap-10">
                    <Image
                        src="/ring.jpg"
                        alt="Image"
                        width={500}
                        height={100}
                        className="w-full"
                    />
                </div>
                <div className="w-[60%] flex flex-col gap-10 pt-40">
                    <hr className="w-[100px] h-[10px] bg-black" />
                    <h2 className="text-[96px] font-bold">Hire talent that delivers</h2>
                    <p className="text-[24px]">We guarantee every professional we place and offer a free replacement if you’re not satisfied.</p>
                    <button type="submit"
                        className="w-max self-center rounded-[10px] py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#033941] to-[#0892A7] text-white">Find Your next Hire</button>
                </div>
            </section>
            <section className="w-full flex flex-col p-10">
                <div className="flex">
                    <div className="w-full md:w-[50%] flex flex-col gap-10 pt-10 p-5">
                        <hr className="w-[100px] h-2 bg-black" />
                        <h2 className="text-[48px] md:text-[96px]">Access global consulting expertise</h2>
                        <p className="text-[18px] md:text-[24px]">
                            Whether managing your workforce, tackling complex challenges, or transforming your business, KSVA's expertise integrates with our talent network to deliver flexible, tailored solutions.
                        </p>
                        <button type="submit" className="w-max rounded-[10px] py-2 px-5 bg-gradient-to-r from-[#033941] to-[#0892A7] text-white transition-transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                    <div className="w-[60%] flex justify-center items-center">
                        <Image
                            src="/global expertise.jpg"
                            alt="Image"
                            width={500}
                            height={500}
                            layout="intrinsic"
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center gap-5 mt-3">
                    <div className="flex gap-4 items-center w-[calc(100%/3.2)]">
                        <i className="fa-solid fa-check text-3xl border-[10px] font-extrabold border-black rounded-[50%] p-5"></i>
                        <p className="text-[18px] md:text-[24px]">Achieve long-term, strategic transformation</p>
                    </div>
                    <div className="flex gap-4 items-center w-[calc(100%/3.2)]">
                        <i className="fa-solid fa-check text-3xl border-[10px] font-extrabold border-black rounded-[50%] p-5"></i>
                        <p className="text-[18px] md:text-[24px]">Drive immediate business results</p>
                    </div>
                    <div className="flex gap-4 items-center w-[calc(100%/3.2)] justify-center">
                        <i className="fa-solid fa-check text-3xl border-[10px] font-extrabold border-black rounded-[50%] p-5"></i>
                        <p className="text-[18px] md:text-[24px]">Run day-to-day operations with managed operations</p>
                    </div>
                </div>
            </section>
            <section className="w-full flex p-10 gap-10">
                <div className="w-[50%] flex flex-col gap-10">
                    <Image
                        src="/team-meeting.png"
                        alt="Image"
                        width={500}
                        height={100}
                        className="w-full h-full rounded-b-[50px]"
                    />
                </div>
                <div className="w-[50%] flex flex-col gap-10">
                    <hr className="w-[100px] h-[10px] bg-black" />
                    <h2 className="text-[96px] font-bold">Hire the talent you need</h2>
                    <p className="text-[24px]">Hire the talent you need to grow your business.Find skilled professionals who fit your vision.Build a strong team for lasting success!</p>
                    <button type="submit"
                        className="w-max rounded-[10px] py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#033941] to-[#0892A7] text-white">Contact Us
                    </button>
                </div>
            </section>
            <section className="w-full mt-20 flex flex-col p-10 pt-[250px] gap-10">
                <div className="flex justify-between items-center">
                    <div className="pt-[50px] pb-[10px] text-[20px] relative w-[320px] bg-[#E3F1F4] rounded-[20px]">
                        <Image
                            src="/image 10.png"
                            alt="Image"
                            width={500}
                            height={100}
                            className="absolute top-[-200px]"
                        />
                        <h3 className="font-bold pl-10">Know how much to pay</h3>
                        <p className="pl-10 pr-5 mt-5">Attract and retain talent with our Salary Guide.</p>
                        <p className="mt-20 text-center font-extrabold text-[#3482A3]">Search Salaries</p>
                    </div>
                    <div className="pt-[100px] pb-[10px] text-[20px] relative w-[320px] bg-[#E3F1F4] rounded-[20px]">
                        <Image
                            src="/image 8.png"
                            alt="Image"
                            width={500}
                            height={100}
                            className="absolute top-[-250px]"
                        />
                        <h3 className="font-bold pl-10">Access exclusive talent</h3>
                        <p className="pl-10 pr-5 mt-5">Don't miss a beat with proven industry veterans.</p>
                        <p className="mt-20 text-center font-extrabold text-[#3482A3] px-10">Hire Robert Half Employees</p>
                    </div>
                    <div className="pt-[50px] pb-[10px] text-[20px] relative w-[320px] bg-[#E3F1F4] rounded-[20px]">
                        <Image
                            src="/image 7.png"
                            alt="Image"
                            width={500}
                            height={100}
                            className="absolute top-[-200px]"
                        />
                        <h3 className="font-bold pl-10">What jobs are in demand?</h3>
                        <p className="pl-10 pr-5 mt-5">Stay current on the latest hiring & employment trends.</p>
                        <p className="mt-20 text-center font-extrabold text-[#3482A3]">Access Report</p>
                    </div>
                </div>
                <div className="flex justify-evenly items-center mt-28">
                    <div className="pt-[50px] pb-[10px] text-[20px] relative w-[320px] bg-[#E3F1F4] rounded-[20px]">
                        <Image
                            src="/image 9.png"
                            alt="Image"
                            width={500}
                            height={100}
                            className="absolute top-[-200px]"
                        />
                        <h3 className="font-bold pl-10">Onboard talent in a flash</h3>
                        <p className="pl-10 pr-5 mt-5">Got a fire drill? Find the talent you need, now.</p>
                        <p className="mt-20 text-center font-extrabold text-[#3482A3]">Hire Contract Talent</p>
                    </div>
                    <div className="pt-[50px] pb-[10px] text-[20px] relative w-[320px] bg-[#E3F1F4] rounded-[20px]">
                        <Image
                            src="/imagelast.png"
                            alt="Image"
                            width={500}
                            height={100}
                            className="absolute top-[-200px]"
                        />
                        <h3 className="font-bold pl-10">Remote staffing solutions</h3>
                        <p className="pl-10 pr-5 mt-5">Find talent that's ready to work from anywhere.</p>
                        <p className="mt-20 text-center font-extrabold text-[#3482A3]">Find More Talent</p>
                    </div>
                </div>
            </section>
            <section className="relative w-full h-[200vh] bg-amber-400 mt-20">
                <img
                    src="/image 12.png"
                    alt="Image"
                    className="w-full h-full object-cover"
                />
                <div className="z-10 absolute top-[170px] left-[80px] bg-[#FFF0E8] h-[340px] w-[480px] text-[32px] font-[700] text-center rounded-[30px] rotate-[11deg] p-5">
                    <h3>Services</h3>
                    <ul className="list-disc list-inside mx-auto">
                        <li>IT Consulting</li>
                        <li>Cloud Services</li>
                        <li>Influencer Marketing</li>
                        <li>Software Development</li>
                        <li>Cyber Security</li>
                    </ul>
                </div>
                <div className="z-10 absolute top-[310px] right-[45px] bg-[#E0E6FE] h-[365px] w-[480px] text-[32px] font-[700] text-center rounded-[30px] rotate-[-11deg] p-5">
                    <h3>RESOURCES & TOOLS</h3>
                    <ul className="list-disc list-inside mx-auto">
                        <li>Discover Insights</li>
                        <li>Invoice</li>
                        <li>Job Directory</li>
                        <li>Salary Guide</li>
                        <li>Time Reports</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="z-10 absolute bottom-[300px] left-[150px] bg-[#F3E0FE] h-[370px] w-[480px] text-[32px] font-[700] text-center rounded-[30px] rotate-[11deg] p-5">
                    <h3>AREAS OF EXPERTISE</h3>
                    <ul className="list-disc list-inside mx-auto">
                        <li>Finance</li>
                        <li>Technology</li>
                        <li>Digital Marketing</li>
                        <li>Artificial Intelligence</li>
                    </ul>
                </div>
                <div className="z-10 absolute bottom-[55px] right-[35px] bg-[#FFEEE4] h-[365px] w-[450px] text-[32px] font-[700] text-center rounded-[30px] rotate-[-8deg] p-5">
                    <h3>ABOUT</h3>
                    <ul className="list-disc list-inside mx-auto">
                        <li>About KSVA</li>
                        <li>Careers With Us</li>
                        <li>Locations</li>
                    </ul>
                </div>
            </section>
        </ >
    );
}

export default HireTalentPage;