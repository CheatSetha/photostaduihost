"use client";


import UserManagementTable from "@/components/UserManagementDtTable";
import {
  deleteUserById,
  fetchUsers,
  selectAllUsers,

} from "@/redux/features/users/userSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const dispatch = useDispatch();
  const usersList = useSelector(selectAllUsers);

  

  const handleDeleteUser = (id) => {
    dispatch(deleteUserById(id));
    
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className={"w-full p-5 mx-auto db-bg h-full dark:bg-primary"}>
      <div className="sticky top-20 z-40 db-bg dark:bg-primary">
        <h1
          className={
            "text-[32px] text-light dark:text-white font-semibold mb-5"
          }
        >
          User Management
        </h1>
        {/* breadcrumbs */}
        <div className="text-sm breadcrumbs mb-3">
          <ul className="font-extralight text-light dark:text-white">
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
      </div>
      <section>
        <div className="h-screen">
          <UserManagementTable

          />
        </div>
      </section>
    </div>
  );
}
