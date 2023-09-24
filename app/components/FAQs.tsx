import Image from "next/image";

// local imports
import Primary from '@/assets/star_primary.png';
import Secondary from '@/assets/star_secondary.png';
import White from '@/assets/star_white.png';
import Question from "@/assets/question-mark.png"
import FAQ from "@/assets/faq.png";
import FaqComponent from "./FaqComponent";

const FAQs = () => {
    return (
        <div
            id="faq"
            className="faq relative border-t-[1px] border-t-slate-500/50 "
        >
            <div className="cover relative">
                <div className="cont py-[5rem] md:py-[12rem] flex flex-col md:grid md:grid-cols-2 items-center ">
                    <div className="text ">
                        <h2 className="heading-text text-[1.2rem] md:text-[2rem] font-bold mb-[1rem] text-center md:text-left">
                            Frequently Ask
                            <br />
                            <span className="text-primary">Question</span>
                        </h2>
                        <p className="w-full md:w-[70%] mt-[2rem] text-center md:text-left text-[.7rem] md:text-base">
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
                        {/* stars */}
                        <Image className="absolute top-[1%] left-[50%] w-[1rem] md:w-[1.5rem]" src={Primary} width={20} alt="Star" />
                        <Image className="absolute top-[20%] left-[30%] w-[1rem] md:w-[1.5rem]" src={Primary} width={20} alt="Star" />
                        <Image className="absolute top-[60%] left-[10%] w-[1rem] md:w-[1.5rem] brightness-50" src={White} width={20} alt="Star" />
                        <Image className="absolute top-[100%] right-[20%] w-[1rem] md:w-[1.5rem]" src={White} width={20} alt="Star" />
                    </div>
                </div>
                <Image className="absolute top-[5%] md:top-[10%] left-[10%] w-[1rem] md:w-[1.5rem]" src={Secondary} width={20} alt="Star" />
            </div>
        </div>
    );
};

export default FAQs;
