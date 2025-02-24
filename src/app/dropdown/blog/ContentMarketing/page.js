// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDiamond } from "@fortawesome/free-solid-svg-icons";
// import {BlogHeading, BlogNumHeading, BlogParagraph} from '../../../../components/ui/BlogBasicComponent'

// const ContentMarketing = () => {
//     return (
//         <>
//             <div className="w-[95%] mx-auto">
//                 <section className="flex flex-col h-[100vh] gap-5 mt-[150px]" >
//                     <div className="flex w-full h-full">
//                         <div className="w-[50%] flex flex-col gap-10 p-5">
//                             <h3 className="text-[20px] font-[600] text-[#3A8EDB]">Feb 9,2025</h3>
//                             <h3 className="text-[64px] font-[600]">The Future of Content Marketing:Emerging Trends to Watch</h3>
//                             <h3 className="text-[20px] font-[600]">by KSVA Tech Solutions</h3>
//                         </div>
//                         <div className="relative w-[50%]">
//                             <div className="z-10 absolute left-0 mx-auto w-[40%] m-3 h-[400px]">
//                                 <Image
//                                     src="/cm-2.png"
//                                     alt="Image"
//                                     layout="fill"
//                                     objectFit="cover"
//                                     className="w-[200px] h-[200px] duration-300"
//                                 />
//                             </div>
//                             <div className="absolute mx-auto w-[40%] m-3 h-[400px] right-4 bottom-[-250px]">
//                                 <Image
//                                     src="/cm-1.png"
//                                     alt="Image"
//                                     layout="fill"
//                                     objectFit="cover"
//                                     className="w-full h-full duration-300"
//                                 />
//                             </div>
//                             <div className="absolute mx-auto w-[40%] m-3 h-[400px] top-[-150px] right-[200px]">
//                                 <Image
//                                     src="/cm-3.png"
//                                     alt="Image"
//                                     layout="fill"
//                                     objectFit="cover"
//                                     className="w-full h-full duration-300"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-[70%] flex flex-col gap-10 p-5 text-[24px] leading-[32px]">
//                         <p>Over the years, content marketing has gone through several
//                             transformations due to advancements in technology, changes in the
//                             ways people behave and the emergence of different types of digital
//                             platforms. In such a case, looking into the future, there are trends that
//                             would drastically change the content marketing industry.</p>
//                         <p>Therefore, below are some notable trends that one needs to look out for:</p>
//                     </div>
//                 </section>
//                 <section className="w-full">
//                     <h3 className="text-[32px] text-[#072950] pl-10 font-[600]">1. AI Powered Content Creation</h3>
//                     <div className="flex gap-5 p-10">
//                         <div className="mx-auto w-[40%] m-3 h-[400px]">
//                             <div className="relative w-[400px] h-[100%] bg-green-500">
//                                 <Image
//                                     src="/cm-4.png"
//                                     alt="Image"
//                                     layout="fill"

