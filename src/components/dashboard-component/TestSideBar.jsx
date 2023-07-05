"use client";

import { Sidebar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function MultiLevelDropdown() {
  return (
    <div className="h-screen text-[16px] bg-black dark:bg-secondary ">
      <div className="sticky z-50 top-0  bg-black dark:bg-secondary ">
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
      <Sidebar className="w-full dark:bg-primary  z-0" aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items className=" bg-black text-white dark:bg-secondary">
          <Sidebar.ItemGroup className="bg-black text-white dark:bg-secondary">
            <Link href={"/admin/dashboard/"}>
              <Sidebar.Item  icon={HiChartPie}>
             <span className="text-white"> Dashboard</span>
              </Sidebar.Item>
            </Link>
            <Sidebar.Collapse icon={HiShoppingBag} label="Statistic">
              <Link href={"/admin/dashboard/reportandstatistic"}>
                <Sidebar.Item href={"/admin/dashboard/reportandstatistic"}>
                  Overview
                </Sidebar.Item>
              </Link>
              <Link
                href={"/admin/dashboard/reportandstatistic/certificateoverview"}
              >
                <Sidebar.Item
                  href={
                    "/admin/dashboard/reportandstatistic/certificateoverview"
                  }
                >
                  Certificate
                </Sidebar.Item>
              </Link>
              <Link
                href={"/admin/dashboard/reportandstatistic/watermarkoverview"}
              >
                <Sidebar.Item
                  href={"/admin/dashboard/reportandstatistic/watermarkoverview"}
                >
                  Watermark
                </Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
            <Link href={"/admin/dashboard/usermanagement"}>
              <Sidebar.Item
                href={"/admin/dashboard/usermanagement"}
                icon={HiUser}
              >
                User Management
              </Sidebar.Item>
            </Link>
            <Sidebar.Collapse icon={HiShoppingBag} label="Tutorial Management">
              <Link href={"/admin/dashboard/tutorialmanagement"}>
                <Sidebar.Item href={"/admin/dashboard/tutorialmanagement"}>
                  Tutorial
                </Sidebar.Item>
              </Link>

              <Link href={"/admin/dashboard/tutorialmanagement/listofrequest"}>
                <Sidebar.Item
                  href={"/admin/dashboard/tutorialmanagement/listofrequest"}
                >
                  Client Requests
                </Sidebar.Item>
              </Link>
              <Sidebar.Item
                href={"/admin/dashboard/tutorialmanagement/readedrequest"}
              >
                <Link
                  href={"/admin/dashboard/tutorialmanagement/readedrequest"}
                >
                  Reviewed Request
                </Link>
              </Sidebar.Item>
              <Link href={"/admin/dashboard/tutorialmanagement/unread"}>
                <Sidebar.Item
                  href={"/admin/dashboard/tutorialmanagement/unread"}
                >
                  Unread Request
                </Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
            <Link href={"/admin/dashboard/tutorialmanagement/seoconfiguration"}>
              <Sidebar.Item
                href={"/admin/dashboard/tutorialmanagement/seoconfiguration"}
                icon={HiShoppingBag}
              >
                <p>SEO Configuration</p>
              </Sidebar.Item>
            </Link>
            <Sidebar.Collapse icon={HiShoppingBag} label="Setting">
              <Link href={"/admin/dashboard/setting/profile"}>
                <Sidebar.Item >User Profile</Sidebar.Item>
              </Link>
              <Link href={"/admin/dashboard/setting/changepassword"}>
                <Sidebar.Item >Change Password</Sidebar.Item>
              </Link>
              <Link href={"/admin/dashboard/tutorialmanagement/readedrequest"}>
                <Sidebar.Item >Reviewed Request</Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
