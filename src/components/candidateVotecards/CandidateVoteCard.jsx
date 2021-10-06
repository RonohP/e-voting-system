import React from "react";
import { useState } from "react";
import ModalComponent from "../Modal";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";
import VoteSuccessImg from "../../images/voteSuccess.svg";
import { VOTE_URL } from "../../api/urls";
import { useAxios } from "../../api/hooks/useAxios";
import { useAuth } from "../../utils/hooks/useAuth";

const CandidateVoteCard = ({
  image,
  name,
  jobTitle,
  candidateInfo,
  isDashBoard,
}) => {
  const axios = useAxios();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const voteCandidate = async (data) => {
    const { data: response } = await axios.post(`${VOTE_URL}`, data);
    return response.data;
  };

  const { mutate } = useMutation(voteCandidate, {
    onSuccess: (data) => {
      Swal.fire({
        title: "<h2 style='color:#16042A'>Voting Successful</h2>",
        imageUrl: VoteSuccessImg,
        text: `You have successfully voted for ${name}`,
        imageHeight: 130,
        imageWidth: 150,
        showConfirmButton: false,
      });
    },
    onError: (err) => {
      toast.error(err.response.data);
    },
    onSettled: () => {
      queryClient.invalidateQueries("results");
    },
  });

  const handleVote = (data) => {
    console.log(data);
    const voteCast = {
      voterId: user.id,
      candidateId: candidateInfo.id,
    };
    mutate(voteCast);
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center p-14 pt-20 pb-16 w-96 h-80">
      <img src={image} className="h-24" alt="candidate profile" />
      <h3 className="mt-2">{name}</h3>
      <h2 className="mt-4">{jobTitle}</h2>
      <div className="flex mt-12 ">
        <button
          onClick={() => setModalIsOpen(true)}
          className="w-40 rounded-md h-14  py-3 px-6 border border-solid resize-y my-2 "
          style={{
            backgroundColor: isDashBoard ? "#fffff" : "#93278F",
            color: isDashBoard ? "#000" : "#ffff",
            borderColor: "#93278F",
          }}
        >
          View Details
        </button>
        {isDashBoard ? (
          <button
            onClick={() => handleVote()}
            className="w-40  h-14 rounded-md  py-3 px-6 border border-solid resize-y my-2 ml-7"
            style={{ backgroundColor: "#93278F" }}
          >
            {" "}
            Vote
          </button>
        ) : null}
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
