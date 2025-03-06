import BotSlide from "./botSlide"


const CommunityBotPlan = () => {
    return (
        <div className="relative top-[290px] lg:top-[480px]">
            <div className="flex flex-col">
                <div className="flex justify-center items-center flex-col text-center pb-6">
                    <h2 className="text-4xl lg:text-4xl mb-3 text-black-300 font-medium lg:max-w-[22%]">Community bots and mini-apps</h2>
                    <p className="text-black-400 text-md text-center w-auto lg:w-[20%]">Get access to all published projects and mini-apps</p>
                </div>
                <div className="px-5 lg:px-7.5 xl:px-10 lg:mx-8">
                   <BotSlide />
                </div>
            </div>
        </div>
    )
}

export default CommunityBotPlan;