import React, { useState } from "react";

import { matchesFinal, matchesLive, matchesNext } from "../helpers/data";

export const scoreContext = React.createContext({});

function Context({ children }) {
  const [activeTab, setActiveTab] = useState("live");
  const [activeTabData, setActiveTabData] = useState(matchesLive);
  const [liveList, setLiveList] = useState(matchesLive);
  const [finishedList, setFinishedList] = useState(matchesFinal);
  const [nextList, setNextList] = useState(matchesNext);

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
      }}
    >
      {children}
    </scoreContext.Provider>
  );
}

export default Context;
