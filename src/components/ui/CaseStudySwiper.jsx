"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CaseStudySwiper = () => {
    const CaseStudy = [
        {
            title: "The Role of AI in Transforming Digital Marketing",
            tags: "Artificial Intelligence, Marketing Hub, Digital Marketing",
            link: "/dropdown/case-studies/Case1", // ✅ Fixed path (removed "/app")
        },
        {
            title: "The Role of Cybersecurity in Protecting Digital Assets",
            tags: "Cybersecurity, Marketing Hub,SmartCRM, Professional Services",
            link: "/dropdown/case-studies/Case2", // ✅ Fixed path
        },
        {
            title: "How UGC creators earn and their income potential",
            tags: "UGC, content creation, testimonials ",
            link: "/dropdown/case-studies/Case3", // ✅ Fixed path (removed "/app")
        },
        {
            title: "AI powered chatbots",
            tags: "Artificial Intelligence, Chatbots, NLP, 24/7",
            link: "/dropdown/case-studies/Case4", // ✅ Fixed path
        },
    ];

    const CaseStudyCardComponent = ({ title, tags, link }) => {
        const tagArray = tags.split(",").map((tag) => tag.trim());

        return (
            <div className="flex flex-col items-center w-full gap-5 h-[max] lg:h-[450px] p-5 pr-10 border-2 border-[#000000]">
                <h3 className="text-[#013056] text-4xl text-center font-[700]">{title}</h3> {/* ✅ Title correctly displayed */}
                <div className="w-full pr-10 flex flex-wrap gap-5 ml-16">
                    {tagArray.map((tag, index) => (
                        <p key={index} className="px-2 py-3 bg-[#D9D9D9] rounded-[20px]">{tag}</p>
                    ))}
                </div>
                {/* Ensure `link` is passed correctly */}
                {link ? (
                    <Link href={link} className="inline-block cursor-pointer py-3 px-5 rounded-[20px] text-white bg-gradient-to-r from-[#0268BD] to-[#013057]">
                        Read More
                    </Link>
                ) : (
                    <span className="inline-block cursor-not-allowed py-3 px-5 rounded-[20px] text-white bg-gray-400">
                        No Link Available
                    </span>
                )}
            </div>
        );
    };

    return (
        <div className="mx-auto w-full lg:w-[70%]">
            <Swiper
                navigation={true}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                }}
            >
                {CaseStudy.map((caseStudy, index) => (
                    <SwiperSlide key={index}>
                        <CaseStudyCardComponent
                            title={caseStudy.title} // ✅ Fixed title prop
                            description={caseStudy.description}
                            tags={caseStudy.tags}
                            link={caseStudy.link} // ✅ Fixed link
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CaseStudySwiper;
