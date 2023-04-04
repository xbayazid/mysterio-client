import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className='uppercase mx-6'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 w-52">
              <li><Link to='/'>HOME</Link></li>
              <li><Link to="/men">Mens</Link></li>
              <li><Link to="/women">womens</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About us</Link></li>
            </ul>
          </div>
          <Link to="/" className="uppercase font-semibold text-xl">mysterio</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/men">Mens</Link></li>
            <li><Link to="/women">womens</Link></li>
            <li><Link to="/blog">blog</Link></li>
            <li><Link to="/about">About us</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className='flex items-center gap-1'>
            <Link className='text-2xl font-semibold' to=""><HiShoppingBag /></Link>
            <Link className='text-2xl font-semibold' to="/login"><HiOutlineUser /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;