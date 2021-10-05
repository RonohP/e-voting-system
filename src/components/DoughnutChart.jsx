import React from "react";
import { Doughnut } from "react-chartjs-2";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useVoters } from "../api/hooks/useVoters";

function DoughnutChart({ candidates, votes }) {
  const { data } = useVoters();

  return (
    <div className="content flex flex-warp align-center h-1/3 justify-between text-center">
      <div className="w-56 h-56 text-center align-center my-8 relative">
        <CircularProgressbar
          value={data?.length}
          maxValue={5}
          text={data?.length}
          strokeWidth={20}
          styles={buildStyles({
            rotation: 0.25,

            strokeLinecap: "butt",

            textSize: "16px",

            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(6, 20, 147, 0.8)`,
            textColor: "#000",
            trailColor: "#3e98c7",
            backgroundColor: "#3e98c7",
          })}
        />
        <h2 className="text-xl font-semibold my-4 text-center">
          Number of registered voters
        </h2>
      </div>
      <div className="w-56 h-56  text-center align-center h-auto my-8 relative">
        <CircularProgressbar
          value={votes}
          maxValue={10}
          text={votes}
          strokeWidth={20}
          styles={buildStyles({
            rotation: 0.25,

            strokeLinecap: "butt",

            textSize: "16px",

            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(59, 141, 86)`,
            textColor: "#000",
            trailColor: `rgba(171, 253, 180`,
            backgroundColor: "#3e98c7",
          })}
        />
        <h2 className="text-xl font-semibold my-4 text-center">
          Total Number of Votes
        </h2>
      </div>
      <div className="w-56 h-56  text-center align-center h-auto my-8 relative">
        <CircularProgressbar
          value={candidates}
          maxValue={5}
          text={candidates}
          strokeWidth={20}
          styles={buildStyles({
            rotation: 0.25,

            strokeLinecap: "butt",

            textSize: "16px",

            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(229, 233, 65)`,
            textColor: "#000",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
        <h2 className="text-xl font-semibold my-4 text-center">
          Number of registered Candidates
        </h2>
      </div>
    </div>
  );
}

export default DoughnutChart;
