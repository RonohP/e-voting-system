import React from "react";
import Logo from "../images/WTLOGO.png";
import MessageSentImg from "../images/messageSent.svg";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import EyeImg from "../images/eye.svg";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAxios } from "../api/hooks/useAxios";
import { RESET_PASSWORD_URL, VALIDATE_TOKEN_URL } from "../api/urls";
import { useMutation } from "react-query";

const MessageSent = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axios = useAxios();
  const [code, setCode] = useState([]);
  const [token, setToken] = useState([]);
  const [isTokenValid, setTokenvalid] = useState(false);

  useEffect(() => {
    if (code.length === 4) {
      const token = Number(code.join(""));

      setToken(token);

      axios
        .post(`${VALIDATE_TOKEN_URL}`, { token: token })
        .then((res) => {
          toast.success("Code is valid please reset you password");
          setTokenvalid(true);
        })
        .catch((error) => {
          toast.error("invalid token please try again");
        });
    }
    return () => {};
  }, [code, axios]);

  const resetPassword = async (data) => {
    const { data: response } = await axios.post(`${RESET_PASSWORD_URL}`, data);
    return response;
  };

  const { mutate } = useMutation(resetPassword, {
    onSuccess: (data) => {
      toast.success(data.message);
      history.push("/login");
    },
    onError: () => {
      toast.error("there was an error");
    },
    onSettled: () => {
      // queryClient.invalidateQueries("create");
    },
  });

  const handleLogin = (userData) => {
    const data = { ...userData, token: token };
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
        }}
      >
        <div style={{ marginTop: "1rem" }}>
          <img src={MessageSentImg} alt="svg" style={{ paddingLeft: "8rem" }} />
        </div>
        <div
          className="flex flex-col "
          style={{ marginTop: "8rem", paddingLeft: "10rem" }}
        >
          <h2
            className="font-bold text-5xl  tracking-normal"
            style={{
              fontFamily: "sans-serif",
              lineHeight: "58px",
              color: "#12122C",
            }}
          >
            Message Sent
          </h2>
          <p
            className="font-normal"
            style={{ size: "20px", lineHeight: "30px" }}
          >
            Enter the code from the message sent to your <br /> to school mail
            address.
          </p>
          <div className="flex flex-col">
            <div
              style={{
                display: "flex",
                columnGap: "20px",
              }}
            >
              <input
                type="number"
                name="message-sent"
                maxlength="1"
                onChange={(e) => setCode([...code, e.target.value])}
                className="w-20  h-20  py-3 px-6 border border-solid resize-y my-2"
                style={{ borderColor: "#16042ACC", marginTop: "2rem" }}
              />
              <input
                type="number"
                name="message-sent"
                maxlength="1"
                onChange={(e) => setCode([...code, e.target.value])}
                className="w-20  h-20  py-3 px-6 border border-solid resize-y my-2"
                style={{ borderColor: "#16042ACC", marginTop: "2rem" }}
              />
              <input
                type="number"
                name="message-sent"
                maxlength="1"
                onChange={(e) => setCode([...code, e.target.value])}
                className="w-20  h-20  py-3 px-6 border border-solid resize-y my-2"
                style={{ borderColor: "#16042ACC", marginTop: "2rem" }}
              />
              <input
                type="number"
                name="message-sent"
                maxlength="1"
                onChange={(e) => setCode([...code, e.target.value])}
                className="w-20  h-20  py-3 px-6 border border-solid resize-y my-2"
                style={{ borderColor: "#16042ACC", marginTop: "2rem" }}
              />
            </div>
            <p style={{ color: "#16042ACC", marginTop: "3rem" }}>
              Didn't receive code?{" "}
              <span style={{ color: "#a45bb1" }}>
                <Link>Resend now </Link>
              </span>
              {isTokenValid && (
                <h2 style={{ marginTop: "2rem" }}>Enter new Password </h2>
              )}
              {isTokenValid && (
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "You must specify a password",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters",
                      },
                    })}
                    className="w-1/2  h-12 rounded-full py-3 px-6 border border-solid resize-y my-2"
                    style={{ borderColor: "#9453a0", marginTop: "1rem" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: 310,
                      bottom: 20,
                      cursor: "pointer",
                    }}
                  >
                    <img src={EyeImg} alt="eye svg" />
                  </span>
                  {errors.password && (
                    <p className="errorMessage" style={{ color: "red" }}>
                      {errors.password.message}
                    </p>
                  )}
                </div>
              )}
            </p>
            {isTokenValid && (
              <button
                type="submit"
                onClick={handleSubmit(handleLogin)}
                className="register-btn border w-1/2  h-12  rounded-full py-2 px-8 border-solid"
                style={{ marginTop: "2rem" }}
              >
                Save and Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSent;
