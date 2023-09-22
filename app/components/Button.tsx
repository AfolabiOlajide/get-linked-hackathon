

const Button = ({ text }: { text: string }) => {
    return (
        <button className="bg-grad outline-none border-none px-[2.5rem] py-[.7rem] rounded-sm text-[.9rem]">{text}</button>
    )
}

export default Button