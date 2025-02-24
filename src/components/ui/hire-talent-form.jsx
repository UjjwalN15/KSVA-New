'use client';
import React, { useState } from 'react';
import { BlogHeading, BlogNumHeading, BlogParagraph } from "../ui/BlogBasicComponent";



export default function HireForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        jobTitle: '',
        zipCode: '',
        startDate: '',
        skills: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        companyName: '',
        jobTitleContact: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleNext = () => {
        setCurrentStep(2);
    };

    const handlePrevious = () => {
        setCurrentStep(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="w-full mx-auto">
            {/* Step 1 */}
            {currentStep === 1 && (
                <div className="relative w-full h-full flex flex-col items-center shadow-lg py-10 px-5 rounded-[20px]">
                    <div className="absolute top-0 right-0 w-[100px] h-[4px] bg-[#4A98D7] rounded-full"></div>
                    <div className="absolute top-0 right-0 w-[4px] h-[100px] bg-[#4A98D7] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[100px] h-[4px] bg-[#4A98D7] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[4px] h-[100px] bg-[#4A98D7] rounded-full"></div>

                    <div>
                        <BlogHeading className="text-black text-center px-20 mx-auto" heading="Let us know what you’re looking for" />
                        <BlogParagraph className="text-[#417EAF] mt-10 text-center" paragraph="Position Details" />
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleInputChange}
                                    className="border-2 text-[24px] border-gray-300 rounded-md w-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Job Title"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    className="border-2 text-[24px] border-gray-300 rounded-md w-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Zip Code"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleInputChange}
                                    className="border-2 text-[24px] border-gray-300 rounded-md w-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Estimated Start Date"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleInputChange}
                                    className="border-2 text-[24px] border-gray-300 rounded-md w-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Skills, Tools, Technologies"
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="py-[10px] self-center rounded-[20px] w-max cursor-pointer px-[24px] bg-gradient-to-r transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white"
                            >
                                Next
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
                <div className="relative w-full h-full flex flex-col items-center shadow-lg py-10 px-5 rounded-[20px]">
                    <div className="absolute top-0 right-0 w-[100px] h-[4px] bg-[#4A98D7] rounded-full"></div>
                    <div className="absolute top-0 right-0 w-[4px] h-[100px] bg-[#4A98D7] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[100px] h-[4px] bg-[#4A98D7] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[4px] h-[100px] bg-[#4A98D7] rounded-full"></div>

                    <div>
                        <BlogHeading className="text-black text-center px-20 mx-auto" heading="Let us know what you’re looking for" />
                        <BlogParagraph className="text-[#417EAF] mt-10 text-center" paragraph="Contact Info" />
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="border-2 text-[24px] border-gray-300 rounded-md w-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="border-2 text-[24px] border-gray-300 rounded-md w-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="border-2 text-[24px] border-gray-300 rounded-md w-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Business Phone"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="border-2 text-[24px] border-gray-300 rounded-md w-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Work Email"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    className="border-2 text-[24px] border-gray-300 rounded-md w-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Company Name"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="jobTitleContact"
                                    value={formData.jobTitleContact}
                                    onChange={handleInputChange}
                                    className="border-2 text-[24px] border-gray-300 rounded-md w-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Job Title"
                                    required
                                />
                            </div>
                            <div className="flex gap-10 self-center">
                                <button
                                    type="button"
                                    onClick={handlePrevious}
                                    className="py-[10px] self-center rounded-[20px] w-max cursor-pointer px-[24px] bg-gradient-to-r transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white"
                                >
                                    Previous
                                </button>
                                <button
                                    type="submit"
                                    className="py-[10px] self-center rounded-[20px] w-max cursor-pointer px-[24px] bg-gradient-to-r transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
