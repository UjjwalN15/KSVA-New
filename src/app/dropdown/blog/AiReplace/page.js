import Image from "next/image";
import { BlogHeading, BlogNumHeading, BlogParagraph } from '../../../../components/ui/BlogBasicComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";


const AiReplace = () => {
    return (
        <div className="max-w-7xl mx-auto p-5 pb-10">
            <section className="bg-blue-400 flex w-full h-[90vh] bg-[url(/aireplace-1.png)] rounded-[50px] bg-cover bg-center bg-no-repeat">
                <div className="justify-self-center mx-auto self-end text-center pb-10">
                    <h3 className="text-[24px] font-[800]">2 Feb, 2025</h3>
                    <BlogHeading className="text-white text-[52px]" heading="When is AI going to replace us?" />
                    <h3 className="text-[24px] text-white font-[800]">by KSVA Tech Solutions</h3>
                </div>
            </section>
            <section>
                <BlogHeading className="text-[52px]" heading="What is AI?" />
                <BlogParagraph paragraph="Artificial Intelligence is a subfield of computer science that focuses on creating intelligent agents capable of performing tasks that would typically require human levels of intelligence. These tasks include problem-solving, speech recognition, and decision-making, among others." />
                <BlogParagraph paragraph="AI is an interdisciplinary science with many approaches; it can be rule-based and operate under a predefined set or conditions, or it can use machine learning algorithms to adapt to its environment. The latter is particularly powerful, as it allows AI systems to learn from data, making them more versatile and capable of handling unforeseen scenarios." />
                <div className="relative m-5 mx-auto w-[60%] h-[300px]">
                    <Image src="/aireplace-2.png" alt="Image" layout="fill" className="w-full h-full transition-transform duration-300 hover:scale-105" />
                </div>
                <BlogParagraph paragraph={"The rapid advancement of artificial intelligence (AI) has led to significant transformations in various industries, prompting concerns about job displacement. While AI is automating certain tasks, the complete replacement of human workers is not imminent. Instead, AI is reshaping the workforce, augmenting human capabilities, and creating new opportunities."} />
            </section>
            <section>
                <BlogHeading className="text-[52px]" heading="Future Projections" />
                <BlogParagraph paragraph="AI is expected to incorporate a wide range of sensors and capabilities, leading to an important question: Are we moving toward a single, all-encompassing model capable of performing various roles—such as doctor, lawyer, accountant, and mathematician? Or will AI be developed as specialized models, each designed for a specific task? " />
                <div className="flex justify-between">
                    <div className="relative m-5 mx-auto w-[32%] h-[500px]">
                        <Image src="/aireplace-3.png" alt="Image" layout="fill" className="w-full h-full transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="relative m-5 mx-auto w-[32%] h-[500px]">
                        <Image src="/aireplace-4.png" alt="Image" layout="fill" className="w-full h-full transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="relative m-5 mx-auto w-[32%] h-[500px]">
                        <Image src="/aireplace-5.png" alt="Image" layout="fill" className="w-full h-full transition-transform duration-300 hover:scale-105" />
                    </div>
                </div>
                <BlogParagraph paragraph="The latter perspective suggests that if someone needs a dermatologist, it is irrelevant whether that AI also possesses expertise in autonomous driving or detecting UAVs from Iran to Israel. " />
                <BlogParagraph paragraph="Additionally, an all-knowing AI would require immense energy, making it impractical for use in compact, resource-constrained environments like missile systems, which are not even connected to the internet." />
                <BlogParagraph paragraph="A report by Goldman Sachs suggests that AI could replace the equivalent of 300 million full-time jobs, potentially automating a quarter of work tasks in the U.S. and Europe. However, this same report indicates that AI may also lead to new job creation and a productivity boom, potentially increasing the global annual value of goods and services by 7%." />
            </section>
            <section>
                <BlogHeading className="text-[52px]" heading="Balancing Automation and Human Skills" />
                <div className="relative m-5 mx-auto w-[40%] h-[400px]">
                    <Image src="/aireplace-6.png" alt="Image" layout="fill" className="w-full h-full transition-transform duration-300 hover:scale-105" />
                </div>
                <BlogParagraph paragraph="While AI excels in automating routine tasks, many roles requiring creativity, emotional intelligence, and complex decision-making remain less susceptible to automation. For example, creative professions such as writers, artists, and designers rely on human originality and are less likely to be fully replaced by AI." />
                <div className="flex flex-col gap-5 m-5 w-full">
                    <div>
                        <h4 className="flex items-center gap-5 text-[40px]"><FontAwesomeIcon icon={faCircleCheck} className="text-black h-[50px] w-[50px]" /> <span>The Limits of AI in Creativity and Innovation </span></h4>
                        <BlogParagraph paragraph={"AI can assist in creative fields, such as generating ideas, composing music, or designing graphics, but it lacks the true originality and intuition of human creators. While AI-generated content can be impressive, it is often derived from existing patterns rather than fresh, groundbreaking ideas. For example, while AI tools like DALL·E and Midjourney can create digital artwork, they do so by analyzing vast amounts of pre-existing images rather than by experiencing emotions or cultural influences firsthand. This limitation ensures that writers, artists, designers, and other creative professionals will continue to play a critical role in producing unique and emotionally resonant work."} />
                    </div>
                    <div>
                        <h4 className="flex items-center gap-5 text-[40px]"><FontAwesomeIcon icon={faCircleCheck} className="text-black h-[50px] w-[50px]" /> <span>Emotional Intelligence and Human Interaction </span></h4>
                        <BlogParagraph paragraph={"One of AI’s biggest shortcomings is its inability to understand emotions the way humans do. While chatbots and virtual assistants can simulate human-like conversations, they do not genuinely empathize with customers. Jobs in healthcare, counseling, social work, and education rely heavily on emotional intelligence, active listening, and personal connections—traits that AI cannot fully replicate. For instance, while AI-driven diagnostic tools can help doctors analyze medical scans faster, the compassionate bedside manner of a physician remains irreplaceable in patient care."} />
                    </div>
                    <div>
                        <h4 className="flex items-center gap-5 text-[40px]"><FontAwesomeIcon icon={faCircleCheck} className="text-black h-[50px] w-[50px]" /> <span>Ethical and Complex Decision-Making  </span></h4>
                        <BlogParagraph paragraph={"AI operates based on patterns, data, and pre-programmed logic, but it lacks moral reasoning and ethical judgment. In fields such as law, governance, and business leadership, decisions often involve ethical dilemmas and considerations that go beyond data analysis. For example, an AI algorithm may suggest cost-cutting measures for a company, but a human executive must evaluate the ethical implications of layoffs or wage reductions. Similarly, in criminal justice, AI can help analyze cases, but the judgment and empathy required in sentencing or rehabilitation decisions remain fundamentally human responsibilities."} />
                    </div>
                    {/* <BlogParagraph paragraph={"A positive UX not only retains visitors but also encourages them to explore more, increasing the likelihood of conversions. As highlighted by HubSpot, merging UX and SEO best practices can create a seamless, efficient, and user-friendly digital experience."} /> */}
                </div>
            </section>
            <section>
                <div className="flex w-full mx-auto items-center gap-5 m-5">
                    <div className="w-[50%]">
                        <BlogHeading className="text-[52px]" heading={"Will AI Replace Us? "} />
                        <BlogParagraph paragraph={"The simple answer is 'no'—at least not with the current state of technology. However, the reality is more nuanced. Rather than completely replacing jobs, AI is better understood as automating specific tasks. Broadly speaking, tasks can be categorized by duration—those that take seconds or minutes (such as drafting an email) and those that take hours or days (like strategic planning or developing innovative work models)."} />
                    </div>
                    <div className="relative mx-auto w-[50%] h-[500px]">
                        <Image src="/aireplace-7.png" alt="Image" layout="fill" className="w-full h-full transition-transform duration-300 hover:scale-105" />
                    </div>
                </div>
                <BlogParagraph paragraph={"At present, AI is highly effective at handling short, repetitive tasks but struggles with complex, strategic thinking. This means AI can support nearly any profession, but primarily by taking over low-level, routine tasks that require minimal cognitive effort. Meanwhile, high-level tasks requiring creativity and long-term planning will continue to rely on human expertise."} />
                <BlogParagraph paragraph={"As a result, AI enables professionals to operate at a higher level of abstraction. Instead of focusing on mundane, time-consuming details—like fine-tuning an email workers can allocate more energy to big-picture planning and decision-making. The more a role involves strategic thinking, the less likely it is to be threatened by AI."} />
                <BlogParagraph paragraph={"Furthermore, for jobs that require significant human interaction such as sales roles or medical professionals providing personalized care, AI will serve as a supportive tool rather than a replacement. While AI can assist in these fields by streamlining processes and offering insights, the human element remains irreplaceable."} />
            </section>
        </div>
    );
}

export default AiReplace;