import Image from "next/image";
import { BlogHeading, BlogNumHeading, BlogParagraph } from "../../../../components/ui/BlogBasicComponent";

const Case3 = () => {
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/case3-1.png)' }}>
            <section className="w-full bg-[#225B79]">
                <div className="flex flex-col gap-10 max-w-7xl mx-auto">
                    <BlogHeading className="text-white text-[62px] font-[800]" heading="How UGC Creators Earn and Their Income Potential" />
                    <BlogHeading className="text-white text-[28px]" heading="Case Study" />
                </div>
            </section>
            <section className="flex w-full max-w-7xl mx-auto ">
                <div className="flex flex-col gap-20 h-max w-[50%] mt-10 p-5">
                    <div className="flex flex-col gap-10 h-max p-5 bg-[#225B79]">
                        <div className="w-full flex flex-col gap-5">
                            <BlogHeading className="text-white text-[32px]" heading="Introduction" />
                            <BlogParagraph className="text-white" paragraph="User-Generated Content (UGC) has transformed digital marketing, enabling brands to leverage authentic content created by everyday users. UGC creators who produce sponsored posts, reviews, videos, and other content for brands have found lucrative opportunities in the creator economy. This case study explores how UGC creators earn, the potential income levels, and real-life success stories." />
                        </div>
                        <div className="w-full">
                            <BlogHeading className="text-white text-[32px]" heading="Background" />
                            <BlogParagraph className="text-white" paragraph="With the rise of social media platforms such as Instagram, TikTok, and YouTube, brands have recognized the power of user-generated content in building trust and engagement. Unlike traditional influencers, UGC creators do not always rely on a large following; instead, they focus on producing quality content that brands can use in their marketing campaigns." />
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 h-max p-5">
                        <BlogHeading className="text-[#225B79] text-[52px]" heading="Income Potential for UGC Creators" />
                        <div className="w-full flex flex-col gap-2">
                            <BlogHeading className="text-[32px] text-black" heading="Beginner Creators" />
                            <BlogParagraph className="text-[#8C864F]" paragraph=" $100–$500 per piece of content" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <BlogHeading className="text-[32px] text-black" heading="Intermediate Creators" />
                            <BlogParagraph className="text-[#8C864F]" paragraph="$500–$2,000 per month" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <BlogHeading className="text-[32px] text-black" heading="Established Creators" />
                            <BlogParagraph className="text-[#8C864F]" paragraph="$2,000–$10,000+ per month" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <BlogHeading className="text-[32px] text-black" heading="Top Creators " />
                            <BlogParagraph className="text-[#8C864F]" paragraph="Over $100,000 annually through multiple income streams" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-20 h-max w-[50%] mt-10 p-5">
                    <div className="flex flex-col gap-10 h-max p-5 bg-[#225B79]">
                        <BlogHeading className="text-white text-[32px]" heading="Ways UGC Creators Earn Money" />
                        <BlogParagraph className="text-white text-[18px]" paragraph="1. Sponsored Content Deals: Brands pay UGC creators to produce authentic videos, images, or written content that promote their products." />
                        <BlogParagraph className="text-white text-[18px]" paragraph="2. Content Licensing Fees: Some creators sell content directly to brands, allowing them to use it in ads and promotions." />
                        <BlogParagraph className="text-white text-[18px]" paragraph="3. Affiliate Marketing: UGC creators earn commissions by promoting brands’ products through unique affiliate links." />
                        <BlogParagraph className="text-white text-[18px]" paragraph="4. Freelancing on Platforms: Creators sell their content services on platforms like Fiverr, Upwork, and Billo." />
                        <BlogParagraph className="text-white text-[18px]" paragraph="5. Brand Collaborations and Retainers: Long-term partnerships with brands provide a steady income stream." />
                    </div>
                    <div className="flex flex-col gap-10 h-max p-5 bg-[#225B79]">
                        <BlogHeading className="text-white text-[32px]" heading="Challenges in UGC Creation" />
                        <BlogParagraph className="text-white text-[18px]" paragraph="1. Market Saturation: More creators entering the space make it competitive." />
                        <BlogParagraph className="text-white text-[18px]" paragraph="2. Inconsistent Income: Earnings fluctuate without long-term brand deals." />
                        <BlogParagraph className="text-white text-[18px]" paragraph="3. Content Rights and Usage Issues: Some brands use content beyond agreed terms." />
                        <BlogParagraph className="text-white text-[18px]" paragraph="4. Time-intensive Work: Editing and content creation significant effort." />
                    </div>
                    <div className="flex flex-col gap-3 h-max p-5">
                        <em><BlogHeading className="text-[#0C222F] text-[32px]" heading="'Consumers trust UGC more than brand-generated content.'" /></em>
                        <BlogHeading className="text-[#0C222F] text-[32px]" heading="– Nielsen" />
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-10">
                <div className="flex gap-10 p-5 w-full h-full">
                    <div className="w-[50%] flex flex-col">
                        <div className="relative m-5 mx-auto w-[60%] h-[300px]">
                            <Image src="/case3-2.png" alt="Image" layout="fill" className="w-full h-full transition-transform duration-300 hover:scale-105" />
                        </div>
                        <BlogParagraph className="text-[18px] bg-white py-3 px-5 rounded-[20px]" paragraph="A full-time UGC creator who transitioned from influencing to earning thousands monthly by selling content to brands." />
                    </div>
                    <div className="w-[50%] flex flex-col">
                        <div className="relative m-5 mx-auto w-[60%] h-[300px]">
                            <Image src="/case3-3.png" alt="Image" layout="fill" className="w-full h-full transition-transform duration-300 hover:scale-105" />
                        </div>
                        <BlogParagraph className="text-[18px] bg-white py-3 px-5 rounded-[20px]" paragraph="A former corporate worker who started UGC creation and now earns over $5,000 per month." />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Case3;