import Image from "next/image";

// local imports
import Question from "@/assets/question-mark.png"
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
                        <h2 className="heading-text text-[2rem] font-bold mb-[1rem] text-center md:text-left">
                            Frequently Ask
                            <br />
                            <span className="text-primary">Question</span>
                        </h2>
                        <p className="w-full md:w-[70%] mt-[2rem] text-center md:text-left">
                            We got answers to the questions that you might want
                            to ask about <span className="font-bold"> getlinked Hackathon 1.0</span>
                        </p>
                        <FaqComponent />
                    </div>
                    <div className="image mt-[5rem] md:mt-0 relative">
                        <Image
                            className="w-[80%] mx-auto"
                            src={FAQ}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                        <Image
                            className="w-[1.5rem] md:w-[3rem] absolute -top-[5%] left-[15%] brightness-50"
                            src={Question}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                        <Image
                            className="w-[1.5rem] md:w-[3rem] absolute -top-[10%] left-[35%]"
                            src={Question}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                        <Image
                            className="w-[1.5rem] md:w-[3rem] absolute -top-[7%] left-[55%] brightness-50"
                            src={Question}
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
