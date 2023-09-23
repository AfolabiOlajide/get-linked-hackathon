import React from "react";

const Timeline = () => {
    return (
        <div
            id="timeline"
            className="timeline relative border-t-[1px] border-t-slate-500/50 "
        >
            <div className="cover min-h-[40vh]">
                <div className="cont py-[4rem]">
                    <div className="heading text-center">
                        <h1 className="heading-text font-bold text-[2rem]">
                            Timeline
                        </h1>
                        <p className="w-[90%] md:w-[30%] mx-auto">
                            Here is the breakdown of the time we anticipate
                            using for the upcoming event.
                        </p>
                    </div>
                    {/* desktop mode */}
                    <div className="timeline-container hidden md:block mt-[3rem]">
                        {/* timeline date-right*/}
                        <div className="timeline grid grid-cols-[1fr_3px_1fr] p-[25px] min-h-[25vh]">
                            <div className="timeline-component self-end mr-[5rem]">
                                <div className="timeline-text text-right">
                                    <h4 className="text-primary text-[1.5rem] font-bold">Hackathon Announcement</h4>
                                    <p className="text-[.8rem]">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                                </div>
                            </div>
                            <div className="timeline-middle relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">1</span>
                                </div>
                            </div>
                            <div className="timeline-component self-end ml-[5rem] pb-[1.5rem]">
                                <div className="timeline-date text-primary text-[1.5rem] font-bold">November 18, 2023</div>
                            </div>
                        </div>
                        {/* timeline date-left*/}
                        <div className="timeline grid grid-cols-[1fr_3px_1fr] p-[25px] min-h-[25vh] -mt-[3rem]">
                            <div className="timeline-component self-end mr-[5rem] pb-[1.5rem]">
                                <div className="timeline-date text-right text-primary text-[1.5rem] font-bold">November 18, 2023</div>
                            </div>
                            <div className="timeline-middle relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">2</span>
                                </div>
                            </div>
                            <div className="timeline-component self-end ml-[5rem]">
                                <div className="timeline-text">
                                    <h4 className="text-primary text-[1.5rem] font-bold">Teams Registration begins</h4>
                                    <p className="text-[.8rem]">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                                </div>
                            </div>
                        </div>
                        {/* timeline date-right*/}
                        <div className="timeline grid grid-cols-[1fr_3px_1fr] p-[25px] min-h-[25vh] -mt-[3rem]">
                            <div className="timeline-component self-end mr-[5rem]">
                                <div className="timeline-text text-right">
                                    <h4 className="text-primary text-[1.5rem] font-bold">Teams Registration ends</h4>
                                    <p className="text-[.8rem]">Interested Participants are no longer Allowed to register</p>
                                </div>
                            </div>
                            <div className="timeline-middle relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">3</span>
                                </div>
                            </div>
                            <div className="timeline-component self-end ml-[5rem] pb-[1.5rem]">
                                <div className="timeline-date text-primary text-[1.5rem] font-bold">November 18, 2023</div>
                            </div>
                        </div>
                        {/* timeline date-left*/}
                        <div className="timeline grid grid-cols-[1fr_3px_1fr] p-[25px] min-h-[25vh] -mt-[3rem]">
                            <div className="timeline-component self-end mr-[5rem] pb-[1.5rem]">
                                <div className="timeline-date text-right text-primary text-[1.5rem] font-bold">November 18, 2023</div>
                            </div>
                            <div className="timeline-middle relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">4</span>
                                </div>
                            </div>
                            <div className="timeline-component self-end ml-[5rem]">
                                <div className="timeline-text">
                                    <h4 className="text-primary text-[1.5rem] font-bold">Announcement of the accepted teams and ideas</h4>
                                    <p className="text-[.8rem]">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                                </div>
                            </div>
                        </div>
                        {/* timeline date-right*/}
                        <div className="timeline grid grid-cols-[1fr_3px_1fr] p-[25px] min-h-[25vh] -mt-[3rem]">
                            <div className="timeline-component self-end mr-[5rem]">
                                <div className="timeline-text text-right">
                                    <h4 className="text-primary text-[1.5rem] font-bold">Getlinked Hackathon 1.0 Offically Begins</h4>
                                    <p className="text-[.8rem]">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                                </div>
                            </div>
                            <div className="timeline-middle relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">5</span>
                                </div>
                            </div>
                            <div className="timeline-component self-end ml-[5rem] pb-[1.5rem]">
                                <div className="timeline-date text-primary text-[1.5rem] font-bold">November 18, 2023</div>
                            </div>
                        </div>
                        {/* timeline date-left*/}
                        <div className="timeline grid grid-cols-[1fr_3px_1fr] p-[25px] min-h-[25vh] -mt-[3rem]">
                            <div className="timeline-component self-end mr-[5rem] pb-[1.5rem]">
                                <div className="timeline-date text-right text-primary text-[1.5rem] font-bold">November 18, 2023</div>
                            </div>
                            <div className="timeline-middle relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">6</span>
                                </div>
                            </div>
                            <div className="timeline-component self-end ml-[5rem]">
                                <div className="timeline-text">
                                    <h4 className="text-primary text-[1.5rem] font-bold">Demo Day</h4>
                                    <p className="text-[.8rem]">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* mobile view timeline */}
                    <div className="timeline-container block md:hidden mt-[2rem]">
                        {/* timeline */}
                        <div className="timeline grid grid-cols-[3px_1fr] min-h-[25vh]  p-[25px]">
                            <div className="timeline-bar relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">1</span>
                                </div>
                            </div>
                            <div className="timeline-component ml-[3rem] pb-[1.5rem]">
                                <div className="timeline-text">
                                    <h4 className="text-primary text-[1rem] font-bold">Hackathon Announcement</h4>
                                    <p className="text-[.8rem]">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                                </div>
                                <div className="timeline-date mt-[2rem] text-primary text-[1rem] font-bold">November 18, 2023</div>
                            </div>
                        </div>
                        {/* timeline */}
                        <div className="timeline grid grid-cols-[3px_1fr] min-h-[25vh]  p-[25px] -mt-[3rem]">
                            <div className="timeline-bar relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">2</span>
                                </div>
                            </div>
                            <div className="timeline-component ml-[3rem] pb-[1.5rem]">
                                <div className="timeline-text">
                                    <h4 className="text-primary text-[1rem] font-bold">Teams Registration begins</h4>
                                    <p className="text-[.8rem]">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                                </div>
                                <div className="timeline-date mt-[3rem] text-primary text-[1rem] font-bold">November 18, 2023</div>
                            </div>
                        </div>
                        {/* timeline */}
                        <div className="timeline grid grid-cols-[3px_1fr] min-h-[25vh]  p-[25px] -mt-[3rem]">
                            <div className="timeline-bar relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">3</span>
                                </div>
                            </div>
                            <div className="timeline-component ml-[3rem] pb-[1.5rem]">
                                <div className="timeline-text">
                                    <h4 className="text-primary text-[1rem] font-bold">Teams Registration ends</h4>
                                    <p className="text-[.8rem]">Interested Participants are no longer Allowed to register</p>
                                </div>
                                <div className="timeline-date mt-[3.5rem] text-primary text-[1rem] font-bold">November 18, 2023</div>
                            </div>
                        </div>
                        {/* timeline */}
                        <div className="timeline grid grid-cols-[3px_1fr] min-h-[25vh]  p-[25px] -mt-[3rem]">
                            <div className="timeline-bar relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">4</span>
                                </div>
                            </div>
                            <div className="timeline-component ml-[3rem] pb-[1.5rem]">
                                <div className="timeline-text">
                                    <h4 className="text-primary text-[1rem] font-bold">Announcement of the accepted teams and ideas</h4>
                                    <p className="text-[.8rem]">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                                </div>
                                <div className="timeline-date mt-[3.5rem] text-primary text-[1rem] font-bold">November 18, 2023</div>
                            </div>
                        </div>
                        {/* timeline */}
                        <div className="timeline grid grid-cols-[3px_1fr] min-h-[25vh]  p-[25px] -mt-[3rem]">
                            <div className="timeline-bar relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">5</span>
                                </div>
                            </div>
                            <div className="timeline-component ml-[3rem] pb-[1.5rem]">
                                <div className="timeline-text">
                                    <h4 className="text-primary text-[1rem] font-bold">Getlinked Hackathon 1.0 Offically Begins</h4>
                                    <p className="text-[.8rem]">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                                </div>
                                <div className="timeline-date mt-[3.5rem] text-primary text-[1rem] font-bold">November 18, 2023</div>
                            </div>
                        </div>
                         {/* timeline */}
                        <div className="timeline grid grid-cols-[3px_1fr] min-h-[25vh]  p-[25px] -mt-[3rem]">
                            <div className="timeline-bar relative bg-grad">
                                <div className="timeline-point text-[1rem] absolute bottom-0 left-[50%] -translate-x-[50%]">
                                    <span className="flex items-center justify-center w-[1rem] h-[1rem] p-[1.4rem]  border-[1rem] border-dark rounded-[50%] bg-grad2">6</span>
                                </div>
                            </div>
                            <div className="timeline-component ml-[3rem] pb-[1.5rem]">
                                <div className="timeline-text">
                                    <h4 className="text-primary text-[1rem] font-bold">Demo Day</h4>
                                    <p className="text-[.8rem]">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                                </div>
                                <div className="timeline-date mt-[3.5rem] text-primary text-[1rem] font-bold">November 18, 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
