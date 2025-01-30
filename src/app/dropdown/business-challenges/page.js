// pages/dropdown/business-challenges.js
import Image from 'next/image';
export default function BusinessChallenges() {
    return (
        <section>
            <section className="p-6 text-center">
                <h1 className="text-2xl md:text-6xl font-bold text-gray-800">Tell us about your business challenges</h1>
                <div className="w-[100%] md:w-[50%] p-5 text-[20px] md:text-4xl rounded-[20px] shadow-xl  text-center flex flex-col align-center gap-5 h-max mx-auto mt-5">
                    <h3>Get in touch with a consulting <br /> solutions professional</h3>
                    <div>
                        <i className="fa-solid fa-phone"></i>
                        <h3>Call Us: 1.866.355.0046</h3>
                        <form className='flex flex-col gap-5 mt-8'>
                            <div className='flex flex-col gap-3 text-left'>
                                <h2>Describe Your Needs</h2>
                                <div className="flex flex-col md:flex-row gap-2">
                                    <select required className="w-full p-2 text-gray-400 bg-gray-200 rounded-[20px] focus:outline-none">
                                        <option value="Option 1">Option 1</option>
                                        <option value="Option 2">Option 2</option>
                                        <option value="Option 3">Option 3</option>
                                        <option value="Option 4">Option 4</option>
                                    </select>
                                    <input required type='number' className='w-full md:w-[calc(100%/1.8)] p-2 rounded-[20px] bg-gray-200 focus:outline-none' placeholder='Zip Code'></input>
                                </div>
                                <textarea required className='h-[200px] bg-gray-200 p-3 w-full rounded-[20px] focus:outline-none' placeholder='Project Details'></textarea>
                            </div>
                            <div className='flex flex-col gap-3 text-left'>
                                <h2>Contact Information</h2>
                                <div className='flex flex-wrap gap-3'>
                                    <input required type='text' className='p-2 bg-gray-200 rounded-[20px] w-full md:w-[calc(100%/2.1)] focus:outline-none' placeholder='First Name'></input>
                                    <input required type='text' className='p-2 bg-gray-200 rounded-[20px] w-full md:w-[calc(100%/2.1)] focus:outline-none' placeholder='Last Name'></input>
                                    <input required type='text' className='p-2 bg-gray-200 rounded-[20px] w-full md:w-[calc(100%/2.1)] focus:outline-none' placeholder='Company Name'></input>
                                    <select required className="bg-gray-200 w-full md:w-[calc(100%/2.1)] p-2 text-gray-400 rounded-[20px] focus:outline-none">
                                        <option value="Option 1">Option 1</option>
                                        <option value="Option 2">Option 2</option>
                                        <option value="Option 3">Option 3</option>
                                        <option value="Option 4">Option 4</option>
                                    </select>
                                    <input required type='text' className='p-2 bg-gray-200 rounded-[20px] w-full md:w-[calc(100%/2.1)] focus:outline-none' placeholder='Your Job Title'></input>
                                    <input required type='email' className='p-2 bg-gray-200 rounded-[20px] w-full md:w-[calc(100%/2.1)] focus:outline-none' placeholder='Work Email'></input>
                                    <input required type='number' className='p-2 bg-gray-200 rounded-[20px] w-full md:w-[calc(100%/2.1)] focus:outline-none' placeholder='Business Phone'></input>
                                </div>
                                <input type='submit' className='bg-gradient-to-r from-[#93c5fd] to-[#0284c7] py-3 px-20 rounded-[20px] text-white w-max self-center mt-[20px]' value='Submit'></input>
                                <p className='text-[1rem] self-center'>This site is protected by reCAPTCHA. The Google <a href='#' className='text-blue-400 underline' title='Privacy Policy'>Privacy Policy</a> and <a className='text-blue-400 underline' href='#' title='Terms and Conditions'>Terms and Conditions</a></p>
                            </div>

                        </form>
                    </div>
                    <form>

                    </form>
                </div>
            </section>
            <section className="p-6 text-center mt-10 w-[80%] mx-auto">
                <h1 className="text-[50px] md:text-6xl font-bold text-gray-800">Solutions</h1>
                <div className='w-full flex flex-wrap justify-between mt-9'>
                    <div className="w-full md:w-[calc(100%/3.5)] text-left text-blue-600 p-5 text-[18px] md:text-2xl flex flex-col gap-5">
                        <p>Artificial Intelligence</p>
                        <p>Cybersecurity</p>
                        <p>Digital Transformation</p>
                        <p>Finance Transformation</p>
                        <p>Managed Solutions</p>
                        <p>Regulatory Compilance</p>
                        <p>Sustainability</p>
                    </div>
                    <div className="w-full md:w-[calc(100%/3.5)] text-left text-blue-600 p-5 text-[18px] md:text-2xl flex flex-col gap-5">
                        <p>Cloud</p>
                        <p>Data and Analysis</p>
                        <p>Ecosystem Partners</p>
                        <p>Internal Audit</p>
                        <p>Operations</p>
                        <p>Risk Management</p>
                        <p>Technology</p>
                    </div>
                    <div className="w-full md:w-[calc(100%/3.5)] text-left text-blue-600 p-5 text-[18px] md:text-2xl flex flex-col gap-5">
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
                <div className='relative z-[-2] md:w-[30%] h-[50vh] p-3'>
                    <Image
                        src="https://thumbs.dreamstime.com/b/mixed-group-around-table-business-meeting-21283913.jpg"
                        alt="Meeting"
                        height={300}
                        width={300}
                        className='rounded-[50px]'
                    ></Image>
                    <div className='absolute top-[140px] z-[-1] bg-gray-200 text-2xl font-bold text-left py-20 px-5 rounded-[50px]'>
                        <h3>See how our consulting capabilities can help transform your business.</h3>
                    </div>
                    <button className='absolute bottom-10 md:bottom-[-20px] left-10 md:left-[80px] font-bold bg-gradient-to-r from-[#93c5fd] to-[#0284c7] py-3 px-10 w-max rounded-[20px] text-white mt-[20px]'>Explore Consulting Solutions</button>
                </div>
                {/* For image Upper */}
                <div className='p-6 w-full md:w-[70%] shadow-xl bg-gray-300 text-left flex flex-col gap-10 rounded-[30px]'>
                    <h2 className='text-2xl md:text-5xl text-center'>AREA OF EXPERTISE</h2>
                    <div className='flex gap-5 w-full text-[15px] md:text-[1.25rem]'>
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
