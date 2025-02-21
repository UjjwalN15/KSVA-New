

export const BlogHeading = ({ heading, className }) => {
    return (
        <h3 className={`text-[48px] text-[#0268BD] ${className}`}>
            {heading}
        </h3>
    );
};

export const BlogNumHeading = ({ Numheading, className }) => {
    return (
        <h3 className={`text-[32px] text-[#072950] pl-5 font-[600] ${className}`}>
            {Numheading}
        </h3>
    );
};
export const BlogParagraph = ({ paragraph, className }) => {
    return (
        <p className={`p-2 text-[24px] leading-[40px] ${className}`}>
            {paragraph}
        </p>
    );
};