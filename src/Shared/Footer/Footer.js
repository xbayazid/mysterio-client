import React from 'react';
import { HiEnvelope } from "react-icons/hi2";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import paymentOne from '../../assets/paymet-1.avif'

const Footer = () => {
    return (
        <div className='mx-5 mt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='text-sm my-3 lg:my-0'>
                <p className="uppercase leading-10 font-black">contact us</p>
                <p className='font-black'>Add: <span className='text-gray-500'>4 Copley Place, 7th Floor, Boston, MA 6</span></p>
                <p className='font-black leading-6'>Tell: <span className='text-gray-500'>866.453.4748</span></p>
                <p className='font-black'>HR Fax: <span className='text-gray-500'>810.222.5439</span></p>
                <p className='font-black leading-6'>Add: <span className='text-gray-500'>sales@demati.com</span></p>
                <div className='flex gap-5 mt-1 text-lg'>
                    <p><FaFacebook/></p>
                    <p><FaInstagramSquare/></p>
                    <p><FaLinkedin/></p>
                    <p><FaTwitterSquare/></p>
                </div>
            </div>
            <div className='text-sm'>
                <p className="uppercase leading-10 font-black">categories</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>Tops</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>Basics</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>Shirts & Blouses</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>Pants</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>Blazers & Vests</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>Shorts</p>
            </div>
            <div className='text-sm my-3 lg:my-0'>
                <p className="uppercase leading-10 font-black">services</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>Sale</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>Quick Ship</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>New Designs</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>Accidental Fabric Protection</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>Furniture Care</p>
                <p className='text-gray-600 cursor-pointer hover:text-sky-600'>Gift Cards</p>
            </div>
            <div className='text-sm'>
                <p className="uppercase leading-10 font-black">join us</p>
                <p className="text-gray-600">New subscribers receive 10% off their first purchase</p>
                <div className='mt-4 flex gap-1 items-center'>
                    <input type="text" className='border p-3' placeholder='Your email' />
                    <HiEnvelope className='text-5xl text-white rounded bg-black p-2'/>
                </div>
            </div>
        </div>
        <div className='my-5'>
            <hr />
            <div className='flex justify-around my-3'>
                <p className='text-gray-500'>Copyright © 2023. All Right Reserved</p>
                <div className='hidden lg:block'>
                    <img src={paymentOne} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;