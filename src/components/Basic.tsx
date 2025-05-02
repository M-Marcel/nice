import Search from "./AdminSearch";
import SearchSide from "../assets/svg/SearchSide";
import AdminAvatar from "../assets/adminAvatar.png";

const BasicPlan = () => {
  return (
    <div
      className=" bg-white h-[full] rounded-[40px]  w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40  px-4 "
    >
      <div className="w-[75%] fixed left-[19%] top-3 h-10vh hidden z-20 lg:block py-4 px-2">
        <div className="flex justify-between items-center ">
          <div className="relative w-[27%] active ">
            <Search />

            <div className="absolute left-[200px] top-[11px]">
              <SearchSide />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div>
                <img
                  src={AdminAvatar}
                  alt="adminavatar"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-black-910">
                  John Mraz
                </p>
                <p className="text-xs text-gray-940">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-[80px] right-[50px] ">
        <div className="grid lg:grid-cols-4 gap-2">
            <div className="lg:col-span-3">
                <div className="mt-0">
                <form action="">
                        <div className="grid gap-4 mb-6 md:grid-cols-1">
                          <div>
                            <label htmlFor="planName" className=" text-xs block mb-2 pt-0 font-medium text-gray-500"  >Plan Name</label>
                            <input type="text" id="planName" placeholder="Basic" className=" border border-gray-100/85 text-black-300 text-xs block w-full p-2 rounded-lg" />
                          </div>
                          <div>
                            <label htmlFor="planName" className=" text-xs block mb-2 pt-0 font-medium text-gray-500">Price</label>
                            <input type="text" id="planName" placeholder="15" className=" border border-gray-100/85 text-black-300 text-xs block w-full p-2 rounded-lg" />
                          </div>
                          <div className="">
                            <label htmlFor="planName" className=" text-xs block mb-2 pt-0 font-medium text-gray-500">Runs Every</label>
                            <div className="flex gap-3 text-xs ">
                            <input type="text" id="planName" placeholder="8" className="border border-gray-100/85 text-black-300 text-xs block w-full p-2 rounded-lg" />
                            <button className="bg-black-300 text-white rounded-lg p-2">Minutes</button>
                            
                            <button className=" border border-gray-100/85 rounded-lg px-3 py-2 ">Hour</button>
                            </div>
                            <button className=" border border-gray-100/85 text-xs rounded-lg px-3 py-2 mt-3  ms-[410px] bg-button-gradient text-white ">Save</button>
                          </div>
                        </div>
                      </form>
                </div>
            </div>
        </div>
      </div>
    </div>
    // <h1 className="">Basic Page</h1>
  );
};

export default BasicPlan;
