import Button from "./Button";


const Password = () => {
  return (
    <div className="flex flex-col lg:flex-row px-2">
      <div className="px-4 w-[100%] lg:w-[100%] lg:relative left-[0%]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-[100%] lg:w-[100%] px-2 py-4 h-[100vh]">
            <div className="relative top-[20px]">
              <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <form className="w-[100%] lg:w-[80%]">
                  <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex w-[100%] lg:w-[90%] flex-col mb-3">
                      <label className="mb-1 text-sm text-gray-500">
                        Current
                      </label>
                      <input
                        type="text"
                        className="border py-2 px-2 w-[100%] border-gray-600 outline-0 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex w-[100%] lg:w-[90%] flex-col mb-3">
                      <label className="mb-1 text-sm text-gray-500">New</label>
                      <input
                        type="text"
                        className="border px-2 py-2 w-[100%] border-gray-600 outline-0 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="w-[100%] lg:w-[90%] flex flex-row-reverse  mt-2">
                    <Button className="custom-bg px-6 py-4 rounded-xl text-white text-sm">
                      Save
                    </Button>
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

export default Password;
