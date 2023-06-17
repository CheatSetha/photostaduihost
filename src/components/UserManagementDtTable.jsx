
import moment from "moment"
import {useTheme} from "next-themes"
import Image from "next/image"
import React, {useEffect, useState} from "react"
import {AiOutlineCloseCircle} from "react-icons/ai"
import DataTable, {createTheme} from "react-data-table-component"
import {AiOutlinePlusCircle} from "react-icons/ai"
import DeleteIcon from "@/components/icon/DeleteIcon"
import usersData from "@/mockdata/users.json"



export default function UserManagementTable () {
   
const [users, setUsers] = useState(usersData)
    const [filterText, setFilterText] = useState("")

    const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

   //fileter user by user first name and last name
    const filteredItems = users.filter(
        (item) =>
            item.first_name && item.first_name.toLowerCase().includes(filterText.toLowerCase()) ||
         
            item.last_name && item.last_name.toLowerCase().includes(filterText.toLowerCase())
    )
    
    // handle delete user by id
    const handleDeleteUser = (id) => {
        const filteredData = users.filter((item) => item.id !== id)
        // select user by id
        const selectedUser = users.filter((item) => item.id === id)
        // get user name
        const userName = selectedUser[0].first_name + " " + selectedUser[0].last_name
        // alert message with deleted user name
        alert(`user ${userName} has been deleted successfully`)

       setUsers(filteredData)

    }

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

    const columns = [
        {
            name: "Name",

            selector: (row) => row.first_name + " " + row.last_name,
        },
        {
            name: "Email",
            selector: (row) => row.email,
        },
        {
            name: "Role",
            selector: (row) => row.roles,
        },
       


        {
            name: "Actions",
            selector: (row) => (
                <div>
                    <button className='rounded-main p-2.5  text-white  '>
                        <Image
                            src={"/assets/icons/edit.svg"}
                            width={25}
                            height={25}
                            alt='delete icon'
                            className='dark:invert'
                        />
                    </button>
                    <button onClick={()=>handleDeleteUser(row.id)} className='rounded-main p-2.5  text-white '>
                       
                        <DeleteIcon stroke={"red"}/>
                    </button>
                </div>
            ),
        },
    ]
   
    // safe
    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle)
                setFilterText("")
            }
        }

        return (
            <div className='flex justify-between flex-wrap w-full p-0 '>
                <form className='flex items-center'>
                    <label
                        htmlFor='simple-search'
                        className='sr-only'
                    >
                        Search
                    </label>
                    <div className='relative'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <svg
                                aria-hidden='true'
                                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                        </div>
                        <input
                            onChange={(e) => setFilterText(e.target.value)}
                            onClear={handleClear}
                            filterText={filterText}
                            type='text'
                            id='simple-search'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-secondary  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Search'
                            required
                        />
                    </div>
                </form>
                <button
                    // onClick={() => window.my_modal_4.showModal()}
                    onClick={() => window.my_modal_4.showModal()}
                    className='rounded-main px-5 max-sm:px-2 p-2.5 bg-black text-white  dark:bg-primary'
                >
                    <AiOutlinePlusCircle className='inline text-2xl'/>{" "}
                    <span className='max-sm:hidden'>Add new User</span>
                </button>
                {/* You can open the modal using ID.showModal() method */}
                {/* <button className="btn" onClick={()=>window.my_modal_4.showModal()}>open modal</button> */}
                <dialog
                    id='my_modal_4'
                    className='modal'
                >
                    <form
                        method='dialog'
                        className='modal-box h-[100vh] overflow-auto w-11/12  max-w-5xl'
                    >
                        <button className='btn absolute  right-2 top-2  w-12 h-10 p-1 rounded-full text-center'>
                            <AiOutlineCloseCircle className='text-2xl'/>
                        </button>
                        <h2 className='text-center text-2xl  text-light font-semibold'>
                            Create Tutorial
                        </h2>
                        <p className='py-4'>CkEditor here down below</p>
                        <form className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className=' w-full'>
                                <label
                                    for='first_name'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Title
                                </label>
                                <input
                                    type='text'
                                    id='first_name'
                                    className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='John'
                                    required
                                />
                            </div>
                            <div className=' h-[43px] w-full'>
                                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                    Thumbnail
                                </label>
                                <input
                                    type='file'
                                    className='file-input h-full  file-input-bordered w-full '
                                    required
                                />
                            </div>
                            <div className='md:mb-5 mb-2 md:col-span-2 w-full'>
                                <label
                                    for='first_name'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Description
                                </label>
                                <textarea
                                    id='message'
                                    rows='4'
                                    className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='Write your description here...'
                                ></textarea>
                            </div>
                        </form>
                        <div className={"z-50 h-[100vh]"}>
                     
                           
                        </div>
                        {/* <div className="modal-action">


    </div> */}
                    </form>
                </dialog>
                {/* end of modal */}
            </div>
        )
    }, [filterText, resetPaginationToggle])
    // safe to use
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
    // chage theme of the table to dark and light
    const themeColor = useTheme()
    console.log(themeColor.theme)
    return (
        <>
            <DataTable
                style={{backgroundColor: "black"}}
                //  className="bg-light dark:bg-primary"
                columns={columns}
                data={filteredItems}
                pagination
                highlightOnHover
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                // theme={ `theme === 'dark' ? 'dark' : 'light'`}
                // if themeColor.theme === 'dark' ? 'dark' : 'light'
                theme={themeColor.theme === "dark" ? "dark" : "light"}
                customStyles={
                    themeColor.theme === "dark"
                        ? customeStyleDark
                        : customeStylesLight
                }
            />
        </>
    )
}