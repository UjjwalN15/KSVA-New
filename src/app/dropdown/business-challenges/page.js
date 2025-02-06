// pages/dropdown/business-challenges.js
import Image from 'next/image';
export default function BusinessChallenges() {
    return (
        <section>
            <section className="p-6 text-center">
                <h1 className="text-2xl md:text-[30px] font-bold text-gray-800">Tell us about your business challenges</h1>
                <div className="w-[100%] md:w-[670px] p-5 text-[20px] md:text-[24px] rounded-[6px] border-2 border-[#eee] text-center flex flex-col align-center gap-5 h-max mx-auto mt-5">
                    <h3 className='text-[18px] leading-[28px]'>Get in touch with a consulting solutions professional</h3>
                    <div>
                        <i className="fa-solid fa-phone"></i>
                        <h3 className='text-[18px] leading-[28px]'>Call Us: 1.866.355.0046</h3>
                        <form className='flex flex-col gap-5 mt-8'>
                            <div className='flex flex-col gap-5 text-left'>
                                <h2 className='text-[18px] lg:text-[24px] leading-[36px] font-bold'>Describe Your Needs</h2>
                                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-3 lg:w-full'>
                                    <div className='lg:w-[calc(100%/2.1)]'>
                                        <h3 className='text-[16px] text-[#374151]'>Select an option</h3>
                                        <div className="flex flex-col md:flex-row gap-2">
                                            <select required className="w-full h-full bg-[#f9fafb] text-[14px] pr-10 text-black p-2 rounded-[6px] focus:outline-none">
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='lg:w-[calc(100%/2.1)]'>
                                        <h3 className='text-[16px] text-[#374151]'>Zip Code</h3>
                                        <input required type='number' className='w-full bg-[#f9fafb] text-[14px] text-black p-2 rounded-[6px] focus:outline-none' placeholder='Zip Code'></input>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-[16px] text-[#374151]'>Project Details</h3>
                                    <textarea required className='h-[100px] w-full bg-[#f9fafb] text-[14px] text-black p-2 rounded-[6px] focus:outline-none' placeholder='Project Details'></textarea>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 text-left'>
                                <h2 className='text-[18px] lg:text-[24px] font-bold'>Contact Information</h2>
                                <div className='flex flex-wrap gap-3'>
                                    <div className='w-full lg:w-[calc(100%/2.1)]'>
                                        <h3 className='text-[16px] text-[#374151]'>First Name</h3>
                                        <input required type='text' className='w-full bg-[#f9fafb] text-[14px] text-black p-2 rounded-[6px] focus:outline-none' placeholder='First Name'></input>
                                    </div>
                                    <div className='w-full lg:w-[calc(100%/2.1)]'>
                                        <h3 className='text-[16px] text-[#374151]'>Last Name</h3>
                                        <input required type='text' className='w-full bg-[#f9fafb] text-[14px] text-black p-2 rounded-[6px] focus:outline-none' placeholder='Last Name'></input>
                                    </div>
                                    <div className='w-full lg:w-[calc(100%/2.1)]'>
                                        <h3 className='text-[16px] text-[#374151]'>Company Name</h3>
                                        <input required type='text' className='w-full bg-[#f9fafb] text-[14px] text-black p-2 rounded-[6px] focus:outline-none' placeholder='Company Name'></input>
                                    </div>
                                    <div className='w-full lg:w-[calc(100%/2.1)]'>
                                        <h3 className='text-[16px] text-[#374151]'>Select an option</h3>
                                        <div className="flex flex-col md:flex-row gap-2">
                                            <select required className="w-full bg-[#f9fafb] text-[14px] text-black p-2 rounded-[6px] focus:outline-none">
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='w-full lg:w-[calc(100%/2.1)]'>
                                        <h3 className='text-[16px] text-[#374151]'>Job Title</h3>
                                        <input required type='text' className='w-full bg-[#f9fafb] text-[14px] text-black p-2 rounded-[6px] focus:outline-none' placeholder='Job Title'></input>
                                    </div>
                                    <div className='w-full lg:w-[calc(100%/2.1)]'>
                                        <h3 className='text-[16px] text-[#374151]'>Work Email</h3>
                                        <input required type='text' className='w-full bg-[#f9fafb] text-[14px] text-black p-2 rounded-[6px] focus:outline-none' placeholder='abc@example.com'></input>
                                    </div>
                                    <div className='w-full lg:w-[calc(100%/2.1)]'>
                                        <h3 className='text-[16px] text-[#374151]'>Business Phone</h3>
                                        <input required type='text' className='w-full bg-[#f9fafb] text-[14px] text-black p-2 rounded-[6px] focus:outline-none' placeholder='1234567890 : 10 digits'></input>
                                    </div>
                                </div>
                                <input type='submit' className='w-full cursor-pointer transition-transform leading-[24px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm rounded-[6px] mt-[20px] py-2' value='Submit'></input>
                                <p className='text-[0.75rem] self-center'>This site is protected by reCAPTCHA. The Google <a href='#' className='text-blue-400 underline' title='Privacy Policy'>Privacy Policy</a> and <a className='text-blue-400 underline' href='#' title='Terms and Conditions'>Terms and Conditions</a></p>
                            </div>

                        </form>
                    </div>
                    <form>

                    </form>
                </div>
            </section>
            <section className="p-6 text-center mt-10 w-[80%] mx-auto">
                <h1 className="text-[30px] md:text-[30px] font-bold text-gray-800">Solutions</h1>
                <div className='w-full flex flex-wrap justify-between mt-9'>
                    <div className="w-full md:w-[calc(100%/3.5)] text-left text-blue-600 p-5 text-[18px] md:text-[18px] flex flex-col gap-5">
                        <p>Artificial Intelligence</p>
                        <p>Cybersecurity</p>
                        <p>Digital Transformation</p>
                        <p>Finance Transformation</p>
                        <p>Managed Solutions</p>
                        <p>Regulatory Compilance</p>
                        <p>Sustainability</p>
                    </div>
                    <div className="w-full md:w-[calc(100%/3.5)] text-left text-blue-600 p-5 text-[18px] md:text-[18px] flex flex-col gap-5">
                        <p>Cloud</p>
                        <p>Data and Analysis</p>
                        <p>Ecosystem Partners</p>
                        <p>Internal Audit</p>
                        <p>Operations</p>
                        <p>Risk Management</p>
                        <p>Technology</p>
                    </div>
                    <div className="w-full md:w-[calc(100%/3.5)] text-left text-blue-600 p-5 text-[18px] md:text-[18px] flex flex-col gap-5">
                        <p>Customer Experience</p>
                        <p>Data Privacy</p>
                        <p>Employee Experience</p>
                        <p>Legal Consulting</p>
                        <p>Quantum Computing</p>
                        <p>Srabanes-Oxley</p>
                        <p>Transaction Services</p>
                    </div>
                </div>
            </section>

            <section className="p-6 text-center mt-10 w-[100%] mx-auto md:flex gap-5">
                <div className='relative md:w-[30%] h-[50vh] p-3'>
                    {/* Image */}
                    <Image
                        src="https://thumbs.dreamstime.com/b/mixed-group-around-table-business-meeting-21283913.jpg"
                        alt="Meeting"
                        height={300}
                        width={300}
                        className='rounded-[50px] relative z-10' // Ensures the image is above the background div
                    />

                    {/* Text Background */}
                    <div className='absolute top-[140px] bg-gray-200 text-2xl font-bold text-left py-20 px-5 rounded-[50px] z-0'>
                        <h3>See how our consulting capabilities can help transform your business.</h3>
                    </div>

                    {/* CTA Button */}
                    <a className='absolute bottom-10 md:bottom-[0px] left-10 md:left-[80px] font-bold leading-[24px] bg-[#2563eb] hover:bg-[#1d4ed8] text-sm rounded-[6px] py-3 px-10 w-max text-white mt-[20px] cursor-pointer'>
                        Explore Consulting Solutions
                    </a>
                </div>

                {/* For image Upper */}
                <div className='p-6 w-full md:w-[70%] shadow-xl bg-gray-300 text-left flex flex-col gap-10 rounded-[30px]'>
                    <h2 className='text-[30px] md:text-[30px] text-center'>AREA OF EXPERTISE</h2>
                    <div className='flex gap-5 w-full text-[14px] md:text-[18px]'>
                        <div className='w-[55%] p-5'>
                            <div>
                                <h2 className='font-bold'>Technology</h2>
                                <p className='mt-3'>Cloud . Cybersecurity . Data & Analytics . Data Privacy  Intelligent . Automation . IT Service Desk</p>
                            </div>
                            <div className='mt-5'>
                                <h2 className='font-bold'>Risk, Audit and Compilance</h2>
                                <p className='mt-3'>Internal Audit . Regulatory Compliance . Financial Crimes Compliance . Risk Management . Surbance-Oxley</p>
                            </div>
                            <div className='mt-5'>
                                <h2 className='font-bold'>Finance and Accounting</h2>
                                <p className='mt-3'>Finance Transformation . Process Optimization . Finance Technology & Data . Reporting & Compliance  Cost & Performance Management</p>
                            </div>
                            <div className='mt-5'>
                                <h2 className='font-bold'>Digital Marketing and Customer Experience</h2>
                                <p className='mt-3'>Digital Transformation . Marketing Services . Marketing Technology . Creative and Design</p>
                            </div>
                        </div>
                        <div className='w-[45%] p-5'>
                            <div>
                                <h2 className='font-bold'>Legal</h2>
                                <p className='mt-3'>Data Privacy . Legal Consulting . Transaction Services</p>
                            </div>
                            <div className='mt-5'>
                                <h2 className='font-bold'>Operations</h2>
                                <p className='mt-3'>Contact Centers . Sustainability . Operational Effectiveness . Supply Chain . Sourcing & Procurement</p>
                            </div>
                            <div className='mt-5'>
                                <h2 className='font-bold'>Human Resources</h2>
                                <p className='mt-3'>HR Transformation . Employee Experience . Managed Talent . Future of Work . Organizational Transformation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    );
}
