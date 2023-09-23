'use client'
import { useState, useEffect } from 'react'
import ReactDOM from "react-dom"

// local imports
import Congrats from "@/assets/congratulations.png";
import Wink from "@/assets/wink.png"
import Image from 'next/image'
import Button from './Button'


const Congratulations = ({ success }: { success: boolean }) => {
    const [mounted, setMounted] = useState<boolean>(false);
    
    let portal;
    if (typeof document !== 'undefined') {
        portal = document.querySelector("#modal");
    }

    const classes = success ? "fixed top-0 left-0 w-[100%] h-[100%] scale-[1]" : " scale-0"

    useEffect(() => setMounted(true), []);

    return mounted ? ReactDOM.createPortal(
        <div className={`modal-container fixed z-20 bg-dark/90 backdrop-blur-[rem] flex items-center justify-center ${classes}`}>
            <div className="content border border-primary rounded-md p-[3rem] py-[5rem] h-[50vh] md:h-[70vh] w-[80%] md:w-[35%]">
                <div className="image">
                    <Image className='w-[70%] mx-auto' src={Congrats} width={20} height={20} alt='Congratulations' unoptimized />
                </div>
                <h3 className='text-[1rem] md:text-[2rem] text-center'>Congratulations <br /> you have successfully Registered!</h3>
                <p className='mt-[1.6rem] text-center text-[.7rem] md:text-base w-[90%] md:w-[50%] mx-auto flex items-end'>
                    Yes, it was easy and you did it! check your mail box for next step
                    <Image className='w-[1.5] md:w-[2rem] pb-[.2rem]' src={Wink} width={20} height={20} alt='Winking Emoji' />
                    </p>
                <Button text='Back' className='w-full mt-[2rem]'/>
            </div>
        </div>
        , portal as HTMLElement
    ) : null
}

export default Congratulations