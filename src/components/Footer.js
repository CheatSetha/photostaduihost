"use client"
import React from "react"
import {BsFacebook, BsTelegram, BsFillTelephoneFill} from "react-icons/bs"
import {FaFacebook, FaInstagramSquare, FaTelegram} from "react-icons/fa"
import {AiFillHome, AiFillInstagram} from "react-icons/ai"
import {GiRotaryPhone} from "react-icons/gi"

import {MdEmail} from "react-icons/md"
import {FaRegCopyright} from "react-icons/fa"
import {usePathname} from "next/navigation"
import Image from "next/image"
import Link from "next/link";
import {useTheme} from "next-themes";

const MainFooter = () => {
    const pathName = usePathname()
    console.log(pathName)

    // theme
    const {theme, setTheme} = useTheme()

    if (pathName.includes("/login")) {
        return null
    }

    if (pathName.includes("/signup")) return null
    if (pathName.includes('/dashboard')) return null
    if (pathName.includes('/dashboard/*')) return null
    return (
        <div className='bg-white   dark:bg-[#1e1e1e]'>
            <footer>
                <div
                    className='footer dark:bg-[#1e1e1e] dark:text-white place-items-center md:flex md:px-5 md:justify-between md:items-start text-center md:text-start py-10 bg-white text-base-content w-full xl:w-[1290px] mx-auto '>

                    <div className='place-items-center  md:place-items-start'>
                        <p className='font-bold text-black dark:text-white text-3xl mb-5 '>PhotoStad</p>

                        <Link href={"/"}>
                            {theme === "light" ? (
                                <Image
                                    width={131}
                                    height={131}
                                    className='md:w-[131px] w-[100px]'
                                    src='/assets/image/mainlogo-blackv2.png'
                                    alt='logo img'
                                />
                            ) : (
                                <Image
                                    width={131}
                                    height={131}
                                    className='md:w-[131px] w-[100px]'
                                    src='/assets/image/mainlogov2.png'
                                    alt='logo dark img'
                                />
                            )}
                        </Link>
                        <p className='w-[253px]'>
                            Here you can use for custom image and generate certificate.
                        </p>
                    </div>
                    <div className='place-items-center md:place-items-start'>
                        <div className='font-bold text-black dark:text-white'>PRODUCTS</div>
                        <a className='link link-hover '>Home</a>
                        <a className='link link-hover '>Setting</a>
                        <a className='link link-hover'>Contact Us</a>
                        <a className='link link-hover'>About Us</a>
                    </div>
                    <div className='place-items-center md:place-items-start'>
					<span className='font-bold text-black dark:text-white'>
						USEFUL LINKS
					</span>
                        <a className='link link-hover'>Certificate</a>
                        <a className='link link-hover'>Watermark</a>
                        <a className='link link-hover'>Account</a>
                    </div>
                    <div className='place-items-center md:place-items-start '>
					<span className='font-bold text-black dark:text-white'>
						CONTACT US
					</span>
                        <a className='link link-hover'>
                            {" "}
                            <AiFillHome className='inline me-2'/> Phnom Penh
                        </a>
                        <a className='link link-hover'>
                            {" "}
                            <MdEmail className='inline me-2'/> istad@gmail.com
                        </a>
                        <a className='link link-hover'>
                            {" "}
                            <BsFillTelephoneFill className='inline me-2'/> +885 812661909
                        </a>
                        <a className='link link-hover'>
                            {" "}
                            <GiRotaryPhone className='inline me-2'/>
                            +885 9954245
                        </a>
                    </div>
                </div>
                {" "}
                <hr/>
                <div
                    className='flex flex-wrap justify-center  lg:justify-between py-4  max-md:flex-col w-[90%] xl:w-[1290px] mx-auto mt-1 dark:text-white font-bold'>
                    <p className={'text-[12px] max-md:mb-3 max-md:text-center md:text-xl'}>
                        {" "}
                        <FaRegCopyright className='inline'/> 2023 PhotoSTAD | All Rights

                    </p>
                    <div className='flex space-x-3 items-center cursor-pointer justify-center text-[30px]'>
                        <FaFacebook/> <AiFillInstagram className={'text-4xl'}/> <FaTelegram/>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default MainFooter