//                                     className="w-full h-full transition-transform duration-300 hover:scale-105"
//                                 />
//                             </div>
//                         </div>
//                         <div className="w-[70%] flex flex-col gap-10 p-5 text-[24px] leading-[32px] py-16">
//                             <p><span className="text-[#164A86]">Artificial Intelligence (AI) </span>is transforming the way brands create, optimize, and distribute content across digital platforms. Advanced tools like ChatGPT, Jasper, and Grammarly empower marketers to generate high-quality, personalized content efficiently and at scale.</p>
//                             <p>These AI-driven platforms not only assist in crafting compelling copy but also enhance grammar, tone, and readability, ensuring content resonates with target audiences.</p>
//                         </div>
//                     </div>
//                     <p className="p-5 text-[24px] leading-[32px]">Additionally, AI can analyze vast amounts of user data, identifying patterns in behavior and preferences to tailor content for specific audience segments. This level of personalization increases relevance, boosts engagement, and ultimately improves conversion rates, making AI an essential tool in modern content marketing strategies.</p>
//                     <h3 className="p-5 text-[32px] text-[#072950] font-[700] leading-[32px]">Why it matters?</h3>
//                     <p className="p-5 text-[24px] leading-[32px]">Personalized content drives more than 80% of customer
//                         engagement. In the future, AI will help brands deliver hyper personalized experiences in real time, creating a deeper
//                         connection with their audience.</p>
//                 </section>
//                 <section className="w-full py-5">
//                     <h3 className="text-[32px] text-[#072950] pl-10 font-[600]">2. The Rise of Short-Form Video Content</h3>
//                     <p className="p-5 text-[24px] leading-[32px]">In today’s fast-paced digital world, attention spans are shorter than ever, making quick, engaging content a necessity for brands. Short-form videos have emerged
//                         as a powerful tool for capturing audience interest and driving engagement.</p>
//                     <div className="relative mx-auto w-[70%] h-[500px]">
//                         <Image
//                             src="/cm-5.png"
//                             alt="Image"
//                             layout="fill"
//                             className="w-full h-full transition-transform duration-300 hover:scale-105"
//                         />
//                     </div>
//                     <p className="p-5 text-[24px] leading-[32px]">Platforms like TikTok, Instagram Reels, and YouTube Shorts have revolutionized the way content is consumed, showcasing the immense power of short-form videos. These bite-sized, visually engaging snippets effectively capture attention in just a few seconds, making them ideal for delivering concise yet impactful messages. </p>
//                     <p className="p-5 text-[24px] leading-[32px]">Their highly shareable nature allows brands to reach wider audiences, drive engagement, and increase brand awareness organically. By leveraging trends, music, and creative storytelling, marketers can craft compelling short videos that resonate with viewers, making them an essential component of any modern content marketing strategy.</p>
//                     <h3 className="p-5 text-[32px] text-[#072950] font-[700] leading-[32px]">How to benefit?</h3>
//                     <ul className="flex flex-col gap-5 p-5">
//                         <li className="flex items-center text-[24px]">
//                             <FontAwesomeIcon icon={faDiamond} className="text-blue-500 h-[30px] w-[30px] mr-2" />
//                             Create edible videos of valuable food or obvious entertainment.
//                         </li>
//                         <li className="flex items-center text-[24px]"><FontAwesomeIcon icon={faDiamond} className="text-blue-500 h-[30px] w-[30px] mr-2" />Optimize for mobile viewing.</li>
//                         <li className="flex items-center text-[24px]"><FontAwesomeIcon icon={faDiamond} className="text-blue-500 h-[30px] w-[30px] mr-2" />Use storytelling techniques to quickly capture attention.</li>
//                     </ul>
//                 </section>
//                 <section className="w-full py-5">
//                     <h3 className="text-[32px] text-[#072950] pl-10 font-[600]">3. Interactive and Immersive Content</h3>
//                     <div className="flex gap-5 m-10">
//                         <div className="relative mx-auto w-[calc(100%/3.3)] h-[500px]">
//                             <Image
//                                 src="/cm-6.png"
//                                 alt="Image"
//                                 layout="fill"
//                                 className="w-full h-full transition-transform duration-300 hover:scale-105"
//                             />
//                         </div>
//                         <div className="relative mx-auto w-[calc(100%/3.3)] h-[500px]">
//                             <Image
//                                 src="/cm-7.png"
//                                 alt="Image"
//                                 layout="fill"
//                                 className="w-full h-full transition-transform duration-300 hover:scale-105"
//                             />
//                         </div>
//                         <div className="relative mx-auto w-[calc(100%/3.3)] h-[500px]">
//                             <Image
//                                 src="/cm-8.png"
//                                 alt="Image"
//                                 layout="fill"
//                                 className="w-full h-full transition-transform duration-300 hover:scale-105"
//                             />
//                         </div>
//                     </div>
//                     <p className="p-5 text-[24px] leading-[32px]">In an era where online audiences are bombarded with endless content, standing out requires more than just traditional blogs and static visuals. Consumers crave engaging, dynamic experiences that capture their attention and encourage participation. This is where interactive content comes into play, transforming passive viewers into active participants.</p>
//                     <p className="p-5 text-[24px] leading-[32px]">Interactive content—such as quizzes, polls, augmented reality (AR) experiences, and 360-degree videos—offers a more immersive and memorable way to connect with audiences. </p>
//                     <p className="p-5 text-[24px] leading-[32px]">Unlike conventional content, these interactive elements create a two-way engagement, encouraging users to interact, share, and spend more time with the brand. Whether it’s a personality quiz that helps users find the perfect product, a poll that sparks conversation, or an AR feature that lets customers visualize products in their space, interactive content enhances user experience and boosts engagement rates.</p>
//                     <h3 className="p-5 text-[32px] text-[#072950] font-[700] leading-[32px]">Case in point:</h3>
//                     <p className="p-5 text-[24px] leading-[32px]">Brands like IKEA use Augmented Reality (AR) to let users visualize furniture in their homes, making the buying process more interactive and customer-centric. </p>
//                     <div className="flex gap-5 m-10">
//                         <div className="relative mx-auto w-[calc(100%/2.3)] h-[500px]">
//                             <Image
//                                 src="/cm-9.png"
//                                 alt="Image"
//                                 layout="fill"
//                                 className="w-full h-full transition-transform duration-300 hover:scale-105"
//                             />
//                         </div>
//                         <div className="relative mx-auto w-[calc(100%/2.3)] h-[500px]">
//                             <Image
//                                 src="/cm-10.png"
//                                 alt="Image"
//                                 layout="fill"
//                                 className="w-full h-full transition-transform duration-300 hover:scale-105"
//                             />
//                         </div>
//                     </div>
//                 </section>
//                 <section className="w-full py-5">
//                     <h3 className="text-[32px] text-[#072950] pl-10 font-[600]">4. The Dominance of User-Generated Content (UGC)</h3>
//                     <p className="p-5 text-[24px] leading-[32px]">User-Generated Content (UGC) has been around for years, but its significance in digital marketing is more critical than ever. As consumers become increasingly skeptical of traditional advertising, they turn to real users for authentic experiences and honest opinions. </p>
//                     <p className="p-5 text-[24px] leading-[32px]">Whether through reviews, testimonials, social media posts, or unboxing videos, UGC provides a level of trust and credibility that brand-created content often cannot match.</p>
//                     <div className="flex gap-5 m-10">
//                         <div className="relative mx-auto w-[calc(100%/2.3)] h-[600px]">
//                             <Image
//                                 src="/cm-11.png"
//                                 alt="Image"
//                                 layout="fill"
//                                 className="w-full h-full transition-transform duration-300 hover:scale-105"
//                             />
//                         </div>
//                         <div className="relative mx-auto w-[calc(100%/2.3)] h-[600px]">
//                             <Image
//                                 src="/cm-12.png"
//                                 alt="Image"
//                                 layout="fill"
//                                 className="w-full h-full transition-transform duration-300 hover:scale-105"
//                             />
//                         </div>
//                     </div>
//                     <p className="p-5 text-[24px] leading-[32px]">Content shared by real customers serves as powerful social proof, influencing purchase decisions and fostering a sense of community around a brand. </p>
//                     <p className="p-5 text-[24px] leading-[32px]">Businesses that actively encourage and showcase UGC not only enhance their authenticity but also drive higher engagement and loyalty. From featuring customer testimonials on websites to resharing social media posts, leveraging UGC is an effective way to humanize a brand and build stronger connections with audiences.</p>
//                     <div className="flex gap-5 mt-10">
//                         <div className="w-[50%]">
//                             <h3 className="p-5 text-[32px] text-[#072950] font-[700] leading-[32px]">Coca-Cola: Share a Coke Campaign</h3>
//                             <p className="p-5 text-[24px] leading-[32px]">Launched in 2011, the Share a Coke campaign featured hundreds of the most popular first names on Coca-Cola cans and bottles. Traditional ads and in-store displays encouraged customers to find a bottle or can with their name on it and post a picture of it on social media with the #ShareaCoke hashtag.</p>
//                             <p className="p-5 text-[24px] leading-[32px]">From creative-directed Instagram posts to casual selfies, the campaign inspired great examples of UGC. Not only did Coca-Cola get more authentic content for its social networks, but it also let consumers engage with the brand while expressing their creativity.</p>
//                         </div>
//                         <div className="relative mx-auto w-[40%] h-[400px]">
//                             <Image
//                                 src="/cm-13.png"
//                                 alt="Image"
//                                 layout="fill"
//                                 className="w-full h-full transition-transform duration-300 hover:scale-105"
//                             />
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     );
// }

