import React, { useEffect, useState, useContext } from "react";
import {
  AwayWrapper,
  BoardWrapper,
  HomeWrapper,
  Label,
  NoMatchLabel,
  ScoreLabel,
  TeamLabel,
  TimeLabel,
  TimeWrapper,
} from "./style.elements";
import { scoreContext } from "../../contexts/ScoreContext";
import { MATCH_DURATION } from "../../helpers/constants";
import { generateRandomArr, getGoalIntervals } from "../../helpers/helper";

export default function Index() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState("");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homeName, setHomeName] = useState("");
  const [awayName, setAwayName] = useState("");
  const [currMatchIndex, setCurrentMatchIndex] = useState(0);
  const [liveActive, setLiveActive] = useState(true);
  const {
    nextList,
    setNextList,
    finishedList,
    setFinishedList,
    matchesAll,
    liveList,
    setLiveList,
  } = useContext(scoreContext);
  const [currMatch, setCurrMatch] = useState(nextList[0]);

  const refreshState = () => {
    setSeconds(0);
    setHomeScore(0);
    setAwayScore(0);
    setMinutes(0);
    setCurrentMatchIndex((currMatch) => {
      return (currMatch += 1);
    });
  };

  const displayScore = (home, away) => {
    const randomGoalTimes = getGoalIntervals(home, away, MATCH_DURATION);
    const homeTimeInterval = randomGoalTimes[0];
    const awayTimeInterval = randomGoalTimes[1];

    let timeLeft = MATCH_DURATION;

    let timer = setInterval(function () {
      if (timeLeft === 0) {
        setNextList((nextList) => nextList.filter((_, index) => index !== 0));
        setFinishedList((current) => [...current, matchesAll[currMatchIndex]]);
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
    setLiveList([
      {
        key: 1,
        home: homeName,
        away: awayName,
        homeScore: homeScore,
        awayScore: awayScore,
        status: timer,
      },
    ]);
  }, [seconds]);
  useEffect(() => {
    if (currMatchIndex === matchesAll.length) {
      setLiveActive(false);
      setLiveList([]);
    } else {
      setHomeName(nextList[0].home);
      setAwayName(nextList[0].away);

      displayScore(
        matchesAll[currMatchIndex].homeScore,
        matchesAll[currMatchIndex].awayScore
      );
    }
  }, [currMatchIndex]);
  return (
    <BoardWrapper>
      <HomeWrapper>
        {liveActive ? (
          <>
            <TeamLabel>{homeName}</TeamLabel>
            <ScoreLabel>{homeScore}</ScoreLabel>
          </>
        ) : (
          <NoMatchLabel>&#8212;</NoMatchLabel>
        )}
      </HomeWrapper>
      <TimeWrapper>
        {liveActive ? (
          <>
            <Label>Live</Label>
            <TimeLabel>{timer}</TimeLabel>
          </>
        ) : (
          <NoMatchLabel>No Live Match</NoMatchLabel>
        )}
      </TimeWrapper>
      <AwayWrapper>
        {liveActive ? (
          <>
            <TeamLabel>{awayName}</TeamLabel>
            <ScoreLabel>{awayScore}</ScoreLabel>
          </>
        ) : (
          <NoMatchLabel>&#8212;</NoMatchLabel>
        )}
      </AwayWrapper>
    </BoardWrapper>
  );
}
