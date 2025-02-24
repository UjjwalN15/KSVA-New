

export const BlogHeading = ({ heading, className = "" }) => {
    return (
        <h3
            className={`text-[#0268BD] ${className}`}
            dangerouslySetInnerHTML={{ __html: heading }}
        />
    );
};

export const BlogNumHeading = ({ Numheading, className }) => {
    return (
        <h3 className={`text-[20px] lg:text-[32px] text-[#fdfdfd] font-[600] ${className}`}>
            {Numheading}
        </h3>
    );
};
export const BlogParagraph = ({ paragraph, className }) => {
    return (
        <p
            className={`p-2 text-[18px] lg:text-[24px] leading-[40px] ${className}`}
            dangerouslySetInnerHTML={{ __html: paragraph }}
        />
    );
};