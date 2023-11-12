import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import cartIcon from '../assets/cart.png';
import profileIcon from '../assets/profile.png';

export const NavBar = () => {
  return (
    <nav className="bg-[#fffff] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logo} className="w-[12rem] self-center  whitespace-nowrap dark:text-white" />
        
        <div className="flex md:order-6">
        <Link to="/cart" className="mr-6 md:mr-6">
            <img src={cartIcon} alt="Cart" className="w-8 h-8 cursor-pointer" />
          </Link>
          <Link to="/profile" className="mr-6 md:mr-6">
            <img src={profileIcon} alt="profile" className="w-8 h-8 cursor-pointer" />
          </Link>
          <Link to="/signin" className="text-white bg-[#000842] hover:bg-[#000842] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark-bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800">SIGN UP/ IN</Link>
      
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark-text-gray-400 dark:hover-bg-gray-700 dark:focus-ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium text-sm p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md-space-x-8 md:mt-0 md-border-0 md-bg-[#fffff] dark-bg-gray-800 md-dark-bg-gray-900 dark-border-gray-700">
            <li>
              <Link to='/home' className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md-bg-transparent md-text-blue-700 md-p-0 md-dark-text-blue-500 md-border-transparent" aria-current="page">HOME</Link>
            </li>
            <li>
              <Link to='/gifts' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 md-dark-hover-text-blue-500 dark-text-white dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">Gifts</Link>
            </li>
            <li>
              <Link to='/giftsPackge' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 md-dark-hover-text-blue-500 dark-text-white dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">Packages</Link>
            </li>
            <li>
              <Link to='/giftscake' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 md-dark-hover-text-blue-500 dark-text-white dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">Cake & Sweet</Link>
            </li>
            <li>
              <Link to='/cards' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 md-dark-hover-text-blue-500 dark-text-white dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">Cards</Link>
            </li>
            <li>
              <Link to='/contact' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 md-dark-hover-text-blue-500 dark-text-white dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
