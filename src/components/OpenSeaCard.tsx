import BookImg from '../assets/Book.png'
import BoatImg from '../assets/Boat.png'

const OpenSeaIcon = () => {
  return (
    <div className="rounded-t-xl px-1 mx-1  openSea mb-3">
      <div className="max-w-sm  mt-39] border-none shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex p-2 gap-3 justify-between text-white ">
          <div className="flex gap-2">
          <img src={BoatImg} alt="logo" className='botoimg' width={30} height={15} />
            <p className="mb-2 text-sm text-white-300  tracking-tight  dark:text-white">
              OpenSea-Monitor portfolio
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="#"
              className="mb-2 text-sm text-white-200 tracking-tight   "
            >
              {" "}
              <button className="rounded-lg  outline-none px-2  border border-none bg-green-400 py-1">
                Data
              </button>{" "}
            </a>

            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className=" text-white-500 dark:text-gray-400 pb-3 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm "
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-6 h-6 text-white-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="block bg-[#FFFFFF]   rounded-lg p-4">
          <p className="mb-3 font-normal text-gray-500 text-sm ">
            Get Notification when an account invests in a new collection
          </p>
          <a
            href="#"
            className="inline-flex font-medium items-center text-blue-600 hover:underline"
          >
           <img src={BookImg} alt="logo" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OpenSeaIcon;
