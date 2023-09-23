// local import
import PrimaryStar from "@/assets/star_primary.png"
import SecondaryStar from "@/assets/star_secondary.png"
import Curly from "@/assets/curly_arrow.png"
import BigIdea from "@/assets/The big idea.png";
import Image from "next/image";

const Introduction = () => {
    return (
        <div id="overview" className="introduction relative z-10 border-t-[1px] border-t-slate-500/50">
            <div className="cover relative">
                <div className="main cont py-[3rem] flex flex-col items-center md:grid md:grid-cols-2 md:items-center ">
                    <div className="image relative">
                        <Image
                            className="w-[80%] mx-auto"
                            src={BigIdea}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                        <Image
                            className="absolute w-[2rem] -bottom-[2rem] left-[50%] -translate-x-[50%] md:-translate-x-0 md:bottom-0 md:left-[80%] md:w-[5rem]"
                            src={Curly}
                            width={20}
                            height={20}
                            alt="Curl"
                            unoptimized
                        />
                    </div>
                    <div className="text text-center md:text-left mt-[4rem] md:mt-0">
                        <h2 className="heading-text text-[1.2rem] md:text-[2rem] font-bold mb-[1rem]">
                            Introduction to getlinked <br />
                            <span className="text-primary">
                                tech Hackathon 1.0
                            </span>
                        </h2>
                        <p className="w-full md:w-[90%] mdtext-base">
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
                <Image className="absolute w-[.7rem] md:w-[1.2rem] top-[20%] left-[10%] md:top-[40%] md:left-[10%]" src={PrimaryStar} width={20} alt="Star"/>
                <Image className="absolute w-[.7rem] md:w-[1.6rem] top-[55%] right-[10%] md:top-[40%] md:right-[10%]" src={SecondaryStar} width={20} alt="Star"/>
            </div>
        </div>
    );
};

export default Introduction;
