


const BotIcon = () => {
    return (
        <div className='flex text-sm text-gray-30 items-center gap-2'>
            <p>Bot status</p>
            <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label className="inline-flex items-center w-full cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-100 dark:peer-focus:ring-green-100 rounded-full peer dark:bg-gray-100 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-600"></div>
          </label>
        </div>
        <button className='rounded-xl bg-blue-400 py-2 px-2 text-white text-sm ' >Save bot</button>
        </div>
    )
}

export default BotIcon;