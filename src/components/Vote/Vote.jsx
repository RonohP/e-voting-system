import React from "react";
import Software from "../../images/Software.svg";
import Data from "../../images/Data.svg";
import Cyber from "../../images/Cyber.svg";
import Product from "../../images/Product.svg";
import Management from "../../images/Management.svg";
import CandidateVoteCard from "../candidateVotecards/CandidateVoteCard";
import { useCandidates } from "../../api/hooks/useCandidates";

export default function Vote() {
  const { data: candidates } = useCandidates();

  const getImage = (school) => {
    let image = null;
    switch (true) {
      case school.includes("Data"):
        image = Data;
        break;
      case school.includes("Software"):
        image = Software;
        break;
      case school.includes("Management"):
        image = Management;
        break;
      case school.includes("Product"):
        image = Product;
        break;
      case school.includes("Cyber"):
        image = Cyber;
        break;
      default:
        image = null;
    }
    return image;
  };

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
        {candidates?.map((candidate, index) => {
          console.log(getImage("Data"), "get image");
          if (index + 1 !== candidates.length) {
            return (
              <CandidateVoteCard
                image={getImage(candidate?.school)}
                name={candidate?.firstName + " " + candidate?.lastName}
                jobTitle={candidate?.school}
                candidateInfo={candidate}
                 isDashBoard={true}
              />
            );
          } else {
            return (
              <div style={{ gridColumn: "1 / span 2", margin: "auto" }}>
                <CandidateVoteCard
                  image={getImage(candidate?.school)}
                  name={candidate?.firstName + " " + candidate?.lastName}
                  jobTitle={candidate?.school}
                  candidateInfo={candidate}
                  isDashBoard={true}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
