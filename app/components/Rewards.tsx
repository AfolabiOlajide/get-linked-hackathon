import Image from "next/image";

// local imorts
import Primary from '@/assets/star_primary.png';
import Secondary from '@/assets/star_secondary.png';
import White from '@/assets/star_white.png';
import PrizesRewards from "@/assets/prize-and-reward.png";
import Silver from "@/assets/silver_medal 1.png";
import Gold from "@/assets/gold_medal 1.png";
import Bronze from "@/assets/bronze_medal 1.png";

const Rewards = () => {
    return (
        <div className="rewards relative border-t-[1px] border-t-slate-500/50 ">
            <div className="cover relative">
                <div className="main cont py-[4rem] flex flex-col md:grid md:grid-cols-[40%_60%] items-center ">
                    <div className="image hidden md:block">
                        <Image
                            className="w-[80%]"
                            src={PrizesRewards}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                    </div>
                    <div className="text text-center md:text-left">
                        <div className="content w-full md:w-max mx-auto ">
                            <h2 className="heading-text text-[1.2rem] md:text-[2rem] font-bold mb-[1rem]">
                                Prizes and <br />
                                <span className="text-primary">Rewards</span>
                            </h2>
                            <p className="w-[80%] mx-auto md:mx-0 text-[.7rem] md:text-base">
                                Highlight of the prizes or rewards for winners and
                                for participants.
                            </p>
                        </div>
                        <div className="image block md:hidden mt-[4rem]">
                            <Image
                                className="w-[80%] mx-auto"
                                src={PrizesRewards}
                                width={20}
                                height={20}
                                alt="The Big Idea"
                                unoptimized
                            />
                        </div>
                        <div className="rank flex gap-[1rem] justify-center md:gap-[2rem] text-center text-[2rem] mt-[7rem] md:mt-[15rem]">
                            {/* silver */}
                            <div className="silver relative border border-primary rounded-md bg-primary/10 pb-[1rem] md:pb-[3rem] px-[1rem] md:px-[2rem] pt-[3rem] md:pt-[8rem]">
                                <div className="medal w-full flex justify-center absolute -top-[30%] left-[50%] -translate-x-[50%]">
                                    <Image className="w-[80%]" src={Silver} width={20} alt="silver medal" unoptimized/>
                                </div>
                                <h4 className="font-bold text-[.7rem]">
                                    2nd <br />
                                    Runner
                                </h4>
                                <h3 className="text-primary font-bold text-[.7rem] md:text-[1.5rem]">N300,000</h3>
                            </div>
                            {/* gold */}
                            <div className="gold relative border border-secondary rounded-md bg-primary/10 pb-[1rem] md:pb-[3rem] px-[1rem] md:px-[2rem] pt-[3rem] md:pt-[8rem] -mb-[2rem]">
                                <div className="medal w-[130%] flex justify-center absolute -top-[50%] left-[50%] -translate-x-[50%]">
                                    <Image className="w-[130%]" src={Gold} width={20} alt="silver medal" unoptimized/>
                                </div>
                                <h4 className="font-bold text-[.7rem]">
                                    1st <br />
                                    Runner
                                </h4>
                                <h3 className="text-secondary font-bold text-[.7rem] md:text-[1.5rem]">N400,000</h3>
                            </div>
                            {/* bronze */}
                            <div className="bronze relative border border-primary rounded-md bg-primary/10 pb-[1rem] md:pb-[3rem] px-[1rem] md:px-[2rem] pt-[3rem] md:pt-[8rem] ">
                                <div className="medal w-full flex justify-center absolute -top-[30%] left-[50%] -translate-x-[50%]">
                                    <Image className="w-[80%]" src={Bronze} width={20} alt="silver medal" unoptimized/>
                                </div>
                                <h4 className="font-bold text-[.7rem]">
                                    3rd <br />
                                    Runner
                                </h4>
                                <h3 className="text-primary font-bold text-[.7rem] md:text-[1.5rem]">N150,000</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <Image className="absolute top-[5%] md:top-[10%] left-[20%] w-[.7rem] md:w-[1.5rem]" src={Primary} width={20} alt="Star" />
                <Image className="absolute -z-20 top-[13%] md:top-[22%] right-[30%] w-[.7rem] md:w-[1.5rem]" src={Primary} width={20} alt="Star" />
                <Image className="absolute top-[60%] left-[20%] md:top-[30%] md:left-[45%] w-[.7rem] md:w-[1.5rem]" src={White} width={20} alt="Star" />
                <Image className="absolute top-[70%] right-[15%] md:top-[50%] md:right-[15%] w-[.7rem] md:w-[1.5rem]" src={White} width={20} alt="Star" />
                <Image className="absolute top-[95%] right-[25%] md:top-[95%] md:right-[25%] w-[.7rem] md:w-[1.5rem] brightness-50" src={White} width={20} alt="Star" />
            </div>
            <div className="design -z-40 absolute top-[15%] md:top-[20%] md:left-[20%] w-[10rem] h-[10rem] md:w-[20rem] md:h-[20rem] bg-secondary/90 rounded-[50%]"></div>
            <div className="design -z-40 absolute bottom-[15%] -right-[15%] w-[13rem] h-[13rem] md:w-[25rem] md:h-[25rem] bg-secondary/90 rounded-[50%]"></div>
        </div>
    );
};

export default Rewards;
