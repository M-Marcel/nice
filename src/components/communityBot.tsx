import BotSlide from "./botSlide"


const CommunityBot = () => {
    return (
        <div className="mt-[100px]">
            <div className="flex flex-col">
                <div className="flex justify-center items-center flex-col text-center">
                    <h2 className="text-3xl lg:text-4xl mb-3 text-black-300 max-w-sm">Community bots and mini-apps</h2>
                    <p className="text-black-400 text-md text-center w-auto lg:w-[20%]"></p>
                </div>
                <div className="px-5 lg:px-7.5 xl:px-10 lg:mx-8">
                   <BotSlide />
                </div>
            </div>
        </div>
    )
}

export default CommunityBot