import React from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../../images/WTLOGO.png";
import Log from "../../images/Log.svg";
import "../NavBar/NavBar.css";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (userData) => {
    toast.success("login successful");
    history.push("/home");
  };
  return (
    <div>
      <div className="maincontainer">
        <nav className="navbar flex justify-between item- center mb-10 h-16 w-full sm:pl-2 md:pl-10 lg:pl-12 md:w-full ">
          <Link to="/" className="flex flex-row pt-6">
            <img src={Logo} alt="WTLogo" className="w-12 h-11" />
            <p className="logo-text inline-block pt-6 pl-1 font-sans font-bold">
              echsters Universisty
            </p>
          </Link>
        </nav>
        <div className="flex mx-20 my-20 flex-row">
          <div className="left w-1/2 h-auto p-2">
            <img src={Log} alt="Login" />
          </div>
          <div className="right w-1/2 h-auto p-2 mt-20">
            <h1 className="text-5xl font-bold text-left mx-8 ">
              Welcome Back!
            </h1>
            <p className="text-left mt-10 font-normal text-lg mx-8">
              Welcome back to the women techsters University voting platform,
              Sign in to vote in your preffered candidate.
            </p>
            <div className="p-2">
              <form onSubmit={(e) => e.preventDefault()} className="p-2 mx-2">
                <label htmlFor="std-id" className=" my-2 p-1 text-base"></label>
                <input
                  type="number"
                  name="std-id"
                  placeholder="Stdent ID No."
                  id="std-id"
                  className="w-full rounded-full py-3 px-6 border border-solid resize-y my-2"
                  style={{ borderColor: "#93278F" }}
                />

                <label
                  htmlFor="password"
                  className="mx-2 my-2 p-1 text-base"
                ></label>
                <input
                  type="password"
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
                  className="w-full rounded-full py-3 px-6 border border-solid resize-y my-2"
                  style={{ borderColor: "#93278F" }}
                />
                {errors.password && (
                  <p className="errorMessage">{errors.password.message}</p>
                )}
                <label>
                  <input
                    type="checkbox"
                    value="Remember Password "
                    name="remember"
                    style={{ borderColor: "#93278F", padding: "20px" }}
                  />
                  <span className="px-4">Remember Password</span>
                  <span>
                    <Link
                      className=" forget-password mx-30 text-right px-20 font-bold"
                      to="/forgotPassword"
                    >
                      Forget Password?
                    </Link>
                  </span>
                </label>
                <button
                  type="submit"
                  onClick={handleSubmit(handleLogin)}
                  className="contact-btn border rounded-full py-2 px-8 border-solid w-full my-2 font-bold"
                  style={{ background: "#93278F", color: "#FFFF" }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
