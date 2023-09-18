

const Button = ({ text }: { text: string }) => {
    return (
        <button className="bg-grad outline-none border-none px-[2.4rem] py-[.5rem] rounded-sm text-[.9rem]">{text}</button>
    )
}

export default Button