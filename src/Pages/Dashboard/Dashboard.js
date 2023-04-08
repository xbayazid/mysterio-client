import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [show, setShow] = useState(false);

  return (
    <div className="bg-gray-50">
      <div className="bg-white xl:hidden flex text-gray-800  hover:text-black focus:outline-none focus:text-black justify-between w-full p-6 items-center ">
        <div aria-label="toggler" className="flex justify-center items-center">
          <button id="open" onClick={() => setShow(!show)} aria-label="open" className={`${show ? "" : "hidden"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}>
            <svg className="text-gray-800" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button id="close" onClick={() => setShow(!show)} aria-label="close" className={`${show ? "hidden" : ""} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}>
            <svg className="text-gray-800" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div id="Main" className={`${show ? "-translate-x-full" : "translate-x-0"} bg-white transform  xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-72   flex-col h-full`}>
        <Link to="/myorder" className="xl:mt-6 flex flex-col justify-start items-start  px-4 w-full space-y-3 pb-5 ">
          <button className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full ">
            <svg className="fill-stroke " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-base leading-4 ">My Orders</p>
          </button>
          <button className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4  items-center w-full  space-x-6">
          <svg className="fill-stroke " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-base leading-4 ">All Orders</p>
          </button>
          <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded  py-3 pl-4  w-full ">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.85 12.15L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 8L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-base leading-4  ">Add Products</p>
          </button>
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:outline-none focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4  w-full ">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 21H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 21V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 4L19 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-base leading-4  ">Delivery Status</p>
          </button>
        </Link>
        <div className="mt-36 flex  bg-indigo-700 justify-start space-x-2 items-center h-full py-4 px-3.5    w-full  ">
          <div>
            <img src="https://i.ibb.co/fxrbS6p/Ellipse-2-2.png" alt="avatar" />
          </div>
          <div className="flex flex-col justify-start items-start space-y-2">
            <p className="cursor-pointer text-base leading-4 text-white">Alexis Enache</p>
            <p className="cursor-pointer text-xs leading-3 text-gray-200">alexis _enache@gmail.com</p>
          </div>
          <button aria-label="visit" className=" focus:ring-2 focus:outline-none hover:bg-indigo-800 p-2.5 bg-indigo-600 rounded-full">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16666 10H15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.8333 15L15.8333 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.8333 5L15.8333 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;