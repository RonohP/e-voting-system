import React from "react";
import NotificationCard from "./NotificationCard";

const ForgotPassword = () => {
  return (
    <div>
      <NotificationCard
        title="Forgot Password"
        message="Enter your school mail address and we will send you a code to reset your password"
      />
    </div>
  );
};

export default ForgotPassword;
