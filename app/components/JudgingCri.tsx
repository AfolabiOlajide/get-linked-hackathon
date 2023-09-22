import Image from "next/image";

// local imports
import JudgingCriteria from "@/assets/judging-criteria.png";
import Button from "./Button";

const JudgingCri = () => {
    return (
        <div className="judging-criteria relative mt-[0.1rem] ">
            <div className="cover py-[5rem]">
                <div className="main cont py-[3rem] grid grid-cols-2 items-center ">
                    <div className="image">
                        <Image
                            className="w-[80%]"
                            src={JudgingCriteria}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                    </div>
                    <div className="text">
                        <h2 className="heading-text text-[2rem] font-bold mb-[1rem]">
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
            </div>
            <div className="design -z-40 absolute bottom-[10%] left-[5%] w-[25rem] h-[25rem] bg-purple-700/90 rounded-[50%]"></div>
            <div className="design -z-40 absolute -bottom-[15%] right-[5%] w-[25rem] h-[25rem] bg-purple-700/90 rounded-[50%]"></div>
        </div>
    );
};

export default JudgingCri;
