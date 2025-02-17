import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SwiperComponent from '../../components/ui/swiper'
import Scroller from '../../components/ui/scroller'


const HireTalentPage = () => {
    return (
        <>
            <section className="flex flex-col gap-15 relative lg:pl-[200px] lg:pt-[100px] w-full lg:h-[110vh]">
                <div>
                    <Image
                        src="/capture.JPG"
                        alt="Image"
                        width={500}
                        height={100}
                        className="block h-[40vh] z-1 lg:hidden transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="w-full p-5">
                    <h2 className="text-4xl font-semibold">Discover your <br /> <span className="text-blue-400">next hire !</span></h2>
                    <p className="text-[18px] lg:text-2xl w-full lg:w-[40%] mt-10 leading-10">Explore recruiter-reviewed and AI-matched candidates, or share details about your open role to start hiring
                        today. <br /> <br /> <strong>The decision is yours.</strong></p>
                    <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row w-full items-center shadow-2xl p-5 lg:w-[55%] text-xl lg:text-2xl mt-[100px] justify-between">
                        <div className="flex items-center gap-3 pb-[10px] pt-[10px] pr-[20px] lg:border-r-2">
                            <i className="fa-solid fa-arrow-pointer"></i>
                            <p>Preview Candidates</p>
                        </div>
                        <div className="flex items-center gap-3 pt-[10px] pb-[10px] pl-[10px]">
                            <i className="fa-brands fa-hire-a-helper"></i>
                            <p>Hire now</p>
                        </div>
                        <a href="#" className="py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white">Contact Us</a>
                    </div>
                </div>
                <div className="hidden lg:block">
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
                </div>
                {/* <img src="/assets/Rectangle 2.png" alt="Rectangle 2" class="absolute right-0 top-0 z-1" />
                <img src="/assets/Rectangle 3.png" alt="Rectangle 3" class="absolute right-[400px] top-[150px]" />
                <img src="/assets/image.png" alt="Image" class="absolute right-[100px] top-[230px] z-1" /> */}
            </section>
            <section className="w-[90%] mx-auto mt-5 lg:h-[100vh] flex flex-col-reverse lg:flex-row">
                <div className="w-full lg:w-[45%] flex flex-col justify-center gap-10 p-5 lg:p-0">
                    <h2 className="text-2xl lg:text-4xl leading-10">What makes <strong><span className="text-blue-400">KSVA Tech Solutions</span></strong> the best choice? </h2>
                    <p className="text-[18px] lg:text-[24px] leading-10">Explore the full potential of your candidates and employees with our all-in-one Tech Solution.</p>
                    <a href="#" className="text-[18px] flex gap-5 items-center">See more information <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="w-full lg:w-[50%] flex flex-col lg:flex-row lg:justify-between lg:flex-wrap pl-5 pt-5 rounded-[10px] bg-blue-100 p-3 lg:p-5">
                    <div className="w-full lg:w-[calc(100%/2.1)] flex flex-col gap-5 lg:h-[350px] pb-5 lg:pb-0">
                        <i className="text-2xl fa-solid fa-crosshairs lg:text-6xl w-max text-black bg-[#ECB4ED] p-3 rounded-[50%] "></i>
                        <h3 className="text-[24px] font-[700]">Scale Teams <br /> with Ease</h3>
                        <p className="text-[18px] lg:text-[24px]">Effortlessly scale your teams to meet your goals.</p>
                    </div>
                    <div className="w-full lg:w-[calc(100%/2.1)] flex flex-col gap-5 lg:h-[350px] pb-5 lg:pb-0">
                        <i className="text-2xl fa-solid fa-people-group lg:text-6xl w-max text-black bg-[#ACDBBE] p-3 rounded-[50%] "></i>
                        <h3 className="text-[24px] font-[700]">Find Talent Matched <br /> to your Needs</h3>
                        <p className="text-[18px] lg:text-[24px]">Our AI, driven by success data, instantly finds top candidates for your roles.</p>
                    </div>
                    <div className="w-full lg:w-[calc(100%/2.1)] flex flex-col gap-5 lg:h-[350px] pb-5 lg:pb-0">
                        <i className="text-2xl fa-solid fa-user-pen lg:text-6xl w-max text-black bg-[#B2D9F3] p-5 rounded-[50%] "></i>
                        <h3 className="text-[24px] font-[700]">Get Dedicated, <br /> Personalized Support</h3>
                        <p className="text-[18px] lg:text-[24px]">We leverage market insights to understand your goals and guide you every step of the way.</p>
                    </div>
                    <div className="w-full lg:w-[calc(100%/2.1)] flex flex-col gap-5 lg:h-[350px] pb-5 lg:pb-0">
                        <i className="text-2xl fa-solid fa-hourglass-end lg:text-6xl w-max text-black bg-[#D99C9D] py-4 px-6 rounded-[50%] "></i>
                        <h3 className="text-[24px] font-[700]">Smarter and more <br /> Efficient</h3>
                        <p className="text-[18px] lg:text-[24px]">Experience the full potential of your candidates</p>
                    </div>
                </div>
            </section>
            <section className="w-[90%] mx-auto flex flex-col lg:flex-row items-center mt-5">
                <div className="relative w-full h-[400px] mt-10 lg:mt-0 rounded-2xl overflow-hidden shadow-xl lg:w-[50%] flex justify-center items-center">
                    <Image
                        src="/man-76202.jpg"
                        alt="Image"
                        layout="fill"
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="w-full lg:w-[50%] flex flex-col justify-center gap-10 p-5">
                    <h2 className="text-2xl lg:text-4xl">Explore a Samples of Our <span className="text-blue-400">Top Candidates</span></h2>
                    <p className="text-[18px] lg:text-[24px]">Share your open role details and instantly view recruiter-assessed, AI-matched talent.</p>
                    <form className="flex flex-col gap-10">
                        <div className="flex gap-5 lg:flex-row flex-col">
                            <p className="text-[18px]">I am looking for a</p>
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-magnifying-glass lg:text-[26px] "></i>
                                <input required type="text" placeholder="Job Title" className="text-xl lg:text-[26px] px-1 lg:px-3 bg-none outline-none border-b-2 rounded-[10px] border-blue-500"></input>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-5">
                            <p className="text-[18px]">Located In</p>
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-location-dot lg:text-[26px] "></i>
                                <input required type="text" placeholder="'Remote', City or ZIP" className="text-xl lg:text-[26px] lg:px-3 px-1 bg-none outline-none border-b-2 rounded-[10px] border-blue-500"></input>
                            </div>
                        </div>
                        <button type="submit" className="w-max self-center rounded-[10px] py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white">Preview Candidates</button>
                    </form>
                </div>
            </section>
            <section className="w-[90%] mx-auto flex lg:flex-row-reverse flex-col lg:items-center mt-5">
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl lg:w-[50%] flex justify-center items-center">
                    <Image
                        src="/hiring-1977803.jpg"
                        alt="Image"
                        layout="fill"
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="w-full lg:w-[50%] flex flex-col justify-center gap-10 p-5">
                    <h2 className="text-2xl lg:text-4xl">Hire talent <br /> <span className="text-blue-400">that delivers</span></h2>
                    <p className="text-[18px] lg:text-[24px]">We guarantee every professional we place and offer a free replacement if you’re not satisfied.</p>
                    <button type="submit"
                        className="w-max self-center rounded-[10px] py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white">Find Your next Hire</button>
                </div>
            </section>
            <section className="w-[90%] mx-auto flex flex-col mt-5">
                <div className="flex flex-col-reverse lg:flex-row-reverse">
                    <div className="w-full md:w-[50%] flex flex-col justify-center gap-10 lg:pt-10 p-5">
                        <h2 className="text-2xl lg:text-4xl">Access global <br /><span className="text-blue-400">consulting expertise</span></h2>
                        <p className="text-[18px] lg:text-[24px] leading-10">
                            Whether managing your workforce, tackling complex challenges, or transforming your business, KSVA's expertise integrates with our talent network to deliver flexible, tailored solutions.
                        </p>
                        <button type="submit" className="w-max mx-auto rounded-[10px] py-2 px-5 bg-gradient-to-r from-[#275071] to-[#4A98D7] text-white transition-transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl lg:w-[50%] flex justify-center items-center">
                        <Image
                            src="/business-idea-660083.jpg"
                            alt="Image"
                            layout="fill"
                            className="transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-center gap-5 mt-3 p-5">
                    <div className="flex gap-4 items-center w-full lg:w-[calc(100%/3.2)]">
                        <i className="fa-solid fa-check text-xl lg:text-2xl text-blue-400 border-[3px] lg:border-[10px] font-extrabold border-blue-400 rounded-[50%] p-5"></i>
                        <p className="text-[18px] md:text-[24px]">Achieve long-term, strategic transformation</p>
                    </div>
                    <div className="flex gap-4 items-center w-full lg:w-[calc(100%/3.2)]">
                        <i className="fa-solid fa-check text-xl lg:text-2xl text-blue-400 border-[3px] lg:border-[10px] font-extrabold border-blue-400 rounded-[50%] p-5"></i>
                        <p className="text-[18px] md:text-[24px]">Drive immediate business results</p>
                    </div>
                    <div className="flex gap-4 items-center w-full lg:w-[calc(100%/3.2)] justify-center">
                        <i className="fa-solid fa-check text-xl lg:text-2xl text-blue-400 border-[3px] lg:border-[10px] font-extrabold border-blue-400 rounded-[50%] p-5"></i>
                        <p className="text-[18px] md:text-[24px]">Run day-to-day operations with managed operations</p>
                    </div>
                </div>
            </section>
            <section className="w-[90%] mx-auto space-y-6 flex lg:flex-row-reverse flex-col lg:p-10 p-5 gap-10">
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl lg:w-[50%] flex justify-center items-center">
                    <Image
                        src="/ai-generated-8999816_1280.jpg"
                        alt="Image"
                        layout="fill"
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="w-full lg:w-[50%] flex flex-col justify-center gap-10">
                    <h2 className="text-2xl lg:text-4xl">Hire the talent <br /> <span className="text-blue-400">you need</span></h2>
                    <p className="text-[18px] lg:text-2xl leading-10">Hire the talent you need to grow your business.Find skilled professionals who fit your vision.Build a strong team for lasting success!</p>
                    <button type="submit"
                        className="w-max mx-auto rounded-[10px] py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white">Contact Us
                    </button>
                </div>
            </section>
            <section className="relative w-[95%] mx-auto h-[70vh] lg:h-[80vh] lg:my-10">
                <SwiperComponent />
                <div className="absolute top-0 left-[50%] translate-x-[-50%] w-full lg:w-[31%] lg:h-full h-[600px] bg-white rounded-[50px] border-[10px] border-black shadow-lg">
                    {/* Phone Screen */}
                </div>

                {/* Top Bar (Camera/Speaker) */}
                <div className="absolute top-5 bg-black right-[50%] translate-x-[50%] w-[200px] lg:w-[10%] rounded-[50px] h-[20px] border-[5px] border-black shadow-md">
                </div>
            </section>
            <Scroller />
        </ >
    );
}

export default HireTalentPage;
