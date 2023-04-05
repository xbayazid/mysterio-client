import React from 'react';
import brandOne from '../../../assets/brand1.webp'
import brandTwo from '../../../assets/brand2.webp'
import brandThree from '../../../assets/brand3.webp'
import brandFour from '../../../assets/brand4.webp'
import brandFive from '../../../assets/brand5.webp'
import brandSix from '../../../assets/brand6.webp'

const Brands = () => {
    return (
        <div className='my-5 lg:container mx-auto hidden lg:block'>
            <div className='text-center'>
                <h1 className='text-3xl'>Popular brands</h1>
            </div>
            <div className='grid grid-cols-6 mt-4'>
                <div>
                    <img src={brandOne} alt="" />
                </div>
                <div>
                    <img src={brandTwo} alt="" />
                </div>
                <div>
                    <img src={brandThree} alt="" />
                </div>
                <div>
                    <img src={brandFour} alt="" />
                </div>
                <div>
                    <img src={brandFive} alt="" />
                </div>
                <div>
                    <img src={brandSix} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brands;