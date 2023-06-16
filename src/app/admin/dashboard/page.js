import React from 'react'
import { RiUserShared2Line } from 'react-icons/ri'
import { FcEditImage } from 'react-icons/fc'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineRise } from 'react-icons/ai'
import BarChart from '@/components/BarChart'
export default function page() {
    return (
        <div className=' db-bg dark:bg-primary  rounded-md shadow'>
            <main>
                <div className='mt-5 ml-7'>
                    <h1 className='text-[32px] font-semibold dark:text-white mb-5'>Dashboard Overview</h1>
                    <div className="text-[14px]  font-extralight text-gray-900 breadcrumbs dark:text-white">
                        <ul>
                            <li><a>Admin</a></li>
                            <li><a>dashboard overview</a></li>
                        </ul>
                    </div>
                </div>
                {/* start Daily Edit */}
                <div className='grid lg:grid-cols-4 gap-4 p-4'>
                    <div className='col-span-1 bg-white flex justify-between w-full  p-4 rounded-main dark:bg-secondary'>
                        <div className='flex flex-col w-full pb-4'>
                            <h1 className='text-2xl text-light font-bold dark:text-white'>
                                {" "}
                                Daily Edit{" "}
                                <span className='text-[17px] font-light text-light dark:text-white'>
                                    | This Year
                                </span>
                            </h1>
                            <div className='flex mt-4'>
                                <div className='bg-blue-300 rounded-full w-[80px] h-[80px] object-cover flex items-center justify-center'>
                                    <span className='  text-[50px] '> <FcEditImage /> </span>
                                </div>
                                <div className='mt-4 ml-5 dark:text-white'>
                                    <h1 className='text-xl font-bold  '>125 K</h1>
                                    <p>
                                        <span className='text-cyan-500'>60%</span> increase
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end Daily Edit */}
                    <div className='col-span-1 bg-white flex justify-between w-full  p-4  rounded-main dark:bg-secondary'>
                        <div className='flex flex-col w-full pb-4'>
                            <h1 className='text-2xl font-bold dark:text-white'> Active user <span className='text-[17px] font-light'>| This Month</span></h1>
                            <div className='flex mt-4 dark:text-white'>
                                <div className='bg-blue-300 rounded-full w-[80px] h-[80px] object-cover flex items-center justify-center'>
                                    <span className='  text-[50px] '> <FiUsers /></span>
                                </div>
                                <div className='mt-4 ml-5'>
                                    <h1 className='text-xl font-bold'>1.4 K </h1>
                                    <p>
                                        <span className='text-cyan-500'>50%</span> increase
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* start Unread Requests */}
                    <div className='col-span-1 bg-white flex justify-between w-full  p-4 rounded-main dark:bg-secondary'>
                        <div className='flex flex-col w-full pb-4'>
                            <h1 className='text-2xl font-bold dark:text-white'> Unread Requests <span className='text-[17px] font-light'>| Today</span></h1>
                            <div className='flex mt-4 dark:text-white'>
                                <div className='bg-blue-300 rounded-full w-[80px] h-[80px] object-cover flex items-center justify-center'>
                                    <span className='  text-[50px] '> <RiUserShared2Line /></span>
                                </div>
                                <div className='mt-4 ml-5'>
                                    <h1 className='text-xl font-bold'>100</h1>
                                    <p>
                                        <span className='text-cyan-500'>60%</span> increase
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end Unread Requests */}
                    {/* start New Requests */}
                    <div className='col-span-1 bg-white flex justify-between w-full p-4 rounded-main dark:bg-secondary '>
                        <div className='flex flex-col w-full pb-4'>
                            <h1 className='text-2xl font-bold dark:text-white'> New Requests <span className='text-[17px] font-light'>| This Month</span></h1>
                            <div className='flex mt-4 dark:text-white'>
                                <div className='bg-blue-300 rounded-full w-[80px] h-[80px] object-cover flex items-center justify-center'>
                                    <span className='  text-[50px] '><AiOutlineRise /></span>
                                </div>
                                <div className='mt-4 ml-5'>
                                    <h1 className='text-xl font-bold'>90</h1>
                                    <p>
                                        <span className='text-cyan-500'>50%</span> increase
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end New Requests */}
                <div className='lg:ml-4 flex max-sm:flex-wrap max-sm:ml-5 max-sm:mr-5 max-lg:flex-wrap max-lg:mr-5 max-lg:ml-5 max:lg:flex-wrap'>
                    <BarChart />
                    <div className='flex  max-sm:mt-4 lg:mt-0 lg:ml-5 lg:w-[390px] md:flex-wrap flex-col md:mt-4 max-md:w-[700px] max-lg:w-full '>
                        {/* start Recent Activity */}
                        <div className='col-span-1 bg-white flex justify-between  p-4 rounded-lg dark:bg-secondary'>
                            <div className='flex flex-col'>
                                <h1 className='text-xl font-bold  dark:text-white'> Recent Activity | Today <span className='text-[17px] font-light'></span></h1>
                                <div className='flex mt-4'>
                                    <div className='mt-1 ml-5'>
                                        <ol class="relative border-l border-gray-200 dark:border-gray-700 ">
                                            <li class="mb-5 ml-6">
                                                <span class="absolute flex items-center justify-center w-3 h-3 bg-blue-100 rounded-full -left-2 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-500">
                                                </span>
                                                <time class="block mb-2 text-sm font-normal leading-none text-light dark:text-white">Released on January 13th, 2023</time>
                                                <p class="mb-2 text-base font-normal text-gray-500 dark:text-white"> Generate Watermark two min ago </p>
                                            </li>
                                            <li class="mb-5 ml-6">
                                                <span class="absolute flex items-center justify-center w-3 h-3 bg-blue-100 rounded-full -left-2 ring-8 ring-white dark:ring-gray-900 dark:bg-red-500">
                                                </span>
                                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">Released on December 18th, 2023</time>
                                                <p class="text-base font-normal text-gray-500 dark:text-white">Generate certificate 2 min ago</p>
                                            </li>
                                            <li class="mb-5 ml-6">
                                                <span class="absolute flex items-center justify-center w-3 h-3 bg-blue-100 rounded-full -left-2 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-500">
                                                </span>
                                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">Released on December 7th, 2023</time>
                                                <p class="text-base font-normal text-gray-500 dark:text-white">Generate watemark 3 min ago</p>
                                            </li>
                                            <li class="mb-5 ml-6">
                                                <span class="absolute flex items-center justify-center w-3 h-3 bg-blue-100 rounded-full -left-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-500">
                                                </span>
                                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">Released on December 7th, 2023</time>
                                                <p class="text-base font-normal text-gray-500 dark:text-white">Generate certificate 4 h ago</p>
                                            </li>
                                            <li class="ml-5">
                                                <span class="absolute flex items-center justify-center w-3 h-3 bg-blue-100 rounded-full -left-2 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-500">
                                                </span>
                                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">Released on December 2nd, 2023</time>
                                                <p class="text-base font-normal text-gray-500 dark:text-white">Get started with dozens of web .</p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            {/* end Recent Activity */}
                        </div>
                        {/* start Traffic by Website  */}
                        <div className='col-span-1 bg-white dark:bg-secondary flex justify-between w-full p-4 rounded-lg mt-4'>
                            <div className='flex flex-col w-full pb-4 dark:text-white'>
                                <h1 className='text-xl font-bold'> Traffic by Website</h1>
                                <div className='flex mt-4'>
                                    <div className='ml-5 '>
                                        <h1>Google <progress className="progress progress-secondary w-56 ml-5 max-sm:w-44" value="90" max="100" ></progress> </h1>
                                        <h1>YouTube <progress className="progress progress-info w-56 ml-3 max-sm:w-44 max-sm:ml-2" value="70" max="100"> </progress> </h1>
                                        <h1>Bing <progress className="progress progress-primary w-56 ml-10 max-sm:w-44 " value="40" max="100"></progress></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end Traffic by Website */}
                    </div>

                </div>
                {/* end BarCard */}
            </main>
        </div>
    )
}
