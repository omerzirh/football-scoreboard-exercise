import React, { useState } from "react";

import { matchesFinal, matchesLive, matchesNext } from "../helpers/data";

export const scoreContext = React.createContext({});

function Context({ children }) {
  const [activeTab, setActiveTab] = useState("live");
  const [activeTabData, setActiveTabData] = useState(matchesLive);
  const [liveList, setLiveList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);
  const [nextList, setNextList] = useState(matchesNext);
  const [matchesAll, setMatchesAll] = useState(matchesFinal);
  return (
    <scoreContext.Provider
      value={{
        activeTab,
        setActiveTab,
        liveList,
        setLiveList,
        finishedList,
        setFinishedList,
        nextList,
        setNextList,
        activeTabData,
        setActiveTabData,
        matchesAll,
        setMatchesAll,
      }}
    >
      {children}
    </scoreContext.Provider>
  );
}

export default Context;
