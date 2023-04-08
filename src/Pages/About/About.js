import React from 'react';
import banner from '../../assets/about_banner.jpg'
import about from '../../assets/aboutTwo.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='my-5 container mx-auto'>
            <div className=''>
                <img src={banner} alt="" />
            </div>
            <div className="my-14 mx-5 lg:flex items-center">
                <div className=''>
                    <p className='leading-10 font-black'>About Outfie</p>
                    <p className='w-3/4 text-gray-500'>Slowly she drifted to the southeast, rising higher and higher as the flames ateaway her wooden parts and diminished the weight upon her. Ascending to the roof of the building I watched her for hours until she was lost in the dim finally.</p>
                    <div>
                        <h3 className='mt-3 mb-2 font-black'>Store Hours</h3>
                        <p className='text-gray-500'>Monday-Saturday : 11am–7pm</p>
                        <p className='text-gray-500'>Sunday : 11am–6pm</p>
                    </div>
                </div>
                <div>
                        <img className='' src={about} alt="" />
                    </div>
            </div>
            <div className='bg-pink-50 px-20 py-36'>
                <div className='grid lg:grid-cols-2'>
                    <h1 className='text-4xl'>Free shipping</h1>
                    <p className='w-3/4'>We want you to be happy with your purchase. Therefore, shipping is on us and you can return your items up to 90 days.</p>
                </div>
                <div className='grid lg:grid-cols-2 my-7'>
                    <h1 className='text-4xl'>Express delivery</h1>
                    <p className='w-3/4'>Don’t feel like waiting? Our express delivery service ensures you receive your new items within 5 business days.</p>
                </div>
                <div className='grid lg:grid-cols-2'>
                    <h1 className='text-4xl'>New styles</h1>
                    <p className='w-3/4 text-justify'>We’re constantly designing new styles and collections. Come back soon to discover what’s new and pick your favourite</p>
                </div>
            </div>
            <div className="my-14 bg-sky-100 p-16 lg:text-center">
                <h1 className='text-5xl mb-5'>Memeber Prices: up to 20% off select styles</h1>
                <Link className='font-black' style={{borderBottom: "2px solid"}}>Learn More</Link>
            </div>
        </div>
    );
};

export default About;