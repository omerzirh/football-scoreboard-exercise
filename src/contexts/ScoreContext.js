import React, { useState } from "react";

import { matchesFinal } from "../helpers/data";

export const scoreContext = React.createContext({});

function Context({ children }) {
  const [activeTab, setActiveTab] = useState("next");
  const [allMatches, setAllMatches] = useState(matchesFinal);
  const [liveList, setLiveList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);
  const [nextList, setNextList] = useState([]);

  return (
      <scoreContext.Provider
        value={{
          activeTab,
          setActiveTab,
          liveList,
          setLiveList,
          allMatches,
          setAllMatches,
          finishedList,
          setFinishedList,
          nextList,
          setNextList,
        }}
      >
        {children}
      </scoreContext.Provider>
  );
}

export default Context;
