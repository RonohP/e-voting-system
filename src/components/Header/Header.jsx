import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import header from "../../images/header.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header mt-4 relative pl-8 pr-8 flex flex-col h-screen w-full">
      <NavBar />
      <div className="hero mt-2 flex flex-row h-screen w-full pt-10">
        <div className="hero-text flex flex-col pt-36 pl-10 w-1/2">
          <h1 className="font-bold text-5xl ml-24">
            Fast, Secured and Accessible Voting System
          </h1>
          <br />
          <p className="mb-6 ml-24">
            {" "}
            Let’s make voting and elections easy for you. This is designed to
            ensure a secured voting session.
          </p>
          <br />
          <button className="register-btn border rounded-full py-2 px-8 border-solid w-60 ml-24">
            <Link className="p-4" to="/register">
              Register as a Voter
            </Link>
          </button>
        </div>
        <div className="hero-img w-1/2">
          <img
            src={header}
            alt="Header-img"
            className="h-full object-cover mr-25"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
