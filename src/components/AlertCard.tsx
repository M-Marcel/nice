import BookImg from '../assets/Book.png';
import Bell from '../assets/svg/Bell';
import MenuBar from '../assets/svg/MenuBar';
import Button from './Button';



const AlertIcon = () => {
  return (
    <div className="h-[20vh] rounded-t-xl px-1 mx-2 mb-14 alert-bg relative">
      <div className='flex justify-between px-2 py-2 items-center'>
        <div className='flex gap-2 items-center'>
          <Bell />
          <p className='text-white'>Alert filter</p>
        </div>
        <div className='flex gap-2 items-center'>
          <Button
            className='text-xs text-white tracking-tight rounded-lg px-2 border border-none bg-purple-500 py-1'
            type='button'>
              Logic
          </Button>
          <Button
             id="dropdownButton"
             data-dropdown-toggle="dropdown"
             className="text-white px-1 py-1 hover:bg-gray-100 hover:text-black-200 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm"
             type="button"
          >
             <span className="sr-only">Open dropdown</span>
            <MenuBar />
          </Button>
          
        </div>
      </div>
      <div className='bg-white absolute w-[97%] h-auto px-[8px] py-4 flex flex-col rounded-lg'>
          <p className='text-sm text-gray-200 ml-2'>Activates when value hits the threshold from above or below</p>
          <img className="mt-5 ml-2" src={BookImg} alt="logo" width={30} height={30} />
      </div>
    </div>
  );
};

export default AlertIcon;
