

export const BlogHeading = ({ heading, className }) => {
    return (
        <h3 className={`text-[24px] lg:text-[48px] text-[#0268BD] ${className}`}>
            {heading}
        </h3>
    );
};

export const BlogNumHeading = ({ Numheading, className }) => {
    return (
        <h3 className={`text-[20px] lg:text-[32px] text-[#072950] font-[600] ${className}`}>
            {Numheading}
        </h3>
    );
};
export const BlogParagraph = ({ paragraph, className }) => {
    return (
        <p className={`p-2text-[18px] lg:text-[24px] leading-[40px] ${className}`}>
            {paragraph}
        </p>
    );
};