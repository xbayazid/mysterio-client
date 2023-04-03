import React from 'react';
import { HiGlobeAlt, HiOutlineRefresh, HiOutlineShieldCheck } from "react-icons/hi";
import { MdSupportAgent } from "react-icons/md";

const Facilites = () => {
    return (
        <div className='bg-gray-100 p-8'>
            <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[1580px] mx-auto'>
            <div className='flex gap-2'>
                <HiGlobeAlt className='text-5xl text-gray-500'/>
                <div>
                    <p className='font-black'>Free Shipping</p>
                    <p className='text-gray-500'>You will love at great low prices</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <HiOutlineRefresh className='text-5xl text-gray-500'/>
                <div>
                    <h2 className='font-black'>14 days return</h2>
                    <p className='text-gray-500'>Within 30 days for an exchange</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <HiOutlineShieldCheck className='text-5xl text-gray-500'/>
                <div>
                    <h2 className='font-black'>Flexible Payment</h2>
                    <p className='text-gray-500'>Pay with Multiple Credit Cards</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <MdSupportAgent className='text-5xl text-gray-500'/>
                <div>
                    <h2 className='font-black'>Online Support</h2>
                    <p className='text-gray-500'>24 hours a day, 7 days a week</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Facilites;