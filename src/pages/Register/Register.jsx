import React from "react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../images/WTLOGO.png";
import SignUp from "../../images/SignUp.svg";
import "../../components/NavBar/NavBar.css";
import "../../components/Footer/Footer";
import "./Register.css";

const eye = <FontAwesomeIcon icon={faEye} />;
const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
   const togglePasswordVisiblity = () => {
     setPasswordShown(passwordShown ? false : true);
   };

  const [users, setUsers] = useState([]);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const handleRegister = (data) => {
    console.log(data);
    const user = {
      studentID: data.studentID,
      password: data.password,
      
    };
    setUsers([...users, user]);
    toast.success("register successful, please login");
    history.push("/dashboard");
  };

  console.log(users);

  return (
    <div>
      <div className="maincontainer">
        <nav className="navbar flex justify-between item- center mb-10 h-16 w-full sm:pl-2 md:pl-10 lg:pl-12 md:w-full ">
          <Link to="/" className="flex flex-row pt-6">
            <img src={Logo} alt="WTLogo" className="w-12 h-11" />
            <p className="logo-text inline-block pt-6 pl-1 font-sans font-bold">
              echsters University
            </p>
          </Link>
        </nav>
        <div className="flex mx-20 my-20 flex-row">
          <div className="left w-1/2 h-auto p-2">
            <img src={SignUp} alt="SignUp" />
          </div>
          <div className="right w-1/2 h-auto p-2 mt-20">
            <h1 className="text-5xl mx-6 font-bold text-left ">Welcome!</h1>
            <p className="text-left w-3/4  mt-10 font-normal text-lg mx-6">
              Register as a voter on the women techsters University voting
              platform to vote in your preferred candidate.
            </p>
            <div className="p-2">
              <form onSubmit={(e) => e.preventDefault()} className="p-2 mx-2">
                <label htmlFor="studentID" className=" mx-4  my-2 p-1 text-base"></label>
                <input
                  type="number"
                  name="studentID"
                  placeholder="student ID No."
                  id="std-id"
                  {...register("studentID", {
                    required: "student Id is Required",
                    min: {
                      value: 1,
                      message: "Minimum Required ID is 1",
                    },
                    max: {
                      value: 1000,
                      message: "Maximum allowed ID is 1000",
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Only numbers are allowed",
                    }
                  })}
                  className="w-1/2  h-12 rounded-full py-3 px-6 border border-solid resize-y my-2 block"
                  style={{ borderColor: "#93278F" }}
                />
                 
              
              {errors.studentID && (
                <p className="errorMessage" style={{color: "red"}}>{errors.studentID.message}</p>
              )}
        
                <label
                  htmlFor="password"
                  className="mx-2 my-2 p-1 text-base"
                ></label>

                <input
                  type= {passwordShown ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "You must specify a password",
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                  })}
                  className="w-1/2  h-12 rounded-full py-3 px-6 border border-solid resize-y my-2"
                  style={{ borderColor: "#93278F", marginLeft: "-20px"}}
                />
                <i  style={{ margin: "-40px", color: "#93278F"}}onClick={togglePasswordVisiblity}>{eye}</i>
                {errors.password && (
                  <p className="errorMessage" style={{color: "red"}}>{errors.password.message}</p>
                )}

                <button
                  type="submit"
                  onClick={handleSubmit(handleRegister)}
                  className="contact-btn border rounded-full py-2 px-8 border-solid w-1/2 my-2 font-bold block"
                  style={{ background: "#93278F", color: "#FFFF"}}
                >
                  Sign Up
                </button>
                <p className=" w-3/4 text-center mt-10 font-normal text-lg">
                  By Clicking the sign up button, you agree with our
                  <Link className="p-2 terms-conditions font-bold" to="/terms">
                    Terms and Conditions.
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
