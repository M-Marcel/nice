import Logo from "../assets/lanepact-logo.png"


const TelegramModal = () => {
    return (
        <div className="py-4 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="">
                    <img src={Logo} alt="logo" />
                </div>
                <p className="text-black-500 text-2xl w-[70%] text-center font-semibold leading-7">Join our telegram channel</p>
                <a
                    href="https://t.me/+iw2jh3VaeSg4MzBk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-bg px-4 py-3 text-sm rounded-2xl text-white"
                >
                    Join Telegram
                </a>
            </div>
            <p className="text-center mt-6 text-gray-930 text-xs w-[auto] lg:w-[70%]">Receive first hand updates and chat with the community when you join our channel </p>
        </div>
    )
}


export default TelegramModal