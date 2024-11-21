import Telegram from '../assets/telegram.png'
import Social from '../assets/social.png'
import Chat from '../assets/chat.png'
import Twitter from '../assets/twitter.png'

const Join = () => {
    return(
        <div className="join-bg px-8 py-28 h-[auto] mt-[10px] mb-[70px]">
            <div className="flex justify-center flex-col items-center text-center">
                <h2 className="text-black-500 text-5xl mt-[30px] mb-3">Join our community</h2>
                <p className="text-gray-200 w-[auto] lg:w-[20%]">Be the first to hear the latest updates from us</p>
                <div className="flex gap-3 mt-4">
                    <a href="/" className=''>
                        <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
                           <img src={Telegram} alt="telegram" width={20} height={20} />
                        </span>                   
                    </a>
                    <a href="/">
                        <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
                           <img src={Social} alt="telegram" width={20} height={20} />
                        </span>                   
                    </a>
                    <a href="/">
                        <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
                           <img src={Chat} alt="telegram" width={20} height={20} />
                        </span>                   
                    </a>
                    <a href="/">
                        <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
                           <img src={Twitter} alt="telegram" width={20} height={10} />
                        </span>                   
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Join