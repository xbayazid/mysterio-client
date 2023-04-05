import React from 'react';
import blog from '../../assets/blog.webp'
import TimeCounter from './TimeCounter';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className='h-[100vh] flex justify-center' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 50%,rgba(0,0,0,1) 100%), url(${blog})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className='text-white my-auto'>
                <h1 className='text-7xl font-bold'>We are comming soon</h1>
                <TimeCounter offerEndTime="2024-04-04T00:00:00" />
                <Link>
                <button className='border-2 p-3 hover:border-blue-600 duration-300'>Read More</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;