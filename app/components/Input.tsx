"use client";
import { forwardRef } from "react";

const Input = forwardRef(
    (
        {
            label,
            name,
            type,
            placeholder,
        }: { label?: string; name: string; type: string; placeholder: string },
        ref: React.ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <div className="form-control flex flex-col gap-[1rem] mb-[2rem]">
                <label className="">{label}</label>
                <input
                    className={`outline-none bg-transparent border p-[.5rem] border-white/30 rounded-md focus:ring focus:ring-primary/60 }`}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    ref={ref}
                />
            </div>
        );
    }
);

export default Input;
