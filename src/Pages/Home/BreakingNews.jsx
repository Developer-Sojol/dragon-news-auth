import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="mt-2">
            <div className="flex bg-[#F3F3F3] p-3 ">
                <button className="p-3 text-white bg-[#D72050]">Latest</button>
                <Marquee className="cursor-pointer" pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;