import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BlogHeading, BlogNumHeading, BlogParagraph } from "../../../components/ui/BlogBasicComponent";
import PreviewCandidate from '../../../components/ui/Preview'

const AccessGlobal = () => {
    return (
        <>
            <section className="w-full">
                <div className="flex justify-between max-w-7xl mx-auto py-5">
                    <div className="w-[58%]">
                        <BlogHeading className="text-[52px] lg:text-[64px] font-[700] text-[#4A98D7]" heading="Access Global Consulting Expertise" />
                        <BlogParagraph className="text-[20px] lg:text-[30px]" paragraph="Unlock the power of world-class consulting with KSVA. Our expert team connects you with top-tier professionals across industries, ensuring innovative solutions tailored to your business needs. Whether you're looking to scale, optimize operations, or enhance digital presence, our global expertise drives success." />
                    </div>
                    <div className="w-[40%]">
                        <div className="relative w-full h-[500px]">
                            <Image src="/access-1.png" alt="Image" layout="fill" className="object-contain w-full h-full transition-transform duration-300 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full" style={{ backgroundImage: 'url(/access-2.png)' }}>
                <div className="flex flex-row-reverse justify-between max-w-7xl mx-auto py-5">
                    <div className="w-[58%]">
                        <BlogHeading className="text-[52px] lg:text-[64px] font-[700] text-[#4A98D7]" heading="Adapt and Scale Your Project Resources" />
                        <BlogParagraph className="text-[20px] lg:text-[30px]" paragraph="Get the right talent at the right time with a customized team that adjusts to your project's needs. Our flexible delivery model offers expert consulting from start to finish, along with contract professionals to support critical roles during peak phases." />
                    </div>
                    <div className="w-[40%]">
                        <div className="relative w-full h-[500px]">
                            <Image src="/access-3.png" alt="Image" height={100} width={100} layout="contain" className="object-contain w-full h-full transition-transform duration-300 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-5">
                <div className="flex flex-row justify-between max-w-7xl mx-auto py-5 items-center">
                    <div className="w-[58%] flex flex-col gap-5">
                        <BlogHeading className="text-[52px] lg:text-[64px] font-[700] text-[#4A98D7]" heading="Maximize Your Business Potential" />
                        <BlogParagraph className="text-[20px] lg:text-[30px]" paragraph="Tap into expert advisory services to drive innovation and efficiency." />
                        <ul className="flex flex-col gap-10">
                            <li className="flex gap-5 items-center">
                                <i className="fa-solid fa-check text-xl lg:text-6xl text-black font-extrabold"></i>
                                <BlogParagraph className="text-[20px] lg:text-[30px]" paragraph="Tap into expert advisory services to drive innovation and efficiency." />
                            </li>
                            <li className="flex gap-5 items-center">
                                <i className="fa-solid fa-check text-xl lg:text-6xl text-black font-extrabold"></i>
                                <BlogParagraph className="text-[20px] lg:text-[30px]" paragraph="Streamline operations and enhance productivity through automation." />
                            </li>
                            <li className="flex gap-5 items-center">
                                <i className="fa-solid fa-check text-xl lg:text-6xl text-black font-extrabold"></i>
                                <BlogParagraph className="text-[20px] lg:text-[30px]" paragraph="Rely on our expertise and managed solutions for seamless daily operations." />
                            </li>
                            <li className="flex gap-5 items-center">
                                <i className="fa-solid fa-check text-xl lg:text-6xl text-black font-extrabold"></i>
                                <BlogParagraph className="text-[20px] lg:text-[30px]" paragraph="Scale your workforce with the right talent to fuel growth." />
                            </li>
                        </ul>
                        <a href="#accessform" className="w-max mx-auto rounded-[10px] py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white" title="Find your consulting solutions">Find your consulting solutions</a>
                    </div>
                    <div className="w-[40%] relative">
                        <div className="relative w-full h-[500px]">
                            <Image src="/access-4.png" alt="Image" layout="fill" className="object-contain w-full h-full transition-transform duration-300 hover:scale-105" />
                        </div>
                        <div className="border-4 border-black absolute bottom-0 h-[500px] w-[500px] rounded-[20px]"></div>
                        <div className="border-4 border-black absolute left-[15px] bottom-[15px] h-[470px] w-[470px] rounded-[20px]"></div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#D4E7F766] py-5" id="accessform">
                <div className="max-w-7xl mx-auto py-5">
                    <BlogHeading className="text-[52px] text-center lg:text-[64px] font-[700] text-black" heading="Tell Us About Your Business Challenge" />
                    <div className="w-[90%] mx-auto border-2 py-5 border-black rounded-[20px]">
                        <BlogHeading className="text-[52px] text-center w-[40%] mx-auto lg:text-[28px] font-[700] text-[#0268BD]" heading="Get in touch with consulting solutions professionals" />
                        <form className="w-[70%] mx-auto flex flex-col gap-16 mt-10">
                            <div>
                                <BlogHeading className="text-[52px] lg:text-[28px] font-[700] text-black" heading="Describe your needs" />
                                <div className="flex flex-wrap justify-between gap-10">
                                    <select required className="w-[45%] h-[50px] bg-[#f9fafb] text-[18px] pr-10 text-black p-2 rounded-[6px] focus:outline-none">
                                        <option value="Option 1">Option 1</option>
                                        <option value="Option 2">Option 2</option>
                                        <option value="Option 3">Option 3</option>
                                        <option value="Option 4">Option 4</option>
                                    </select>
                                    <input type="number" placeholder="Zip Code" className="w-[45%] h-[50px] bg-[#f9fafb] text-[18px] pr-10 text-black p-2 rounded-[6px] focus:outline-none"></input>
                                    <textarea placeholder="Project Details" className="w-full h-[150px] bg-[#f9fafb] text-[20px] pr-10 text-black p-2 rounded-[6px] focus:outline-none"></textarea>
                                </div>
                            </div>
                            <div>
                                <BlogHeading className="text-[52px] lg:text-[28px] font-[700] text-black" heading="Contact Information" />
                                <div className="flex flex-wrap justify-between gap-10">
                                    <input type="text" placeholder="First Name" className="w-[45%] h-[50px] bg-[#f9fafb] text-[18px] pr-10 text-black p-2 rounded-[6px] focus:outline-none"></input>
                                    <input type="text" placeholder="Last Name" className="w-[45%] h-[50px] bg-[#f9fafb] text-[18px] pr-10 text-black p-2 rounded-[6px] focus:outline-none"></input>
                                    <input type="text" placeholder="Company Name" className="w-[45%] h-[50px] bg-[#f9fafb] text-[18px] pr-10 text-black p-2 rounded-[6px] focus:outline-none"></input>
                                    <input type="text" placeholder="Company Size" className="w-[45%] h-[50px] bg-[#f9fafb] text-[18px] pr-10 text-black p-2 rounded-[6px] focus:outline-none"></input>
                                    <input type="text" placeholder="Your Job Title" className="w-[45%] h-[50px] bg-[#f9fafb] text-[18px] pr-10 text-black p-2 rounded-[6px] focus:outline-none"></input>
                                    <input type="email" placeholder="Work Email" className="w-[45%] h-[50px] bg-[#f9fafb] text-[18px] pr-10 text-black p-2 rounded-[6px] focus:outline-none"></input>
                                    <input type="text" placeholder="Business Phone" className="w-[45%] h-[50px] bg-[#f9fafb] text-[18px] pr-10 text-black p-2 rounded-[6px] focus:outline-none"></input>
                                </div>
                            </div>
                            <input type="submit" value="Submit" className="w-max mx-auto rounded-[10px] py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white"></input>
                        </form>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="flex flex-row-reverse justify-between max-w-7xl mx-auto py-5">
                    <div className="w-[58%]">
                        <BlogHeading className="text-[52px] lg:text-[64px] font-[700] text-[#4A98D7]" heading="Process & Technology Implementation" />
                        <BlogParagraph className="text-[20px] lg:text-[30px]" paragraph="Accelerate business performance with cutting-edge technologies and streamlined processes. Our expertise in change management, advanced solutions, and specialized talent ensures immediate and lasting value for your business." />
                    </div>
                    <div className="w-[40%]">
                        <div className="relative w-full h-[500px]">
                            <Image src="/access-8.png" alt="Image" height={100} width={100} layout="contain" className="object-contain w-full h-full transition-transform duration-300 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="flex flex-row justify-between max-w-7xl mx-auto py-5">
                    <div className="w-[58%]">
                        <BlogHeading className="text-[52px] lg:text-[64px] font-[700] text-[#4A98D7]" heading="Build & Expand Your Workforce" />
                        <BlogParagraph className="text-[20px] lg:text-[30px]" paragraph="Strengthen your organization with our global network of specialized contract and consulting professionals. Leverage our expertise in workforce planning, optimization, and employee experience to build and manage high-performing teams effortlessly." />
                    </div>
                    <div className="w-[40%]">
                        <div className="relative w-full h-[500px]">
                            <Image src="/access-6.png" alt="Image" height={100} width={100} layout="contain" className="object-contain w-full h-full transition-transform duration-300 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>
            <PreviewCandidate />
            <section className="w-full">
                <div className="flex flex-row justify-between max-w-7xl mx-auto py-5">
                    <div className="w-[58%] flex flex-col gap-10">
                        <BlogHeading className="text-[52px] lg:text-[64px] font-[700] text-[#4A98D7]" heading="Let’s Work Together" />
                        <BlogParagraph className="text-[20px] lg:text-[30px]" paragraph="With a global presence spanning 400+ locations, we’re equipped to support all your consulting and talent needs wherever and whenever you need us." />
                        <a href="#accessform" className="w-max mx-auto rounded-[10px] py-[10px] cursor-pointer px-[20px] bg-gradient-to-r transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white" title="Find your consulting solutions">Find your consulting solutions</a>
                    </div>
                    <div className="w-[40%]">
                        <div className="relative w-full h-[500px]">
                            <Image src="/access-7.png" alt="Image" height={100} width={100} layout="contain" className="object-contain w-full h-full transition-transform duration-300 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AccessGlobal;