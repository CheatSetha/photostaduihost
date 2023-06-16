"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import React, { useState } from "react"
import DataTable, { createTheme } from "react-data-table-component"

const FakeDataTable = () => {
	const themeColor = useTheme()
	const [data, setData] = useState([
		{ id: 1, message: "Request Tutorial 1", date: "2023-06-01", isRead: false },
		{ id: 2, message: "Request Tutorial 2", date: "2023-06-02", isRead: false },
		{ id: 3, message: "Request Tutorial 3", date: "2023-06-03", isRead: false },
		{ id: 4, message: "Request Tutorial 4", date: "2023-06-04", isRead: false },
		{ id: 5, message: "Request Tutorial 5", date: "2023-06-05", isRead: false },
	])

	const handleDelete = (id) => {
		const updatedData = data.filter((item) => item.id !== id)
		setData(updatedData)
	}

	const handleMarkAsRead = (id) => {
		const updatedData = data.map((item) => {
			if (item.id === id) {
				return { ...item, isRead: true }
			}
			return item
		})
		setData(updatedData)
	}
	// react data table component
	createTheme("light", {
		text: {
			light: "#1b254b",
			dark: "white",
		},
		rows: {
			style: {
				backgroundColor: "white",
				"&:nth-child(odd)": {
					backgroundColor: "black",
				},
				
			},
		},

		background: {
			default: "#f5f8fe",
		},
	})
	createTheme("dark", {
		text: {
			light: "#1b254b",
			dark: "white",
		},
		background: {
			default: "#111c44",
		},
		rows: {
			style: {
				backgroundColor: "#111c44",
				"&:nth-child(odd)": {
					backgroundColor: "#1b254b",
				},
			},
		},
	})
	const customeStylesLight = {
		headCells: {
			style: {
				fontSize: "16px",
			},
		},
		//set odd row background color to whitesmoke and even row to white
		rows: {
			style: {
				backgroundColor: "white",
				"&:nth-child(odd)": {
					backgroundColor: "#f5f8fe",
				},
			},
		},
		header: {
			style: {
				padding: 0,
			},
		},
	}
	const customeStyleDark = {
		headCells: {
			style: {
				fontSize: "16px",
			},
		},
		//set odd row background color to whitesmoke and even row to white
		rows: {
			style: {
				backgroundColor: "#0b1437",
				"&:nth-child(odd)": {
					backgroundColor: "#111c44",
				},
			},
		},
		header: {
			style: {
				padding: 0,
			},
		},
	}

	const columns = [
		{
			name: "Request Messages",
			selector: "message",
			sortable: true,
		},
		{
			name: "Date",
			selector: "date",
			sortable: true,
		},
		{
			name: "Actions",
            width:"300px",
			cell: (row) => (
				<>
					<button className="flex border-none items-center rounded-main mr-3 space-x-2 text-white p-2 px-3 bg-[#E85854] justify-center" onClick={() => handleDelete(row.id)}>
						<Image
							src={"/assets/icons/trush-square.svg"}
							width={25}
							height={25}
							alt='delete icon'
                          
						/>
						<span className="max-sm:hidden">Delete</span>
					</button>
					{!row.isRead && (
						<button className="flex  bg-secondary text-white rounded-main space-x-2 items-center p-2 px-3 btn-outline justify-center" onClick={() => handleMarkAsRead(row.id)}>
                            <Image
							src={"/assets/icons/chart-success.svg"}
							width={25}
							height={25}
							alt='delete icon'
							className=' invert'
						/>
							<span className="max-sm:hidden">Mark as Read</span>
						</button>
					)}
				</>
			),
			ignoreRowClick: true,
			allowOverflow: true,
			button: true,
		},
	]

	return (
		<DataTable
			columns={columns}
			data={data}
            pagination
			theme={themeColor.theme === "dark" ? "dark" : "light"}
			customStyles={
				themeColor.theme === "dark" ? customeStyleDark : customeStylesLight
			}
		/>
	)
}

export default FakeDataTable
