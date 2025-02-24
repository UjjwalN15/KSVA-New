import Image from "next/image";
import { BlogHeading, BlogNumHeading, BlogParagraph } from "../../../../components/ui/BlogBasicComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faCopy, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const Case1 = () => {
    const approach = [
        {
            id: 1,
            title: "AI-Powered Customer Insights",
            description: "Integrate AI-based analytics tools to process customer data, segment audiences, and predict purchasing behavior. This enables the company to create more targeted marketing campaigns.",
        },
        {
            id: 2,
            title: "Chatbots and Virtual Assistants",
            description: "AI-driven chatbots are deployed to handle customer inquiries, recommend products, and provide instant support. This improves customer satisfaction and reduced response times.",
        },
        {
            id: 3,
            title: "AI-Driven Ad Optimization",
            description: "Make use of AI to automate bidding strategies on platforms like Google and Facebook Ads. AI analyzes real-time data to adjust bids and placements, maximizing return on investment (ROI).",
        },
        {
            id: 4,
            title: "Personalized Email Marketing",
            description: "By leveraging machine learning algorithms,  tailored email content based on user behavior, past purchases, and preferences should be done resulting in higher open and click-through rates.",
        },
    ];
    const ApproachCard = ({ title, description, date, image }) => {
        return (
            <div className="flex flex-col gap-5 w-[45%] p-5">
                <BlogHeading className="text-white text-[28px]" heading={title} />
                <BlogParagraph className="text-white text-[28px]" paragraph={description} />
            </div>
        );
    };
    return (
        <>
            <section className="w-full h-[150vh] bg-cover bg-center" style={{ backgroundImage: 'url(/case1-1.png)' }}>
                <div>
                    <div className="flex max-w-7xl mx-auto">
                        <div className="flex flex-col gap-5 bg-gradient-to-b from-[#82B6F1] to-[#4B698B] w-[50%] h-[150vh] p-10">
                            <BlogHeading className="text-white text-[62px] font-[800]" heading="The Role of AI in Transforming Digital Marketing" />
                            <BlogHeading className="text-white text-[28px]" heading="Case Study" />
                            <hr className="bg-white h-[5px]" />
                            <BlogHeading className="text-white text-[28px]" heading="OVERVIEW" />
                            <BlogParagraph className="text-white" paragraph="Artificial Intelligence (AI) has revolutionized digital marketing by enabling businesses to analyze vast amounts of data, personalize customer experiences, and optimize advertising campaigns. This case study explores how AI has been leveraged by a leading e-commerce brand to enhance its marketing efforts, improve customer engagement, and boost revenue." />
                            <BlogParagraph className="absolute left-0 bottom-[-50vh] w-[100vw] bg-white p-10 px-20" paragraph="'The real power of AI in marketing is making data-driven decisions faster and with greater accuracy.'– Sundar Pichai, CEO of Google and Alphabet" />
                        </div>
                        <div className="relative w-[50%]  h-[800px]">
                            <div className="absolute top-0 left-[200px] mx-auto w-[50%] h-[400px]">
                                <Image src="/case1-2.png" alt="Image" layout="fill" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-[50%] h-[400px]">
                                <Image src="/case1-3.png" alt="Image" layout="fill" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-cover bg-center py-10" style={{ backgroundImage: 'url(/case1-1.png)' }}>
                <div className="max-w-7xl mx-auto h-full bg-gradient-to-r from-[#82B6F1] to-[#4B698B] px-10">
                    <div className="px-5 py-10">
                        <BlogHeading className="text-white text-[48px] text-center" heading="APPROACH" />
                        <div className="w-full flex flex-wrap gap-10 py-10">
                            {approach.map((approach) => (
                                <ApproachCard
                                    key={approach.id}
                                    title={approach.title}
                                    description={approach.description}
                                />
                            ))}
                        </div>
                    </div>
                    <hr className="bg-white h-[5px]" />
                    <div className="py-10 px-5">
                        <BlogHeading className="text-white text-[48px] text-center" heading="RESULTS" />
                        <div className="w-full flex gap-5 px-5 py-10">
                            <div className="flex flex-col gap-3 w-[calc(100%)/3.3] ">
                                <FontAwesomeIcon icon={faFile} className="mx-auto h-[100px] w-[100px] bg-white py-8 text-black rounded-[50%]" />
                                <h3 className="text-[36px] text-white">30% Increase in Conversion Rates</h3>
                            </div>
                            <div className="flex flex-col gap-3 w-[calc(100%)/3.3]">
                                <FontAwesomeIcon icon={faCopy} className="mx-auto h-[100px] w-[100px] bg-white py-8 text-black rounded-[50%]" />
                                <h3 className="text-[36px] text-white">50% Reduction in Customer Acquisition Cost</h3>
                            </div>
                            <div className="flex flex-col gap-3 w-[calc(100%)/3.3]">
                                <FontAwesomeIcon icon={faShieldHalved} className="mx-auto h-[100px] w-[100px] bg-white py-8 text-black rounded-[50%]" />
                                <h3 className="text-[36px] text-white">25% Increase in Open Rates</h3>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-white h-[5px]" />
                    <div className="py-10 px-5">
                        <BlogHeading className="text-white text-[48px] text-center" heading="CONCLUSION" />
                        <BlogParagraph className="text-white mt-10" paragraph="The adoption of AI in digital marketing allowed XYZ Retail to enhance customer engagement, reduce costs, and drive revenue growth. As AI continues to evolve, businesses that integrate AI-driven marketing strategies will maintain a competitive edge in the digital marketplace." />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Case1;