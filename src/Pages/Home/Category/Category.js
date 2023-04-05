import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';

const Category = () => {
    return (
        <div className='my-8 grid grid-cols-1 gap-6 lg:grid-cols-3 w-[90%] mx-auto'>
            <div>
            <div className=" group">
            <div className='overflow-hidden'>
                <img class="w-full transform hover:scale-110 duration-500" src="https://i.ibb.co/fSp24rk/men.webp" alt="" />
            </div>
            </div>
            <div className='flex justify-center -mt-24'>
                <Link >
                <Button>Men</Button>
                </Link>
            </div>
            </div>
            <div>
            <div className="group">
            <div className='max-h-125 overflow-hidden'>
                <img class="w-full h-auto transform hover:scale-110 duration-500" src="https://i.ibb.co/6m6s2fj/women.webp" alt="" />
            </div>
            </div>
            <div className='flex justify-center -mt-24'>
                <Link >
                <Button>Women</Button>
                </Link>
            </div>
            </div>
           <div>
           <div className="group">
            <div className=' overflow-hidden'>
                <img class="w-full h-auto transform hover:scale-110 duration-500" src="https://i.ibb.co/z7vPfxF/on.webp" alt="" />
            </div>
            </div>
            <div className='flex justify-center -mt-24'>
                <Link >
                <Button>On Sale</Button>
                </Link>
            </div>
           </div>
            
        </div>
    );
};

export default Category;