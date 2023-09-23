import Image from "next/image";

// local imports
import FAQ from "@/assets/faq.png"
import FaqComponent from "./FaqComponent";

const FAQs = () => {
    return (
        <div id="faq" className="faq relative border-t-[1px] border-t-slate-500/50 ">
            <div className="cover">
                <div className="cont py-[3rem] grid grid-cols-2 items-center">
                    <div className="text">
                        <h2 className="heading-text text-[2rem] font-bold mb-[1rem]">
                            Frequently Ask<br />
                            <span className="text-primary">Question</span>
                        </h2>
                        <FaqComponent />
                    </div>
                    <div className="image">
                        <Image
                            className="w-[80%]"
                            src={FAQ}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
