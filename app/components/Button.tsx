

const Button = ({ text, className, onClick }: { text: string, className?: string, onClick?: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button className={`bg-grad outline-none border-none px-[2.5rem] py-[.7rem] rounded-sm text-[.9rem] ${className}`} onClick={onClick}>{text}</button>
    )
}

export default Button