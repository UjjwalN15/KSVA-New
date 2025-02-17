"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import necessary modules
import Image from "next/image"; // Import Image from next/image

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles

const ServicesSwiper = () => {
    const services = [
        {
            number: "01",
            image: "/image 33.png",
            title: "Website Development",
            description: "Crafting highly functional and visually appealing websites tailored to your specific needs.",
        },
        {
            number: "02",
            image: "/digitalmarketing2.png",
            title: "Digital Marketing",
            description: "Enhance your brand's presence and engagement with precision-driven digital strategies.",
        },
        {
            number: "03",
            image: "/uiux2 1.png",
            title: "UI / UX",
            description: "Develop a compelling and memorable brand identity that connects with your audience.",
        },
        {
            number: "04",
            image: "/branding2.png",
            title: "Branding",
            description: "Create a strong, memorable brand identity that resonates with your audience.",
        },
        {
            number: "05",
            image: "/googlesearch.png",
            title: "Search Engine Optimization (SEO)",
            description: "Tailored SEO strategies to boost search engine visibility and drive growth.",
        },
        {
            number: "06",
            image: "/services2.png",
            title: "Content Creation",
            description: "Crafting impactful and engaging content to foster audience connection.",
        },
        {
            number: "07",
            image: "/services-image.png",
            title: "Lead Generation",
            description: "Attract, engage, and convert high-quality leads to drive business growth.",
        },
        {
            number: "08",
            image: "/services1.png",
            title: "Social Media Marketing (SMM)",
            description: "Build a strong online presence and engage with your targeted audience.",
        },
    ];

    const ServicesCardComponent = ({ number, image, title, description }) => {
        return (
            <div className="flex flex-col items-center gap-5 h-[595px] lg:h-[580px] p-5 border-2 border-[#033941] rounded-lg shadow-lg">
                <h3 className="text-[32px] font-bold">{number}.</h3>
                <Image
                    src={image}
                    width={128}
                    height={128}
                    alt={title}
                    className="w-[75%] h-[300px] object-contain"
                />
                <h3 className="text-[24px] text-[#275071] text-center font-bold">{title}</h3>
                <p className="text-[18px] text-center text-gray-600">{description}</p>
            </div>
        );
    };
    return (
        <div style={{ width: "100%", height: "500px" }}>
            <Swiper
                navigation={true} // Enables navigation arrows
                modules={[Navigation, Pagination, Autoplay]} // Adding necessary modules
                className="mySwiper"
                spaceBetween={30}
                slidesPerView={3} // 3 slides per page
                loop={true} // Enables looping of slides
                breakpoints={{
                    320: {
                        slidesPerView: 1, // 1 slide for small screens
                    },
                    768: {
                        slidesPerView: 2, // 2 slides for tablets
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides for larger screens
                    },
                }}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <ServicesCardComponent
                            number={service.number}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default ServicesSwiper;
