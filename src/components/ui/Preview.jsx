"use client";
import { BlogHeading, BlogNumHeading, BlogParagraph } from "../ui/BlogBasicComponent";
import React, { useState } from 'react';


const PreviewCandidate = () => {
    const categories = ["Technology", "Marketing", "Finance & Accounting", "Legal"]
    const [activeIndex, setActiveIndex] = useState(0); // Track active tab
    return (
        <section className="max-w-7xl mx-auto py-10 px-20" style={{ backgroundImage: 'url(/preview-1.png)' }}>
            <BlogHeading className="text-black text-[52px] text-center" heading={`Browse and discover <span class="text-[#4A98D7]">talent</span> for your company`} />

            {/* Category Tabs */}
            <ul className="flex text-[32px] font-[700] mt-10 justify-between">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer px-4 py-2 ${activeIndex === index ? "text-[#4A98D7] underline underline-offset-8" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {category}
                    </li>
                ))}
            </ul>

            {/* Category Content */}
            <div className="py-10">
                {activeIndex === 0 && (
                    <div>
                        <BlogParagraph className="text-center" paragraph="From cybersecurity experts to developers, we connect you with top talent possessing in demand skills and experience while streamlining the hiring process for you." />
                        <BlogHeading className="text-black text-[52px] font-[700]" heading="Trending Job Titles" />
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
                )}

                {activeIndex === 1 && (
                    <div>
                        <BlogParagraph className="text-center" paragraph="From copywriters to creative directors, we’ll bring you top candidates with in-demand skills and experience and help manage the hiring process for you." />
                        <BlogHeading className="text-black text-[52px] font-[700]" heading="Trending Job Titles" />
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
                )}

                {activeIndex === 2 && (
                    <div>
                        <BlogParagraph className="text-center" paragraph="From accountants to CFOs, we’ll bring you top candidates with in-demand skills and experience and help manage the hiring process for you." />
                        <BlogHeading className="text-black text-[52px] font-[700]" heading="Trending Job Titles" />
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
                )}

                {activeIndex === 3 && (
                    <div>
                        <BlogParagraph className="text-center" paragraph="From lawyers to paralegals, we’ll bring you top candidates with in-demand skills and experience and help manage the hiring process for you." />
                        <BlogHeading className="text-black text-[52px] font-[700]" heading="Trending Job Titles" />
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
                )}
            </div>
        </section>
    );
}

export default PreviewCandidate;