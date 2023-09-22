import Image from "next/image";

// local imports
import Rules from "@/assets/rules-and-guidelines.png";

const RulesGuidelines = () => {
    return (
        <div className="rules-and-guidelines relative mt-[.1rem]">
            <div className="cover">
                <div className="cont py-[3rem] grid grid-cols-2 items-center">
                    <div className="text">
                        <h2 className="heading-text text-[2rem] font-bold mb-[1rem]">
                            Rules and <br />
                            <span className="text-primary">Guidelines</span>
                        </h2>
                        <p className="w-full md:w-[90%]">
                            Our tech hackathon is a melting pot of visionaries,
                            and its purpose is as clear as day: to shape the
                            future. Whether you're a coding genius, a design
                            maverick, or a concept wizard, you'll have the
                            chance to transform your ideas into reality. Solving
                            real-world problems, pushing the boundaries of
                            technology, and creating solutions that can change
                            the world, that's what we're all about!
                        </p>
                    </div>
                    <div className="image">
                        <Image
                            className="w-[80%]"
                            src={Rules}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
            <div className="design -z-40 absolute -top-[6rem] left-[20%] w-[30rem] h-[30rem] bg-purple-700/90 rounded-[50%]"></div>
            <div className="design -z-40 absolute top-[50%] -right-[16%] w-[30rem] h-[30rem] bg-purple-700/90 rounded-[50%]"></div>
        </div>
    );
};

export default RulesGuidelines;
