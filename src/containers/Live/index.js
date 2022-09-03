import React, { useEffect, useState, useContext } from "react";
import {
  AwayWrapper,
  BoardWrapper,
  HomeWrapper,
  ScoreLabel,
  TeamLabel,
  TimeLabel,
  TimeWrapper,
} from "./style.elements";
import { scoreContext } from "../../contexts/ScoreContext";

export default function Index() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState("");

  const { nextList } = useContext(scoreContext);

  useEffect(() => {
    let timer = null;
    timer = setInterval(() => {
      if (seconds === 59) {
        setSeconds(0);
        setMinutes((minutes) => minutes + 1);
      } else {
        setSeconds((seconds) => seconds + 1);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    setTimer(
      (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
    );
  }, [seconds]);

  //TODO handle names longer than 10 letters
  return (
    <div>
      <BoardWrapper>
        <HomeWrapper>
          <TeamLabel>{nextList[0].home}</TeamLabel>
          <ScoreLabel>{nextList[0].homeScore}</ScoreLabel>
        </HomeWrapper>
        <TimeWrapper>
          <TimeLabel>{timer}</TimeLabel>
        </TimeWrapper>
        <AwayWrapper>
          <TeamLabel>{nextList[0].away}</TeamLabel>
          <ScoreLabel>{nextList[0].awayScore}</ScoreLabel>
        </AwayWrapper>
      </BoardWrapper>
    </div>
  );
}
