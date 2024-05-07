"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();
//   const navColor = router.pathname === '/' ? 'bg-[#f2f4ef]' : 'bg-white';
  const changeBorder = isOpen === false ? "border-b-[rgba(0,0,0,0.1)] border-b border-solid" : ""

  return (
    //inserir ${navColor} abaixo
    <div className={`flex-wrap py-[14px] w-full z-[1000] relative bg-[white] ${changeBorder} headermob`}>
      <div className="w-full max-w-full mx-auto px-5 block">
        <div className='justify-between items-center flex'>
            <a href="" className='text-[black] text-[24px]'>
                Unitech
            </a>
            <div className="lg:hidden flex">
                <a className="gap-x-1 text-black bg-[rgba(0,0,0,0)] text-sm font-medium leading-[100%] p-0 cursor-pointer appearance-none items-center no-underline flex rounded-none border-0">
                    <div className="max-w-full inline-block">
                        Cart
                    </div>
                    <div className="gap-x-0.5 justify-center items-center font-medium leading-[100%] flex">
                        <div className="text-black bg-[rgba(0,0,0,0)] min-w-[auto] h-auto text-sm font-medium leading-[100%] ml-0 px-0 rounded-none">
                            ()
                        </div>
                    </div>
                </a>
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 rounded">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d={isOpen ? "M6 6h8M6 12h8" : "M4 6h16M4 12h16M4 18h16"} /></svg>
                </button>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-2000"
                enterFrom="transform opacity-0 scale-100"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-2000"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-100"
            >
                {(ref) => (
                <div ref={ref} className="w-full block flex-grow lg:flex lg:items-center lg:w-auto fixed top-0 left-0 right-0 p-4 bg-[white]" style={{ top: isOpen ? '70px' : '-350px' }}>
                    <div className="text-sm lg:flex-grow">
                    <div href="/about">
                        <a className="flex items-center justify-center mt-4 lg:inline-block lg:mt-0 mr-4">
                        About Us
                        </a>
                    </div>
                    <div href="/features">
                        <a className="flex items-center justify-center mt-4 lg:inline-block lg:mt-0 mr-4">
                        Features
                        </a>
                    </div>
                    <div href="/blogs">
                        <a className="flex items-center justify-center mt-4 lg:inline-block lg:mt-0 mr-4">
                        Blogs
                        </a>
                    </div>
                    <div href="/careers">
                        <a className="flex items-center justify-center mt-4 lg:inline-block lg:mt-0 mr-4">
                        Careers
                        </a>
                    </div>
                    <div href="/pricing">
                        <a className="flex items-center justify-center mt-4 lg:inline-block lg:mt-0 mr-4">
                        Pricing
                        </a>
                    </div>
                    <div href="/contact">
                        <a className="flex items-center justify-center mt-4 lg:inline-block lg:mt-0 mr-4">
                        Contact
                        </a>
                    </div>
                    <div className="gap-x-2.5 cursor-pointer mt-[12px] bg-[color:#b9e97d] text-black rounded items-center justify-center text-sm font-medium leading-[100%] no-underline transition-[color] duration-[0.3s,background-color] delay-[0.3s] flex px-[22px] py-3.5">
                        <div>Get Started</div>
                        <img src="" alt="->" />
                    </div>
                    </div>
                </div>
                )}
            </Transition>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
