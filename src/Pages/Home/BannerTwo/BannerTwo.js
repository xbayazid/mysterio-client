import React from 'react';

const BannerTwo = () => {
    return (
        <div className='lg:flex gap-2 items-center justify-center mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0'>            
            <div className="content bg-gray-200 p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full hidden lg:block">
                <div className=''>
                    <h2 className='text-3xl'>Essentials starting at $9.99</h2>
                </div>
                <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Shop now</button>
            </div>
            <div>
                <img className='xl:max-w-6xl' src="https://images.pexels.com/photos/5990153/pexels-photo-5990153.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1860" alt="" />
            </div>
        </div>
    );
};

export default BannerTwo;