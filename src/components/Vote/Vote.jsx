import React from "react";
import Software from "../../images/Software.svg";
import Data from "../../images/Data.svg";
import Cyber from "../../images/Cyber.svg";
import Product from "../../images/Product.svg";
import Management from "../../images/Management.svg";
import CandidateVoteCard from "../candidateVotecards/CandidateVoteCard";

export default function Vote() {
  return (
    <div style={{ backgroundColor: "#E5E5E5", height: "100%" }}>
      <div className="ml-10">
        <h1
          className="font-bold"
          style={{ lineHeight: "57.6px", fontSize: "32px", color: "#0A1820" }}
        >
          Your Vote is Secure, Your Vote Counts
        </h1>
        <p
          className="font-normal"
          style={{ fontSize: "20px", lineHeight: "30px", color: "#333333" }}
        >
          You can only vote for one candidate
        </p>
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          marginTop: "2rem",

          gridTemplateColumns: "1fr 1fr",
          columnGap: "4rem",
          rowGap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CandidateVoteCard
          image={Software}
          name="Kitan Babs"
          jobTitle="Software Development"
        />
        <CandidateVoteCard
          image={Data}
          name="Kitan Babs"
          jobTitle="Data Science"
        />{" "}
        <CandidateVoteCard
          image={Management}
          name="Wawira Jacobs"
          jobTitle="Product Management"
        />{" "}
        <CandidateVoteCard
          image={Cyber}
          name="Abena Kwami"
          jobTitle="Cyber Security"
        />{" "}
        <div style={{ gridColumn: "1 / span 2", margin: "auto" }}>
          <CandidateVoteCard
            image={Product}
            name="Zawadi Makena"
            jobTitle="Product Design"
          />
        </div>
      </div>
    </div>
  );
}
