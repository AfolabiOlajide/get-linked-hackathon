import Image from "next/image";

// local imports
import FAQ from "@/assets/faq.png";
import FaqComponent from "./FaqComponent";

const FAQs = () => {
    return (
        <div
            id="faq"
            className="faq relative border-t-[1px] border-t-slate-500/50 "
        >
            <div className="cover">
                <div className="cont py-[5rem] md:py-[12rem] flex flex-col md:grid md:grid-cols-2 items-center ">
                    <div className="text ">
                        <h2 className="heading-text text-[2rem] font-bold mb-[1rem] text-center md:text-right">
                            Frequently Ask
                            <br />
                            <span className="text-primary">Question</span>
                        </h2>
                        <p className="w-full md:w-[70%] mt-[2rem] text-center md:text-right">
                            We got answers to the questions that you might want
                            to ask about <span className="font-bold"> getlinked Hackathon 1.0</span>
                        </p>
                        <FaqComponent />
                    </div>
                    <div className="image mt-[5rem] md:mt-0">
                        <Image
                            className="w-[80%] mx-auto"
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
