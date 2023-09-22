import { Unica_One } from "next/font/google";

const unicaOne = Unica_One({ subsets: ['latin'], weight: ['400'] });

const UnicaFont = (
    {children, className}:
    {children: React.ReactNode, className?: string}
) => {
    return (
        <div className={`${unicaOne.className} ${className}`}>{children}</div>
    )
}

export default UnicaFont;