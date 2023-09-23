// local import
import BigIdea from "@/assets/The big idea.png";
import Image from "next/image";

const Introduction = () => {
    return (
        <div id="overview" className="introduction relative z-10 border-t-[1px] border-t-slate-500/50">
            <div className="cover">
                <div className="main cont py-[3rem] flex flex-col items-center md:grid md:grid-cols-2 md:items-center ">
                    <div className="image">
                        <Image
                            className="w-[80%] mx-auto"
                            src={BigIdea}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                    </div>
                    <div className="text text-center md:text-left mt-[2rem] md:mt-0">
                        <h2 className="heading-text text-[2rem] font-bold mb-[1rem]">
                            Introduction to getlinked <br />
                            <span className="text-primary">
                                tech Hackathon 1.0
                            </span>
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
                </div>
            </div>
        </div>
    );
};

export default Introduction;
