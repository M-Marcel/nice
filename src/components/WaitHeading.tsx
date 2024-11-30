import { useEffect, useState } from 'react'
import WaitGroup from '../assets/waitgroup.png'
import Avatar from './avatar'
import { WaitListFormData } from '../dataTypes'
import { useAppDispatch, useAppSelector } from '../hooks'
import { join, reset } from '../slices/wait/waitSlice'
import { toast } from 'react-toastify'
import SubmitButton from './SubmitButton'

const WaitHeading = () => {

    const [formData, setFormData] = useState<WaitListFormData>({
        fullName: '',
        email: '',
    })
    const { fullName, email } = formData

    const dispatch = useAppDispatch()
    const { user, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.wait)

    useEffect(() => {
        if (isError) {
            console.log(message)
            toast.error(message)
        }
        if (isSuccess) {
            console.log('successful')
            toast.success('added to waitlist')
           
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, dispatch])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!fullName || !email) {
            toast.error('please fill in all details')
        } else {
            const userData = {
                fullName,
                email,
            }
            dispatch(join(userData))
        }
    }



    return (
        <div className="flex justify-center items-center mt-[100px] ">
            <div className='flex flex-col justify-center items-center'>
                <img src={WaitGroup} alt='waitgroup' width={400} height={200} />
                <p className='w-[60%] text-center text-black-400 mt-4 text-md'>Start building bots and mini apps before we fully launch</p>
                <div className='mt-4 mb-6'>
                    <form onSubmit={onSubmit}>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor='fullName' className='mb-2 text-gray-400 text-sm'>Fullname</label>
                            <input
                                type="text"
                                name="fullName"
                                value={fullName}
                                onChange={onChange}
                                className='rounded-lg bg-transparent px-4 py-2
                                border-2 border-black-500'
                            />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor='email' className='mb-2 text-gray-400 text-sm'>Email</label>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={onChange}
                                className='rounded-lg bg-transparent px-4 py-2
                                border-2 border-black-500'
                            />
                        </div>
                        <SubmitButton
                            isLoading={isLoading}
                            className={`px-4 py-2 w-full text-white rounded-lg text-md ${isLoading ? 'bg-blue-100/55' : 'custom-bg'
                        }`}
                        >
                            Join waitlist
                        </SubmitButton>
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