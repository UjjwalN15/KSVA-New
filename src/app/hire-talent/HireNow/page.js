import Image from "next/image";
import { BlogHeading, BlogNumHeading, BlogParagraph } from "../../../components/ui/BlogBasicComponent";
import HireForm from '../../../components/ui/hire-talent-form'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Scroller from '../../../components/ui/scroller'
import PreviewCandidate from '../../../components/ui/Preview'

const HireNow = () => {
    return (
        <>
            <section className="relative w-full h-[50vh] py-10" style={{ backgroundImage: 'url(/hire-bg.png)' }}>
                <div className="max-w-7xl mx-auto text-center w-[50%]">
                    <BlogParagraph className="text-center" paragraph={`Need immediate help? Call <span class="text-[#0892A7]">562-310-1189</span>`} />
                    <BlogHeading className="text-black text-[52px]" heading={`We have the right <span class="text-[#0892A7]">talent</span> for your <span class="text-[#0892A7]">hiring</span> needs`} />
                    <BlogParagraph className="" paragraph="Our recruiters will help you find skilled candidates ready for your role." />
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-10">
                <div className="w-full flex gap-5">
                    <HireForm />
                    <div className="w-full flex flex-col gap-10 py-20 px-5">
                        <div className="flex items-center gap-5">
                            <i className="text-2xl fa-solid fa-crosshairs lg:text-6xl w-max text-black bg-[#ECB4ED] p-3 rounded-[50%] "></i>
                            <BlogParagraph paragraph={`Get started online. <br/> Create your account to see a sample of candidates instantly on our digital platform`} />
                        </div>
                        <div className="flex items-center gap-5">
                            <i className="text-2xl fa-solid fa-people-group lg:text-6xl w-max text-black bg-[#ACDBBE] p-3 rounded-[50%] "></i>
                            <BlogParagraph paragraph={`Review, select, and hire. <br/> We help with interview coordination, extending offers, and more`} />
                        </div>
                        <div className="flex items-center gap-5">
                            <i className="text-2xl fa-solid fa-user-pen lg:text-6xl w-max text-black bg-[#B2D9F3] p-5 rounded-[50%] "></i>
                            <BlogParagraph paragraph={`See recruiter assessed candidates. <br/> An experienced recruiter will connect with you and curate a list of available candidates`} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="max-w-7xl mx-auto">
                <PreviewCandidate />
                <Scroller />
            </div>
        </>
    );
}

export default HireNow;