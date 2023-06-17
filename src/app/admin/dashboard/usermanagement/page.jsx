"use client"

import UserManagementTable from "@/components/UserManagementDtTable"
import Link from "next/link"
import React from "react"


export default function Page() {
	return (
		<div className={"w-full p-5 mx-auto db-bg h-full dark:bg-primary"}>
			<h1
				className={"text-[32px] text-light dark:text-white font-semibold mb-5"}
			>User Management
			</h1>
			{/* breadcrumbs */}
			<div className='text-sm breadcrumbs mb-3'>
				<ul className='font-extralight text-light dark:text-white'>
					<li>
						<Link href={"/admin/dashboard"}>Admin</Link>
					</li>
					<li>
						<Link href={"/admin/dashboard/usermanagement"}>
							User Management
						</Link>
					</li>
				</ul>
			</div>
			<section>
				<div className="h-screen">
					<UserManagementTable />
				</div>
			</section>
		</div>
	)
}
