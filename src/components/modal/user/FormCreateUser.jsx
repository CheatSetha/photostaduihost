"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BASE_URL } from "@/app/api/BaseAPI";
import Link from "next/link";

//import toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FILE_SIZE = 1024 * 1024 * 10; // 10MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const USER_ID = 41;
const validationSchema = Yup.object().shape({
  // validate username
  username: Yup.string()
    .trim()
    .required("Username is required")
    .matches(/^\S+$/, "Username cannot spaces")
    .matches(/^[a-zA-Z0-9 ]*$/, "Username cannot contain special characters"),
  // validate gender
  gender: Yup.string().required("Gender is required"),
  // validate first_name
  first_name: Yup.string()
    .trim()
    .required("First name is required")
    .matches(/^\S+$/, "first name cannot spaces")
    .matches(/^[a-zA-Z0-9 ]*$/, "First name cannot contain special characters"),
  // validate last_name
  last_name: Yup.string()
    .trim()
    .required("Last name is required")
    .matches(/^\S+$/, "last name cannot spaces")
    .matches(/^[a-zA-Z0-9 ]*$/, "Last name cannot contain special characters"),
  // validate phone number
  phone_number: Yup.string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(9, "Phone number must be at least 10 digits")
    .max(15, "Phone number can be at most 15 digits"),
  // validate date of birth
  date: Yup.date().required("Date is required"),

  //validate address
  address: Yup.string().required("Address is required"),
  //validate biography
  biography: Yup.string().required("biography is required"),

  file: Yup.mixed()
    .test("fileSize", "File too large", (value) => {
      console.log("value", value);
      if (!value) {
        return true;
      }
      return value.size <= FILE_SIZE;
    })
    .test("fileFormat", "Unsupported Format", (value) => {
      if (!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type);
    })
    .required("Required"),
});
export default function FormCreateUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [informationUser, setInformationUser] = useState({});
  const [initialValues, setInitialValues] = useState({});

  const sendToServer = async (values, idImage) => {
    console.log(idImage, "id image: ", values.username);
    setIsLoading(true);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      username: values.username,
      familyName: values.last_name,
      givenName: values.first_name,
      gender: values.gender,
      dob: values.date,
      phoneNumber: values.phone_number,
      avatar: idImage,
      address: values.address,
      biography: values.biography,
    });

    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        BASE_URL + "users/" + USER_ID,
        requestOptions
      );
      const data = await response.json();
      setTimeout(() => {
        setIsLoading(false);
        toast.success("🦄 successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSubmitting(false);
      }, 5000);
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };

  const uploadImage = async (values) => {
    setIsLoading(true);
    var requestOption = {
      method: "POST",
      body: values.file,
      redirect: "follow",
    };
    try {
      const res = await fetch(BASE_URL + "files", requestOption);
      const dataFiles = await res.json();
      return dataFiles;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        const res = await fetch(
          "http://136.228.158.126:8002/api/v1/users/email?email=pengny2002@gmail.com",
          requestOptions
        );
        const dataUser = await res.json();
        setInformationUser(dataUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const initial = {
      username: informationUser?.data?.username,

      first_name: informationUser?.data?.givenName,
      last_name: informationUser?.data?.familyName,

      address: informationUser?.data?.address,
      email: informationUser?.data?.phoneNumber,
      roles: informationUser?.data?.roles,

      file: null,
    };
    setInitialValues(initial);
  }, [informationUser]);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        //upload file to server
        const formData = new FormData();
        formData.append("file", values.file);
        const image = await uploadImage({ file: formData });

        console.log("avatar", image);
       
        var raw = JSON.stringify({
          name: image.data.name,
          type: "user",
        });
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var request = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        const ress = await fetch(BASE_URL + "images", request);
        const data = await ress.json();
        const idImage = data?.data?.id;
        sendToServer(values, idImage);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className="h-full">
          <div className="grid gap-x-10 gap-6 mb-6 md:grid-cols-2 w-full ">
          
   
            <div className="mb-3">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <Field
                as="select"
                id="gender"
                name="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Choose a gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500"
              />
            </div>
            {/* First name */}
            <div className="mb-3">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <Field
                type="text"
                id="first_name"
                name="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
              />
              <ErrorMessage
                name="first_name"
                component="div"
                className="text-red-500"
              />
            </div>
            {/* Last name */}
            <div className="mb-3">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <Field
                type="text"
                id="last_name"
                name="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
              <ErrorMessage
                name="last_name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <Field
                type="text"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username"
                required
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500"
              />
            </div>
            {/* phone number */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* address */}
            <div className="mb-3">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-main border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your address..."
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Role
              </label>
              <Field
                as="select"
                id="role"
                name="password"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-main border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="red">amin</option>

                <option value="green">guest</option>

                <option value="blue">subscrpber</option>
              </Field>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className=" mb-6 w-full ">
              <label htmlFor="file" className="mb-1">
                Avatar
              </label>
              <Field
                type="file"
                name="file"
                id="file"
                setFieldValue={setFieldValue}
                component={FileUpload}
                className="border border-gray-500 rounded px-4 py-2"
              />
              <ErrorMessage
                name="file"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className={`${
              isSubmitting ? "cursor-not-allowed" : " "
            } text-white bg-black rounded-main hover:bg-[#333] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

function FileUpload({ field, form, setFieldValue }) {
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    form.setFieldValue(field.name, file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <input
          type="file"
          onChange={handleChange}
          className="file-input file-input-bordered file-input-[black] h-[45px] text-black bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 rounded-main dark:focus:border-blue-500"
        />
        {previewImage && (
          <img
            src={previewImage}
            alt="preview"
            className="mt-4 rounded-full w-20 h-20"
          />
        )}
      </div>
    </>
  );
}
