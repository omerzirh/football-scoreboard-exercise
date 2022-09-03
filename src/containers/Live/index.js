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
import { MATCH_DURATION } from "../../helpers/constants";
import { generateRandomArr } from "../../helpers/helper";

export default function Index() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState("");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homeName, setHomeName] = useState("");
  const [awayName, setAwayName] = useState("");
  const [currMatch, setCurrentMatch] = useState(0);

  const { nextList,finishedList } = useContext(scoreContext);

  const refreshState = () => {
    setSeconds(0);
    setHomeScore(0);
    setAwayScore(0);
    setMinutes(0);
    //TODO: Add a check to ensure it does not exceed nextData.length.
    setCurrentMatch((currMatch) => {
      return (currMatch += 1);
    });
  };

  const displayScore = (home, away) => {
    // TODO: maybe change the generateRandomArr function so that it returns two arrays with unique values to avoid two teams scoring a goal at the same time.
    const homeTimeInterval = generateRandomArr(home, MATCH_DURATION, 1);
    const awayTimeInterval = generateRandomArr(away, MATCH_DURATION, 1);

    let timeLeft = MATCH_DURATION;

    let timer = setInterval(function () {
      if (timeLeft === 0) {
        refreshState();
        clearInterval(timer);
        return;
      }
      if (MATCH_DURATION - timeLeft === awayTimeInterval.at(-1)) {
        setAwayScore((awayScore) => awayScore + 1);
        awayTimeInterval.pop();
      }
      if (MATCH_DURATION - timeLeft === homeTimeInterval.at(-1)) {
        setHomeScore((homeScore) => homeScore + 1);
        homeTimeInterval.pop();
      }
      setSeconds((seconds) => seconds + 1);
      timeLeft -= 1;
    }, 1000);
  };

 

  useEffect(() => {
    setTimer(
      (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
    );
  }, [seconds]);
  useEffect(() => {
    setHomeName(nextList[currMatch].home);
    setAwayName(nextList[currMatch].away);
    displayScore(finishedList[currMatch].homeScore, finishedList[currMatch].awayScore);
  }, [currMatch]);
  //TODO handle names longer than 10 letters
  return (
    <div>
      <BoardWrapper>
        <HomeWrapper>
          <TeamLabel>{homeName}</TeamLabel>
          <ScoreLabel>{homeScore}</ScoreLabel>
        </HomeWrapper>
        <TimeWrapper>
          <TimeLabel>{timer}</TimeLabel>
        </TimeWrapper>
        <AwayWrapper>
          <TeamLabel>{awayName}</TeamLabel>
          <ScoreLabel>{awayScore}</ScoreLabel>
        </AwayWrapper>
      </BoardWrapper>
    </div>
  );
}
