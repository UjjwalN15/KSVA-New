import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";


const HireTalentPage = () => {
    return (
        <>
            <section className="flex flex-col gap-15 relative pl-[200px] pt-[100px] w-full h-[110vh]">
                <h2 className="text-[96px] ">Discover your <br /> next hire !</h2>
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
        </>
    );
}

export default HireTalentPage;