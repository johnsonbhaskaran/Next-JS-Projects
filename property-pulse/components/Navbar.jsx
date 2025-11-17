"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/logo-white.png";
import profileDefault from "@/assets/images/profile.png";
import { FaGoogle } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const pathname = usePathname();

  return (
    <nav className='bg-blue-700 border-blue-500 border-b'>
      <div className='mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='relative flex justify-between items-center h-20'>
          <div className='md:hidden left-0 absolute inset-y-0 flex items-center'>
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              type='button'
              id='mobile-dropdown-button'
              className='inline-flex relative justify-center items-center hover:bg-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset text-gray-400 hover:text-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>

          <div className='flex flex-1 justify-center md:justify-start items-center md:items-stretch'>
            {/* <!-- Logo --> */}
            <Link className='flex flex-shrink-0 items-center' href='/'>
              <Image className='w-auto h-10' src={logo} alt='PropertyPulse' />

              <span className='hidden md:block ml-2 font-bold text-white text-2xl'>
                PropertyPulse
              </span>
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className='hidden md:block md:ml-6'>
              <div className='flex space-x-2'>
                <Link
                  href='/'
                  className={`${
                    pathname === "/" ? "bg-black" : ""
                  } hover:bg-gray-900 px-3 py-2 rounded-md text-white hover:text-white`}
                >
                  Home
                </Link>
                <Link
                  href='/properties'
                  className={`${
                    pathname === "/properties" ? "bg-black" : ""
                  } hover:bg-gray-900 px-3 py-2 rounded-md text-white hover:text-white`}
                >
                  Properties
                </Link>
                {isLoggedIn && (
                  <Link
                    href='/properties/add'
                    className={`${
                      pathname === "/properties/add" ? "bg-black" : ""
                    } hover:bg-gray-900 px-3 py-2 rounded-md text-white hover:text-white`}
                  >
                    Add Property
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          {!isLoggedIn && (
            <div className='hidden md:block md:ml-6'>
              <div className='flex items-center'>
                <button className='flex items-center bg-gray-700 hover:bg-gray-900 px-3 py-2 rounded-md text-white hover:text-white'>
                  <FaGoogle className='mr-2 text-white' />
                  <span>Login or Register</span>
                </button>
              </div>
            </div>
          )}

          {/* <!-- Right Side Menu (Logged In) --> */}

          {isLoggedIn && (
            <div className='right-0 md:static absolute inset-y-0 md:inset-auto flex items-center md:ml-6 pr-2 md:pr-0'>
              <Link href='/messages' className='group relative'>
                <button
                  type='button'
                  className='relative bg-gray-800 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-400 hover:text-white'
                >
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>View notifications</span>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                    />
                  </svg>
                </button>
                <span className='inline-flex top-0 right-0 absolute justify-center items-center bg-red-600 px-2 py-1 rounded-full font-bold text-white text-xs leading-none -translate-y-1/2 translate-x-1/2 transform'>
                  2{/* <!-- Replace with the actual number of notifications --> */}
                </span>
              </Link>
              {/* <!-- Profile dropdown button --> */}
              <div className='relative ml-3'>
                <div>
                  <button
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                    type='button'
                    className='relative flex bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-sm'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <Image className='rounded-full w-8 h-8' src={profileDefault} alt='' />
                  </button>
                </div>

                {/* <!-- Profile dropdown --> */}
                {isProfileMenuOpen && (
                  <div
                    id='user-menu'
                    className='right-0 z-10 absolute bg-white ring-opacity-5 shadow-lg mt-2 py-1 rounded-md focus:outline-none ring-1 ring-black w-48 origin-top-right'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabIndex='-1'
                  >
                    <Link
                      href='/profile'
                      className='block px-4 py-2 text-gray-700 text-sm'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-0'
                    >
                      Your Profile
                    </Link>
                    <Link
                      href='/properties/saved'
                      className='block px-4 py-2 text-gray-700 text-sm'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'
                    >
                      Saved Properties
                    </Link>
                    <button
                      className='block px-4 py-2 text-gray-700 text-sm'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div id='mobile-menu'>
          <div className='space-y-1 px-2 pt-2 pb-3'>
            <Link
              href='/'
              className={`${
                pathname === "/" ? "bg-black" : ""
              } block px-3 py-2 rounded-md font-medium text-white text-base`}
            >
              Home
            </Link>
            <Link
              href='/properties'
              className={`${
                pathname === "/properties" ? "bg-black" : ""
              } block px-3 py-2 rounded-md font-medium text-white text-base`}
            >
              Properties
            </Link>
            {isLoggedIn && (
              <Link
                href='/properties/add'
                className={`${
                  pathname === "/properties/add" ? "bg-black" : ""
                } block px-3 py-2 rounded-md font-medium text-white text-base`}
              >
                Add Property
              </Link>
            )}

            {!isLoggedIn && (
              <button className='flex items-center bg-gray-700 hover:bg-gray-900 my-5 px-3 py-2 rounded-md text-white hover:text-white'>
                <FaGoogle className='mr-2 text-white' />
                <span>Login or Register</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
