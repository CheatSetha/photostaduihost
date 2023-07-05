import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const SidebarMenu = () => {
  const style = {
    // backgroundColor: 'red',
    color: 'white',
    transition: 'background-color 0.3s ease',
    ':hover': {
      color: 'white',
    },
  };

  return (
    <div className="sidebar overflow-auto">
      <ul className="menu h-full overflow-y-auto text-[16px] bg-black dark:bg-secondary text-white  w-[300px] ">
        <div className="sticky z-50 top-0   ">
          <div className="w-full h-[130px] flex justify-center items-center">
            <Image
              src={"/assets/image/mainlogov2.png"}
              width={170}
              height={80}
              alt="logo"
            />
          </div>
          <hr className="bg-white w-full dark:bg-primary" />
        </div>
        <li style={style} className=" mt-6 ">
          <Link href={"/admin/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <details open>
          <summary className="aside-item ">Statistic</summary>
            <ul>
              <li className="aside-item ">
                <Link href={'/admin/dashboard/reportandstatistic'}>Overview</Link>
              </li>
              <li className="aside-item ">
                <Link href={
											"/admin/dashboard/reportandstatistic/certificateoverview"
										}>Certificate</Link>
              </li>
              <li className="aside-item ">
                <Link href={
											"/admin/dashboard/reportandstatistic/watermarkoverview"
										}>Watermark</Link>
              </li>
            </ul>
          </details>
        </li>
        <li className="aside-item ">
          <Link href={"/admin/dashboard/usermanagement"}>User Management</Link>
        </li>
        <li>
          <details>
            <summary  className="aside-item text-white hover:text-white hover:bg-green-400">Tutorial Management</summary>
            <ul>
            <li className="aside-item ">
                <Link href={"/admin/dashboard/tutorialmanagement"}>Tutorial</Link>
              </li>
              <li className="aside-item ">
                <Link 	href={"/admin/dashboard/tutorialmanagement/listofrequest"}>Client Requests</Link>
              </li>
              <li className="aside-item ">
                <Link href={"/admin/dashboard/tutorialmanagement/readedrequest"}>Reviewed Request</Link>
              </li>
              <li className="aside-item ">
                <Link href={"/admin/dashboard/tutorialmanagement/unread"}>Unread Request</Link>
              </li>
            </ul>
          </details>
        </li>
        <li className="aside-item ">
          <Link href={
											"/admin/dashboard/tutorialmanagement/seoconfiguration"
										}>SEO Configuration</Link>
        </li>
        <li>
          <details>
            <summary className="aside-items">Setting</summary>
            <ul>
            <li className="aside-item ">
                <Link href={"/admin/dashboard/setting/profile"} >User Profile</Link>
              </li>
              <li className="aside-item ">
                <Link href={"/admin/dashboard/setting/changepassword"}>Change Password</Link>
              </li>
              <li className="aside-item ">
                <Link href={"/admin/dashboard/tutorialmanagement/readedrequest"}>Reviewed Request</Link>
              </li>
              <li className="aside-item ">
                <a>Log out</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
