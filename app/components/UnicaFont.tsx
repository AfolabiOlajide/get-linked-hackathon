import { Unica_One } from "next/font/google";

const unicaOne = Unica_One({ subsets: ['latin'], weight: ['400'] });

const UnicaFont = (
    {children}:
    {children: React.ReactNode}
) => {
    return (
        <div className={unicaOne.className}>{children}</div>
    )
}

export default UnicaFont;