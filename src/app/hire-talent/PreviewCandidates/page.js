"use client";

import Image from "next/image";
import { BlogHeading, BlogNumHeading, BlogParagraph } from "../../../components/ui/BlogBasicComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPeopleGroup, faCouch } from "@fortawesome/free-solid-svg-icons";
import Scroller from '../../../components/ui/scroller'
import PreviewCandidate from '../../../components/ui/Preview'

const PreviewCandidates = () => {

    return (
        <>
            <section className="py-10 w-full bg-cover bg-center" style={{ backgroundImage: 'url(/preview-1.png)' }}>
                <BlogParagraph className="text-center" paragraph={`Need immediate help? Call <span class="text-[#0892A7]">562-310-1189</span>`} />
                <div className="flex max-w-7xl mx-auto mt-5">
                    <div className="relative w-[50%] h-[500px]">
                        <Image src="/preview-2.JPG" alt="Image" layout="fill" className="object-contain w-full h-full transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="w-full lg:w-[50%] flex flex-col justify-center gap-10 p-5">
                        <h2 className="text-2xl lg:text-4xl">Explore a Samples of Our <span className="text-blue-400">Top Candidates</span></h2>
                        <p className="text-[18px] lg:text-[24px]">Share your open role details and instantly view recruiter-assessed, AI-matched talent.</p>
                        <form className="flex flex-col gap-10">
                            <div className="flex gap-5 lg:flex-row flex-col">
                                <p className="text-[18px]">I am looking for a</p>
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-magnifying-glass lg:text-[26px] "></i>
                                    <input required type="text" placeholder="Job Title" className="text-xl lg:text-[26px] px-1 lg:px-3 bg-transparent outline-none border-b-2 rounded-[10px] border-blue-500"></input>
                                </div>
                            </div>
                            <div className="flex lg:flex-row flex-col gap-5">
                                <p className="text-[18px]">Located In</p>
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-location-dot lg:text-[26px] "></i>
                                    <input required type="text" placeholder="'Remote', City or ZIP" className="text-xl lg:text-[26px] lg:px-3 px-1 bg-transparent outline-none border-b-2 rounded-[10px] border-blue-500"></input>
                                </div>
                            </div>
                            <button type="submit" className="w-max self-center rounded-[10px] py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white">Preview Candidates</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-10">
                <div className="text-center">
                    <BlogHeading className="text-black" heading={`How it <span class="text-[#4A98D7]">Works</span>`} />
                    <BlogParagraph className="" paragraph="Your guide to a seamless hiring process." />
                </div>
                <div className="flex justify-between">
                    <div className="relative w-[30%] h-full flex flex-col items-center shadow-lg py-10 px-5 rounded-[20px]">
                        {/* Top-Right Blue Border */}
                        <div className="absolute top-0 right-0 w-[100px] h-[4px] bg-[#4A98D7] rounded-full"></div>
                        <div className="absolute top-0 right-0 w-[4px] h-[100px] bg-[#4A98D7] rounded-full"></div>

                        {/* Bottom-Left Blue Border */}
                        <div className="absolute bottom-0 left-0 w-[100px] h-[4px] bg-[#4A98D7] rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-[4px] h-[100px] bg-[#4A98D7] rounded-full"></div>



                        <FontAwesomeIcon icon={faGlobe} className="text-white bg-[#4A98D7] rounded-full p-5 h-[50px] w-[50px]" />
                        <BlogParagraph className="text-center" paragraph="Search our network of highly skilled candidates" />
                    </div>
                    <div className="relative w-[30%] h-full flex flex-col items-center shadow-lg py-10 px-5 rounded-[20px]">
                        {/* Top-Right Blue Border */}
                        <div className="absolute top-0 right-0 w-[100px] h-[4px] bg-[#4A98D7] rounded-full"></div>
                        <div className="absolute top-0 right-0 w-[4px] h-[100px] bg-[#4A98D7] rounded-full"></div>

                        {/* Bottom-Left Blue Border */}
                        <div className="absolute bottom-0 left-0 w-[100px] h-[4px] bg-[#4A98D7] rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-[4px] h-[100px] bg-[#4A98D7] rounded-full"></div>



                        <FontAwesomeIcon icon={faPeopleGroup} className="text-white bg-[#4A98D7] rounded-full p-5 h-[50px] w-[50px]" />
                        <BlogParagraph className="text-center" paragraph="Choose candidates that align with your requirements." />
                    </div>
                    <div className="relative w-[30%] h-full flex flex-col items-center shadow-lg py-10 px-5 rounded-[20px]">
                        {/* Top-Right Blue Border */}
                        <div className="absolute top-0 right-0 w-[100px] h-[4px] bg-[#4A98D7] rounded-tr-[20px]"></div>
                        <div className="absolute top-0 right-0 w-[4px] h-[100px] bg-[#4A98D7] rounded-full rounded-tr-[20px]"></div>

                        {/* Bottom-Left Blue Border */}
                        <div className="absolute bottom-0 left-0 w-[100px] h-[4px] bg-[#4A98D7] rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-[4px] h-[100px] bg-[#4A98D7] rounded-full"></div>



                        <FontAwesomeIcon icon={faCouch} className="text-white bg-[#4A98D7] rounded-full p-5 h-[50px] w-[50px]" />
                        <BlogParagraph className="text-center" paragraph="Partner with a recruiter for guidance and hiring." />
                    </div>
                </div>
            </section>
            {/* <section className="max-w-7xl mx-auto py-10 px-20" style={{ backgroundImage: 'url(/preview-1.png)' }}>
                <BlogHeading className="text-black text-center" heading={`Browse and discover <span class="text-[#4A98D7]">talent</span> for your company`} />
                <ul className="flex text-[32px] font-[700] mt-10 justify-between">
                    <li className="cursor-pointer">Technology</li>
                    <li className="cursor-pointer">Marketing</li>
                    <li className="cursor-pointer">Finance & Accounting</li>
                    <li className="cursor-pointer">Legal</li>
                </ul>
                <div className="py-10">
                    <BlogParagraph className="text-center" paragraph="From cybersecurity experts to developers, we connect you with top talent possessing in demand skills and experience while streamlining the hiring process for you." />
                    <BlogHeading className="text-black font-[700]" heading="Trending Job Titles" />
                    <div>
                        <ul className="flex flex-wrap text-[32px]">
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Software Developer</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Product Support Specialist</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Data Analyst</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Network Administrator</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">System Analyst</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Web Developer</li>
                        </ul>
                    </div>
                </div>
                <div className="py-10">
                    <BlogParagraph className="text-center" paragraph="From copywriters to creative directors, we’ll bring you top candidates with in-demand skills and experience and help manage the hiring process for you." />
                    <BlogHeading className="text-black font-[700]" heading="Trending Job Titles" />
                    <div>
                        <ul className="flex flex-wrap text-[32px]">
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Graphic Designer</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Copywriter</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Production artist</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Digital marketing specialist</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">UX designer</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Marketing Manager</li>
                        </ul>
                    </div>
                </div>
                <div className="py-10">
                    <BlogParagraph className="text-center" paragraph="From accountants to CFOs, we’ll bring you top candidates with in-demand skills and experience and help manage the hiring process for you." />
                    <BlogHeading className="text-black font-[700]" heading="Trending Job Titles" />
                    <div>
                        <ul className="flex flex-wrap text-[32px]">
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Controller</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Senior accountant</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Senior financial analyst</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Internal auditor</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Accounts payable specialist</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Bookkeeper</li>
                        </ul>
                    </div>
                </div>
                <div className="py-10">
                    <BlogParagraph className="text-center" paragraph="From lawyers to paralegals, we’ll bring you top candidates with in-demand skills and experience and help manage the hiring process for you." />
                    <BlogHeading className="text-black font-[700]" heading="Trending Job Titles" />
                    <div>
                        <ul className="flex flex-wrap text-[32px]">
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Lawyer</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Paralegal</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Legal assistant</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Law clerk</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Contract administrator</li>
                            <li className="font-[600] underline underline-offset-8 p-5 w-[50%]">Legal secretary</li>
                        </ul>
                    </div>
                </div>
            </section> */}
            <PreviewCandidate/>
            <Scroller />
        </>
    );
}

export default PreviewCandidates;