

const Button = ({ text, className }: { text: string, className?: string }) => {
    return (
        <button className={`bg-grad outline-none border-none px-[2.5rem] py-[.7rem] rounded-sm text-[.9rem] ${className}`}>{text}</button>
    )
}

export default Button