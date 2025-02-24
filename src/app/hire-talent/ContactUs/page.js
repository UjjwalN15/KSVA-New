import Image from "next/image";
import { BlogHeading, BlogNumHeading, BlogParagraph } from "../../../components/ui/BlogBasicComponent";


const ContactUs = () => {
    return (
        <>
            <section className="relative w-full h-[50vh] py-10" style={{ backgroundImage: 'url(/hire-bg.png)' }}>
                <div className="max-w-7xl mx-auto text-center flex flex-col gap-10">
                    <BlogHeading className="text-[32px] lg:text-[64px] font-[700] text-[#4A98D7]" heading="Contact Us" />
                    <BlogParagraph className="text-[20px] lg:text-[30px] text-[#4A98D7]" paragraph="Get in Touch with our team." />
                    <div className="absolute w-[50%] right-0 bottom-0 h-[300px]">
                        <Image src="/contact-1.png" alt="Image" layout="fill" className="object-contain w-full h-full transition-transform duration-300 hover:scale-105" />
                    </div>
                </div>
            </section>
            <section className="w-full p-10">
                <div className="max-w-7xl mx-auto border-4 border-gray-300 rounded-[20px] p-10">
                    <form className="flex flex-wrap justify-between gap-10 py-10 px-5">
                        <div className="flex flex-col gap-5 w-[45%]">
                            <label for="firstname" className="text-[24px]">First Name</label>
                            <input type="text" id="firstname" className="bg-[#F5F7F7] rounded-[20px] text-[18px] px-5 py-3" placeholder="First Name"></input>
                        </div>
                        <div className="flex flex-col gap-5 w-[45%]">
                            <label for="lastname" className="text-[24px]">Last Name</label>
                            <input type="text" id="lastname" className="bg-[#F5F7F7] rounded-[20px] text-[18px] px-5 py-3" placeholder="Last Name"></input>
                        </div>
                        <div className="flex flex-col gap-5 w-[45%]">
                            <label for="company" className="text-[24px]">Company</label>
                            <input type="text" id="company" className="bg-[#F5F7F7] rounded-[20px] text-[18px] px-5 py-3" placeholder="Company Name"></input>
                        </div>
                        <div className="flex flex-col gap-5 w-[45%]">
                            <label for="phone" className="text-[24px]">Phone Number</label>
                            <input type="number" id="phone" className="bg-[#F5F7F7] rounded-[20px] text-[18px] px-5 py-3" placeholder="Phone Nuimber"></input>
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            {/* Select Dropdown */}
                            <label htmlFor="options" className="text-[24px]">Project Type</label>
                            <select id="options" className="bg-[#F5F7F7] rounded-[20px] text-[18px] px-5 py-3">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <label htmlFor="message" className="text-[24px]">Message (min 10 characters long)</label>
                            <textarea id="message" className="bg-[#F5F7F7] rounded-[20px] text-[18px] px-5 py-3" placeholder="Tell us about your project"></textarea>
                        </div>
                        <div className="flex w-full justify-center items-center">
                            <input type="submit" value="Submit" className="py-[10px] cursor-pointer px-[20px] bg-gradient-to-r rounded-[20px] transition-transform hover:scale-105 from-[#275071] to-[#4A98D7] text-white"></input>
                        </div>
                    </form>
                </div>
            </section>
            <BlogParagraph className="text-center" paragraph={`Need immediate help? Call <span class="text-[#0892A7]">562-310-1189</span>`} />
            <section className="w-full h-[70vh] my-10">
                <div className="max-w-7xl mx-auto h-full">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125620.13728491634!2d-121.55256720495187!3d38.581571896356286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac67b5b9494d7%3A0x34d26bdb96a38dc8!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2snp!4v1708704893745!5m2!1sen!2snp"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

        </>
    );
}
export default ContactUs;