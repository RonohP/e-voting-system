import React from "react";
import Logo from "../../images/WTLOGO.png";

const NotificationCard = ({ title, image, message }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <img
          src={Logo}
          alt="WTLogo"
          style={{ width: "3rem", height: "2.688rem" }}
        />
        <span className="logo-text inline-block pt-6 pl-1 font-sans font-bold">
          echsters Universisty
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
          <img src={image} alt="WTLogo" />
          <p>image here</p>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;
