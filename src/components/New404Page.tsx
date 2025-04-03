import boxImg from '../assets/404-Frame.png'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const New404Page = () => {

  const navigate = useNavigate()
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <img className='lg:ml-10' src={boxImg} alt="" width={600} />
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold">404</h1>
        <p className='text-xs w-[65%] text-center text-gray-930'>The page you were looking for does not exist</p>
        <Button 
        onClick={() => navigate("/")}
        className='text-xs border border-gray-100 rounded-xl px-3 py-2 mt-2'>Go back to Home</Button>
      </div>
    </div>
  )
}

export default New404Page

