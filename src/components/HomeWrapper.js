import React from 'react';
import Header from './Header';
import { FaFolderOpen } from "react-icons/fa6";
import ScroolLibrary from './ScroolLibrary';
import RecentNews from './RecentNews';

const HomeWrapper = () => {
    // Function to generate a random color code
    const generateRandomColor = () => {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    };

    // Create an array of random color codes for folder icons
    const liElements = [...Array(5)].map((_, index) => (
        <li key={index} className='list-none w-[250px]  transition-all duration-300  hover:scale-105 cursor-pointer h-[150px] px-4 py-8 shadow-lg bg-white mx-2 rounded-lg'>
            <FaFolderOpen style={{ color: generateRandomColor() }} className='text-2xl mb-4'/>
            <h1 className='text-[#020817] font-semibold'> My Saved Library {index}</h1>
            <p className='text-[#64748b]'>dd-mm-yyyy</p>
        </li>
    ));

    return (
        <div className='flex flex-col w-full'>
            <div className='relative'><Header /></div>
            <ul className='flex justify-around px-6 top-[90px] w-auto absolute'>
                {liElements}
            </ul>
            <div className='flex mt-[100px] px-6 h-[420px] '>
                <ScroolLibrary/>
                <RecentNews/>
            </div>
        </div>
    );
}

export default HomeWrapper;
