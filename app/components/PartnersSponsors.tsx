import Image from "next/image";

// local imports
import LibertyCompany from "@/assets/Liberty company logo.png";
import LibertyPay from "@/assets/Liberty company logo2.png";
import WinWIse from "@/assets/Winwise logo White colour 1.png";
import Whisper from "@/assets/wisper logo white.png";
import PayBox from "@/assets/Paybox-logo.png";
import Vizual from "@/assets/Vizual Plus.png";
import HrLine from "@/assets/purp_line_hr.png"


const PartnersSponsors = () => {
    return (
        <div className="partners relative">
            <div className="cover">
                <div className="main cont py-[4rem] md:py-[8rem]">
                    <div className="text w-[90%] md:w-[40%] mx-auto text-center">
                        <h2 className="heading-text text-[1.2rem] md:text-[2rem] font-bold">Partners and Sponsors</h2>
                        <p className="mt-[1rem]">
                            Getlinked Hackathon 1.0 is honored to have the
                            following major companies as its partners and
                            sponsors
                        </p>
                    </div>
                    <div className="partners py-[3rem] h-max md:h-[50vh] flex justify-center items-center border border-primary rounded-md mt-[5rem]">
                        <div className="grid grid-cols-3 w-[80%] md:w-[50%] gap-[0rem] gap-y-[3rem] md:gap-[3rem]">
                            <div className="image w-full flex justify-center items-center">
                                <Image className="w-[50%]" unoptimized src={LibertyCompany} width={20} height={20} alt="Partner Image"/>
                            </div>
                            <div className="image w-full flex justify-center items-center border-x-[2px] border-primary">
                                <Image className="w-[50%]" unoptimized src={LibertyPay} width={20} height={20} alt="Partner Image"/>
                            </div>
                            <div className="image w-full flex justify-center items-center">
                                <Image className="w-[50%]" unoptimized src={WinWIse} width={20} height={20} alt="Partner Image"/>
                            </div>
                            <div className="relative image w-full flex justify-center items-center">
                                <div className="w-[80%] md:w-[100%] h-[2px] bg-primary absolute -top-[1.5rem] right-[1rem] md:-right-[1.5rem]"></div>
                                <Image className="w-[50%]" unoptimized src={Whisper} width={20} height={20} alt="Partner Image"/>
                            </div>
                            <div className="relative image w-full flex justify-center items-center border-x-[2px] border-primary">
                                <div className="w-[80%] h-[2px] bg-primary absolute -top-[1.5rem] "></div>
                                <Image className="w-[50%]" unoptimized src={PayBox} width={20} height={20} alt="Partner Image"/>
                            </div>
                            <div className="relative image w-full flex justify-center items-center">
                                <div className="w-[80%] md:w-[100%] h-[2px] bg-primary absolute -top-[1.5rem] left-[1rem] md:-left-[1.5rem]"></div>
                                <Image className="w-[50%]" unoptimized src={Vizual} width={20} height={20} alt="Partner Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="design -z-40 absolute top-[10%] -left-[10%] md:top-[20%] md:left-[5%] w-[10rem] h-[10rem] md:w-[22rem] md:h-[22rem] bg-purple-700/90 rounded-[50%]"></div>
            <div className="design -z-40 absolute -bottom-[5%] md:-bottom-[15%] right-[0%] w-[10rem] h-[10rem] md:w-[25rem] md:h-[25rem] bg-purple-700/90 rounded-[50%]"></div>
        </div>
    );
};

export default PartnersSponsors;
