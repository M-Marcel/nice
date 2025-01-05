

const EarlyAccess = () => {
  return (
    <div className="flex flex-col lg:flex-row px-2">
      <div className="px-4 w-[100%] lg:w-[80%] lg:relative left-[18%]">
        <div className="flex flex-col gap-8 mt-8">
          <div className="w-[100%] lg:w-[100%] px-2 py-4 h-[100vh]">
            <div className="relative top-[40px]">
              <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <form className="w-[100%] lg:w-[100%]">
                  <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex w-[100%] lg:w-[90%] flex-col mb-3">
                      <p className="mb-4 text-sm text-gray-500">Early access</p>
                      <label className="mb-4 w-[100%] text-sm text-gray-500 flex flex-row justify-between item-center cursor-pointer">
                        <span className="text-md font-medium text-black-500">
                        Enable experimental features
                        </span>
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-900   rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-green-500"></div>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;
