"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CaseStudySwiper = () => {
    const CaseStudy = [
        {
            image: "/A.R.I.A.png",
            description: "Aria Tax & Accounting communicates seamlessly with 20,000+ agents through KSVA Tech Solutions",
            tags: "Tax & Accounting, Marketing Hub",
        },
        {
            image: "/AAsra+Footer+Logo.png",
            description: "Aasra Hospitality completely revamped their marketing strategy with KSVA Tech Solutions",
            tags: "Marketing Hub, SmartCRM, Professional Services",
        },
        {
            image: "/A.R.I.A.png",
            description: "Aria Tax & Accounting communicates seamlessly with 20,000+ agents through KSVA Tech Solutions",
            tags: "Tax & Accounting, Marketing Hub",
        },
        {
            image: "/AAsra+Footer+Logo.png",
            description: "Aasra Hospitality completely revamped their marketing strategy with KSVA Tech Solutions",
            tags: "Marketing Hub, SmartCRM, Professional Services",
        },
    ];

    const CaseStudyCardComponent = ({ image, description, tags }) => {
        // Split tags by commas and trim whitespace
        const tagArray = tags.split(',').map(tag => tag.trim());

        return (
            <div className="flex flex-col items-center gap-5 h-max lg:h-[400px] p-5 border-2 border-[#000000]">
                <div className='flex justify-center h-[100px]'>
                    <Image
                        src={image}
                        width={128}
                        height={128}
                        alt="Case Study Image"
                        className="lg:w-[50%] h-max object-contain bg-black p-2"
                    />
                </div>
                <p className="w-[80%] text-[18px] text-left text-gray-600">{description}</p>
                <div className="w-full flex flex-wrap gap-5 ml-16 ">
                    {tagArray.map((tag, index) => (
                        <a key={index} className="px-2 py-3 bg-[#D9D9D9] rounded-[20px]">{tag}</a>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className='mx-auto w-full lg:w-[50%]'>
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
                            image={caseStudy.image}
                            description={caseStudy.description}
                            tags={caseStudy.tags}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CaseStudySwiper;
