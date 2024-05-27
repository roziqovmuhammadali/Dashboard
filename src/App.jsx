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

import Slider from "react-input-slider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 bg-[#E5E8ED] w-full flex items-center justify-center">
      <div className="rounded-xl w-[100%] bg-white flex">
        {/* left menu */}
        <div className=" w-24 h-full bg-white rounded-l-xl flex flex-col items-center py-5 left-0 top-0 bottom-0">
          <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg flex items-between justify-center text-[#52459F] text-[30px] font-medium">
            <RiMenu2Line />
          </div>
          <div className=" flex items-center flex-col justify-between gap-[26px] pt-5 h-full">
            <div className="md:w-12 md:h-8 lg:w-10 lg:h-8 xl:w-12 xl:h-10 2xl:w-14 2xl:h-12 rounded-lg bg-[#563BFF] flex items-center justify-center text-white text-[20px] sm:text-[10px] md:text-[16px] lg:text-20px font-bold ">
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

        <div className="bg-[#F7F8FC] w-[100%] rounded-r-xl p-5">
          {/* Navbar input avatar email signal */}

          <nav className="w-full flex items-center justify-between pb-3">
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
          <div className=" gap-6 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid xl:flex">
            {/* left chart area-line  */}

            <div className="w-[60%] sm:p-3 md:p-3 lg:p-3 space-y-5">
              {/* title */}

              <div className="flex items-center justify-between">
                <h1 className="text-[22px] text-[#14144B] font-bold">
                  Performance
                </h1>
                <p className="text-[17px] text-[#6C6A8F] font-medium">Year</p>
              </div>
              <div className="bg-white w-full rounded-xl p-3">
                <div>
                  <ApexChart />
                </div>
              </div>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-8">
                <div className=" bg-white w-[140px] h-[180px] flex-col flex justify-around pl-5 rounded-xl">
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
                <div className=" bg-white w-[140px] h-[180px] flex-col flex justify-around pl-5 rounded-xl">
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
                <div className=" bg-white w-[140px] h-[180px] flex-col flex justify-around pl-5 rounded-xl">
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
                <div className=" bg-white w-[140px] h-[180px] flex-col flex justify-around pl-5 rounded-xl">
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
                <h1 className="text-[22px] text-[#14144B] font-bold">
                  Daily Overview
                </h1>
                <button className="text-[16px] rounded-xl text-[#353361] font-bold w-[132px] bg-white h-[38px]">
                  Export
                </button>
              </div>
              <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row w-full items-center justify-between">
                <div className="flex items-center justify-evenly bg-white rounded-xl w-[350px] p-2 mb-2">
                  <div>
                    <h1 className="text-[#15134B] font-bold text-[22px]">
                      5,461
                    </h1>
                    <p className="text-[#5A5881] font-bold text-[14px]">
                      Today
                    </p>
                  </div>
                  <div className="w-[160px]">
                    <PieChart />
                  </div>
                  <div>
                    <h1 className="text-[#15134B] font-bold text-[22px]">
                      8,085
                    </h1>
                    <p className="text-[#5A5881] font-bold text-[14px]">
                      Expected
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-evenly bg-white rounded-xl w-[350px] h-[130px] p-2">
                  <div>
                    <h1 className="text-[#15134B] font-bold text-[22px]">
                      140
                    </h1>
                    <p className="text-[#5A5881] font-bold text-[14px]">
                      Today
                    </p>
                  </div>
                  <div className="w-[160px]">
                    <PieChart2 />
                  </div>
                  <div>
                    <h1 className="text-[#15134B] font-bold text-[22px]">
                      120
                    </h1>
                    <p className="text-[#5A5881] font-bold text-[14px]">
                      Expected
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right bar chart */}

            <div className="space-y-[26px] w-[45%]">
              {/* title */}

              <div className="flex items-center justify-between">
                <h1 className="text-[22px] text-[#14144B] font-bold">
                  Sessions By Device
                </h1>
                <p className="text-[16px] text-[#6C6A8F] font-medium">Year</p>
              </div>
              <div className="bg-white rounded-xl py-6 flex items-center w-full">
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
              <div className="bg-white rounded-xl py-3 flex flex-col space-y-4 justify-center w-full px-7">
                <h1 className="text-[21px] text-[#15134B] font-bold">
                  Sessions By Device
                </h1>
                <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row items-center justify-between border-b-2 pb-4">
                  <div className="flex items-center gap-6">
                    <p className="font-bold text-[#15134B]">Channel</p>
                    <p className="font-bold text-[#15134B]">Traffic (%)</p>
                  </div>
                  <p className="font-bold text-[#15134B]">Value</p>
                </div>
                <div className="w-full flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0 xl:space-x-4">
                  <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-12">
                    <p className="font-bold text-[#5A5881]">Direct</p>
                    <div className="w-full xl:w-auto">
                      <Slider
                        x={70}
                        xmax={100}
                        styles={{
                          active: {
                            backgroundColor: "#563BFF",
                            height: 10,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <p className="font-medium text-[#5A5881]">23.28%</p>
                </div>
                <div className="w-full flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0 xl:space-x-4">
                  <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-12">
                    <p className="font-bold text-[#5A5881]">Direct</p>
                    <div className="w-full xl:w-auto">
                      <Slider
                        x={85}
                        xmax={100}
                        styles={{
                          active: {
                            backgroundColor: "#FF815F",
                            height: 10,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <p className="font-medium text-[#5A5881]">23.28%</p>
                </div>
                <div className="w-full flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0 xl:space-x-4">
                  <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-12">
                    <p className="font-bold text-[#5A5881]">Direct</p>
                    <div className="w-full xl:w-auto">
                      <Slider
                        x={50}
                        xmax={100}
                        styles={{
                          active: {
                            backgroundColor: "#1FC695",
                            height: 10,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <p className="font-medium text-[#5A5881]">23.28%</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between px-7 sm:flex-row sm:items-center md:flex-row md:items-center lg:flex-row lg:items-center xl:flex-row 2xl:flex-row bg-white rounded-xl p-4 xl:h-[130px] 2xl:h-[130px]">
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-[20px] font-bold text-[#15134A]">
                    Sessions By Device
                  </h1>
                  <p className="text-[14px] font-medium text-[#A3ABBD]">
                    Top Region & session
                  </p>
                </div>
                <div>
                  <button className="text-white font-bold w-[131px] h-[48px] rounded-xl bg-[#563BFF] text-[16px]">
                    View
                  </button>
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
