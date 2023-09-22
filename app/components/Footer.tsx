'use client'
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

// other imports
import { BsCheckLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Logo, links } from "./Nav";

const Footer = () => {
    return (
        <footer className="bg-[#100B20] backdrop-blur-[3rem]">
            <div className="mx-auto w-[80%] md:w-[80%] pt-[4rem] pb-[2rem]">
                <div className="top flex flex-col gap-[3rem] md:grid md:grid-cols-2">
                    <div className="left flex flex-col gap-3">
                        <Logo />
                        <p className="paragraph w-[100%] md:w-[70%] text-[.9rem]">
                            Getlinked Tech Hackathon is a technology innovation
                            program established by a group of organizations with the
                            aim of showcasing young and talented individuals in the
                            field of technology
                        </p>
                        <div className="terms-policy flex gap-4 justify-self-end mt-[1.5rem] md:mt-[3rem] h-max overflow-hidden">
                            <Link href={'/'}>Terms of Use</Link>
                            <div className="divider h-[1.5rem] md:h-full w-[2px] bg-grad"></div>
                            <Link href={'/'}>Privacy Policy</Link>
                        </div>
                    </div>
                    {/* right */}
                    <div className="right flex flex-col md:flex-row gap-[3rem] justify-between" >
                        {/* useful links */}
                        <div className="useful-links flex flex-col gap-3">
                            <h5 className="footer-heading font-bold text-primary">Useful Links</h5>
                            <div className="links flex flex-col gap-4">
                                {
                                    links.map(link => (
                                        <Link key={link.id} href={`${link.url}`}>
                                            <span>{link.id}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                            {/* FOLLOW US */}
                            <div className="follow flex gap-3 items-center">
                                <span className="text-primary font-bold text-[.9rem]">Follow us</span>
                                <Link href={`/`}><FaInstagram className="text-white text-[1.5rem]"/></Link>
                                <Link href={`/`}><FaXTwitter className="text-white text-[1.5rem]"/></Link>
                                <Link href={`/`}><FaFacebookF className="text-white text-[1.5rem]"/></Link>
                                <Link href={`/`}><FaLinkedinIn className="text-white text-[1.5rem]"/></Link>
                            </div>
                        </div>
                        {/* contact us */}
                        <div className="contact-us flex flex-col gap-3">
                            <h5 className="footer-heading text-primary font-bold">Useful Links</h5>
                            <div className="contact flex flex-col gap-4">
                                <div className="number flex gap-[1rem]">
                                    <FiPhoneCall className="text-white"/>
                                    <span>+234 679 81819</span>
                                </div>
                                <div className="number flex gap-[1rem]">
                                    <FaLocationDot className="text-white"/>
                                    <span>
                                        27,Alara Street <br />
                                        Yaba 100012<br />
                                        Lagos State
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom w-max mx-auto mt-[4rem] text-[.7rem] md:text-base">
                    All rights reserved. © getlinked Ltd.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
