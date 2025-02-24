import Image from "next/image";
import { BlogHeading, BlogNumHeading, BlogParagraph } from "../../../../components/ui/BlogBasicComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars, faVolumeHigh, faCopy } from "@fortawesome/free-solid-svg-icons";


const Case2 = () => {
    return (
        <div className="bg-cover bg-center w-full py-10" style={{ backgroundImage: 'url(/case2-1.png)' }}>
            <section className="max-w-7xl mx-auto">
                <BlogHeading className="text-[#4B698B] text-[28px]" heading="Case Study" />
                <BlogHeading className="text-[#4B698B] text-[62px] font-[800]" heading="The Role of Cybersecurity in Protecting Digital Assets" />
            </section>
            <section className="flex max-w-7xl mx-auto border-4 border-[#4B698B] rounded-[20px]">
                <div className="w-[40%] flex border-r-4 border-[#4B698B] flex-col gap-10 p-5">
                    <div className="relative m-5 mx-auto w-full h-[300px]">
                        <Image src="/case2-2.png" alt="Image" layout="fill" className="w-full h-full transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="flex flex-col gap-5 items-center">
                        <BlogHeading className="text-black text-[48px] " heading="Challenges" />
                        <ul className="flex flex-col gap-5 items-center list-disc p-5">
                            <li><BlogParagraph className="text-[18px] text-[#4B698B] py-3 px-5 rounded-[20px]" paragraph="Outdated Digital Presence & Branding" /></li>
                            <li><BlogParagraph className="text-[18px] text-[#4B698B] py-3 px-5 rounded-[20px]" paragraph="Inefficient Booking & Guest Management System" /></li>
                            <li><BlogParagraph className="text-[18px] text-[#4B698B] py-3 px-5 rounded-[20px]" paragraph="Low Online Visibility & SEO Ranking" /></li>
                            <li><BlogParagraph className="text-[18px] text-[#4B698B] py-3 px-5 rounded-[20px]" paragraph="Inconsistent Social Media Engagement" /></li>
                            <li><BlogParagraph className="text-[18px] text-[#4B698B] py-3 px-5 rounded-[20px]" paragraph="Data Security & Compliance Needs" /></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5 items-center">
                        <BlogHeading className="text-black text-[48px] " heading="Impact :" />
                        <div className="flex flex-col p-5">
                            <BlogHeading className="text-[#4B698B] !text-[32px] font-[700] " heading="EVOLVING THREAT LANDSCAPE" />
                            <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="Cyber threats continuously evolve, requiring organizations to update their defenses constantly." />
                        </div>
                        <div className="flex flex-col p-5">
                            <BlogHeading className="text-[#4B698B] !text-[32px] font-[700] " heading="HIGH IMPLEMENTATION COST" />
                            <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="Advanced cybersecurity measures, including AI-driven tools and encryption, demand significant financial investment." />
                        </div>
                        <div className="flex flex-col p-5">
                            <BlogHeading className="text-[#4B698B] !text-[32px] font-[700] " heading="USER RESISTANCE TO SECURITY MEASURES " />
                            <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="Implementing multi-factor authentication and strict security policies can lead to user frustration and lower adoption rates" />
                        </div>
                        <div className="flex flex-col p-5">
                            <BlogHeading className="text-[#4B698B] !text-[32px] font-[700] " heading="SHORTAGE OF SKILLED CYBERSECURITY PROFESSIONALS" />
                            <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="The growing demand for cybersecurity experts makes it difficult for organizations to find and retain skilled personnel." />
                        </div>
                        <div className="flex flex-col p-5">
                            <BlogHeading className="text-[#4B698B] !text-[32px] font-[700] " heading="COMPLIANCE AND REGULATORY COMPLEXITY" />
                            <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="Organizations must navigate complex cybersecurity regulations and ensure compliance with industry standards such as GDPR and PCI DSS." />
                        </div>
                    </div>
                </div>
                <div className="w-[60%] flex flex-col gap-10 p-5">
                    <div className="flex flex-col gap-5">
                        <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph='"There are only two types of companies: those that have been hacked and those that will be." ' />
                        <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph=" – Robert Mueller" />
                    </div>
                    <div className="flex flex-col gap-10 items-center">
                        <div className="flex flex-col gap-5">
                            <h3 className="flex gap-5 items-center">
                                <FontAwesomeIcon icon={faBinoculars} className="h-[100px] w-[100px]" />
                                <BlogHeading className="text-black text-[48px] " heading="Overview" />
                            </h3>
                            <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="Cybersecurity has become an essential component of the digital world, helping businesses and individuals safeguard sensitive information from cyber threats. This case study explores the significance of implementing advanced cybersecurity measures to protect data, prevent cyberattacks, and ensure regulatory compliance." />
                            <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="The rise of digital transactions and data-driven operations has increased vulnerabilities to cyber thry.eats such as phishing attacks, data breaches. Traditional security measures are often insufficient in countering sophisticated cyber threats, necessitating a comprehensive cybersecurity strateg" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="flex gap-5 items-center">
                                <FontAwesomeIcon icon={faVolumeHigh} className="h-[100px] w-[100px]" />
                                <BlogHeading className="text-black text-[48px] " heading="Amplify Beam Solutions" />
                            </h3>
                            <div>
                                <BlogHeading className="text-black text-[32px] " heading="AI-Powered Threat Detection:" />
                                <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="Integrating AI-driven security systems to monitor network activity in real time. These systems use machine learning algorithms to detect anomalies and potential threats before they can cause harm." />
                            </div>
                            <div>
                                <BlogHeading className="text-black text-[32px] " heading="Multi-Factor Authentication (MFA)" />
                                <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="Enhancing security by requiring users to verify their identities using multiple authentication factors, such as biometrics and one-time passwords." />
                            </div>
                            <div>
                                <BlogHeading className="text-black text-[32px] " heading="Data Encryption and Secure Communication" />
                                <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="Deploying end-to-end encryption for transactions and communications to prevent unauthorized access to sensitive data" />
                            </div>
                            <div>
                                <BlogHeading className="text-black text-[32px] " heading="Employee Cybersecurity Training" />
                                <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph=" Conducting regular cybersecurity training sessions to ensure employees can identify and respond to potential threats, reducing human error as a vulnerability."/>
                            </div>
                            <div>
                                <BlogHeading className="text-black text-[32px] " heading="Incident Response and Recovery Plan" />
                                <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="Establishing a dedicated cybersecurity team to monitor threats and respond to incidents promptly, along with a disaster recovery plan to minimize downtime in case of a cyberattack" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="flex gap-5 items-center">
                                <FontAwesomeIcon icon={faCopy} className="h-[100px] w-[100px]" />
                                <BlogHeading className="text-black text-[48px] " heading="Conclusion" />
                            </h3>
                            <BlogParagraph className="lg:!text-[24px] text-[#4B698B] py-3 rounded-[20px]" paragraph="A proactive cybersecurity approach is essential for safeguarding digital assets. As cyber threats continue to evolve, organizations must remain vigilant and continuously invest in cybersecurity measures to protect sensitive data and maintain trust in digital interactions." />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Case2;