import ComputerIcon from "./computerIcon";



const CanvasTime = () => {
    return (
        <>
            <div className='flex items-center  gap-4'>
                <ComputerIcon />
                <p>Runs every</p>
                <div className="flex gap-4  ">
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-center inline-flex items-center border px-3 text-sm rounded-lg outline-none border-blue-200  "  type="button">8<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-center inline-flex items-center border px-3 py-2 text-sm rounded-lg outline-none border-blue-200"  type="button">Minutes<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>

                </div>
            </div>
        </>
    )
}

export default CanvasTime;