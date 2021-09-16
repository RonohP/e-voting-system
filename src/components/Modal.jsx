import React from "react";
import Modal from "react-modal";
import ImageProfile from "../images/imageProfile.svg";
import Hat from "../images/hat.svg";
import Age from "../images/age.svg";
import ArrowBack from "../images/arrowBack.svg";
import WhiteLogo from "../images/whitelogo.png";

Modal.setAppElement("#root");
const ModalComponent = ({
  name,
  job,
  age,
  slogan,
  profile,
  contentH1,
  content,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(!isOpen)}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(150, 146, 146, 0.75)",
        },
        content: {
          margin: "0",
          padding: "0",
          width: "50rem",
          height: "50rem",
          margin: "auto",
          overflow: "auto",
          outline: "none",
          borderRadius: "10px",
        },
      }}
    >
      <div className="modal">
        <div style={{ display: "flex" }}>
          <img src={WhiteLogo} alt="WTLogo" className="w-40 h-11 " />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "15px auto" }}>
          <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <img src={ArrowBack} alt="" className="mt-2 ml-3 " />
          </span>

          <div className="flex flex-col justify-center text-center text-white ">
            <h2 className=" font-bold text-4xl">VOTE {name}</h2>
            <p className="mt-3 font-bold">For</p>
            <h3 className="mt-5 font-bold">PRESIDENT STUDENT COUNCIL</h3>
          </div>
        </div>

        <div className="flex mt-5">
          <img src={profile} alt="candidate profile" className="h-36" />
          <div
            className="text-white ml-8 font-normal"
            style={{ lineHeight: "30px" }}
          >
            <p className="flex mb-4 text-sm">
              <img src={ImageProfile} alt="imageProfile" className="h-5 mr-5" />

              {name}
            </p>
            <p className="flex mb-4 text-sm">
              <img src={Hat} alt="imageProfile" className="h-5 mr-5" />
              {job}
            </p>
            <p className="flex mb-4 text-sm">
              {" "}
              <img src={Age} alt="imageProfile" className="h-5 mr-5" />
              {age}
            </p>
            <p className="italic">{slogan}</p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#ffffff" }} className="ml-10">
        <h2
          style={{ color: "#12122C", fontSize: "24px" }}
          className="font-bold mb-4"
        >
          Campaign promise
        </h2>
        <p style={{ lineHeight: "40px", color: "#333333" }}>{contentH1}</p>
        <p style={{ lineHeight: "40px", color: "#333333" }}>{content}</p>
      </div>
    </Modal>
  );
};

export default ModalComponent;
