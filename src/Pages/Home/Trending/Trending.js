import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLongDown } from "react-icons/hi2";

const Trending = () => {
    return (
        <div className='lg:container mx-auto'>
           <div className='flex items-center justify-between'>
           <h1 className="text-3xl text-gray-400 flex items-center gap-2">You are in <span className='text-black'>trending</span> <HiArrowLongDown className='text-black hidden lg:block'/></h1>
           <Link className='hover:text-sky-600 hover:border-none hidden lg:block' style={{borderBottom: "1px solid"}}>
           Shop all products
           </Link>
           </div>
            <div>
            <div class="px-0 md:p-10 md:px-0">
        <div class="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-start ">
            <div class="p-5 cursor-pointer  hover:shadow-2xl group">
                <div class="relative max-h-125 overflow-hidden">
                    <img class="absolute" src="https://i.ibb.co/GVjhshQ/p-1-1.webp" alt=""/>
                    <img class="relative transform duration-500 group-hover:opacity-0" src="https://i.ibb.co/vPL6Ws1/p-1.webp" alt=""/>
                </div>
                <ul class="mt-6 font-semibold text-gray-500">
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Features</li>
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Fashion</li>
                </ul>
                <div className='mt-4'>
                    <h1 className='text-lg font-black'>Long sleeve T-shirt</h1>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-red-400 font-semibold'>$250</p>
                        <button className='p-2 hover:bg-black hover:text-white' style={{border: "2px solid black"}}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="p-5 cursor-pointer  hover:shadow-2xl group">
                <div class="relative max-h-125 overflow-hidden">
                    <img class="absolute" src="https://i.ibb.co/9htGhFh/208-1080x1080.webp" alt=""/>
                    <img class="relative transform duration-500 group-hover:opacity-0" src="https://i.ibb.co/LrB6f60/207-1080x1080.webp" alt=""/>
                </div>
                <ul class="mt-6 font-semibold text-gray-500">
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Features</li>
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Fashion</li>
                </ul>
                <div className='mt-4'>
                    <h1 className='text-lg font-black'>Printed short sleeve T-shirt</h1>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-red-400 font-semibold'>$850</p>
                        <button className='p-2 hover:bg-black hover:text-white' style={{border: "2px solid black"}}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="p-5 cursor-pointer  hover:shadow-2xl group">
                <div class="relative max-h-125 overflow-hidden">
                    <img class="absolute" src="https://i.ibb.co/qk9bsRq/203-1080x1080.webp" alt=""/>
                    <img class="relative transform duration-500 group-hover:opacity-0" src="https://i.ibb.co/Vjph2WF/202-29b41629-a353-4fe0-b79f-38039937e057-1080x1080.webp" alt=""/>
                </div>
                <ul class="mt-6 font-semibold text-gray-500">
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Features</li>
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Fashion</li>
                </ul>
                <div className='mt-4'>
                    <h1 className='text-lg font-black'>Sleeve cropped T-shirt</h1>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-red-400 font-semibold'>$129</p>
                        <button className='p-2 hover:bg-black hover:text-white' style={{border: "2px solid black"}}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="p-5 cursor-pointer  hover:shadow-2xl group">
                <div class="relative max-h-125 overflow-hidden">
                    <img class="absolute" src="https://i.ibb.co/kQbxPxP/191-1080x1080.webp" alt=""/>
                    <img class="relative transform duration-500 group-hover:opacity-0" src="https://i.ibb.co/ZV17YM2/192-38838ef6-0ea4-40b5-9e7e-b392531c4996-1080x1080.webp" alt=""/>
                </div>
                <ul class="mt-6 font-semibold text-gray-500">
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Features</li>
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Fashion</li>
                </ul>
                <div className='mt-4'>
                    <h1 className='text-lg font-black'>T-shirt with print</h1>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-red-400 font-semibold'>$267</p>
                        <button className='p-2 hover:bg-black hover:text-white' style={{border: "2px solid black"}}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="p-5 cursor-pointer  hover:shadow-2xl group">
                <div class="relative max-h-125 overflow-hidden">
                    <img class="absolute" src="https://i.ibb.co/cc1WMkM/153-1080x1080.webp" alt=""/>
                    <img class="relative transform duration-500 group-hover:opacity-0" src="https://i.ibb.co/tzJXKV7/152-1080x1080.webp" alt=""/>
                </div>
                <ul class="mt-6 font-semibold text-gray-500">
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Features</li>
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Fashion</li>
                </ul>
                <div className='mt-4'>
                    <h1 className='text-lg font-black'>Art print T-shirt</h1>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-red-400 font-semibold'>$250</p>
                        <button className='p-2 hover:bg-black hover:text-white' style={{border: "2px solid black"}}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="p-5 cursor-pointer  hover:shadow-2xl group">
                <div class="relative max-h-125 overflow-hidden">
                    <img class="absolute" src="https://i.ibb.co/sV3cXxm/93-1080x1080.webp" alt=""/>
                    <img class="relative transform duration-500 group-hover:opacity-0" src="https://i.ibb.co/M8Brx05/91-1080x1080.webp" alt=""/>
                </div>
                <ul class="mt-6 font-semibold text-gray-500">
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Features</li>
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Fashion</li>
                </ul>
                <div className='mt-4'>
                    <h1 className='text-lg font-black'>Comfort mini denim skirt</h1>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-red-400 font-semibold'>$950</p>
                        <button className='p-2 hover:bg-black hover:text-white' style={{border: "2px solid black"}}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="p-5 cursor-pointer  hover:shadow-2xl group">
                <div class="relative max-h-125 overflow-hidden">
                    <img class="absolute" src="https://i.ibb.co/XxZYjrF/29-1080x1080.webp" alt=""/>
                    <img class="relative transform duration-500 group-hover:opacity-0" src="https://i.ibb.co/ZS05g87/28-991d4537-d92e-4902-8b3a-cc62f3aeab1f-1080x1080.webp" alt=""/>
                </div>
                <ul class="mt-6 font-semibold text-gray-500">
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Features</li>
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Fashion</li>
                </ul>
                <div className='mt-4'>
                    <h1 className='text-lg font-black'>Short fit T-shirt</h1>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-red-400 font-semibold'>$669</p>
                        <button className='p-2 hover:bg-black hover:text-white' style={{border: "2px solid black"}}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="p-5 cursor-pointer  hover:shadow-2xl group">
                <div class="relative max-h-125 overflow-hidden">
                    <img class="absolute" src="https://i.ibb.co/vHhjYQs/109-1080x1080.webp" alt=""/>
                    <img class="relative transform duration-500 group-hover:opacity-0" src="https://i.ibb.co/qnbJnFJ/107-1080x1080.webp" alt=""/>
                </div>
                <ul class="mt-6 font-semibold text-gray-500">
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Features</li>
                    <li class="inline mr-3 pb-1 border-b-2 border-green-500">Fashion</li>
                </ul>
                <div className='mt-4'>
                    <h1 className='text-lg font-black'>Long sleeve overshirt</h1>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-red-400 font-semibold'>$250</p>
                        <button className='p-2 hover:bg-black hover:text-white' style={{border: "2px solid black"}}>Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
            </div>
        </div>
    );
};

export default Trending;