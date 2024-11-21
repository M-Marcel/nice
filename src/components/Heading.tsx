import Zero from '../assets/zero.png'
import BotDesign from '../assets/zrobot.png'
import Button from './Button'
import Avatar from './avatar'

const Heading = () => {
    return (
        <div className="relative top-[150px]">
            <div className='flex flex-col items-center justify-center '>
                <Avatar className="">
                    2k+ bots built
                </Avatar>
                <div className='flex flex-col items-center max-w-sm justify-center'>
                    <h2 className='font-title text-5xl mb-3 text-black-300 text-center  leading-none'>
                        Build bots and mini apps with
                    </h2>
                    <div className='mb-3'>
                        <img src={Zero} alt='zero' width={250} height={80} />
                    </div>
                    <p className='text-center w-auto lg:w-[70%] text-black-400 mb-3'>
                        Start building bots and mini apps before we fully launch
                    </p>
                    <div>
                        <Button className='custom-bg text-white font-bold text-sm px-6 py-3 rounded-lg'>Start building</Button>
                    </div>
                </div>
                <div className='mt-4'>
                    <img src={BotDesign} alt='botDesign' width={1000} height={1000} />
                </div>
            </div>
        </div>
    )
}

export default Heading