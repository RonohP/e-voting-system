import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../utils/hooks/useAuth";

const UserUpdate = () => {
  const [userName, setUserName] = useState("Jane Doe");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { user } = useAuth();
  console.log(user);
  useEffect(() => {
    if (user !== null) {
      setUserName(() => user.firstName + " " + user.lastName);
    }
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      userName,
      currentPassword,
      newPassword,
    });
  };
  return (
    <div className="p-2">
      <form onSubmit={handleSubmit} className="p-2 mx-2">
        <div className="form-group">
          <label htmlFor="username" className=" my-2 p-1 text-base">
            Display Name
          </label>
          <input
            type="text"
            name="username"
            placeholder={user?.firstName + " " + user?.lastName}
            className=" rounded-full py-3 px-6 border border-solid resize-y my-2 block"
            style={{
              borderColor: "#93278F",
              borderRadius: "8px",
              width: "40%",
            }}
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <p className="font-bold mt-20">Reset Password</p>

        <div className="form-group">
          <label
            htmlFor="currentPassword"
            className="mx-2 my-2 p-1 text-base"
          ></label>
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            onChange={(e) => setCurrentPassword(e.target.value)}
            value={currentPassword}
            className=" rounded-full py-3 px-6 border border-solid resize-y my-2 block"
            style={{
              borderColor: "#93278F",
              borderRadius: "8px",
              width: "40%",
            }}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="newPassword"
            className="mx-2 my-2 p-1 text-base"
          ></label>
          <input
            type="password"
            name="newPassword"
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className=" rounded-full py-3 px-6 border border-solid resize-y my-2 mt-3 block"
            style={{
              borderColor: "#93278F",
              borderRadius: "8px",
              width: "40%",
            }}
            value={newPassword}
          />
        </div>
        <button
          type="submit"
          className="contact-btn border rounded-full py-2 px-8 border-solid  my-2 font-bold block mt-6"
          style={{ background: "#93278F", color: "#FFFF", borderRadius: "8px" }}
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default UserUpdate;
