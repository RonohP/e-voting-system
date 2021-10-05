import React from "react";
import Logo from "../images/WTLOGO.png";
import ForgotPasswordImg from "../images/forgotPassword.svg";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FORGOT_PASSWORD_URL } from "../api/urls";
import { useAxios } from "../api/hooks/useAxios";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";

const ForgotPassword = () => {
  const history = useHistory();
  const axios = useAxios();

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  


    const getResetToken = async (data) => {
    const { data: response } = await axios.post(`${FORGOT_PASSWORD_URL}`, data);
    return response;
  };

  const { mutate} = useMutation(getResetToken, {
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
    history.push("/messageSent");
      
    },
    onError: () => {
      toast.error("there was an error");
      
    },
    onSettled: () => {
      // queryClient.invalidateQueries("create");
    },
  });
  const handleMessageSent = (data) => {
    mutate(data);
  };

  return (
    <>
      <div style={{ display: "flex", paddingTop: "2rem", paddingLeft: "3rem" }}>
        <img src={Logo} alt="WTLogo" className="w-12 h-11" />
        <span className="logo-text inline-block pt-6 pl-1 font-sans font-bold">
          echsters University
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          paddingTop: "8rem",
        }}
      >
        <div>
          <img
            src={ForgotPasswordImg}
            alt="svg"
            style={{ paddingLeft: "8rem" }}
          />
        </div>
        <div
          className="flex flex-col "
          style={{ marginTop: "6rem", paddingLeft: "10rem" }}
        >
          <h2
            className="font-bold text-5xl  tracking-normal"
            style={{
              fontFamily: "sans-serif",
              lineHeight: "58px",
              color: "#16042ACC",
              marginTop: "-2rem",
            }}
          >
            Forgot Password
          </h2>
          <p
            className="font-normal"
            style={{ size: "20px", lineHeight: "30px" }}
          >
            Enter your school mail address and we will send you a code <br /> to
            reset your password
          </p>
          <div className="flex flex-col">
            <input
              type="text"
              name="email"
              placeholder="Enter school mail Address"
               {...register("email", {
                    required: "email  is Required",
                  })}
              className="w-1/2 focus:outline-none  h-12 rounded-full py-3 px-6 border border-solid resize-y my-2"
              style={{ borderColor: "#16042ACC", marginTop: "2rem" }}
            />
             {errors.email && (
                  <p className="errorMessage" style={{ color: "red" }}>
                    {errors.email.message}
                  </p>
                )}
            <button
              onClick={handleSubmit(handleMessageSent)}
              className="register-btn border w-1/2  h-12  rounded-full py-2 px-8 border-solid"
              style={{ marginTop: "2rem" }}
            >
              Send Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