// export default ContentMarketing;

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { BlogHeading, BlogNumHeading, BlogParagraph } from '../../../../components/ui/BlogBasicComponent';

const ContentMarketing = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <section className="flex flex-col lg:h-[100vh] gap-5 mt-[150px]">
                    <div className="flex lg:flex-row flex-col-reverse w-full h-full">
                        <div className="w-full lg:w-[50%] flex flex-col gap-10 p-5">
                            <h3 className="text-[20px] font-[600] text-[#3A8EDB]">Feb 9,2025</h3>
                            <BlogHeading className="text-[52px]" heading="The Future of Content Marketing: Emerging Trends to Watch" />
                            <h3 className="text-[20px] font-[600]">by KSVA Tech Solutions</h3>
                        </div>
                        <div className="relative w-[95%] lg:w-[50%] h-[50vh]">
                            <div className="z-10 absolute left-[50px] lg:left-0 mx-auto lg:w-[40%] w-[200px] h-[200px] m-3 lg:h-[400px]">
                                <Image
                                    src="/cm-2.png"
                                    alt="Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="w-[200px] h-[200px] duration-300"
                                />
                            </div>
                            <div className="z-10 absolute mx-auto lg:w-[40%] w-[200px] h-[200px] m-3 lg:h-[400px] right-0 bottom-[-10px] lg:right-4 lg:bottom-[-250px]">
                                <Image
                                    src="/cm-1.png"
                                    alt="Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="w-full h-full duration-300"
                                />
                            </div>
                            <div className="absolute mx-auto lg:w-[50%] w-[200px] h-[200px] m-3 lg:h-[400px] top-[-100px] lg:top-[-150px] right-[10px] lg:right-[150px]">
                                <Image
                                    src="/cm-3.png"
                                    alt="Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="w-full h-full duration-300"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[70%] flex flex-col gap-10 p-5">
                        <BlogParagraph paragraph="Over the years, content marketing has gone through several transformations due to advancements in technology, changes in the ways people behave and the emergence of different types of digital platforms. In such a case, looking into the future, there are trends that would drastically change the content marketing industry." />
                        <BlogParagraph paragraph="Therefore, below are some notable trends that one needs to look out for:" />
                    </div>
                </section>
                <section className="w-full">
                    <BlogNumHeading Numheading="1. AI Powered Content Creation" />
                    <div className="flex lg:flex-row flex-col gap-5 p-5 lg:p-10 w-full">
                        <div className="relative w-full lg:w-[35%] h-[420px]">
                            <Image
                                src="/cm-4.png"
                                alt="Image"
                                layout="fill"
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="w-full lg:w-[65%] flex flex-col gap-10 p-0 lg:p-5 py-0 lg:py-16">
                            <BlogParagraph paragraph="Artificial Intelligence is transforming the way brands create, optimize, and distribute content across digital platforms. Advanced tools like ChatGPT, Jasper, and Grammarly empower marketers to generate high-quality, personalized content efficiently and at scale." />
                            <BlogParagraph paragraph="These AI-driven platforms not only assist in crafting compelling copy but also enhance grammar, tone, and readability, ensuring content resonates with target audiences." />
                        </div>
                    </div>
                    <div className="p-5">
                        <BlogParagraph paragraph="Additionally, AI can analyze vast amounts of user data, identifying patterns in behavior and preferences to tailor content for specific audience segments. This level of personalization increases relevance, boosts engagement, and ultimately improves conversion rates, making AI an essential tool in modern content marketing strategies." />
                        <BlogHeading  heading="Why it matters?" className="text-[52px] py-5"/>
                        <BlogParagraph paragraph="Personalized content drives more than 80% of customer engagement. In the future, AI will help brands deliver hyper personalized experiences in real time, creating a deeper connection with their audience." />
                    </div>
                </section>
                <section className="w-full py-5">
                    <BlogNumHeading Numheading="2. The Rise of Short-Form Video Content" />
                    <BlogParagraph className="p-5" paragraph="In today’s fast-paced digital world, attention spans are shorter than ever, making quick, engaging content a necessity for brands. Short-form videos have emerged as a powerful tool for capturing audience interest and driving engagement." />
                    <div className="relative mx-auto w-full lg:w-[70%] h-[500px]">
                        <Image
                            src="/cm-5.png"
                            alt="Image"
                            layout="fill"
                            className="w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <BlogParagraph className="p-5" paragraph="Platforms like TikTok, Instagram Reels, and YouTube Shorts have revolutionized the way content is consumed, showcasing the immense power of short-form videos. These bite-sized, visually engaging snippets effectively capture attention in just a few seconds, making them ideal for delivering concise yet impactful messages." />
                    <BlogParagraph className="p-5" paragraph="Their highly shareable nature allows brands to reach wider audiences, drive engagement, and increase brand awareness organically. By leveraging trends, music, and creative storytelling, marketers can craft compelling short videos that resonate with viewers, making them an essential component of any modern content marketing strategy." />
                    <BlogHeading heading="How to benefit?" className="text-[52px] p-5" />
                    <ul className="flex flex-col gap-5 p-5 text-[18px] lg:text-[24px]">
                        <li className="flex items-center ">
                            <FontAwesomeIcon icon={faDiamond} className="text-blue-500 h-[30px] w-[30px] mr-2" />
                            Create edible videos of valuable food or obvious entertainment.
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faDiamond} className="text-blue-500 h-[30px] w-[30px] mr-2" />
                            Optimize for mobile viewing.
                        </li>
                        <li className="flex items-center ">
                            <FontAwesomeIcon icon={faDiamond} className="text-blue-500 h-[30px] w-[30px] mr-2" />
                            Use storytelling techniques to quickly capture attention.
                        </li>
                    </ul>
                </section>
                <section className="w-full p-5">
                    <BlogNumHeading Numheading="3. Interactive and Immersive Content" />
                    <div className="flex lg:flex-row flex-col gap-5 m-10">
                        <div className="relative mx-auto w-full lg:w-[calc(100%/3.3)] h-[500px]">
                            <Image
                                src="/cm-6.png"
                                alt="Image"
                                layout="fill"
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="relative mx-auto w-full lg:w-[calc(100%/3.3)] h-[500px]">
                            <Image
                                src="/cm-7.png"
                                alt="Image"
                                layout="fill"
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="relative mx-auto w-full lg:w-[calc(100%/3.3)] h-[500px]">
                            <Image
                                src="/cm-8.png"
                                alt="Image"
                                layout="fill"
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                    <BlogParagraph paragraph="In an era where online audiences are bombarded with endless content, standing out requires more than just traditional blogs and static visuals. Consumers crave engaging, dynamic experiences that capture their attention and encourage participation. This is where interactive content comes into play, transforming passive viewers into active participants." />
                    <BlogParagraph paragraph="Interactive content—such as quizzes, polls, augmented reality (AR) experiences, and 360-degree videos—offers a more immersive and memorable way to connect with audiences." />
                    <BlogParagraph paragraph="Unlike conventional content, these interactive elements create a two-way engagement, encouraging users to interact, share, and spend more time with the brand. Whether it’s a personality quiz that helps users find the perfect product, a poll that sparks conversation, or an AR feature that lets customers visualize products in their space, interactive content enhances user experience and boosts engagement rates." />
                    <BlogHeading heading="Case in point:" className="text-[52px] p-5" />
                    <BlogParagraph paragraph="Brands like IKEA use Augmented Reality (AR) to let users visualize furniture in their homes, making the buying process more interactive and customer-centric." />
                    <div className="flex lg:flex-row flex-col gap-5 m-10">
                        <div className="relative mx-auto w-full lg:w-[calc(100%/2.3)] h-[500px]">
                            <Image
                                src="/cm-9.png"
                                alt="Image"
                                layout="fill"
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="relative mx-auto w-full lg:w-[calc(100%/2.3)] h-[500px]">
                            <Image
                                src="/cm-10.png"
                                alt="Image"
                                layout="fill"
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full p-5">
                    <BlogNumHeading Numheading="4. The Dominance of User-Generated Content (UGC)" />
                    <BlogParagraph paragraph="User-Generated Content (UGC) has been around for years, but its significance in digital marketing is more critical than ever. As consumers become increasingly skeptical of traditional advertising, they turn to real users for authentic experiences and honest opinions." />
                    <BlogParagraph paragraph="Whether through reviews, testimonials, social media posts, or unboxing videos, UGC provides a level of trust and credibility that brand-created content often cannot match." />
                    <div className="flex lg:flex-row flex-col gap-5 m-10">
                        <div className="relative mx-auto w-full lg:w-[calc(100%/2.3)] h-[600px]">
                            <Image
                                src="/cm-11.png"
                                alt="Image"
                                layout="fill"
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="relative mx-auto w-full lg:w-[calc(100%/2.3)] h-[600px]">
                            <Image
                                src="/cm-12.png"
                                alt="Image"
                                layout="fill"
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                    <BlogParagraph paragraph="Content shared by real customers serves as powerful social proof, influencing purchase decisions and fostering a sense of community around a brand." />
                    <BlogParagraph paragraph="Businesses that actively encourage and showcase UGC not only enhance their authenticity but also drive higher engagement and loyalty. From featuring customer testimonials on websites to resharing social media posts, leveraging UGC is an effective way to humanize a brand and build stronger connections with audiences." />
                    <div className="flex lg:flex-row flex-col-reverse gap-5 mt-10">
                        <div className="w-full lg:w-[50%]">
                            <BlogHeading heading="Coca-Cola: Share a Coke Campaign" className="text-[52px] p-5" />
                            <BlogParagraph paragraph="Launched in 2011, the Share a Coke campaign featured hundreds of the most popular first names on Coca-Cola cans and bottles. Traditional ads and in-store displays encouraged customers to find a bottle or can with their name on it and post a picture of it on social media with the #ShareaCoke hashtag." />
                            <BlogParagraph paragraph="From creative-directed Instagram posts to casual selfies, the campaign inspired great examples of UGC. Not only did Coca-Cola get more authentic content for its social networks, but it also let consumers engage with the brand while expressing their creativity." />
                        </div>
                        <div className="relative mx-auto w-full lg:w-[40%] h-[400px] lg:h-[600px]">
                            <Image
                                src="/cm-13.png"
                                alt="Image"
                                layout="fill"
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ContentMarketing;