/* eslint-disable @next/next/no-img-element */
"use client";

import Accordion from '@/utils/accordion';
import React, { useState, useEffect } from 'react';

export default function Homepage() {
    const items = [
        {
          title: 'Accordion 1',
          content: 'This is the content for Accordion 1',
        },
        {
          title: 'Accordion 2',
          content: 'This is the content for Accordion 2',
        },
        {
          title: 'Accordion 3',
          content: 'This is the content for Accordion 3',
        },
      ];

    return(
        <div className="w-full">
            <div className="w-full max-w-[1336px] mx-auto px-5 bg-[white]">
                <h1 className="text-5xl font-medium leading-[120%] m-0 py-[60px]">About us</h1>
                <div className="mb-[150px]">
                    <section className="section">
                        <p className="w-full max-w-[50%] mb-5 mt-0">Welcome to Unitech, where innovation meets excellence. At Unitech, we are more than just a company; we are a community of passionate individuals committed to redefining the boundaries of what is possible.</p>
                        <div className="grid-rows-[auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] grid overflow-hidden items-end about-wrap">
                            <div className="home-img home-img_first"><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66024c427fa741bfafde2368_about-1-p-500.jpg" alt="people talking each other" className="object-cover w-full align-middle max-w-full inline-block"/></div>
                            <div className="home-img home-img_second"><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66024c4294125228b2962fb0_about-2-p-500.jpg" alt="people talking each other" className="object-cover w-full align-middle max-w-full inline-block"/></div>
                            <div className="home-img home-img_third"><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66024c422867f87e8d864b61_about-3-p-500.jpg" alt="people talking each other" className="object-cover w-full align-middle max-w-full inline-block"/></div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="gap-x-[60px] items-center flex inspiration">
                            <div className="bg-[color:white] relative overflow-hidden rounded-lg relative">
                                <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66024f538b5ec8385478860e_journey-p-800.jpg" alt="women" className="object-cover w-full align-middle max-w-full inline-block"/>
                                <div className='fade-in'></div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <div className="flex-col items-start flex">
                                        <h3 className="text-[28px] font-medium leading-[150%] mt-0 mb-2.5 truncate">Our inspirational journey at unitech</h3>
                                        <p className="mb-0 pb-[30px] border-b-[rgba(0,0,0,0.1)] border-b border-solid w--[100%]">Our journey has been marked by resilience, a thirst for knowledge, and a passion for making a positive impact.</p>
                                        <ul className='gap-x-[66px] gap-y-5 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] list-none grid mt-[30px] mb-0 pl-0'>
                                            <li className='jouney-li'>Collaborative Achievements</li>
                                            <li className='jouney-img'>Client Success Stories</li>
                                            <li className='jouney-img'>Client Success Stories</li>
                                            <li className='jouney-img'>Team Achievements</li>
                                            <li className='jouney-img'>Community Engagement</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='gap-x-5 items-center flex mt-10'>
                                    <a href="" className='text-black hover:bg-[#b9e97d] hover:border-[#b9e97d]  border rounded justify-center items-center text-sm font-medium leading-[100%] no-underline transition-[all] duration-[0.1s,all] delay-[0.1s] flex mx-0 px-[22px] py-3.5 border-solid border-black'><div>Explore more</div></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="gap-x-[60px] items-center flex">
                            <div className='border grid-rows-[auto] grid overflow-hidden rounded-lg border-solid border-[rgba(0,0,0,0.1)] mission'>
                                <div className='transition-[background-color] duration-[0.3s] px-[38px] py-10 border-r-[rgba(0,0,0,0.1)] border-r border-solid'>
                                    <div className='bg-[color:#b9e97d] justify-center items-center min-w-[40px] max-w-[40px] min-h-[40px] max-h-10 flex overflow-hidden rounded-[50%]'><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660254cd69487388cc0edb7f_our-mission.svg" alt="" className='align-middle max-w-full inline-block'/></div>
                                    <div className='mt-[40px]'>
                                        <h5 className='text-[color:var(--title)] text-lg font-medium leading-[150%] mt-0 mb-2'>Our Mission</h5>
                                        <p className='mb-0'>We are on a mission to empower our clients, employees, and partners by delivering innovative solutions that transform challenges into opportunities.</p>
                                    </div>
                                </div>
                                <div className='transition-[background-color] duration-[0.3s] px-[38px] py-10 border-r-[rgba(0,0,0,0.1)] border-r border-solid'>
                                    <div className='bg-[color:#b9e97d] justify-center items-center min-w-[40px] max-w-[40px] min-h-[40px] max-h-10 flex overflow-hidden rounded-[50%]'><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660257b2469cbfb12b923158_ic-mission-1.svg" alt="" className='align-middle max-w-full inline-block'/></div>
                                    <div className='mt-[40px]'>
                                        <h5 className='text-[color:var(--title)] text-lg font-medium leading-[150%] mt-0 mb-2'>Innovation</h5>
                                        <p className='mb-0'>Innovation is at the heart of our mission. We continuously strive to pioneer new ideas, embrace emerging technologies, and stay ahead of the curve. Innovation begins with an open mind.</p>
                                    </div>
                                </div>
                                <div className='grid-area'><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660253bc14aa60dcb6f3c58b_mission-1-p-500.jpg" alt="" className='object-cover w-full h-full align-middle max-w-full inline-block'/></div>
                                <div className='grid-area'><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660253bc3924a8989707a3db_mission-2-p-500.jpg" alt="" className='object-cover w-full h-full align-middle max-w-full inline-block'/></div>
                                <div className='transition-[background-color] duration-[0.3s] px-[38px] py-10 border-r-[rgba(0,0,0,0.1)] border-r border-solid'>
                                    <div className='bg-[color:#b9e97d] justify-center items-center min-w-[40px] max-w-[40px] min-h-[40px] max-h-10 flex overflow-hidden rounded-[50%]'><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660257c114f892f3c49ee45d_ic-mission-2.svg" alt="" className='align-middle max-w-full inline-block'/></div>
                                    <div className='mt-[40px]'>
                                        <h5 className='text-[color:var(--title)] text-lg font-medium leading-[150%] mt-0 mb-2'>Our Values</h5>
                                        <p className='mb-0'>our values serve as the compass guiding our actions, shaping our culture, and defining who we are. we strive to create an environment where excellence, integrity, and collaboration.</p>
                                    </div>
                                </div>
                                <div className='transition-[background-color] duration-[0.3s] px-[38px] py-10 border-r-[rgba(0,0,0,0.1)] border-r border-solid'>
                                    <div className='bg-[color:#b9e97d] justify-center items-center min-w-[40px] max-w-[40px] min-h-[40px] max-h-10 flex overflow-hidden rounded-[50%]'><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660254cd69487388cc0edb7f_our-mission.svg" alt="" className='align-middle max-w-full inline-block'/></div>
                                    <div className='mt-[40px]'>
                                        <h5 className='text-[color:var(--title)] text-lg font-medium leading-[150%] mt-0 mb-2'>Collaboration</h5>
                                        <p className='mb-0'>We believe that great achievements arise from collective efforts. Collaboration is ingrained in our DNA, empowering our teams to work share ideas, and achieve goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                            <div className='mb-[20px]'>
                                <div className='text-black text-sm font-medium leading-[100%] mb-1'>Members</div>
                                <h2 className='text-[color:var(--title)] text-4xl font-medium leading-[150%] mt-0 mb-0'>Meet Our Team</h2>
                            </div>
                        <div className="gap-x-[60px] items-center flex">
                            <div className='gap-x-6 w-full grid-rows-[auto] grid team-wrap'>
                                <div className='w-full'>
                                    <div className='bg-[#f2f4ef] w-full overflow-hidden rounded-lg'><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660259657fa741bfafe8d0e6_team-thumb-01-p-500.jpg" alt="women" className='object-cover w-full align-middle max-w-full inline-block team-image'/></div>
                                    <div className='mt-[10px]'>
                                        <div className='text-black text-lg leading-[150%]'>Esther Howards</div>
                                        <div>Founder & CEO</div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='bg-[#f2f4ef] w-full overflow-hidden rounded-lg'><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602596612a7255a6b9a8674_team-thumb-02-p-500.jpg" alt="men" className='object-cover w-full team-image align-middle max-w-full inline-block'/></div>
                                    <div className='mt-[10px]'>
                                        <div className='text-black text-lg leading-[150%]'>Ronald Richard</div>
                                        <div>Team Leader</div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='bg-[#f2f4ef] w-full overflow-hidden rounded-lg'><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602596529abfc8a699acd47_team-thumb-03-p-500.jpg" alt="women" className='object-cover w-full team-image align-middle max-w-full inline-block'/></div>
                                    <div className='mt-[10px]'>
                                        <div className='text-black text-lg leading-[150%]'>Bessie Cooper</div>
                                        <div>Sales Executive</div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='bg-[#f2f4ef] w-full overflow-hidden rounded-lg'><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66025965c6196bab90fd5386_team-thumb-04-p-500.jpg" alt="men" className='object-cover w-full team-image align-middle max-w-full inline-block'/></div>
                                    <div className='mt-[10px]'>
                                        <div className='text-black text-lg leading-[150%]'>Cameron Williamson</div>
                                        <div>Marketing Manager</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                            <div className='mb-[20px]'>
                                <div className='text-black text-sm font-medium leading-[100%] mb-1'>Our Blogs</div>
                                <h2 className='text-black text-4xl font-medium leading-[150%] mb-2.5 my-0'>Articles & Resource</h2>
                            </div>
                        <div className="gap-x-[60px] items-center flex">
                            <div className='gap-x-10 gap-y-10 grid-rows-[auto] blogs-wrap grid'>
                                <div className='flex articles'>
                                    <a href="/blogs" className='w-full no-underline max-w-full inline-block'>
                                        <div className='w-full overflow-hidden rounded-t-lg'><img src="https://assets-global.website-files.com/65f97ac947fa88734712d3fb/65fbbd05746b8c70d026eaf9_blog-thumb-01-p-500.jpg" alt="people talking" className='img-blogs'/></div>
                                        <div className='gap-y-[34px] flex-col justify-between items-start flex pt-[25px] pb-[30px] px-[25px] rounded-br-lg rounded-bl-lg border-b-[rgba(0,0,0,0.1)] border-x-[rgba(0,0,0,0.1)] border-b border-solid border-l border-r'>
                                            <div className='gap-x-2 items-center text-xs leading-[150%]'>
                                                <div className='flex'>
                                                    <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fbbfe51836f4b9d860e026_ic-date.svg" alt="calendar" className='align-middle max-w-full inline-block'/>
                                                    <div className='ml-[10px]'>Mar 21, 2024</div>
                                                </div>
                                                <h5 className='font-normal text-lg leading-[150%] mb-0 mt-[10px]'>Beyond the blueprint crafting your unique success structure</h5>
                                            </div>
                                            <div className='gap-y-0.5 text-black flex-col text-sm leading-[100%] flex]'>Read More<div className='underline h-[1px]'></div></div>
                                        </div>
                                    </a>
                                </div>
                                <div className='flex articles'>
                                    <a href="/blogs" className='w-full no-underline max-w-full inline-block'>
                                        <div className='w-full overflow-hidden rounded-t-lg'><img src="https://assets-global.website-files.com/65f97ac947fa88734712d3fb/65fbbd287e4ee1d7a1062719_blog-thumb-02-p-500.jpg" alt="people talking" className='img-blogs'/></div>
                                        <div className='gap-y-[34px] flex-col justify-between items-start flex pt-[25px] pb-[30px] px-[25px] rounded-br-lg rounded-bl-lg border-b-[rgba(0,0,0,0.1)] border-x-[rgba(0,0,0,0.1)] border-b border-solid border-l border-r'>
                                            <div className='gap-x-2 items-center text-xs leading-[150%]'>
                                                <div className='flex'>
                                                    <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fbbfe51836f4b9d860e026_ic-date.svg" alt="calendar" className='align-middle max-w-full inline-block'/>
                                                    <div className='ml-[10px]'>Mar 21, 2024</div>
                                                </div>
                                                <h5 className='font-normal text-lg leading-[150%] mb-0 mt-[10px]'>Beyond the blueprint crafting your unique success structure</h5>
                                            </div>
                                            <div className='gap-y-0.5 text-black flex-col text-sm leading-[100%] flex'>Read More<div className='underline h-[1px]'></div></div>
                                        </div>
                                    </a>
                                </div>
                                <div className='flex articles'>
                                    <a href="/blogs" className='w-full no-underline max-w-full inline-block'>
                                        <div className='w-full overflow-hidden rounded-t-lg'><img src="https://assets-global.website-files.com/65f97ac947fa88734712d3fb/65fbbd530a0906bf3be0c28f_blog-thumb-03-p-500.jpg" alt="people talking" className='img-blogs'/></div>
                                        <div className='gap-y-[34px] flex-col justify-between items-start flex pt-[25px] pb-[30px] px-[25px] rounded-br-lg rounded-bl-lg border-b-[rgba(0,0,0,0.1)] border-x-[rgba(0,0,0,0.1)] border-b border-solid border-l border-r'>
                                            <div className='gap-x-2 items-center text-xs leading-[150%]'>
                                                <div className='flex'>
                                                    <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fbbfe51836f4b9d860e026_ic-date.svg" alt="calendar" className='align-middle max-w-full inline-block'/>
                                                    <div className='ml-[10px]'>Mar 21, 2024</div>
                                                </div>
                                                <h5 className='font-normal text-lg leading-[150%] mb-0 mt-[10px]'>Beyond the blueprint crafting your unique success structure</h5>
                                            </div>
                                            <div className='gap-y-0.5 text-black flex-col text-sm leading-[100%] flex'>Read More<div className='underline h-[1px]'></div></div>
                                        </div>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className='mb-[20px]'>
                            <div className='text-black text-sm font-medium leading-[100%] mb-1'>FAQ’s</div>
                            <h2 className='text-black text-4xl font-medium leading-[150%] mb-2.5 my-0'>Frequently Asked Questions</h2>
                        </div>
                        <div className='items-center faq-wrap'>
                            <div className='w-full overflow-hidden rounded-lg faq-img'><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65facacc49581dc9c4eda0a4_faq-p-500.jpg" alt="men on computer" className='align-middle max-w-full inline-block w-full'/></div>
                            <div className='max-w-full w-full faq-data'>
                                <div className='w-full text-left inline-block mx-auto pt-0 border-b-[rgba(0,0,0,0.2)] faq-info'>
                                    <Accordion items={items} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}