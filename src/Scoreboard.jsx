/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";

let increaseScore;

export default function Scoreboard() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  increaseScore = function (ss = true) {
    if (!ss) {
      setScore(0);
      if (score > bestScore) setBestScore(score);
      return;
    }
    const newScore = score + 1;
    setScore(newScore);
    if (score > bestScore) setBestScore(score);
  };

  return (
    <>
      <div className="scoreboard">
        <h1>memory card game</h1>
        <div className="scores">
          <p>
            score: <span>{score} </span>{" "}
          </p>
          <p>
            best score: <span>{bestScore > score ? bestScore : score} </span>
          </p>
        </div>
      </div>
    </>
  );
}

export { increaseScore };
