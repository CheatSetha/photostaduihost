"use client"
import React from "react"

import DataTableComponent from "@/components/TtrDataTable";

export default function Page() {
    return (
        <div className={"w-full p-5 mx-auto db-bg h-full dark:bg-primary"}>
            <h1
                className={"text-[32px] text-light dark:text-white font-semibold mb-5"}
            >
                Tutorial Management
            </h1>
            {/* breadcrumbs */}
            <div className='text-sm breadcrumbs'>
                <ul className='font-extralight text-light dark:text-white'>
                    <li>
                        <a>Admin</a>
                    </li>
                    <li>
                        <a>Tutorial Management</a>
                    </li>
                </ul>
            </div>
            <section>
          
                <div>
                    {/*<TutorialDatatable /> */}
                    {/* <DataTableComponent/> */}
                
                </div>
            </section>
        </div>
    )
}
