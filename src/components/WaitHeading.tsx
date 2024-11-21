import WaitGroup from '../assets/waitgroup.png'
import Avatar from './avatar'
import Button from './Button'

const WaitHeading = () => {
    return (
        <div className="flex justify-center items-center mt-[200px] ">
            <div className='flex flex-col justify-center items-center'>
                <img src={WaitGroup} alt='waitgroup' width={400} height={200} />
                <p className='w-[60%] text-center text-black-400 mt-4 text-md'>Start building bots and mini apps before we fully launch</p>
                <div className='mt-4 mb-6'>
                    <form>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor='email' className='mb-2 text-gray-400 text-sm'>Email</label>
                            <input
                                type="text"
                                className='rounded-lg bg-transparent px-4 py-2
                                border-2 border-black-500'
                            />
                        </div>
                        <Button className='custom-bg px-4 py-2 w-full text-white rounded-lg text-md'>Join waitlist</Button>
                    </form>
                </div>
                <div>
                    <Avatar className=''>
                       Join over 2k users
                    </Avatar>
                </div>

            </div>

        </div>
    )
}

export default WaitHeading