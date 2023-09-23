"use client";
import { useRef } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa";
import { useRouter } from "next/navigation";

// local imports
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";

const Contact = () => {
    const mailRef = useRef<HTMLInputElement | null>(null);
    const router= useRouter();

    return (
        <section className="contact-page relative overflow-hidden">
            <div className="cover overflow-y-hidden">
                <div className="main cont flex flex-col-reverse md:grid md:grid-cols-[50%_50%] my-[8rem] md:my-[5rem] items-center">
                    {/* info */}
                    <div className="info flex flex-col gap-[2rem] ">
                        <h3 className="heading-text text-primary font-bold text-[2rem] hidden md:block">
                            Get in touch
                        </h3>
                        <p className="hidden md:block">
                            Contact <br />
                            Information
                        </p>
                        <p className="hidden md:block">
                            27,Alara Street <br />
                            Yaba 100012 <br />
                            Lagos State
                        </p>
                        <p className="hidden md:block">Call Us : 07067981819</p>
                        <p className="hidden md:block">
                            we are open from Monday-Friday <br /> 08:00am -
                            05:00pm
                        </p>
                        <div className="share mt-[3rem] md:mt-0">
                            <p className="text-primary font-bold mb-[1rem] text-center md:text-left">
                                Share on
                            </p>
                            <div className="icons flex gap-[2rem]">
                                <Link href={`/`}>
                                    <FaInstagram className="text-white text-[1.5rem]" />
                                </Link>
                                <Link href={`/`}>
                                    <FaXTwitter className="text-white text-[1.5rem]" />
                                </Link>
                                <Link href={`/`}>
                                    <FaFacebookF className="text-white text-[1.5rem]" />
                                </Link>
                                <Link href={`/`}>
                                    <FaLinkedinIn className="text-white text-[1.5rem]" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* form */}
                    <div className="form md:bg-white/5 backdrop-blur-[7rem] p-[1rem] md:p-[5rem]">
                        <div className="heading mb-[2rem]">
                            <h2 className="heading-text text-primary text-[1.5rem] font-bold">
                                Questions or need assistance?
                            </h2>
                            <h2 className="heading-text text-primary text-[1.5rem] font-bold">
                                Let us know about it!
                            </h2>
                            <p className="block md:hidden mt-[2rem]">
                                Email us below to any question related to our
                                event
                            </p>
                        </div>
                        <Input
                            name="email"
                            type="email"
                            ref={mailRef}
                            placeholder="Mail"
                        />
                        <Input
                            name="phone number"
                            type="tel"
                            ref={mailRef}
                            placeholder="Phone Number"
                        />
                        <Input
                            name="first name"
                            type="text"
                            ref={mailRef}
                            placeholder="First Name"
                        />
                        <textarea
                            className="outline-none bg-transparent border p-[.5rem] border-white/30 rounded-md focus:ring focus:ring-primary/60 w-full"
                            name="message"
                            placeholder="message"
                            rows={10}
                        ></textarea>
                        <div className="cta mt-[2rem] flex justify-center">
                            <Button text="Submit" />
                        </div>
                    </div>
                    <div className="back md:hidden bg-grad w-max p-[.2rem] rounded-[50%] absolute top-[5%] left-[10%] cursor flex items-center justify-center" onClick={() => router.back()}>
                        <div className="ineer bg-dark rounded-[50%] p-[.6rem]">
                            <FaLessThan className="text-[.5rem]"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="design -z-40 absolute top-[10%] left-0 md:top-[20%] md:left-[5%] w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] bg-purple-700/90 rounded-[50%]"></div>
            <div className="design -z-40 hidden md:block absolute bottom-[0%] right-[5%] w-[25rem] h-[25rem] bg-purple-700/90 rounded-[50%]"></div>
        </section>
    );
};

export default Contact;
