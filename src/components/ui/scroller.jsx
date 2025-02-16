"use client";

import React, { useEffect } from "react";

const Scroller = () => {
    useEffect(() => {
        // JavaScript logic to add animation to the scroller
        const scrollers = document.querySelectorAll(".scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <div className="scroller py-10" data-direction="right" data-speed="medium">
            <div className="scroller__inner">
                <div className="bg-[#a8ff9b] h-[350px] lg:h-[300px] lg:py-10 w-[110%] lg:w-[480px] text-2xl font-[700] text-center rounded-[30px] p-5">
                    <h3 className="mb-10">Services</h3>
                    <ul className="list-disc list-inside mx-auto">
                        <li>IT Consulting</li>
                        <li>Cloud Services</li>
                        <li>Influencer Marketing</li>
                        <li>Software Development</li>
                        <li>Cyber Security</li>
                    </ul>
                </div>
                <div className="bg-[#E0E6FE] h-[350px] lg:h-[300px] py-5 lg:py-10 w-full lg:w-[480px] text-2xl font-[700] text-center rounded-[30px] p-5">
                    <h3 className="mb-10 lg:mb-5">RESOURCES & TOOLS</h3>
                    <ul className="list-disc list-inside mx-auto">
                        <li>Discover Insights</li>
                        <li>Invoice</li>
                        <li>Job Directory</li>
                        <li>Salary Guide</li>
                        <li>Time Reports</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="bg-[#F3E0FE] h-[350px] lg:h-[300px] py-5 lg:py-10 w-full lg:w-[480px] text-2xl font-[700] text-center rounded-[30px] p-5">
                    <h3 className="mb-10">AREAS OF EXPERTISE</h3>
                    <ul className="list-disc list-inside mx-auto">
                        <li>Finance</li>
                        <li>Technology</li>
                        <li>Digital Marketing</li>
                        <li>Artificial Intelligence</li>
                    </ul>
                </div>
                <div className="bg-[#FFEEE4] h-[350px] lg:h-[300px] py-5 lg:py-10 w-full lg:w-[450px] text-2xl font-[700] text-center rounded-[30px] p-5">
                    <h3 className="mb-10">ABOUT</h3>
                    <ul className="list-disc list-inside mx-auto">
                        <li>About KSVA</li>
                        <li>Careers With Us</li>
                        <li>Locations</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Scroller;
