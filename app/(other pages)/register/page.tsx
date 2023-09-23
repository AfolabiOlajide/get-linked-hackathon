'use client'
import Image from "next/image";
import { useRef, useState } from "react";

// local imports
import RegisterMan from "@/assets/register.png";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import WalkingMan from "@/assets/walking-man.png"
import WalkingWoman from "@/assets/walking-woman.png"
import Congratulations from "@/app/components/Congratulations";

const Register = () => {
    const [ requestSuccessful, setRequestSuccessful ] = useState<boolean>(false);
    const mailRef = useRef<HTMLInputElement | null>(null);

    function toogleModal(){
        setRequestSuccessful(prev => !prev);
    }

    return (
        <>
            <section className="contact-page relative overflow-hidden">
                <div className="cover overflow-y-hidden">
                    <div className="main cont md:grid md:grid-cols-[50%_50%] my-[1rem] md:my-[5rem] items-center">
                        {/* info */}
                        <Image
                            className="w-[100%] md:block hidden"
                            src={RegisterMan}
                            width={20}
                            height={20}
                            alt="Some vector image"
                            unoptimized
                        />
                        {/* form */}
                        <div className="form md:bg-white/5 backdrop-blur-[7rem] p-[1rem] md:p-[5rem]">
                            <div className="heading mb-[2rem]">
                                <h2 className="heading-text text-primary text-[1.5rem] font-bold">
                                    Register
                                </h2>
                                <Image
                                    className="w-[80%] block md:hidden mx-auto"
                                    src={RegisterMan}
                                    width={20}
                                    height={20}
                                    alt="Some vector image"
                                    unoptimized
                                />
                                {/* be part */}
                                <div className="be-part flex gap-4 mt-[2rem] mb-[1rem]">
                                    <p className="text-[.7rem] md:text-base">Be part of this movement!</p>
                                    <div className="image border-dashed border-b border-primary flex justify-center gap-2 w-[20%]">
                                        <Image className="" src={WalkingWoman} width={20} height={20} alt="Walking Woman" />
                                        <Image className="" src={WalkingMan} width={20} height={20} alt="Walking man" />
                                    </div>
                                </div>
                                <h2 className="text-[1.5rem]">
                                    CREATE YOUR ACCOUNT
                                </h2>
                            </div>
                            <div className="group grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
                                <Input
                                    name="team name"
                                    type="text"
                                    ref={mailRef}
                                    placeholder="Enter the name of your group"
                                    label="Team's name"
                                />
                                <Input
                                    name="phone number"
                                    type="tel"
                                    ref={mailRef}
                                    placeholder="Enter your phone number"
                                    label="Phone"
                                />
                            </div>
                            <div className="group grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
                                <Input
                                    name="email"
                                    type="email"
                                    ref={mailRef}
                                    placeholder="Enter your email address"
                                    label="Email"
                                />
                                <Input
                                    name="project topic"
                                    type="text"
                                    ref={mailRef}
                                    placeholder="What is your group project topic"
                                    label="Project Topic"
                                />
                            </div>
                            {/* selects */}
                            <div className="group grid grid-cols-2 gap-[1rem]">
                                <div className="form-control flex flex-col gap-[1rem] mb-[2rem]">
                                    <label className="">Category</label>
                                    <select name="category" id="" className="outline-none bg-transparent border p-[.5rem] border-white/30 rounded-md focus:ring focus:ring-primary/60 ">
                                        <option value="" disabled selected hidden>Select your category</option>
                                        {
                                                [...Array(5)].map((key, index) => (
                                                    <option key={key} className="bg-dark" value={index+1}>Category {index+1}</option>
                                                ))
                                            }
                                    </select>
                                </div>
                                <div className="form-control flex flex-col gap-[1rem] mb-[2rem]">
                                    <label className="">Group Size</label>
                                    <select name="category" id="" className="outline-none bg-transparent border p-[.5rem] border-white/30 rounded-md focus:ring focus:ring-primary/60 ">
                                        <option value="" disabled selected hidden>Select</option>
                                        {
                                            [...Array(10)].map((key, index) => (
                                                <option key={key} className="bg-dark" value={index+1}>{index+1}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <p className="text-pink1 italic text-[.7rem] md:text-base">Please review your registration details before submitting</p>
                            <div className="accept-terms mt-[1rem] text-[.7rem] md:text-base">
                                <input className="accent-primary" type="checkbox" name="privacy policy" />{" "}
                                I agreed with the event terms and conditions  and privacy policy
                            </div>
                            <div className="cta mt-[2rem] ">
                                <Button text="Register Now" className="w-full" onClick={toogleModal}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="design -z-40 absolute  top-[10%] left-0 md:top-[20%] md:left-[5%] w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] bg-purple-700/90 rounded-[50%]"></div>
                <div className="design -z-40 hidden md:block absolute bottom-[0%] right-[5%] w-[25rem] h-[25rem] bg-purple-700/90 rounded-[50%]"></div>
            </section>
            <Congratulations success={requestSuccessful} close={toogleModal}/>
        </>
    );
};

export default Register;
