import { useState } from "react";

//icons

import { RiMenu2Line } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { LuTable2 } from "react-icons/lu";
import { FcLineChart } from "react-icons/fc";
import { BiCoinStack } from "react-icons/bi";
import { PiCards } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineTextsms } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { PiRadioButtonBold } from "react-icons/pi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoBell } from "react-icons/go";

// line area chart
import ApexChart from "./components/ApexChart";
import ApexCharts from "./components/RadialBar";

// chart icons
import { MdPeopleOutline } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { RxCounterClockwiseClock } from "react-icons/rx";
import PieChart from "./components/PieChart";
import PieChart2 from "./components/PieChart2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-20 bg-[#E5E8ED] w-full min-h-screen flex items-center justify-center">
      <div className="rounded-xl w-[100%] bg-white flex">
        {/* left menu */}
        <div className=" w-24 h-full bg-white rounded-l-xl flex flex-col items-center py-3 left-0 top-0 bottom-0">
          <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg flex items-center justify-center text-[#52459F] text-[30px] font-medium">
            <RiMenu2Line />
          </div>
          <div className=" flex items-center flex-col justify-evenly h-full">
            <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg hover:bg-[#563BFF] flex items-center justify-center hover:text-white text-[20px] sm:text-[10px] md:text-[16px] lg:text-20px font-bold text-[#D3D4DD]">
              <IoHomeOutline className="hover:bg-slate-300  hover:font-bold" />
            </div>
            <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg hover:bg-[#563BFF] flex items-center justify-center hover:text-white text-[20px] sm:text-[10px] md:text-[16px] lg:text-20px font-bold text-[#D3D4DD]">
              <LuTable2 className="hover:bg-slate-300  hover:font-bold" />
            </div>
            <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg hover:bg-[#563BFF] flex items-center justify-center hover:text-white text-[20px] sm:text-[10px] md:text-[16px] lg:text-20px font-bold text-[#D3D4DD]">
              <FcLineChart className="hover:bg-slate-300  hover:font-bold" />
            </div>
            <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg hover:bg-[#563BFF] flex items-center justify-center hover:text-white text-[20px] sm:text-[10px] md:text-[16px] lg:text-20px font-bold text-[#D3D4DD]">
              <BiCoinStack className="hover:bg-slate-300  hover:font-bold" />
            </div>
            <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg hover:bg-[#563BFF] flex items-center justify-center hover:text-white text-[20px] sm:text-[10px] md:text-[16px] lg:text-20px font-bold text-[#D3D4DD]">
              <PiCards className="hover:bg-slate-300  hover:font-bold" />
            </div>
            <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg hover:bg-[#563BFF] flex items-center justify-center hover:text-white text-[20px] sm:text-[10px] md:text-[16px] lg:text-20px font-bold text-[#D3D4DD]">
              <MdOutlineEmail className="hover:bg-slate-300  hover:font-bold" />
            </div>
            <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg hover:bg-[#563BFF] flex items-center justify-center hover:text-white text-[20px] sm:text-[10px] md:text-[16px] lg:text-20px font-bold text-[#D3D4DD]">
              <MdOutlineTextsms className="hover:bg-slate-300  hover:font-bold" />
            </div>
            <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg hover:bg-[#563BFF] flex items-center justify-center hover:text-white text-[20px] sm:text-[10px] md:text-[16px] lg:text-20px font-bold text-[#D3D4DD]">
              <LuShoppingCart className="hover:bg-slate-300  hover:font-bold" />
            </div>
            {/* <span></span> */}
            <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg hover:bg-[#563BFF] flex items-center justify-center hover:text-white text-[20px] sm:text-[10px] md:text-[16px] lg:text-20px font-bold text-[#D3D4DD]">
              <PiRadioButtonBold className="hover:bg-slate-300  hover:font-bold" />
            </div>
            <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg hover:bg-[#563BFF] flex items-center justify-center hover:text-white text-[20px] sm:text-[10px] md:text-[16px] lg:text-20px font-bold text-[#D3D4DD]">
              <MdOutlineCalendarToday className="hover:bg-slate-300  hover:font-bold" />
            </div>
          </div>
        </div>

        {/* right chart */}

        <div className="bg-[#F7F8FC] w-[100%] rounded-r-xl p-10">
          {/* Navbar input avatar email signal */}

          <nav className="flex items-center justify-between pb-4">
            {/* input  */}

            <div className="flex items-center p-2 bg-white w-[30%] rounded-lg gap-3">
              <span className="text-[20px]">
                <IoSearch />
              </span>
              <input
                type="text"
                placeholder="Search Anything"
                className="p-1 w-[80%] outline-none"
              />
            </div>
            <div className="flex items-center justify-center gap-5 text-[24px]">
              <div>
                <MdOutlineMailOutline />
              </div>
              <div className="flex">
                <GoBell />
                <div className="w-3 rounded-lg h-3 text-[10px] text-white bg-blue-700 flex items-center justify-center">
                  5
                </div>
              </div>
              <div>
                <img
                  src="../public/rasm.jpg"
                  alt="logo"
                  className="w-9 h-9 rounded-[50%]"
                />
              </div>
            </div>
          </nav>
          <div className=" gap-5 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid xl:flex">
            {/* left chart area-line  */}

            <div className="w-[60%] space-y-5">
              {/* title */}

              <div className="flex items-center justify-between">
                <h1 className="text-[25px] text-[#14144B] font-bold">
                  Performance
                </h1>
                <p className="text-[18px] text-[#6C6A8F] font-medium">Year</p>
              </div>
              <div className="bg-white w-full rounded-xl p-4">
                <div>
                  <ApexChart />
                </div>
              </div>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-4  2xl:grid-cols-4 gap-8">
                <div className=" bg-white w-[140px] h-[200px] flex-col flex justify-around pl-5 rounded-xl">
                  <div className="w-[50px] h-[50px] rounded-lg bg-[#EBF2FF] text-[#3575FF] flex items-center justify-center">
                    <MdPeopleOutline />
                  </div>
                  <div>
                    <h2 className="font-bold text-[14px] text-[#82819F]">
                      Users
                    </h2>
                    <h1 className=" text-[24px] text-[#141248] font-semibold">
                      72.6k
                    </h1>
                    <p className=" font-medium text-[16px] text-[#5A5880]">
                      +25%
                    </p>
                  </div>
                </div>
                <div className=" bg-white w-[140px] h-[200px] flex-col flex justify-around pl-5 rounded-xl">
                  <div className="w-[50px] h-[50px] rounded-lg bg-[#FEF0ED] text-[#F36643] flex items-center justify-center">
                    <LuCalendarClock />
                  </div>
                  <div>
                    <h2 className="font-bold text-[14px] text-[#82819F]">
                      Sessions
                    </h2>
                    <h1 className=" text-[24px] text-[#141248] font-semibold">
                      87.2k
                    </h1>
                    <p className=" font-medium text-[16px] text-[#5A5880]">
                      +47%
                    </p>
                  </div>
                </div>
                <div className=" bg-white w-[140px] h-[200px] flex-col flex justify-around pl-5 rounded-xl">
                  <div className="w-[50px] h-[50px] rounded-lg bg-[#EDEAFF] flex items-center justify-center">
                    <img src="../public/Vector.svg" alt="logo" />
                  </div>
                  <div>
                    <h2 className="font-bold text-[14px] text-[#82819F]">
                      Bounce Rate
                    </h2>
                    <h1 className=" text-[24px] text-[#141248] font-semibold">
                      26.3%
                    </h1>
                    <p className=" font-medium text-[16px] text-[#5A5880]">
                      -28%
                    </p>
                  </div>
                </div>
                <div className=" bg-white w-[140px] h-[200px] flex-col flex justify-around pl-5 rounded-xl">
                  <div className="w-[50px] h-[50px] rounded-lg bg-[#EAFBF6] text-[#24D6A5] flex items-center justify-center">
                    <RxCounterClockwiseClock />
                  </div>
                  <div>
                    <h2 className="font-bold text-[14px] text-[#82819F]">
                      Session Duration
                    </h2>
                    <h1 className=" text-[24px] text-[#141248] font-semibold">
                      2m 18s
                    </h1>
                    <p className=" font-medium text-[16px] text-[#5A5880]">
                      +13%
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-[25px] text-[#14144B] font-bold">
                  Daily Overview
                </h1>
                <button className="text-[16px] rounded-xl text-[#353361] font-bold w-[132px] bg-white h-[42px]">
                  Export
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-evenly bg-white rounded-xl max-w-[340px] h-[140px] p-2">
                  <div>
                    <h1 className="text-[#15134B] font-bold text-[25px]">
                      5,461
                    </h1>
                    <p className="text-[#5A5881] font-bold text-[15px]">
                      Today
                    </p>
                  </div>
                  <div className="w-[160px]">
                    <PieChart />
                  </div>
                  <div>
                    <h1 className="text-[#15134B] font-bold text-[25px]">
                      8,085
                    </h1>
                    <p className="text-[#5A5881] font-bold text-[15px]">
                      Expected
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-evenly bg-white rounded-xl max-w-[340px] h-[140px] p-2">
                  <div>
                    <h1 className="text-[#15134B] font-bold text-[25px]">
                      140
                    </h1>
                    <p className="text-[#5A5881] font-bold text-[15px]">
                      Today
                    </p>
                  </div>
                  <div className="w-[160px]">
                    <PieChart2 />
                  </div>
                  <div>
                    <h1 className="text-[#15134B] font-bold text-[25px]">
                      120
                    </h1>
                    <p className="text-[#5A5881] font-bold text-[15px]">
                      Expected
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right bar chart */}

            <div className="space-y-5 w-[45%]">
              {/* title */}

              <div className="flex items-center justify-between">
                <h1 className="text-[25px] text-[#14144B] font-bold">
                  Sessions By Device
                </h1>
                <p className="text-[18px] text-[#6C6A8F] font-medium">Year</p>
              </div>
              <div className="bg-white rounded-xl py-8 flex items-center w-full">
                <div className="w-[70%]">
                  <ApexCharts />
                </div>
                <div className="w-[30%]">
                  <div>
                    <h1 className="font-bold text-[#626087]">Desktop</h1>
                    <h2 className="font-bold text-[#27265A]">
                      8,085{" "}
                      <span className="text-[14px] text-[#626087] font-medium">
                        13%
                      </span>
                    </h2>
                  </div>
                  <div>
                    <h1 className="font-bold text-[#626087]">Mobile</h1>
                    <h2 className="font-bold text-[#27265A]">
                      8,085{" "}
                      <span className="text-[14px] text-[#626087] font-medium">
                        30%
                      </span>
                    </h2>
                  </div>
                  <div>
                    <h1 className="font-bold text-[#626087]">Tablets</h1>
                    <h2 className="font-bold text-[#27265A]">
                      8,085{" "}
                      <span className="text-[14px] text-[#626087] font-medium">
                        25%
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
