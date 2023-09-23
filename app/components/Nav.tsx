'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { AiOutlineClose } from "react-icons/ai"

// local imports
import Button from "./Button";
import menubar from "@/assets/menu.png";
import Image from "next/image";


export const links = [
    {
        id: "Timeline",
        url: "/#timeline"
    },
    {
        id: "Overview",
        url: "/#overview"
    },
    {
        id: "FAQs",
        url: "/#faq"
    },
    {
        id: "Contact",
        url: "/contact"
    },
]

export const Logo = () => {
    return (
        <div className="logo w-max">
            <Link href={`/`}>
                <h1 className="heading-text text-[2rem] font-bold">get<span className="text-primary ">linked</span></h1>
            </Link>
        </div>
    )
}

const Nav = () => {
    const [ isToggled, setIsToggled ] = useState<boolean>(false);
    const query = usePathname();
    const checkPath = query === '/contact' || query === '/register' ? "hidden md:block" : "";

    function handleToggleState(){
        setIsToggled(prev => !prev);
    }

    return (
        <nav className={`${checkPath} pb-[1rem] pt-[1.7rem] md:pt-[3rem] cont flex justify-between items-center md:grid md:grid-cols-[45%_55%] bg-dark/5 backdrop-blur-[5rem]`}>
            <Logo />
            <div className="links-register hidden md:flex justify-between items-center">
                <div className="nav-links">
                    <ul className="flex gap-[2.6rem] items-center">
                        {
                            links.map(link => (
                                <li key={link.id}>
                                <Link href={`${link.url}`}>{link.id}</Link>
                            </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="register">
                    <Link href={`/register`}>
                        <Button text="Register"/>
                    </Link>
                </div>
            </div>
            {/* menu icon */}
            <div className="menu-icon block md:hidden" onClick={handleToggleState}>
                <Image className="w-[2rem]" src={menubar} width={20} height={20} alt={`menu icon`} unoptimized/> 
            </div>
            {/* mobile menu */}
            <div className={`mobile-menu z-[99] block md:hidden bg-dark absolute top-0 ${isToggled ? "right-0" : "right-[120%]"} w-[100%] bottom-0 pl-[3rem] pt-[10rem] trans`}>
                <div className="close bg-grad w-max p-[.2rem] rounded-[50%] absolute top-[5%] right-[10%] cursor flex items-center justify-center" onClick={handleToggleState}>
                    <div className="ineer bg-dark rounded-[50%] p-[.3rem]">
                        <AiOutlineClose className="text-[1rem]"/>
                    </div>
                </div>
                <div className="nav-links">
                    <ul className="flex flex-col gap-[2.6rem] ">
                        {
                            links.map(link => (
                                <li className="text-[1.3rem]" key={link.id}>
                                <Link href={`${link.url}`} onClick={handleToggleState}>{link.id}</Link>
                            </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="register mt-[3rem]">
                    <Link href={`/register`} onClick={handleToggleState}>
                        <Button text="Register"/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav