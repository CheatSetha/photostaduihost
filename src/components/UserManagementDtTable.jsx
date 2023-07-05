"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import DeleteIcon from "@/components/icon/DeleteIcon";
import DateRangeSelector from "./datetimecomponent/DateRangeSelector";
import CreateNewUserModal from "./modal/user/CreateNewUserModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserById, fetchUsers, selectAllUsers } from "@/redux/features/users/userSlice";
import EditUserModal from "./modal/user/EditorUserModal";
import { set } from "date-fns";

export default function UserManagementTable() {

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const dispatch = useDispatch();
  const usersData = useSelector(selectAllUsers);
  const [users,setUsers]=useState([])


  const handleDeleteUser= (id)=>{
    dispatch(deleteUserById(id))
  }

  useEffect(() => {
    dispatch(fetchUsers());
    
  }, []);
 
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
  });
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

    // set body borderRadius to 16px
  });

  const columns = [
    {
      name: "Name",

      selector: (row) => row.username,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Role",
      selector: (row) => row.roles[0].name,
    },

    {
      name: "Actions",
      selector: (row) => (
        <div>
         <EditUserModal id={row.id} email={row.email} />
          
          <button
            onClick={() => handleDeleteUser(row.id)}
            className="rounded-main p-2.5  text-white "
          >
            <DeleteIcon stroke={"red"} />
          </button>
        </div>
      ),
    },
  ];

  // safe
  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText(" ");
      }
    };

    return (
      <div className="flex  justify-between flex-wrap w-full ">
        <div className="flex">
          <form className="flex">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                onChange={(e) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-secondary  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
          <DateRangeSelector />
        </div>
        <CreateNewUserModal />
      </div>
    );
  }, [filterText, resetPaginationToggle]);
  // safe to use
  const customeStylesLight = {
    subHeader: {
      style: {
        padding: "0px",
        margin: "0px",
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
      },
    },
    header: {
      style: {
        padding: 0,
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
  };
  const customeStyleDark = {
    subHeader: {
      style: {
        padding: 0,
        margin: 0,
      },
    },
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
    select: {
      style: {
        color: "black",
      },
    },
    header: {
      style: {
        padding: 0,
      },
    },
    pagination: {
      style: {
        backgroundColor: "#0b1437",
        color: "white",
      },
      paginationButton: {
        style: {
          backgroundColor: "white",
          color: "black",
        },
      },
      paginationButtonActive: {
        style: {
          backgroundColor: "blue",
          color: "white",
        },
      },
      paginationSelect: {
        style: {
          color: "black",
        },
      },
    },
    table: {
      style: {
        borderRadius: "16px",
      },
    },
  };

  // chage theme of the table to dark and light
  const themeColor = useTheme();

  return (
    <>
      <DataTable
        style={{ backgroundColor: "black" }}
        columns={columns}
        data={users}
        // data={users}
        pagination
        highlightOnHover
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        theme={themeColor.theme === "dark" ? "dark" : "light"}
        customStyles={
          themeColor.theme === "dark" ? customeStyleDark : customeStylesLight
        }
      />
    </>
  );
}
