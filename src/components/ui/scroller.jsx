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
        <div className="scroller py-20 lg:py-10" data-direction="right" data-speed="medium">
            <div className="scroller__inner">
                <div className="flex gap-5 w-full">
                    <div className="h-[400px] lg:h-[350px] flex flex-col gap-5 !w-[500px] lg:w-[400px] text-2xl font-[700] text-center">
                        <div className="relative h-[90%] w-full">
                            {/* Background Layers */}
                            <div className="absolute bottom-0 left-0 h-[90%] w-[90%] rounded-[20px]  bg-[#8D65C5] bg-opacity-40"></div>
                            <div className="absolute bottom-3 left-3 h-[90%] w-[90%] rounded-[20px]  bg-[#ECB4ED] bg-opacity-40"></div>
                            <div className="absolute bottom-6 left-6 h-[90%] w-[90%] rounded-[20px]  bg-[#ECB4ED] bg-opacity-40"></div>

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 h-[90%] w-[90%] rounded-[20px] p-7">
                                <ul className="text-left text-black list-disc list-inside mx-auto">
                                    <li><a href="#">IT Consulting</a></li>
                                    <li><a href="#">Cloud Services</a></li>
                                    <li><a href="#">Influencer Marketing</a></li>
                                    <li><a href="#">Software Development</a></li>
                                    <li><a href="#">Cyber Security</a></li>
                                </ul>
                            </div>
                        </div>
                        <h3>SERVICES</h3>
                    </div>
                    <div className="h-[400px] lg:h-[350px] flex flex-col gap-5 !w-[500px] lg:w-[400px] text-2xl font-[700] text-center">
                        <div className="relative h-[90%] w-full">
                            {/* Background Layers */}
                            <div className="absolute bottom-0 left-0 h-[90%] w-[90%] rounded-[20px]  bg-[#4A98D7CC] bg-opacity-40"></div>
                            <div className="absolute bottom-3 left-3 h-[90%] w-[90%] rounded-[20px]  bg-[#4A98D7] bg-opacity-40"></div>
                            <div className="absolute bottom-6 left-6 h-[90%] w-[90%] rounded-[20px]  bg-[#67A2D2] bg-opacity-40"></div>

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 h-[90%] w-[90%] rounded-[20px] p-7">
                                <ul className="text-left text-black list-disc list-inside mx-auto">
                                    <li><a href="#">Finance</a></li>
                                    <li><a href="#">Technology</a></li>
                                    <li><a href="#">Digital Marketing</a></li>
                                    <li><a href="#">Artificial Intelligence</a></li>
                                </ul>
                            </div>
                        </div>
                        <h3>Areas of Expertise</h3>
                    </div>
                    <div className="h-[400px] lg:h-[350px] flex flex-col gap-5 !w-[500px] lg:w-[400px] text-2xl font-[700] text-center">
                        <div className="relative h-[90%] w-full">
                            {/* Background Layers */}
                            <div className="absolute bottom-0 left-0 h-[90%] w-[90%] rounded-[20px]  bg-[#E5B75A] bg-opacity-40"></div>
                            <div className="absolute bottom-3 left-3 h-[90%] w-[90%] rounded-[20px]  bg-[#ECB4ED] bg-opacity-40"></div>
                            <div className="absolute bottom-6 left-6 h-[90%] w-[90%] rounded-[20px]  bg-[#F4C6AD] bg-opacity-40"></div>

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 h-[90%] w-[90%] rounded-[20px] p-7">
                                <ul className="text-left text-black list-disc list-inside mx-auto">
                                    <li><a href="#">Discover Insights</a></li>
                                    <li><a href="#">Invoice</a></li>
                                    <li><a href="#">Job Directory</a></li>
                                    <li><a href="#">Salary Guide</a></li>
                                    <li><a href="#">Time Reports</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <h3>RESOURCES & TOOLS</h3>
                    </div>
                    <div className="h-[400px] lg:h-[350px] flex flex-col gap-5 !w-[500px] lg:w-[400px] text-2xl font-[700] text-center">
                        <div className="relative h-[90%] w-full">
                            {/* Background Layers */}
                            <div className="absolute bottom-0 left-0 h-[90%] w-[90%] rounded-[20px]  bg-[#033941] bg-opacity-40"></div>
                            <div className="absolute bottom-3 left-3 h-[90%] w-[90%] rounded-[20px]  bg-[#55A26F] bg-opacity-40"></div>
                            <div className="absolute bottom-6 left-6 h-[90%] w-[90%] rounded-[20px]  bg-[#55A26F] bg-opacity-40"></div>

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 h-[90%] w-[90%] rounded-[20px] p-7">
                                <ul className="text-left text-black list-disc list-inside mx-auto">
                                    <li><a href="#">About KSVA</a></li>
                                    <li><a href="#">Careers With Us</a></li>
                                    <li><a href="#">Locations</a></li>
                                </ul>
                            </div>
                        </div>
                        <h3>ABOUT</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scroller;
