import Line from "@/assets/Line.png";
import Image from "next/image";

const Divider = () => {
    return (
        <div className="line">
            <Image className="w-full" src={Line} width={20} alt="" />
        </div>
    );
};

export default Divider;
