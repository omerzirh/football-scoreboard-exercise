import React, { useEffect, useState, useContext } from "react";
import {
  AwayWrapper,
  BoardWrapper,
  HalftimeLabel,
  HomeWrapper,
  Label,
  LiveLabel,
  NoMatchLabel,
  ScoreLabel,
  TeamLabel,
  TimeLabel,
  TimeWrapper,
} from "./style.elements";
import { scoreContext } from "../../contexts/ScoreContext";
import { HALFTIME_DURATION, MATCH_DURATION } from "../../helpers/constants";
import { getGoalIntervals, getTimeStr } from "../../helpers/helper";

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
  const [halfTimeActive, setHalfTimeActive] = useState(false);
  const [halfTime, setHalfTime] = useState(HALFTIME_DURATION);
  const { nextList, setNextList, setFinishedList, matchesAll, setLiveList } =
    useContext(scoreContext);

  //refresh state when a match finished
  const refreshState = () => {
    setSeconds(0);
    setHomeScore(0);
    setAwayScore(0);
    setMinutes(0);
    setCurrentMatchIndex((currMatch) => currMatch + 1);
  };

  //create random goal intervals and make the goals when interval equal to timeleft
  const displayScore = (home, away) => {
    const randomGoalTimes = getGoalIntervals(home, away, MATCH_DURATION);
    const homeTimeInterval = randomGoalTimes[0];
    const awayTimeInterval = randomGoalTimes[1];

    let countdown = MATCH_DURATION + HALFTIME_DURATION; 
    let timeLeft = MATCH_DURATION;
    let timer = setInterval(function () {
      if (countdown === 0) {
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
      //halftime check
      if (
        countdown <= MATCH_DURATION / 2 + HALFTIME_DURATION &&
        countdown > MATCH_DURATION / 2
      ) {
        setHalfTimeActive(true);
        countdown -= 1;
        setHalfTime(countdown-timeLeft);

        console.log("halftime:",countdown-timeLeft);
      } else {
        setHalfTimeActive(false);
        setSeconds((seconds) => seconds + 1);
        countdown -= 1;
        timeLeft -= 1;
      }
    }, 1000);
  };
  //update scoreboard timer and live table timer
  useEffect(() => {
    setTimer(getTimeStr(minutes, seconds));
    if (seconds >= 1) {
      setLiveList([
        {
          key: 1,
          home: homeName,
          away: awayName,
          homeScore: homeScore,
          awayScore: awayScore,
          status: getTimeStr(minutes, seconds),
        },
      ]);
    }
  }, [seconds]);

  useEffect(() => {
    if (currMatchIndex === matchesAll.length) {
      //handle when matches finished
      setLiveActive(false);
      setLiveList([]);
    } else {
      //update next match
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
            <LiveLabel>{halfTimeActive?<>HALFTIME</>:<>LIVE</>}</LiveLabel>
            <HalftimeLabel>{halfTimeActive?halfTime:null}</HalftimeLabel>
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
