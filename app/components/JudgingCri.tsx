import Image from "next/image";

// local imports
import StarSecondary from "@/assets/star_secondary.png";
import white from '@/assets/star_white.png'
import JudgingCriteria from "@/assets/judging-criteria.png";
import Button from "./Button";

const JudgingCri = () => {
    return (
        <div className="judging-criteria relative border-t-[1px] border-t-slate-500/50 ">
            <div className="cover py-[5rem] relative">
                <div className="main cont py-[3rem] flex flex-col md:grid md:grid-cols-2 items-center ">
                    <div className="image">
                        <Image
                            className="w-[80%] mx-auto"
                            src={JudgingCriteria}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                    </div>
                    <div className="text md:text-left text-center">
                        <h2 className="heading-text text-[1.2rem] md:text-[2rem] font-bold mb-[1rem]">
                            Judging Criteria <br />
                            <span className="text-primary">Key attributes</span>
                        </h2>
                        <p className="w-full md:w-[90%] mb-[2rem]">
                            <span className="text-pink1 font-bold">
                                Innovation and Creativity:{" "}
                            </span>
                            Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world
                            problem in a novel way or introduces innovative
                            features.
                        </p>
                        <p className="w-full md:w-[90%] mb-[2rem]">
                            <span className="text-pink1 font-bold">
                                Functionality:{" "}
                            </span>
                            Assess how well the solution works. Does it perform
                            its intended functions effectively and without major
                            issues? Judges would consider the completeness and
                            robustness of the solution.
                        </p>
                        <p className="w-full md:w-[90%] mb-[2rem]">
                            <span className="text-pink1 font-bold">
                                Impact and Relevance:{" "}
                            </span>
                            Determine the potential impact of the solution in
                            the real world. Does it address a significant
                            problem, and is it relevant to the target audience?
                            Judges would assess the potential social, economic,
                            or environmental benefits.
                        </p>
                        <p className="w-full md:w-[90%] mb-[2rem]">
                            <span className="text-pink1 font-bold">
                                Technical Complexity:{" "}
                            </span>
                            Evaluate the technical sophistication of the
                            solution. Judges would consider the complexity of
                            the code, the use of advanced technologies or
                            algorithms, and the scalability of the solution.
                        </p>
                        <p className="w-full md:w-[90%] mb-[2rem]">
                            <span className="text-pink1 font-bold">
                                Adherence to Hackathon Rules:{" "}
                            </span>
                            Judges will Ensure that the team adhered to the
                            rules and guidelines of the hackathon, including
                            deadlines, use of specific technologies or APIs, and
                            any other competition-specific requirements.
                        </p>
                        <Button text="Read More" />
                    </div>
                </div>
                <Image className="absolute top-[3%] right-[50%] md:top-[10%] md:left-[21%]" src={StarSecondary} width={20} alt="Star" />
                <Image className="absolute w-[.7rem] md:w-[1.3rem] left-[85%] bottom-[10%] md:bottom-[13%] md:left-[45%]" src={white} width={20} alt="Star" />
                <Image className="absolute w-[.7rem] md:w-[1.3rem] top-[17%] right-[40%] brightness-50 md:top-[50%] md:left-[30%]" src={white} width={20} alt="Star" />
            </div>
            <div className="design -z-40 absolute md:bottom-[10%] top-[15%] left-[5%] w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] bg-purple-700/90 rounded-[50%]"></div>
            <div className="design -z-40 absolute md:-bottom-[15%] bottom-[10rem] right-[5%] w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] bg-purple-700/90 rounded-[50%]"></div>
        </div>
    );
};

export default JudgingCri;
