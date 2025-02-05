import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import cashImg from "../../assets/cash-01.png";
import calenderImg from "../../assets/calendar-03.png";
import catalogueImg from "../../assets/catalogue.png";
import ellipesImg from "../../assets/Ellipse 1.png";
import { useAppSelector } from "../../hooks";
import AdminHeader from "../../components/admin/Header";

const AdminPayment = () => {
  const { user } = useAppSelector((state) => state.adminauth)
  const userRole = user?.role

  return (
    <div className="bg-black-300 h-screen">
      <div className="bg-black-800 mx-2 h-full rounded-[30px] flex gap-5 py-4 px-4">
        <LeftSidebar userRole={userRole} />
        <div
          className="mainDashboardFeatures bg-white h-[full] overflow-y-scroll rounded-[40px]  w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40 left-[20%] px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-300"
        >
           <AdminHeader />
          <div className="relative top-[80px] ms-7">
            <div className="grid lg:grid-cols-1 gap-4">
              <div className="lg:col-span-2">
                <div className="mt-0">
                  <div className="font-medium text-black-500 text-sm pb-3 ">
                    Payments
                  </div>
                  <div className="flex justify-between items-center ">
                    <div className="flex gap-4 ">
                      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 ">
                        <li className="me-2">
                          <a
                            href="/"
                            aria-current="page"
                            className="inline-block px-4 py-2 mt-2 text-xs text-white  bg-black-300 rounded-2xl active"
                          >
                            All
                          </a>
                        </li>
                        <li className="me-2">
                          <a
                            href="/"
                            className="inline-block text-black-200 px-4 py-2 mt-2 text-xs rounded-2xl border border-gray-100/85 hover:text-gray-600 "
                          >
                            Successful
                          </a>
                        </li>
                        <li className="me-2">
                          <a
                            href="/"
                            className="inline-block text-black-200 px-4 py-2 mt-2 text-xs rounded-2xl border border-gray-100/85 hover:text-gray-600"
                          >
                            Pending
                          </a>
                        </li>
                        <li className="me-2">
                          <a
                            href="/"
                            className="inline-block text-black-200 px-4 py-2 mt-2 text-xs rounded-2xl border border-gray-100/85 hover:text-gray-600 "
                          >
                            Cancelled
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex text-black-200 px-2 py-2 mt-2 bg-gray-700/85  text-xs rounded-xl border border-gray-100/85 hover:text-gray-600">
                        <img src={cashImg} alt="" width={15} height={15} />
                        <a 
                         className={`ps-2 `} href="/admin/payment/edit-plans">
                          Edit plans
                        </a>
                      </div>
                      <div className="flex text-black-200 px-2 py-2 mt-2 me-8 bg-gray-700/85  text-xs rounded-xl border border-gray-100/85 hover:text-gray-600">
                        <img
                          src={calenderImg}
                          alt=""
                          width={15}
                          height={15}
                          className=""
                        />

                        <p className="ps-2">Last month </p>
                        <svg
                          className="w-2.5 h-2.5 ms-3 mt-1 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[100%]  ">
                <table className="w-full text-xs text-left rtl:text-right text-gray-500   mb-10  ">
                  <thead className="text-xs text-black-400  ">
                    <tr className="">
                      <th scope="col" className=" px-2 py-2 ">
                        Plan
                      </th>
                      <th scope="col" className="px-2 py-2 ">
                        Email
                      </th>
                      <th scope="col" className="px-2 py-2 ">
                        Status
                      </th>
                      <th scope="col" className="px-2 py-2 ">
                        Amount
                      </th>
                      <th scope="col" className="px-2 py-2 ">
                        Date
                      </th>
                    </tr>
                  </thead>
                  
                  <tbody className="border border-gray-900/85  ">
                    <tr className="bg-white border-b rounded-t-2xl border-gray-900/85">
                      <th
                        scope="row"
                        className="flex font-xs gap-2 py-3 px-2 text-xs text-gray-300 "
                      >
                        <img src={catalogueImg} alt="" width={15} height={15} />{" "}
                        LanePlus
                      </th>
                      <td className="py-3 px-2 ">ranjigeto@gmail.com</td>
                      <td className=" py-3 px-2">
                        <div className="gap-1 items-center w-[90px] justify-start px-2  py-1 text-xs flex text-green-500  border-green-100 rounded-xl bg-green-100">
                            <img src={ellipesImg} alt="" width={5} />
                            <span>Successful</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">$10</td>
                      <td className="py-3 px-2">30/08/2025</td>
                    </tr>
                    <tr className="bg-white border-b  border-gray-900/85">
                      <th
                        scope="row"
                        className="flex font-xs gap-2 py-3 px-2 text-xs text-gray-300 "
                      >
                        <img src={catalogueImg} alt="" width={15} height={15} />{" "}
                        LanePlus
                      </th>
                      <td className="py-3 px-2 ">ranjigeto@gmail.com</td>
                      <td className=" py-3 px-2">
                        <div className="gap-1 items-center w-[90px] justify-start px-2  py-1 text-xs flex text-green-500  border-green-100 rounded-xl bg-green-100">
                            <img src={ellipesImg} alt="" width={5} />
                            <span>Successful</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">$10</td>
                      <td className="py-3 px-2">30/08/2025</td>
                    </tr>
                    <tr className="bg-white border-b  border-gray-900/85">
                      <th
                        scope="row"
                        className="flex font-xs gap-2 py-3 px-2 text-xs text-gray-300 "
                      >
                        <img src={catalogueImg} alt="" width={15} height={15} />{" "}
                        LanePlus
                      </th>
                      <td className="py-3 px-2 ">ranjigeto@gmail.com</td>
                      <td className=" py-3 px-2">
                        <div className="gap-1 items-center w-[90px] justify-start px-2  py-1 text-xs flex text-green-500  border-green-100 rounded-xl bg-green-100">
                            <img src={ellipesImg} alt="" width={5} />
                            <span>Successful</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">$10</td>
                      <td className="py-3 px-2">30/08/2025</td>
                    </tr>
                    <tr className="bg-white border-b  border-gray-900/85">
                      <th
                        scope="row"
                        className="flex font-xs gap-2 py-3 px-2 text-xs text-gray-300 "
                      >
                        <img src={catalogueImg} alt="" width={15} height={15} />{" "}
                        LanePlus
                      </th>
                      <td className="py-3 px-2 ">ranjigeto@gmail.com</td>
                      <td className=" py-3 px-2">
                        <div className="gap-1 items-center w-[90px] justify-start px-2  py-1 text-xs flex text-green-500  border-green-100 rounded-xl bg-green-100">
                            <img src={ellipesImg} alt="" width={5} />
                            <span>Successful</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">$10</td>
                      <td className="py-3 px-2">30/08/2025</td>
                    </tr>
                    <tr className="bg-white border-b  border-gray-900/85">
                      <th
                        scope="row"
                        className="flex font-xs gap-2 py-3 px-2 text-xs text-gray-300 "
                      >
                        <img src={catalogueImg} alt="" width={15} height={15} />{" "}
                        LanePlus
                      </th>
                      <td className="py-3 px-2 ">ranjigeto@gmail.com</td>
                      <td className=" py-3 px-2">
                        <div className="gap-1 items-center w-[90px] justify-start px-2  py-1 text-xs flex text-green-500  border-green-100 rounded-xl bg-green-100">
                            <img src={ellipesImg} alt="" width={5} />
                            <span>Successful</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">$10</td>
                      <td className="py-3 px-2">30/08/2025</td>
                    </tr>
                    <tr className="bg-white border-b  border-gray-900/85">
                      <th
                        scope="row"
                        className="flex font-xs gap-2 py-3 px-2 text-xs text-gray-300 "
                      >
                        <img src={catalogueImg} alt="" width={15} height={15} />{" "}
                        LanePlus
                      </th>
                      <td className="py-3 px-2 ">ranjigeto@gmail.com</td>
                      <td className=" py-3 px-2">
                        <div className="gap-1 items-center w-[90px] justify-start px-2  py-1 text-xs flex text-green-500  border-green-100 rounded-xl bg-green-100">
                            <img src={ellipesImg} alt="" width={5} />
                            <span>Successful</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">$10</td>
                      <td className="py-3 px-2">30/08/2025</td>
                    </tr>
                    <tr className="bg-white border-b  border-gray-900/85">
                      <th
                        scope="row"
                        className="flex font-xs gap-2 py-3 px-2 text-xs text-gray-300 "
                      >
                        <img src={catalogueImg} alt="" width={15} height={15} />{" "}
                        LanePlus
                      </th>
                      <td className="py-3 px-2 ">ranjigeto@gmail.com</td>
                      <td className=" py-3 px-2">
                        <div className="gap-1 items-center w-[90px] justify-start px-2  py-1 text-xs flex text-green-500  border-green-100 rounded-xl bg-green-100">
                            <img src={ellipesImg} alt="" width={5} />
                            <span>Successful</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">$10</td>
                      <td className="py-3 px-2">30/08/2025</td>
                    </tr>
                    <tr className="bg-white border-b  border-gray-900/85">
                      <th
                        scope="row"
                        className="flex font-xs gap-2 py-3 px-2 text-xs text-gray-300 "
                      >
                        <img src={catalogueImg} alt="" width={15} height={15} />{" "}
                        LanePlus
                      </th>
                      <td className="py-3 px-2 ">ranjigeto@gmail.com</td>
                      <td className=" py-3 px-2">
                        <div className="gap-1 items-center w-[90px] justify-start px-2  py-1 text-xs flex text-green-500  border-green-100 rounded-xl bg-green-100">
                            <img src={ellipesImg} alt="" width={5} />
                            <span>Successful</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">$10</td>
                      <td className="py-3 px-2">30/08/2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayment;
