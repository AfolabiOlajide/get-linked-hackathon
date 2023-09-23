import Image from "next/image";

// local imorts
import PrizesRewards from "@/assets/prize-and-reward.png";
import Silver from "@/assets/silver_medal 1.png";
import Gold from "@/assets/gold_medal 1.png";
import Bronze from "@/assets/bronze_medal 1.png";

const Rewards = () => {
    return (
        <div className="rewards relative border-t-[1px] border-t-slate-500/50 ">
            <div className="cover ">
                <div className="main cont py-[4rem] grid grid-cols-[40%_60%] items-center ">
                    <div className="image">
                        <Image
                            className="w-[80%]"
                            src={PrizesRewards}
                            width={20}
                            height={20}
                            alt="The Big Idea"
                            unoptimized
                        />
                    </div>
                    <div className="text">
                        <div className="content w-max mx-auto">
                            <h2 className="heading-text text-[2rem] font-bold mb-[1rem]">
                                Prizes and <br />
                                <span className="text-primary">Rewards</span>
                            </h2>
                            <p className="w-[80%]">
                                Highlight of the prizes or rewards for winners and
                                for participants.
                            </p>
                        </div>
                        <div className="rank flex gap-[2rem] text-center text-[2rem] mt-[15rem]">
                            {/* silver */}
                            <div className="silver relative border border-primary rounded-md bg-primary/10 pb-[3rem] px-[2rem] pt-[8rem]">
                                <div className="medal w-full flex justify-center absolute -top-[30%] left-[50%] -translate-x-[50%]">
                                    <Image className="w-[80%]" src={Silver} width={20} alt="silver medal" unoptimized/>
                                </div>
                                <h4 className="font-bold">
                                    2nd <br />
                                    Runner
                                </h4>
                                <h3 className="text-primary font-bold">N300,000</h3>
                            </div>
                            {/* gold */}
                            <div className="gold relative border border-secondary rounded-md bg-primary/10 pb-[3rem] px-[2rem] pt-[8rem] -mb-[2rem]">
                                <div className="medal w-[130%] flex justify-center absolute -top-[50%] left-[50%] -translate-x-[50%]">
                                    <Image className="w-[130%]" src={Gold} width={20} alt="silver medal" unoptimized/>
                                </div>
                                <h4 className="font-bold">
                                    1st <br />
                                    Runner
                                </h4>
                                <h3 className="text-secondary font-bold">N400,000</h3>
                            </div>
                            {/* bronze */}
                            <div className="bronze relative border border-primary rounded-md bg-primary/10 pb-[3rem] px-[2rem] pt-[8rem] ">
                                <div className="medal w-full flex justify-center absolute -top-[30%] left-[50%] -translate-x-[50%]">
                                    <Image className="w-[80%]" src={Bronze} width={20} alt="silver medal" unoptimized/>
                                </div>
                                <h4 className="font-bold">
                                    3rd <br />
                                    Runner
                                </h4>
                                <h3 className="text-primary font-bold">N150,000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="design -z-40 absolute top-[20%] left-[20%] w-[20rem] h-[20rem] bg-purple-700/90 rounded-[50%]"></div>
            <div className="design -z-40 absolute bottom-[15%] -right-[15%] w-[25rem] h-[25rem] bg-purple-700/90 rounded-[50%]"></div>
        </div>
    );
};

export default Rewards;
