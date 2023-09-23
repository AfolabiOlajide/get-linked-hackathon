import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";

// local imports
import PrivacyMan from "@/assets/privacy-man.png";
import PrivacyVector from "@/assets/privacy-vector.png";
import Button from "./Button";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy relative border-t-[1px] border-t-slate-500/50">
            <div className="cover">
                <div className="cont py-[12rem] grid grid-cols-2 gap-[2rem] items-center">
                    <div className="text">
                        <h2 className="heading-text text-[2rem] font-bold mb-[1rem]">
                            Privacy Policy and
                            <br />
                            <span className="text-primary">Terms</span>
                        </h2>
                        <p className="mb-[2rem]">
                            Last updated on September 12, 2023
                        </p>
                        <p className="w-full md:w-[90%]">
                            Below are our privacy & policy, which outline a lot
                            of goodies. it’s our aim to always take of our
                            participant
                        </p>
                        {/* policy */}
                        <div className="policy border-[.4px] border-primary mt-[5rem] p-[5rem] rounded-md">
                            <p className="mb-[3rem]">
                                At getlinked tech Hackathon 1.0, we value your
                                privacy and are committed to protecting your
                                personal information. This Privacy Policy
                                outlines how we collect, use, disclose, and
                                safeguard your data when you participate in our
                                tech hackathon event. By participating in our
                                event, you consent to the practices described in
                                this policy.
                            </p>
                            {/*  */}
                            <h4 className="text-primary font-bold mb-[.5rem]">
                                Licensing Policy
                            </h4>
                            <h5 className="font-bold ">
                                Here are terms of our Standard License:
                            </h5>
                            <div className="point mt-[2rem] flex gap-4">
                                <div className="icon bg-[#2DE100] w-max h-max p-1 rounded-full">
                                    <BsCheckLg className="" />
                                </div>
                                <div className="text ">
                                    The Standard License grants you a
                                    non-exclusive right to navigate and register
                                    for our event
                                </div>
                            </div>
                            <div className="point mt-[2rem] flex gap-4">
                                <div className="icon bg-[#2DE100] w-max h-max p-1 rounded-full">
                                    <BsCheckLg className="" />
                                </div>
                                <div className="text">
                                    You are licensed to use the item available
                                    at any free source sites, for your project
                                    developement
                                </div>
                            </div>
                            {/* cta */}
                            <div className="cta mt-[2rem] flex justify-center">
                                <Button text="Read More" />
                            </div>
                        </div>
                    </div>
                    <div className="relative image self-end">
                        <Image
                            className="w-[80%] relative z-[1]"
                            src={PrivacyMan}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                        <Image
                            className="w-[80%] absolute -top-[12rem]"
                            src={PrivacyVector}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
            <div className="design -z-40 absolute bottom-[5%] left-[2%] w-[25rem] h-[25rem] bg-purple-700/90 rounded-[50%]"></div>
        </div>
    );
};

export default PrivacyPolicy;
