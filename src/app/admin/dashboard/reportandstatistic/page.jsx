import Image from "next/image"
import { DoughnutChart } from "@/components/DoughnutChart"
import Link from "next/link"

export const Page = () => {
	return (
		<div className={"w-full p-5 mx-auto h-full dark:bg-primary"}>
			<h1
				className={"text-[32px] text-light dark:text-white font-semibold mb-5"}
			>
				Reporting And Statistics
			</h1>
			{/* breadcrumbs */}
			<div className='text-sm breadcrumbs mb-3'>
				<ul className='font-extralight text-light dark:text-white'>
					<li>
						<Link href="/admin/dashboard">Admin</Link>
					</li>
					<li>
						<Link href={'/admin/dashboard/tutorialmanagement'}>Tutorial Management</Link>
					</li>
					
				</ul>
			</div>
			{/* end of header section */}

			<div className='grid grid-cols-1 h-screen md:grid-cols-4 gap-4'>
				{/*box 1*/}
				<div
					className={
						"bg-white shadow-sm   dark:bg-secondary flex flex-col mainround h-[168px] justify-center items-center dark:box-dark"
					}
				>
					<p className={"font-extralight text-light dark:text-white"}>
						Tutorial Views
					</p>
					<h2 className={"text-[40px] font-black text-light dark:text-white"}>
						96K
					</h2>
				</div>
				{/*box 2*/}
				<div
					className={
						"bg-white shadow-sm dark:bg-secondary col-span-1  md:col-span-2  flex mainround h-[168px] justify-around items-center "
					}
				>
					<div>
						<p className={"font-extralight text-light dark:text-white"}>
							Average Users
						</p>
						<div className={"flex space-x-5 "}>
							<div>
								<h2
									className={
										"font-black text-[32px] text-light dark:text-white"
									}
								>
									79
								</h2>
								<p className='text-light dark:text-dark'>New User</p>
							</div>
							<div>
								<h2
									className={
										"font-black text-[32px] text-light dark:text-white"
									}
								>
									79
								</h2>
								<p className='text-light dark:text-dark'>New User</p>
							</div>
						</div>
					</div>
					<div>
						<Image
							width={90}
							height={90}
							src={"/assets/icons/profile2user.svg"}
							className={"dark:invert"}
							alt={"2 user "}
						/>
					</div>
				</div>
				{/*box 3*/}
				<div
					className={
						"bg-white shadow-sm dark:bg-secondary flex flex-col mainround h-[168px] justify-center items-center "
					}
				>
					<p className={"font-extralight text-light dark:text-dark"}>
						Total of Users
					</p>
					<h2 className={"text-[40px] font-black text-light dark:text-dark"}>
						168
					</h2>
				</div>
				{/*box 4*/}
				<div
					className={
						"bg-white shadow-sm dark:bg-secondary  md:col-span-3 row-span-2 flex flex-col mainround h-[350px]  justify-center items-center "
					}
				>
					{/*<p className={'font-extralight'}>*/}
					{/*    Reports*/}
					{/*</p>*/}
					<div className={"w-full h-[90%] p-2.5 py-4 "}>
						<p
							className={
								"font-extralight text-center text-light dark:text-dark"
							}
						>
							Reports
						</p>
						<DoughnutChart />
					</div>
				</div>
				{/*box 5*/}
				<div
					className={
						"bg-white shadow-sm dark:bg-secondary flex flex-col mainround h-[168px] justify-center items-center "
					}
				>
					<p className={"font-extralight text-light dark:text-dark"}>
						Total of Edited photos
					</p>
					<h2 className={"text-[40px] font-black text-light dark:text-dark"}>
						932
					</h2>
				</div>

				{/*box 6*/}
				<div
					className={
						"bg-white shadow-sm dark:bg-secondary flex flex-col mainround  justify-center items-center h-[168px]"
					}
				>
					<p className={"font-extralight text-light dark:text-dark "}>
						Total of Requested Tutorials
					</p>
					<h2 className={"text-[40px] font-black text-light dark:text-dark"}>
						2
					</h2>
				</div>

				{/*box 7*/}
				<div
					className={
						"bg-white dark:bg-secondary shadow-sm flex flex-col md:col-start-4 md:col-end-4   mainround  justify-center items-center h-[168px]"
					}
				>
					<p className={"font-extralight text-light dark:text-dark"}>
						Total of Tutorials
					</p>
					<h2 className={"text-[40px] font-black text-light dark:text-dark"}>
						2
					</h2>
				</div>
			</div>
		</div>
	)
}
export default Page
