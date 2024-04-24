import React, { useState } from 'react';
import { randomPostData } from '../utils/randomPostData';

const RecentNews = () => {
    const [selectedOption, setSelectedOption] = useState('India');

    const handleSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    const renderHeader = () => {
        return (
            <div className='flex  justify-between  border-b border-[#e2e8f0] py-4 '>
                <h1>Recent Releases</h1>
                <select value={selectedOption} onChange={handleSelect} className='outline-none border-[#e2e8f0]'>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Russia">Russia</option>
                </select>
            </div>
        )
    }

    const renderPostDetails = () => {
        const postData = randomPostData[selectedOption];
    
        if (!postData) {
            return <p>No data available for the selected country.</p>;
        }
    
        return <ul className='overflow-y-scroll h-[100%]'>{postData.map((post, index) => (
            <div key={index} className="flex">
                <div className="flex-col relative grid">
                    <div className='w-2 h-2  rounded-full '></div>
                    <div className="row-span-5 -mt-3 border-2 border-muted-foreground w-0 mx-auto bg-yellow-400"></div>
                </div>
                <div className="bg-white pt-5 space-y-3">
                    <p className="text-[#5A91E8] font-semibold text-sm">{post.date}</p>
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="xl:text-xs">{post.content}</p>
                </div>
            </div>
        ))}</ul>
    };
    
    return (
        <div className='p-4 mx-6 w-[30%] flex flex-col  rounded-lg shadow-lg'>
            {renderHeader()}
            {renderPostDetails()}
        </div>
    );
};

export default RecentNews;
