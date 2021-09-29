import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/WTLOGO.png";
import { useMutation, useQueryClient } from "react-query";
import Log from "../../images/Log.svg";
import "../../components/NavBar/NavBar";
import "./Login.css";
import { useAxios } from "../../api/hooks/useAxios";
import { LOGIN_URL } from "../../api/urls";
import { useAuth } from "../../utils/hooks/useAuth";

const eye = <FontAwesomeIcon icon={faEye} />;
const Login = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const axios = useAxios();
  const { signin } = useAuth();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const loginuser = async (data) => {
    const { data: response } = await axios.post(`${LOGIN_URL}`, data);
    console.log(response, "data returned");

    return response;
  };

  const { mutate, isLoading } = useMutation(loginuser, {
    onSuccess: (data) => {
      console.log(data, "<<<>>>>");
      signin(data, data.token);
      toast.success("login successful");
      history.push("/dashboard");
    },
    onError: () => {
      toast.error("there was an error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const handleLogin = (loginData) => {
    const user = {
      schoolId: loginData.studentID,
      password: loginData.password,
    };
    mutate(user);
  };
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
            <img src={Log} alt="Login" />
          </div>
          <div className="right w-1/2 h-auto p-2 mt-20">
            <h1 className="text-5xl font-bold text-left mx-8 ">
              Welcome Back!
            </h1>
            <p className="text-left w-3/4  mt-10 font-normal text-lg mx-8">
              Welcome back to the women techsters University voting platform,
              Sign in to vote in your preferred candidate.
            </p>
            <div className="p-2">
              <form onSubmit={(e) => e.preventDefault()} className="p-2 mx-2">
                <label
                  htmlFor="studentID"
                  className=" my-2 p-1 text-base"
                ></label>
                <input
                  type="string"
                  name="studentID"
                  placeholder="student ID No."
                  id="std-id"
                  {...register("studentID", {
                    required: "student Id is Required",
                  })}
                  className="w-1/2  h-12 rounded-full  py-3 px-6 border border-solid resize-y my-2 block"
                  style={{ borderColor: "#93278F" }}
                />

                {errors.studentID && (
                  <p className="errorMessage" style={{ color: "red" }}>
                    {errors.studentID.message}
                  </p>
                )}

                <label
                  htmlFor="password"
                  className="mx-2 my-2 p-1 text-base"
                ></label>

                <input
                  type={passwordShown ? "text" : "password"}
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
                  style={{ borderColor: "#93278F", marginLeft: "-20px" }}
                />
                <i
                  style={{ margin: "-40px", color: "#93278F" }}
                  onClick={togglePasswordVisiblity}
                >
                  {eye}
                </i>
                {errors.password && (
                  <p className="errorMessage" style={{ color: "red" }}>
                    {errors.password.message}
                  </p>
                )}
                <label className="block">
                  <input
                    type="checkbox"
                    value="Remember Password "
                    name="remember"
                    style={{ borderColor: "#93278F", padding: "20px" }}
                  />
                  <span className="px-4">Remember Password</span>
                  <span>
                    <Link
                      className=" forget-password mx-30 text-right px-18 font-bold"
                      to="/forgotPassword"
                    >
                      Forget Password?
                    </Link>
                  </span>
                </label>
                <button
                  type="submit"
                  onClick={handleSubmit(handleLogin)}
                  className="register-btn border w-1/2  h-12  rounded-full py-2 px-8 border-solid block"
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
