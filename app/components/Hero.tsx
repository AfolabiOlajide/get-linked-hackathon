import Image from "next/image";
import { Unica_One } from "next/font/google";

const unicaOne = Unica_One({ subsets: ['latin'], weight: ['400'] });

// local imports
import Curve from "@/assets/curve.png";
import BoyGlasses from "@/assets/boy-glassess.png";
import ShiningGlobe from "@/assets/shining-globe.png"
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="hero relative border-t-[1px] border-t-slate-500/50 ">
            <div className="cover">
                {/* main */}
                <div className="main cont">
                    <div className="hero-head w-max ml-auto pt-[2rem]">
                        <h2 className="flex text-[1rem] md:text-[2rem] font-bold">
                            Igniting a Revolution in &nbsp;
                            <span className="block">
                                HR Innovation
                                <div className="curve">
                                    <Image
                                        className="w-[7rem] md:w-[15rem]"
                                        src={Curve}
                                        width={20}
                                        height={20}
                                        alt="Curve"
                                        unoptimized
                                    />
                                </div>
                            </span>
                        </h2>
                    </div>
                    <div className="hero-main flex flex-col md:grid md:grid-cols-2 mt-[3rem]">
                        <div className="text-components">
                            <div className="comp flex flex-col gap-[2rem]">
                                <h1 className="heading-text font-bold text-[2rem] md:text-[3.5rem] lg:text-[5rem] text-center md:text-left">
                                    getlinked Tech <br /> Hackathon{" "}
                                    <span className="text-primary">1.0</span>
                                </h1>
                                <p className="mx-auto md:md-0 w-[80%] md:w-[70%] text-center md:text-left">
                                    Participate in getlinked tech Hackathon 2023 stand a
                                    chance to win a Big prize
                                </p>
                                <Link href={'/register'} className="mx-auto w-max">
                                    <Button text="Register"/>
                                </Link>
                                {/* countdown */}
                                <div className="countdown flex gap-[2rem] md:mx-0 mx-auto">
                                    <div className="hr flex">
                                        <div className={`text-[3rem] ${unicaOne.className}`}>00</div>
                                        <span className="self-end mb-[1rem]">H</span>
                                    </div>
                                    <div className="min flex">
                                        <div className={`text-[3rem] ${unicaOne.className}`}>00</div>
                                        <span className="self-end mb-[1rem]">M</span>
                                    </div>
                                    <div className="sec flex">
                                        <div className={`text-[3rem] ${unicaOne.className}`}>00</div>
                                        <span className="self-end mb-[1rem]">S</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative image-components w-full">
                            <div className="boy-img w-full relative">
                                <Image className="w-full hue-rotate-[270deg] saturate-100" src={BoyGlasses} width={20} height={20} alt="Boy with Virtual Reality glasses" unoptimized/>
                                {/* <div className="overlay absolute top-0 right-0 left-0 bottom-0 bg-primary/50"></div> */}
                            </div>
                            <Image className="w-[85%] absolute top-0 left-[5%]" src={ShiningGlobe} width={20} height={20} alt="Shining Globe"unoptimized />
                        </div>
                    </div>
                </div>
            </div>
            <div className="design -z-20 absolute -top-[6rem] left-[20%] w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem] bg-purple-500/40 rounded-[50%]"></div>
            <div className="design -z-20 absolute top-[6rem] right-[10%] w-[25rem] h-[25rem] bg-purple-500/60 rounded-[50%]"></div>
        </div>
    );
};

export default Hero;