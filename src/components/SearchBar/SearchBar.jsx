import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useAuth } from "../../utils/hooks/useAuth";
import "./SearchBar.css";

export default function SearchBar() {
  const { user } = useAuth();
  return (
    <div className="flex w-full content-center items-center">
      <form className=" mx-2 my-2 w-3/5 ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="search w-9/12 mx-4 px-2 py-1"
        />
        <Link to="/dashboard" className="">
          <button>
            <BsSearch />
          </button>
        </Link>
      </form>
      <div className="w-1/5 mx-2 my-2">
        <button className="text-4xl py-3 px-4 text-center relative">
          <IoMdNotificationsOutline />
          <span className="notification-label w-3 h-3 bg-red-600 text-white p-1 rounded-full absolute"></span>
        </button>
      </div>
      <div className="w-1/5 mx-2 my-2">
        <Link to="/settings" className="flex flex-row items-center">
          <button
            className="profile-btn relative w-14 h-14 font-bold inline-block"
            style={{
              backgroundImage:
                "url(https://thumbs.dreamstime.com/b/happy-black-woman-showing-ok-gesture-smiling-looking-camera-satisfied-hand-cheerful-african-female-customer-student-138434650.jpg)",
            }}
          ></button>
          <p className="text-base font-bold p-4 my-4">
            {" "}
            {user?.firstName + " " + user?.lastName}
          </p>
        </Link>
      </div>
    </div>
  );
}
