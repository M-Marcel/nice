import React from "react";
import vectorImg from "../assets/Vector.png";

const DisplayCv = () => {
  return (
    <div className="relative top-[50px]  ">
      <div className="portfolio-bg items-center justify-center px-12 ">
        <div className="flex flex-col text-left  ">
          <h2 className="text-3xl text-blck-990 font-semibold  ">John Stone</h2>
          <p className="text-xs text-gray-810 py-3 ">
            Front-End Developer - <span>UI/UX Designer</span>{" "}
          </p>
        </div>
        <div className="flex justify-between items-center w-[100%]">
          <div className="flex gap-2  ">
            <a
              href="/"
              className="flex items-center justify-center bg-white rounded-3xl border border-gray-600 px-2 py-1"
            >
              <span className="">
                <img src={vectorImg} alt="" width={12} height={15} />
              </span>
              <span className="text-xs ps-1">emji.dev</span>
            </a>

            <a
              href="/"
              className="flex items-center justify-center bg-white rounded-3xl border border-gray-600 px-2 py-1"
            >
              <span className="">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14475_20965)">
                    <path
                      d="M6.81567 6.81733H5.631V4.961C5.631 4.51833 5.622 3.94867 5.01367 3.94867C4.396 3.94867 4.30167 4.43033 4.30167 4.92833V6.81733H3.117V3H4.255V3.52033H4.27033C4.42933 3.22033 4.816 2.90367 5.39367 2.90367C6.594 2.90367 6.816 3.69367 6.816 4.722V6.81733H6.81567ZM1.779 2.47767C1.39767 2.47767 1.09133 2.169 1.09133 1.78933C1.09133 1.41 1.398 1.10167 1.779 1.10167C2.159 1.10167 2.467 1.41 2.467 1.78933C2.467 2.169 2.15867 2.47767 1.779 2.47767ZM2.373 6.81733H1.185V3H2.373V6.81733ZM7.40833 0H0.590333C0.264 0 0 0.258 0 0.576333V7.42367C0 7.74233 0.264 8 0.590333 8H7.40733C7.73333 8 8 7.74233 8 7.42367V0.576333C8 0.258 7.73333 0 7.40733 0H7.40833Z"
                      fill="#0B0B0B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14475_20965">
                      <rect width="8" height="8" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-xs ps-1">/emjidev</span>
            </a>

            <a
              href="/"
              className="flex items-center justify-center bg-white rounded-3xl border border-gray-600 px-2 py-1"
            >
              <span className="">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.28375 2.99367H3.75442V0H5.28375C6.10908 0 6.78042 0.671333 6.78042 1.49667C6.78042 2.322 6.10908 2.99367 5.28375 2.99367ZM4.24475 2.50333H5.28375C5.83875 2.50333 6.29008 2.05167 6.29008 1.497C6.29008 0.942333 5.83842 0.490667 5.28375 0.490667H4.24475V2.50333ZM4.24475 2.99367H2.71575C1.89042 2.99367 1.21908 2.32233 1.21908 1.497C1.21908 0.671667 1.89042 0 2.71575 0H4.24508V2.99367H4.24475ZM2.71575 0.490333C2.16075 0.490333 1.70942 0.942 1.70942 1.49667C1.70942 2.05133 2.16075 2.50333 2.71575 2.50333H3.75475V0.490333H2.71575ZM4.24475 5.49667H2.71575C1.89042 5.49667 1.21908 4.82533 1.21908 4C1.21908 3.17467 1.89042 2.50333 2.71575 2.50333H4.24508V5.49667H4.24475ZM2.71575 2.99367C2.16075 2.99367 1.70942 3.44533 1.70942 4C1.70942 4.55467 2.16108 5.00633 2.71575 5.00633H3.75475V2.99367H2.71575ZM2.72375 8C1.89408 8 1.21875 7.32867 1.21875 6.50333C1.21875 5.678 1.89008 5.00667 2.71542 5.00667H4.24475V6.487C4.24475 7.32133 3.56242 8 2.72375 8ZM2.71575 5.49667C2.44896 5.49702 2.1932 5.60316 2.00455 5.7918C1.81591 5.98045 1.70977 6.23621 1.70942 6.503C1.70942 7.058 2.16442 7.50933 2.72408 7.50933C3.29242 7.50933 3.75508 7.05067 3.75508 6.48667V5.49667H2.71575ZM5.28375 5.49667H5.25108C4.42575 5.49667 3.75442 4.82533 3.75442 4C3.75442 3.17467 4.42575 2.50333 5.25108 2.50333H5.28375C6.10908 2.50333 6.78042 3.17467 6.78042 4C6.78042 4.82533 6.10908 5.49667 5.28375 5.49667ZM5.25142 2.99367C4.69642 2.99367 4.24508 3.44533 4.24508 4C4.24508 4.55467 4.69675 5.00633 5.25142 5.00633H5.28408C5.83908 5.00633 6.29042 4.55467 6.29042 4C6.29042 3.44533 5.83875 2.99367 5.28408 2.99367H5.25142Z"
                    fill="#0B0B0B"
                  />
                </svg>
              </span>
              <span className="text-xs ps-1">/emjidev</span>
            </a>

            <a
              href="/"
              className="flex items-center justify-center bg-white rounded-3xl border border-gray-600 px-2 py-1"
            >
              <span className="">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14475_20806)">
                    <path
                      d="M4 0.0986328C1.79 0.0986328 0 1.88963 0 4.09863C0 5.8663 1.146 7.3653 2.735 7.89363C2.935 7.9313 3.00833 7.80763 3.00833 7.7013C3.00833 7.6063 3.005 7.35463 3.00333 7.0213C1.89067 7.26263 1.656 6.48463 1.656 6.48463C1.474 6.02297 1.211 5.89963 1.211 5.89963C0.848667 5.65163 1.239 5.65663 1.239 5.65663C1.64067 5.68463 1.85167 6.06863 1.85167 6.06863C2.20833 6.6803 2.788 6.50363 3.01667 6.4013C3.05267 6.14263 3.15567 5.9663 3.27 5.8663C2.38167 5.7663 1.448 5.4223 1.448 3.88963C1.448 3.45297 1.603 3.0963 1.85967 2.8163C1.81467 2.7153 1.67967 2.30863 1.89467 1.75763C1.89467 1.75763 2.22967 1.6503 2.99467 2.16763C3.31467 2.07863 3.65467 2.03463 3.99467 2.03263C4.33467 2.03463 4.67467 2.07863 4.99467 2.16763C5.75467 1.6503 6.08967 1.75763 6.08967 1.75763C6.30467 2.30863 6.16967 2.7153 6.12967 2.8163C6.38467 3.0963 6.53967 3.45297 6.53967 3.88963C6.53967 5.4263 5.60467 5.76463 4.71467 5.86297C4.85467 5.98297 4.98467 6.2283 4.98467 6.60297C4.98467 7.1383 4.97967 7.5683 4.97967 7.6983C4.97967 7.8033 5.04967 7.9283 5.25467 7.8883C6.855 7.36363 8 5.86363 8 4.09863C8 1.88963 6.209 0.0986328 4 0.0986328Z"
                      fill="#222222"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14475_20806">
                      <rect width="8" height="8" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-xs ps-1">/emjidev</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 ">
            <a href="/" className="flex items-center justify-center">
              <span>
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 6 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.98875 7.47158L2.98999 7.472C3.0711 7.5074 3.11639 7.49917 3.11639 7.49917C3.11639 7.49917 3.16167 7.5074 3.24319 7.472L3.24402 7.47158L3.24649 7.47035L3.2539 7.46706C3.29298 7.4489 3.33156 7.42968 3.36959 7.40942C3.44617 7.36989 3.55322 7.3106 3.68126 7.23114C3.93652 7.07304 4.27619 6.83343 4.6175 6.50446C5.2993 5.84737 5.9984 4.82013 5.9984 3.38201C5.9984 3.00354 5.92385 2.62877 5.77902 2.27911C5.63418 1.92945 5.42189 1.61174 5.15427 1.34412C4.88666 1.0765 4.56895 0.864215 4.21928 0.71938C3.86962 0.574545 3.49486 0.5 3.11639 0.5C2.73791 0.5 2.36315 0.574545 2.01349 0.71938C1.66383 0.864215 1.34612 1.0765 1.0785 1.34412C0.810877 1.61174 0.59859 1.92945 0.453755 2.27911C0.30892 2.62877 0.234375 3.00354 0.234375 3.38201C0.234375 4.81972 0.933469 5.84737 1.61568 6.50446C1.90131 6.7788 2.21498 7.02237 2.55151 7.23114C2.68186 7.31208 2.81595 7.38682 2.95335 7.45512L2.97887 7.46706L2.98628 7.47035L2.98875 7.47158ZM3.11639 4.30837C3.36207 4.30837 3.5977 4.21077 3.77142 4.03705C3.94515 3.86332 4.04275 3.6277 4.04275 3.38201C4.04275 3.13632 3.94515 2.9007 3.77142 2.72698C3.5977 2.55325 3.36207 2.45565 3.11639 2.45565C2.8707 2.45565 2.63508 2.55325 2.46135 2.72698C2.28762 2.9007 2.19003 3.13632 2.19003 3.38201C2.19003 3.6277 2.28762 3.86332 2.46135 4.03705C2.63508 4.21077 2.8707 4.30837 3.11639 4.30837Z"
                    fill="#334155"
                  />
                </svg>
              </span>
              <span className="text-xs ps-1">Bandung</span>
            </a>
            <a href="/" className="flex items-center justify-center">
              <span>
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 7 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.777778 0.166992C0.571498 0.166992 0.373667 0.248936 0.227806 0.394798C0.0819442 0.54066 0 0.738491 0 0.94477V1.39627L3.28261 3.03777C3.35011 3.07152 3.42454 3.08909 3.5 3.08909C3.57546 3.08909 3.64989 3.07152 3.71739 3.03777L7 1.39666V0.94477C7 0.738491 6.91806 0.54066 6.77219 0.394798C6.62633 0.248936 6.4285 0.166992 6.22222 0.166992H0.777778Z"
                    fill="#334155"
                  />
                  <path
                    d="M7 2.04883L3.97833 3.55966C3.82982 3.63393 3.66605 3.6726 3.5 3.6726C3.33395 3.6726 3.17018 3.63393 3.02167 3.55966L0 2.04883V4.05588C0 4.26216 0.0819442 4.45999 0.227806 4.60586C0.373667 4.75172 0.571498 4.83366 0.777778 4.83366H6.22222C6.4285 4.83366 6.62633 4.75172 6.77219 4.60586C6.91806 4.45999 7 4.26216 7 4.05588V2.04883Z"
                    fill="#334155"
                  />
                </svg>
              </span>
              <span className="text-xs ps-1">me@enji.dev</span>
            </a>
          </div>
        </div>
        <div className=" mt-12 w-[100%]">
          <div className="flex w-[92%]  justify-between items-start border-b border-gray-830">
                <h2 className="text-lg w-[10%] text-gray-820">About</h2>
                <p className="text-sm w-[48%] leading-7 text-gray-820 pb-6 ">
                Graphic designer with +8 years of experience in branding and print
                design. Skilled at Adobe Creative Suite (Photoshop, Illustrator)
                as well as sketching and hand drawing. Supervised 23 print design
                projects that resulted in an increase of 32% in savings.
                </p>
                <div className=""></div>
          </div>

          <div className="flex w-[92%] py-6 justify-between items-start ">
                <div className="w-[10%]">
                <h2 className="text-lg w-[10%] text-gray-820">Experience</h2>
                </div>

                <div className="flex justify-center  w-[72%]">

                <div className="flex flex-col items-baseline ms-32  ">
                        <h3 className=" text-sm text-center text-gray-820 pb-4 ">
                        <span className="font-medium ">Lanepact </span>
                        <span className="ps-2">— Front-End Developer </span>
                        </h3>
                        

                        <ul className="ps-3">
                        <li className="flex items-center w-[100%] justify-center text-sm text-gray-820 pb-3 ">
                            <span>
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 6 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                x="0.0664062"
                                y="2.5"
                                width="5"
                                height="5"
                                rx="1.5"
                                fill="#CBD5E1"
                                />
                            </svg>
                            </span>
                            <span className="ps-1 text-center">
                            Improving the UI & UX of Femicam's desktop application
                            based on React
                            </span>
                        </li>
                        <li className="flex items-center w-[100%] justify-center text-sm text-gray-820 ">
                            <span>
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 6 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                x="0.0664062"
                                y="2.5"
                                width="5"
                                height="5"
                                rx="1.5"
                                fill="#CBD5E1"
                                />
                            </svg>
                            </span>
                            <span className="ps-1 text-center">
                            Improving the UI & UX of Femicam's desktop application
                            based on React
                            </span>
                        </li>
                        </ul>
                </div>
                </div>

                <div className="flex items-center justify-center w-[15%]  ">
                <span>
                    <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M2.8125 1.25V2.1875M7.1875 1.25V2.1875M1.25 7.8125V3.125C1.25 2.87636 1.34877 2.6379 1.52459 2.46209C1.7004 2.28627 1.93886 2.1875 2.1875 2.1875H7.8125C8.06114 2.1875 8.2996 2.28627 8.47541 2.46209C8.65123 2.6379 8.75 2.87636 8.75 3.125V7.8125M1.25 7.8125C1.25 8.06114 1.34877 8.2996 1.52459 8.47541C1.7004 8.65123 1.93886 8.75 2.1875 8.75H7.8125C8.06114 8.75 8.2996 8.65123 8.47541 8.47541C8.65123 8.2996 8.75 8.06114 8.75 7.8125M1.25 7.8125V4.6875C1.25 4.43886 1.34877 4.2004 1.52459 4.02459C1.7004 3.84877 1.93886 3.75 2.1875 3.75H7.8125C8.06114 3.75 8.2996 3.84877 8.47541 4.02459C8.65123 4.2004 8.75 4.43886 8.75 4.6875V7.8125M5 5.3125H5.00333V5.31583H5V5.3125ZM5 6.25H5.00333V6.25333H5V6.25ZM5 7.1875H5.00333V7.19083H5V7.1875ZM4.0625 6.25H4.06583V6.25333H4.0625V6.25ZM4.0625 7.1875H4.06583V7.19083H4.0625V7.1875ZM3.125 6.25H3.12833V6.25333H3.125V6.25ZM3.125 7.1875H3.12833V7.19083H3.125V7.1875ZM5.9375 5.3125H5.94083V5.31583H5.9375V5.3125ZM5.9375 6.25H5.94083V6.25333H5.9375V6.25ZM5.9375 7.1875H5.94083V7.19083H5.9375V7.1875ZM6.875 5.3125H6.87833V5.31583H6.875V5.3125ZM6.875 6.25H6.87833V6.25333H6.875V6.25Z"
                        stroke="#64748B"
                        stroke-width="0.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    </svg>
                </span>
                <span className="text-xs ps-1 text-gray-820 font-md ">
                    Mar 2022 - present
                </span>
                </div>
          </div>

          <div className="flex w-[92%] py-6 justify-between items-start ">
            <div className="w-[10%]"></div>

            <div className="flex justify-center  w-[70%]">

              <div className="flex flex-col items-baseline ms-20 ">
                <h3 className=" text-sm text-center text-gray-820 pb-4 ">
                  <span className="font-medium ">Femicam 1928.id </span>
                  <span className="ps-2">— Front-End Developer </span>
                </h3>

                <ul className="ps-3">
                  <li className="flex items-center w-[100%] justify-center text-sm text-gray-820 pb-3 ">
                    <span>
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.0664062"
                          y="2.5"
                          width="5"
                          height="5"
                          rx="1.5"
                          fill="#CBD5E1"
                        />
                      </svg>
                    </span>
                    <span className="ps-1 text-center">
                      Improving the UI & UX of Femicam's desktop application
                      based on React
                    </span>
                  </li>
                  <li className="flex items-center w-[100%] justify-center text-sm text-gray-820 ">
                    <span>
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.0664062"
                          y="2.5"
                          width="5"
                          height="5"
                          rx="1.5"
                          fill="#CBD5E1"
                        />
                      </svg>
                    </span>
                    <span className="ps-1 text-center">
                      Improving the UI & UX of Femicam's desktop application
                      based on React
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center  ">
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.8125 1.25V2.1875M7.1875 1.25V2.1875M1.25 7.8125V3.125C1.25 2.87636 1.34877 2.6379 1.52459 2.46209C1.7004 2.28627 1.93886 2.1875 2.1875 2.1875H7.8125C8.06114 2.1875 8.2996 2.28627 8.47541 2.46209C8.65123 2.6379 8.75 2.87636 8.75 3.125V7.8125M1.25 7.8125C1.25 8.06114 1.34877 8.2996 1.52459 8.47541C1.7004 8.65123 1.93886 8.75 2.1875 8.75H7.8125C8.06114 8.75 8.2996 8.65123 8.47541 8.47541C8.65123 8.2996 8.75 8.06114 8.75 7.8125M1.25 7.8125V4.6875C1.25 4.43886 1.34877 4.2004 1.52459 4.02459C1.7004 3.84877 1.93886 3.75 2.1875 3.75H7.8125C8.06114 3.75 8.2996 3.84877 8.47541 4.02459C8.65123 4.2004 8.75 4.43886 8.75 4.6875V7.8125M5 5.3125H5.00333V5.31583H5V5.3125ZM5 6.25H5.00333V6.25333H5V6.25ZM5 7.1875H5.00333V7.19083H5V7.1875ZM4.0625 6.25H4.06583V6.25333H4.0625V6.25ZM4.0625 7.1875H4.06583V7.19083H4.0625V7.1875ZM3.125 6.25H3.12833V6.25333H3.125V6.25ZM3.125 7.1875H3.12833V7.19083H3.125V7.1875ZM5.9375 5.3125H5.94083V5.31583H5.9375V5.3125ZM5.9375 6.25H5.94083V6.25333H5.9375V6.25ZM5.9375 7.1875H5.94083V7.19083H5.9375V7.1875ZM6.875 5.3125H6.87833V5.31583H6.875V5.3125ZM6.875 6.25H6.87833V6.25333H6.875V6.25Z"
                    stroke="#64748B"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs ps-1 text-gray-820 font-med ">
                Mar 2022 - present
              </span>
            </div>
          </div>

          <div className="flex w-[92%] py-6 justify-between items-start border-b border-gray-830 ">
            <div className="w-[10%]"></div>

            <div className="flex justify-center  w-[70%]">
              <div className="flex flex-col items-baseline ms-20 ">
                <h3 className=" text-sm text-center text-gray-820 pb-4 ">
                  <span className="font-medium ">Femicam 1928.id </span>
                  <span className="ps-2">— Front-End Developer </span>
                </h3>

                <ul className="ps-3">
                  <li className="flex items-center w-[100%] justify-center text-sm text-gray-820 pb-3 ">
                    <span>
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.0664062"
                          y="2.5"
                          width="5"
                          height="5"
                          rx="1.5"
                          fill="#CBD5E1"
                        />
                      </svg>
                    </span>
                    <span className="ps-1 text-center">
                      Improving the UI & UX of Femicam's desktop application
                      based on React
                    </span>
                  </li>
                  <li className="flex items-center w-[100%] justify-center text-sm text-gray-820 ">
                    <span>
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.0664062"
                          y="2.5"
                          width="5"
                          height="5"
                          rx="1.5"
                          fill="#CBD5E1"
                        />
                      </svg>
                    </span>
                    <span className="ps-1 text-center">
                      Improving the UI & UX of Femicam's desktop application
                      based on React
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center  ">
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.8125 1.25V2.1875M7.1875 1.25V2.1875M1.25 7.8125V3.125C1.25 2.87636 1.34877 2.6379 1.52459 2.46209C1.7004 2.28627 1.93886 2.1875 2.1875 2.1875H7.8125C8.06114 2.1875 8.2996 2.28627 8.47541 2.46209C8.65123 2.6379 8.75 2.87636 8.75 3.125V7.8125M1.25 7.8125C1.25 8.06114 1.34877 8.2996 1.52459 8.47541C1.7004 8.65123 1.93886 8.75 2.1875 8.75H7.8125C8.06114 8.75 8.2996 8.65123 8.47541 8.47541C8.65123 8.2996 8.75 8.06114 8.75 7.8125M1.25 7.8125V4.6875C1.25 4.43886 1.34877 4.2004 1.52459 4.02459C1.7004 3.84877 1.93886 3.75 2.1875 3.75H7.8125C8.06114 3.75 8.2996 3.84877 8.47541 4.02459C8.65123 4.2004 8.75 4.43886 8.75 4.6875V7.8125M5 5.3125H5.00333V5.31583H5V5.3125ZM5 6.25H5.00333V6.25333H5V6.25ZM5 7.1875H5.00333V7.19083H5V7.1875ZM4.0625 6.25H4.06583V6.25333H4.0625V6.25ZM4.0625 7.1875H4.06583V7.19083H4.0625V7.1875ZM3.125 6.25H3.12833V6.25333H3.125V6.25ZM3.125 7.1875H3.12833V7.19083H3.125V7.1875ZM5.9375 5.3125H5.94083V5.31583H5.9375V5.3125ZM5.9375 6.25H5.94083V6.25333H5.9375V6.25ZM5.9375 7.1875H5.94083V7.19083H5.9375V7.1875ZM6.875 5.3125H6.87833V5.31583H6.875V5.3125ZM6.875 6.25H6.87833V6.25333H6.875V6.25Z"
                    stroke="#64748B"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs ps-1 text-gray-820 font-med ">
                Mar 2022 - present
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] py-6 justify-between items-start  ">
          <div className="w-[10%]">
            <h2 className="text-lg w-[10%] text-gray-820">Education</h2>
          </div>

          <div className="flex justify-center  w-[58%]">
            <div className="flex flex-col items-baseline  ">
              <h3 className=" text-sm text-center text-gray-820 pb-4 ">
                <span className="font-medium ">STMIK Indonesia Mandiri </span>
                <span className="ps-2">— Teknik Informatika (S1) </span>
              </h3>
              <h3 className=" text-sm text-center text-gray-820 pb-4 ">
                <span className="font-medium ">STMIK Indonesia Mandiri </span>
                <span className="ps-2">— Teknik Informatika (S1) </span>
              </h3>
            </div>
          </div>

          <div className="flex flex-col w-[15%] ">
            <div className="flex items-center justify-center pb-4 ">
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.8125 1.25V2.1875M7.1875 1.25V2.1875M1.25 7.8125V3.125C1.25 2.87636 1.34877 2.6379 1.52459 2.46209C1.7004 2.28627 1.93886 2.1875 2.1875 2.1875H7.8125C8.06114 2.1875 8.2996 2.28627 8.47541 2.46209C8.65123 2.6379 8.75 2.87636 8.75 3.125V7.8125M1.25 7.8125C1.25 8.06114 1.34877 8.2996 1.52459 8.47541C1.7004 8.65123 1.93886 8.75 2.1875 8.75H7.8125C8.06114 8.75 8.2996 8.65123 8.47541 8.47541C8.65123 8.2996 8.75 8.06114 8.75 7.8125M1.25 7.8125V4.6875C1.25 4.43886 1.34877 4.2004 1.52459 4.02459C1.7004 3.84877 1.93886 3.75 2.1875 3.75H7.8125C8.06114 3.75 8.2996 3.84877 8.47541 4.02459C8.65123 4.2004 8.75 4.43886 8.75 4.6875V7.8125M5 5.3125H5.00333V5.31583H5V5.3125ZM5 6.25H5.00333V6.25333H5V6.25ZM5 7.1875H5.00333V7.19083H5V7.1875ZM4.0625 6.25H4.06583V6.25333H4.0625V6.25ZM4.0625 7.1875H4.06583V7.19083H4.0625V7.1875ZM3.125 6.25H3.12833V6.25333H3.125V6.25ZM3.125 7.1875H3.12833V7.19083H3.125V7.1875ZM5.9375 5.3125H5.94083V5.31583H5.9375V5.3125ZM5.9375 6.25H5.94083V6.25333H5.9375V6.25ZM5.9375 7.1875H5.94083V7.19083H5.9375V7.1875ZM6.875 5.3125H6.87833V5.31583H6.875V5.3125ZM6.875 6.25H6.87833V6.25333H6.875V6.25Z"
                    stroke="#64748B"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs ps-1 text-gray-820 font-md ">
                Oct 2018 - present
              </span>
            </div>

            <div className="flex items-center justify-center  ">
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.8125 1.25V2.1875M7.1875 1.25V2.1875M1.25 7.8125V3.125C1.25 2.87636 1.34877 2.6379 1.52459 2.46209C1.7004 2.28627 1.93886 2.1875 2.1875 2.1875H7.8125C8.06114 2.1875 8.2996 2.28627 8.47541 2.46209C8.65123 2.6379 8.75 2.87636 8.75 3.125V7.8125M1.25 7.8125C1.25 8.06114 1.34877 8.2996 1.52459 8.47541C1.7004 8.65123 1.93886 8.75 2.1875 8.75H7.8125C8.06114 8.75 8.2996 8.65123 8.47541 8.47541C8.65123 8.2996 8.75 8.06114 8.75 7.8125M1.25 7.8125V4.6875C1.25 4.43886 1.34877 4.2004 1.52459 4.02459C1.7004 3.84877 1.93886 3.75 2.1875 3.75H7.8125C8.06114 3.75 8.2996 3.84877 8.47541 4.02459C8.65123 4.2004 8.75 4.43886 8.75 4.6875V7.8125M5 5.3125H5.00333V5.31583H5V5.3125ZM5 6.25H5.00333V6.25333H5V6.25ZM5 7.1875H5.00333V7.19083H5V7.1875ZM4.0625 6.25H4.06583V6.25333H4.0625V6.25ZM4.0625 7.1875H4.06583V7.19083H4.0625V7.1875ZM3.125 6.25H3.12833V6.25333H3.125V6.25ZM3.125 7.1875H3.12833V7.19083H3.125V7.1875ZM5.9375 5.3125H5.94083V5.31583H5.9375V5.3125ZM5.9375 6.25H5.94083V6.25333H5.9375V6.25ZM5.9375 7.1875H5.94083V7.19083H5.9375V7.1875ZM6.875 5.3125H6.87833V5.31583H6.875V5.3125ZM6.875 6.25H6.87833V6.25333H6.875V6.25Z"
                    stroke="#64748B"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs ps-1 text-gray-820 font-md ">
                Oct 2018 - present
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-[90%] py-6 justify-between items-start border-b border-gray-830 ">
          <div className="w-[10%]">
            <h2 className="text-lg w-[10%] text-gray-820">Certificates</h2>
          </div>

          <div className="flex justify-start  w-[47%]">
            <div className="flex flex-col items-center ms-20 ">
              <h3 className=" text-sm text-center text-gray-820 pb-4 ">
                <span className="font-medium ">Certificate of excellence </span>
                <span className="ps-2">— Jujutsu high </span>
              </h3>
              <h3 className=" text-sm text-center text-gray-820 pb-4 ">
                <span className="font-medium "> Certificate of excellence </span>
                <span className="ps-2">— Jujutsu high </span>
              </h3>
            </div>
          </div>

          <div className="flex flex-col w-[14%]">
            <div className="flex items-center justify-center pb-4 ">
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.8125 1.25V2.1875M7.1875 1.25V2.1875M1.25 7.8125V3.125C1.25 2.87636 1.34877 2.6379 1.52459 2.46209C1.7004 2.28627 1.93886 2.1875 2.1875 2.1875H7.8125C8.06114 2.1875 8.2996 2.28627 8.47541 2.46209C8.65123 2.6379 8.75 2.87636 8.75 3.125V7.8125M1.25 7.8125C1.25 8.06114 1.34877 8.2996 1.52459 8.47541C1.7004 8.65123 1.93886 8.75 2.1875 8.75H7.8125C8.06114 8.75 8.2996 8.65123 8.47541 8.47541C8.65123 8.2996 8.75 8.06114 8.75 7.8125M1.25 7.8125V4.6875C1.25 4.43886 1.34877 4.2004 1.52459 4.02459C1.7004 3.84877 1.93886 3.75 2.1875 3.75H7.8125C8.06114 3.75 8.2996 3.84877 8.47541 4.02459C8.65123 4.2004 8.75 4.43886 8.75 4.6875V7.8125M5 5.3125H5.00333V5.31583H5V5.3125ZM5 6.25H5.00333V6.25333H5V6.25ZM5 7.1875H5.00333V7.19083H5V7.1875ZM4.0625 6.25H4.06583V6.25333H4.0625V6.25ZM4.0625 7.1875H4.06583V7.19083H4.0625V7.1875ZM3.125 6.25H3.12833V6.25333H3.125V6.25ZM3.125 7.1875H3.12833V7.19083H3.125V7.1875ZM5.9375 5.3125H5.94083V5.31583H5.9375V5.3125ZM5.9375 6.25H5.94083V6.25333H5.9375V6.25ZM5.9375 7.1875H5.94083V7.19083H5.9375V7.1875ZM6.875 5.3125H6.87833V5.31583H6.875V5.3125ZM6.875 6.25H6.87833V6.25333H6.875V6.25Z"
                    stroke="#64748B"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs ps-1 text-gray-820 font-md ">
                Oct 2018 - present
              </span>
            </div>

            <div className="flex items-center justify-center  ">
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.8125 1.25V2.1875M7.1875 1.25V2.1875M1.25 7.8125V3.125C1.25 2.87636 1.34877 2.6379 1.52459 2.46209C1.7004 2.28627 1.93886 2.1875 2.1875 2.1875H7.8125C8.06114 2.1875 8.2996 2.28627 8.47541 2.46209C8.65123 2.6379 8.75 2.87636 8.75 3.125V7.8125M1.25 7.8125C1.25 8.06114 1.34877 8.2996 1.52459 8.47541C1.7004 8.65123 1.93886 8.75 2.1875 8.75H7.8125C8.06114 8.75 8.2996 8.65123 8.47541 8.47541C8.65123 8.2996 8.75 8.06114 8.75 7.8125M1.25 7.8125V4.6875C1.25 4.43886 1.34877 4.2004 1.52459 4.02459C1.7004 3.84877 1.93886 3.75 2.1875 3.75H7.8125C8.06114 3.75 8.2996 3.84877 8.47541 4.02459C8.65123 4.2004 8.75 4.43886 8.75 4.6875V7.8125M5 5.3125H5.00333V5.31583H5V5.3125ZM5 6.25H5.00333V6.25333H5V6.25ZM5 7.1875H5.00333V7.19083H5V7.1875ZM4.0625 6.25H4.06583V6.25333H4.0625V6.25ZM4.0625 7.1875H4.06583V7.19083H4.0625V7.1875ZM3.125 6.25H3.12833V6.25333H3.125V6.25ZM3.125 7.1875H3.12833V7.19083H3.125V7.1875ZM5.9375 5.3125H5.94083V5.31583H5.9375V5.3125ZM5.9375 6.25H5.94083V6.25333H5.9375V6.25ZM5.9375 7.1875H5.94083V7.19083H5.9375V7.1875ZM6.875 5.3125H6.87833V5.31583H6.875V5.3125ZM6.875 6.25H6.87833V6.25333H6.875V6.25Z"
                    stroke="#64748B"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs ps-1 text-gray-820 font-md ">
                Oct 2018 - present
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] py-6 justify-between items-start pb-12">
        <div className="w-[10%]">
            <h2 className="text-lg w-[10%] text-gray-820">Skills</h2>
          </div>
          <div className="flex flex-wrap text-sm gap-3 w-[69%] ">
            <span className="border border-gray-900 rounded-xl font-medium px-3 py-3 text-black-990">React</span>
            <span className="border border-gray-900 rounded-xl font-medium px-3 py-3 text-black-990">Next.js</span>
            <span className="border border-gray-900 rounded-xl font-medium px-3 py-3 text-black-990">Framer Motion</span>
            <span className="border border-gray-900 rounded-xl font-medium px-3 py-3 text-black-990">Storybook</span>
            <span className="border border-gray-900 rounded-xl font-medium px-3 py-3 text-black-990">Framework7</span>
            <span className="border border-gray-900 rounded-xl font-medium px-3 py-3 text-black-990">Redux</span>
            <span className="border border-gray-900 rounded-xl font-medium px-3 py-3 text-black-990">Webpack</span>
            <span className="border border-gray-900 rounded-xl font-medium px-3 py-3 text-black-990">Gulp</span>
            <span className="border border-gray-900 rounded-xl font-medium px-3 py-3 text-black-990">Backbone.js</span>
            <span className="border border-gray-900 rounded-xl font-medium px-3 py-3 text-black-990">Marionette.js</span>
            <span className="border border-gray-900 rounded-xl font-medium px-3 py-3 text-black-990">WordPress</span>
          </div>
            </div>
      </div>
    </div>
  );
};

export default DisplayCv;
