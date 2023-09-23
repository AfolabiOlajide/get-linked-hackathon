'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs"

function FaqComponent() {
    const [faqs, setFaqs] = useState([
        {
            question: "Can I work on a project I started before the hackathon?",
            answer:
                "Answer here.....................................",
            open: true
        },
        {
            question: "What happens if I need help during the hackathon?",
            answer: "Answer here.....................................",
            open: false
        },
        {
            question:
                "What happens if I don't have an idea for a project?",
            answer: "Answer here.....................................",
            open: false
        },
        {
            question: "Can I join a team or do I have to come with one?",
            answer: "Answer here.....................................",
            open: false
        },
        {
            question: "What happens after the hackathon ends",
            answer: "Answer here.....................................",
            open: false
        },
        {
            question: "Can I work on a project I started before the hackathon?",
            answer: "Answer here.....................................",
            open: false
        }
    ]);

    const toggleFAQ = (index: number) => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                faq.open = !faq.open;
                } else {
                faq.open = false;
                }
        
                return faq;
            })
            );
        };

    return (
        <div className='mt-[6rem]'>
            {/* faqs */}
            <div className="flex flex-col space-y-6">
                { faqs.map((faq, i) => (
                    <div className="rounded-xl bg-dark shadow-lg shadow-teal/80" key={i}>
                        <div className={`question border-b border-b-primary ${faq.open ? "" : ""}  p-6 flex gap-4 justify-between items-center`}  >
                            <h1 className="font-bold text-blu" onClick={() => toggleFAQ(i)}>{faq.question}</h1>
                            {faq.open ? <AiOutlineMinus className='text-primary cursor-pointer' onClick={() => toggleFAQ(i)} /> : <AiOutlinePlus className='text-primary cursor-pointer' onClick={() => toggleFAQ(i)}/>}
                        </div>
                        <div className={`answer ${faq.open? "block" : "hidden"} bg-lightTeal`}>
                            <p className='text-slate-400 p-6'>{faq.answer}</p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default FaqComponent;