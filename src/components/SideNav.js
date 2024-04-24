import React from "react";
import {
  IoSearchOutline,
  IoHelpCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { MdDataset } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { MdHeadset } from "react-icons/md";

const SideNav = () => {
  const renderMobileSideNav = () => {
    return (
      <ul className="w-80vw relative md:hidden px-6 py-4 text-[#65758c]">
        <li className="flex justify-between items-center my-2">
          Search <IoSearchOutline />
        </li>
        <li className="flex justify-between items-center my-2">
          View <RiComputerLine />
        </li>
        <li className="flex justify-between items-center my-2">
          Help <IoHelpCircleOutline />
        </li>
        <li className="flex justify-between items-center my-2">
          Calender <SlCalender />
        </li>
        <li className="flex justify-between items-center my-2">
          Data Centers <MdDataset />
        </li>
        <li className="flex justify-between items-center my-2">
          Finance <AiOutlineDollar />
        </li>
        <li className="flex justify-between items-center my-2">
          Audio <MdHeadset />
        </li>
        <li className="flex justify-between items-center my-2">
          Setting <IoSettingsOutline />
        </li>
      </ul>
    );
  };

  const renderDesktopSideNav = () => {
    return (
      <div className="hidden md:flex flex-col justify-between text-3xl  items-center shadow-2xl p-2 py-4 h-[100vh] w-[80px] text-[#65758c] ">
        <div className="w-[36px] h-[36px] bg-[#1b1661] rounded-full"></div>
        <ul className="flex flex-col justify-center ">
          <li className="my-2 hover:scale-115 cursor-pointer transition-all duration-300 hover:text-[#0f172a]">
            <IoSearchOutline />
          </li>
          <li className="my-2 hover:scale-115 cursor-pointer transition-all duration-300 hover:text-[#0f172a]">
            <RiComputerLine />
          </li>
          <li className="my-2 hover:scale-115 cursor-pointer transition-all duration-300 hover:text-[#0f172a]">
            <IoHelpCircleOutline />
          </li>
          <li className="my-2 hover:scale-115 cursor-pointer transition-all duration-300 hover:text-[#0f172a]">
            <SlCalender />
          </li>
          <li className="my-2 hover:scale-115 cursor-pointer transition-all duration-300 hover:text-[#0f172a]">
            <MdDataset />
          </li>
          <li className="my-2 hover:scale-115 cursor-pointer transition-all duration-300 hover:text-[#0f172a]">
            <AiOutlineDollar />
          </li>
          <li className="my-2 hover:scale-115 cursor-pointer transition-all duration-300 hover:text-[#0f172a]">
            <MdHeadset />
          </li>
        </ul>
        <div className="my-2 hover:scale-115 cursor-pointer transition-all duration-300 hover:text-[#0f172a]">
          <IoSettingsOutline />
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderMobileSideNav()}
      {renderDesktopSideNav()}
    </div>
  );
};

export default SideNav;
