'use client'
import { useState, useEffect } from 'react'
import ReactDOM from "react-dom"
import { AiOutlineClose } from "react-icons/ai"

// 
import { links } from "./Nav"
import Link from "next/link"
import Button from "./Button"

export default function MobileNav ({ handleToggleState, isToggled }: { handleToggleState: () => void, isToggled: boolean}){
    const [mounted, setMounted] = useState<boolean>(false);
    
    let portal;
    if (typeof document !== 'undefined') {
        portal = document.querySelector("#portal");
    }

    useEffect(() => setMounted(true), []);

    return mounted ?  ReactDOM.createPortal(
        <div className={`mobile-menu z-50 block md:hidden bg-dark fixed top-0 ${isToggled ? "right-0" : "right-[120%]"} w-[100%] bottom-0 pl-[3rem] pt-[10rem] trans`}>
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
        </div>,
        portal as HTMLElement
    ) : null;
}