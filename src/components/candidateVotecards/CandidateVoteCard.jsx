import React from "react";
import { useState } from "react";
import ModalComponent from "../Modal";
import Swal from "sweetalert2";
import VoteSuccessImg from "../../images/voteSuccess.svg";

const CandidateVoteCard = ({ image, name, jobTitle, candidateInfo }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const vote = () => {
    Swal.fire({
      title: "<h2 style='color:#16042A'>Voting Successful</h2>",
      imageUrl: VoteSuccessImg,
      text: `You have successfully voted for ${name}`,
      imageHeight: 130,
      imageWidth: 150,

      showConfirmButton: false,
    });
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center p-14 pt-20 pb-16 w-96 h-80">
      <img src={image} className="h-24" alt="candidate profile" />
      <h3 className="mt-2">{name}</h3>
      <h2 className="mt-4">{jobTitle}</h2>
      <div className="flex mt-12 ">
        <button
          onClick={() => setModalIsOpen(true)}
          className="w-40 rounded-md h-14  py-3 px-6 border border-solid resize-y my-2 mr-7"
          style={{ borderColor: "#93278F" }}
        >
          View Details
        </button>
        <button
          onClick={() => vote()}
          className="w-40  h-14 rounded-md  py-3 px-6 border border-solid resize-y my-2"
          style={{ backgroundColor: "#93278F" }}
        >
          {" "}
          Vote
        </button>
      </div>
      <ModalComponent
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        name={name}
        profile={image}
        job={jobTitle}
        age={candidateInfo?.age}
        slogan={candidateInfo.bio}
        contentH1="Fellow Techsters,"
        content={candidateInfo.campaignPromise?.replace(
          "Fellow Techsters,",
          ""
        )}
      />
    </div>
  );
};

export default CandidateVoteCard;
