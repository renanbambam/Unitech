/* eslint-disable @next/next/no-img-element */
import { Container } from "postcss";

    export default function Header() {
        return (
        <div className="header border-b-1 border-gray-500 border-b-[rgba(0,0,0,0.1)] border-b border-solid w-full py-[12px] flex flex-col items-center justify-between">
            <div className="block-container w-full mx-auto px-5">
                <div className="justify-between items-center flex">
                    <a href="/" className="float-left text-[#333] no-underline relative font-[bold] text-[28px]">Unitech</a>
                    <div className="absolute -translate-x-2/4 left-2/4">
                        <nav className="flex float-right relative">
                            <a href="/about-us" className="nav-link">About us</a>
                            <a href="/features" className="nav-link">Features</a>
                            <a href="/blogs" className="nav-link">Blogs</a>
                            <a href="/careers" className="nav-link">Careers</a>
                            <a href="/pricing" className="nav-link">Pricing</a>
                            <a href="/contact-us" className="nav-link">Contact</a>
                        </nav>
                    </div>
                    <div className="gap-x-5 justify-start items-center flex">
                        <div className="inline-block relative">
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
                        </div>
                        <div className="gap-x-2.5 cursor-pointer bg-[color:#b9e97d] text-black rounded items-center text-sm font-medium leading-[100%] no-underline transition-[color] duration-[0.3s,background-color] delay-[0.3s] flex px-[22px] py-3.5">
                            <div>Get Started</div>
                            <img src="" alt="->" />
                        </div>
                        <div className="float-right cursor-pointer select-none text-2xl hidden relative p-[18px]">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}