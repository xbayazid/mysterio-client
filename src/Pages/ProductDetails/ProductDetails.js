import React, { useState } from 'react';

const ProductDetails = () => {
    const [color, setColor] = useState("White");
    const [size, setSize] = useState("");
    const [menu, setMenu] = useState(true);
    const [slide, setSlide] = useState(true);

    const slideToggle = () => setSlide(!slide);

    const getColor = (value) => {
        setColor(value);
    };

    const getSize = (value) => {
        setSize(value);
    };

    return (
        <div className='bg-gray-800 py-5'>
            <div className="flex justify-center items-center">
                <div id="menu" className={"md:px-6 px-4 py-12 w-full h-full flex justify-center" + (menu ? "block" : "hidden")}>
                    <div className="2xl:container 2xl:mx-auto relative  flex justify-start w-96 md:w-10/12 xl:w-8/12 2xl:w-7/12 item-start flex-col lg:flex-row   lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-24 bg-white">
                        <div className="w-full">
                            <div className="relative">
                                <div className="slider">
                                    <div className="slide-ana flex flex-shrink-0">
                                        <div className={"flex flex-shrink-0 transform " + (slide ? "translate-x-0" : "-translate-x-full")}>
                                            <img className=" lg:block hidden w-full h-full object-center object-cover" src="https://i.ibb.co/wBknrzK/pexels-monstera-6311641-1-2.png" alt="A girl posing front" />
                                            <img className=" hidden md:block lg:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/JqhZhhp/pexels-monstera-6311641-1-3.png" alt="A girl posing front" />
                                            <img className=" block md:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/FXb2RfJ/pexels-dominika-roseclay-5462562-1.png" alt="A girl posing front" />
                                        </div>
                                        <div className={"flex flex-shrink-0 transform " + (slide ? "translate-x-full" : "translate-x-0")}>
                                            <img className=" lg:block hidden w-full h-full object-center object-cover" src="https://i.ibb.co/FwRy0WL/pexels-monstera-6311575-2-1.png" alt="A girl posing Back" />
                                            <img className=" hidden md:block lg:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/k0bJRQk/pexels-monstera-6311575-3-1.png" alt="A girl posing Back" />
                                            <img className=" block md:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/0f1gRTt/pexels-monstera-6311575-4.png" alt="A girl posing Back" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" transition duration-150 absolute bottom-0 w-full h-full flex justify-between items-center px-4">
                                    <button onClick={slideToggle} aria-label="previous" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center">
                                        <svg className="" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="26" cy="26" r="26" fill="white" />
                                            <path d="M28.4987 19.333L21.832 25.9997L28.4987 32.6663" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button onClick={slideToggle} aria-label="Next" className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center">
                                        <svg className="" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="26" cy="26" r="26" fill="white" />
                                            <path d="M23.5013 19.333L30.168 25.9997L23.5013 32.6663" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">
                            <h2 className=" lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">Plain White Tshirt</h2>
                            <div className=" flex justify-start items-center mt-4">
                                <p className="font-normal text-lg leading-6 text-gray-600 mr-4">$190</p>
                            </div>
                            <div className=" mt-10 w-full">
                                <div className=" flex justify-between">
                                    <p className="font-semibold text-base leading-4 text-gray-800">Size</p>
                                    <p className="cursor-pointer hover:text-gray-800 font-medium text-base leading-4 text-gray-500 underline">Size guide</p>
                                </div>
                                <div className=" grid grid-cols-3 gap-10 sm:flex sm:flex-wrap md:gap-4 sm:justify-between lg:justify-start mt-4">
                                    <div onClick={() => getSize("XSS")} id="XSS" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "XSS" ? "border-gray-500" : "border-gray-200")}>
                                        XXS
                                    </div>
                                    <div onClick={() => getSize("XS")} id="XS" className={"font-medium text-base leading-4 text-gray-800 border  py-3 w-20 text-center cursor-pointer " + (size === "XS" ? "border-gray-500" : "border-gray-200")}>
                                        XS
                                    </div>
                                    <div onClick={() => getSize("S")} id="S" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "S" ? "border-gray-500" : "border-gray-200")}>
                                        S
                                    </div>
                                    <div onClick={() => getSize("M")} id="M" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "M" ? "border-gray-500" : "border-gray-200")}>
                                        M
                                    </div>
                                    <div onClick={() => getSize("L")} id="L" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "L" ? "border-gray-500" : "border-gray-200")}>
                                        L
                                    </div>
                                    <div onClick={() => getSize("XL")} id="XL" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "XL" ? "border-gray-500" : "border-gray-200")}>
                                        XL
                                    </div>
                                </div>
                            </div>
                            <p className=" mt-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">Find the perfect size?</p>

                            <div className="flex flex-col w-full space-y-4 mt-10">
                                <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-black text-base font-medium leading-4 bg-gray-800 py-4 text-white">Add to Bag</button>
                            </div>
                        </div>
                        <button onClick={() => setMenu(false)} aria-label="show Menu" className="absolute top-4 right-4  md:top-6 md:right-6 focus:outline-none focus:ring-2  focus:ring-gray-800">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3346 13.3337L2.66797 2.66699M13.3346 2.66699L2.66797 13.3337" stroke="#1F2937" strokeLinecap="square" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
           <div className='lg:mx-20 bg-white p-8'>
           <div>
                <h1 className='text-lg font-black leading-10'>Description</h1>
                <p className='lg:w-3/4 leading-7 text-gray-500'>Get a fresh 'fit for spring with the Free People Love Letter Ivory Floral Jacquard Cropped Cami Top! Stretchy jacquard fabric, with a textured floral design throughout, shapes this cami top that has wide straps, a high square neckline, and a fitted bodice that ends at a cropped hem with lettuce-edge trim.</p>
            </div>
            <div>
            <div className="flex  justify-center items-center w-full">
                <div className="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10">
                    <div>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.667 43.75H33.3337" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M25 31.25V43.75" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M35.4167 6.25L37.5 20.8333C37.5 27.1083 31.9042 31.25 25 31.25C18.0958 31.25 12.5 27.1083 12.5 20.8333L14.5833 6.25H35.4167Z" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.5 20.8333C14.3032 19.4813 16.4962 18.7505 18.75 18.7505C21.0038 18.7505 23.1968 19.4813 25 20.8333C26.8032 22.1853 28.9962 22.9161 31.25 22.9161C33.5038 22.9161 35.6968 22.1853 37.5 20.8333" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">Great for drinks</p>
                        <p className="text-normal text-base leading-6 text-gray-600 mt-4">Here are all the great cocktail recipes you should know how to make, from the margarita to the whiskey sour. Cheers! </p>
                    </div>
                    <div>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.833 6.66659C17.574 7.42209 14.5766 9.03575 12.1515 11.3402C9.72641 13.6447 7.96204 16.556 7.04139 19.7722C6.12073 22.9884 6.07733 26.3923 6.91568 29.6309C7.75403 32.8696 9.44359 35.8249 11.8091 38.1905C14.1747 40.556 17.13 42.2456 20.3686 43.0839C23.6073 43.9223 27.0112 43.8789 30.2274 42.9582C33.4436 42.0375 36.3549 40.2732 38.6594 37.8481C40.9638 35.423 42.5775 32.4255 43.333 29.1666C43.333 28.6141 43.1135 28.0842 42.7228 27.6935C42.3321 27.3028 41.8022 27.0833 41.2497 27.0833H33.333C32.9542 28.5395 32.1975 29.8699 31.1394 30.9397C30.0813 32.0095 28.7594 32.7809 27.3074 33.1757C25.8554 33.5705 24.3249 33.5747 22.8708 33.1879C21.4166 32.8011 20.0905 32.0371 19.0265 30.9731C17.9625 29.9091 17.1984 28.583 16.8117 27.1288C16.4249 25.6747 16.4291 24.1442 16.8239 22.6922C17.2187 21.2402 17.99 19.9183 19.0599 18.8602C20.1297 17.8021 21.4601 17.0453 22.9163 16.6666V8.33326C22.8904 8.08643 22.8158 7.84721 22.6968 7.62944C22.5777 7.41168 22.4166 7.21971 22.2229 7.06468C22.0291 6.90964 21.8064 6.79463 21.5678 6.72629C21.3293 6.65795 21.0795 6.63766 20.833 6.66659Z"
                                stroke="#4B5563"
                                strokeWidth="3.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M31.25 7.29163C33.8953 8.22305 36.2979 9.736 38.2809 11.719C40.264 13.7021 41.7769 16.1047 42.7083 18.75H33.3333C32.6946 18.0019 31.998 17.3054 31.25 16.6666V7.29163Z" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">Durable hardware</p>
                        <p className="text-normal text-base leading-6 text-gray-600 mt-4">Product durability is a key aspect of achieving a circular economy. ... Moreover, enhancing the durability of individual hardware components </p>
                    </div>
                    <div>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.583 14.5834H35.4164V27.0834C35.4164 28.741 34.7579 30.3307 33.5858 31.5028C32.4137 32.6749 30.824 33.3334 29.1663 33.3334H20.833C19.1754 33.3334 17.5857 32.6749 16.4136 31.5028C15.2415 30.3307 14.583 28.741 14.583 27.0834V14.5834Z" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18.75 6.25V14.5833" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M31.25 6.25V14.5833" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M25 33.3334V37.5C25 38.6051 25.439 39.6649 26.2204 40.4463C27.0018 41.2277 28.0616 41.6667 29.1667 41.6667H35.4167" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">Eco-friendly</p>
                        <p className="text-normal text-base leading-6 text-gray-600 mt-4"> They re-use, recycle and reduce waste disposal in their lives. They conserve energy and natural resources</p>
                    </div>
                    <div>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.667 16.6666H33.3337V33.3333H16.667V16.6666Z" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M37.4997 8.33337H12.4997C10.1985 8.33337 8.33301 10.1989 8.33301 12.5V37.5C8.33301 39.8012 10.1985 41.6667 12.4997 41.6667H37.4997C39.8009 41.6667 41.6663 39.8012 41.6663 37.5V12.5C41.6663 10.1989 39.8009 8.33337 37.4997 8.33337Z" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M33.333 33.3334L40.208 40.2084" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M33.333 16.6666L40.208 9.79163" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.667 16.6666L9.79199 9.79163" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.667 33.3334L9.79199 40.2084" stroke="#4B5563" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">Minimal Design</p>
                        <p className="text-normal text-base leading-6 text-gray-600 mt-4">Minimalist interior design is very similar to modern interior design and involves using the bare essentials </p>
                    </div>
                </div>
                </div>
            </div>
            </div> 
            <style>
                {` 
                .slider {
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }

                .slide-ana {
                    height: 539px;
                }   

                .slide-ana > div {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transition: all 1s;
                }
            `}
            </style>
        </div>
    );
};

export default ProductDetails;