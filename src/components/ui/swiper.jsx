"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const SwiperComponent = () => {
    return (
        <div className="w-full h-full">
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3} // Default for larger screens
                spaceBetween={100} // Default for larger screens
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={{
                    delay: 3000, // Autoplay every 5 seconds
                    disableOnInteraction: false, // Keeps autoplay even after user interaction
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]} // Include Autoplay module
                className="h-full !pt-16"
                breakpoints={{
                    0: {
                        slidesPerView: 3, // Ensure 1 slide for small screens
                        spaceBetween: 50,  // Reduce spacing for small devices
                    },
                    768: {
                        slidesPerView: 1, // Keep 1 slide for tablets
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides for larger screens
                        spaceBetween: 150,
                    },
                }}
            >
                {/* Swiper slides */}
                <SwiperSlide className="w-full lg:p-0 p-10 pt-0 mx-auto">
                    <div className="text-center flex flex-col gap-3 sm:gap-4 md:gap-3">
                        {/* Title */}
                        <h3 className="text-xl lg:text-[24px]">Know How Much to Pay</h3>

                        {/* Image */}
                        <img
                            src="https://swiperjs.com/demos/images/nature-2.jpg"
                            alt="nature-2"
                            className="w-full h-[200px] sm:h-[250px] lg:h-[200px] object-cover"
                        />

                        {/* Subtitle */}
                        <h3 className="text-xl lg:text-[20px] font-bold">Stay Competitive with Our Salary Guide</h3>

                        {/* Description */}
                        <p className="text-[12px] lg:text-[16px] tracking-wide">
                            Attract, hire, and retain top talent with confidence. Our comprehensive Salary Guide provides industry-specific compensation insights, helping you benchmark salaries, stay competitive, and make informed hiring decisions.
                        </p>

                        {/* Button */}
                        <a
                            href="#"
                            title="Search Salary"
                            className="!w-full bg-[#D9D9D9] p-3 mt-10 rounded-[20px] text-sm lg:text-[24px]"
                        >
                            Search Salary
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full lg:p-0 p-10 pt-0 mx-auto">
                    <div className="text-center flex flex-col gap-3 sm:gap-4 md:gap-3">
                        {/* Title */}
                        <h3 className="text-xl lg:text-[24px]">Know How Much to Pay</h3>

                        {/* Image */}
                        <img
                            src="https://swiperjs.com/demos/images/nature-2.jpg"
                            alt="nature-2"
                            className="w-full h-[200px] sm:h-[250px] lg:h-[200px] object-cover"
                        />

                        {/* Subtitle */}
                        <h3 className="text-xl lg:text-[20px] font-bold">Stay Competitive with Our Salary Guide</h3>

                        {/* Description */}
                        <p className="text-[12px] lg:text-[16px] tracking-wide">
                            Attract, hire, and retain top talent with confidence. Our comprehensive Salary Guide provides industry-specific compensation insights, helping you benchmark salaries, stay competitive, and make informed hiring decisions.
                        </p>

                        {/* Button */}
                        <a
                            href="#"
                            title="Search Salary"
                            className="!w-full bg-[#D9D9D9] p-3 mt-10 rounded-[20px] text-sm lg:text-[24px]"
                        >
                            Search Salary
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full lg:p-0 p-10 pt-0 mx-auto">
                    <div className="text-center flex flex-col gap-3 sm:gap-4 md:gap-3">
                        {/* Title */}
                        <h3 className="text-xl lg:text-[24px]">Know How Much to Pay</h3>

                        {/* Image */}
                        <img
                            src="https://swiperjs.com/demos/images/nature-2.jpg"
                            alt="nature-2"
                            className="w-full h-[200px] sm:h-[250px] lg:h-[200px] object-cover"
                        />

                        {/* Subtitle */}
                        <h3 className="text-xl lg:text-[20px] font-bold">Stay Competitive with Our Salary Guide</h3>

                        {/* Description */}
                        <p className="text-[12px] lg:text-[16px] tracking-wide">
                            Attract, hire, and retain top talent with confidence. Our comprehensive Salary Guide provides industry-specific compensation insights, helping you benchmark salaries, stay competitive, and make informed hiring decisions.
                        </p>

                        {/* Button */}
                        <a
                            href="#"
                            title="Search Salary"
                            className="!w-full bg-[#D9D9D9] p-3 mt-10 rounded-[20px] text-sm lg:text-[24px]"
                        >
                            Search Salary
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full lg:p-0 p-10 pt-0 mx-auto">
                    <div className="text-center flex flex-col gap-3 sm:gap-4 md:gap-3">
                        {/* Title */}
                        <h3 className="text-xl lg:text-[24px]">Know How Much to Pay</h3>

                        {/* Image */}
                        <img
                            src="https://swiperjs.com/demos/images/nature-2.jpg"
                            alt="nature-2"
                            className="w-full h-[200px] sm:h-[250px] lg:h-[200px] object-cover"
                        />

                        {/* Subtitle */}
                        <h3 className="text-xl lg:text-[20px] font-bold">Stay Competitive with Our Salary Guide</h3>

                        {/* Description */}
                        <p className="text-[12px] lg:text-[16px] tracking-wide">
                            Attract, hire, and retain top talent with confidence. Our comprehensive Salary Guide provides industry-specific compensation insights, helping you benchmark salaries, stay competitive, and make informed hiring decisions.
                        </p>

                        {/* Button */}
                        <a
                            href="#"
                            title="Search Salary"
                            className="!w-full bg-[#D9D9D9] p-3 mt-10 rounded-[20px] text-sm lg:text-[24px]"
                        >
                            Search Salary
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full lg:p-0 p-10 pt-0 mx-auto">
                    <div className="text-center flex flex-col gap-3 sm:gap-4 md:gap-3">
                        {/* Title */}
                        <h3 className="text-xl lg:text-[24px]">Know How Much to Pay</h3>

                        {/* Image */}
                        <img
                            src="https://swiperjs.com/demos/images/nature-2.jpg"
                            alt="nature-2"
                            className="w-full h-[200px] sm:h-[250px] lg:h-[200px] object-cover"
                        />

                        {/* Subtitle */}
                        <h3 className="text-xl lg:text-[20px] font-bold">Stay Competitive with Our Salary Guide</h3>

                        {/* Description */}
                        <p className="text-[12px] lg:text-[16px] tracking-wide">
                            Attract, hire, and retain top talent with confidence. Our comprehensive Salary Guide provides industry-specific compensation insights, helping you benchmark salaries, stay competitive, and make informed hiring decisions.
                        </p>

                        {/* Button */}
                        <a
                            href="#"
                            title="Search Salary"
                            className="!w-full bg-[#D9D9D9] p-3 mt-10 rounded-[20px] text-sm lg:text-[24px]"
                        >
                            Search Salary
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperComponent;
