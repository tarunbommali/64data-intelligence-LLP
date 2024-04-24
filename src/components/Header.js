import React from "react";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import useTime from "../hooks/useTime";

const Header = () => {
    const time = useTime();

  return (
    <div className="flex justify-between bg-[#272847] w-full h-[150px] px-12 py-4 text-white">
      <div>
        <h1>Good Afternoon, Tarun</h1>
        <p className="text-[#64748b] text-sm">
          You are subscribed to Retail Plan
        </p>
      </div>
      <ul className="flex justify-center">
        <li className="mx-2 flex">
          <div className="text-2xl">
            <SlCalender />
          </div>
          <p className="ml-2 mr-4">{time.toFormat("dd, MMMM")}</p>
        </li>
        <li className="mx-2 flex">
          <div className="text-2xl">
            <MdOutlineAccessTime />
          </div>
          <p className="ml-2 mr-4">{time.toFormat("HH:mm")}</p>
        </li>
        <li className="mx-2 text-2xl">
          <IoIosNotifications />
        </li>
      </ul>
    </div>
  );
};

export default Header;
