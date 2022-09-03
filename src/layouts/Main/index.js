import React, { useContext, useEffect } from "react";

import { MainWrapper, Tab, TabsWrapper, Wrapper } from "./style.elements";
import Table from "../../components/Table";
import Live from "../../containers/Live";
import { scoreContext } from "../../contexts/ScoreContext";
import { tabsData } from "./../../helpers/data";

export default function Index() {
  const {
    activeTab,
    setActiveTab,
    liveList,
    finishedList,
    nextList,
    activeTabData,
    setActiveTabData,
  } = useContext(scoreContext);
  const getTabData = () => {
    const data = {
      live: liveList,
      finished: finishedList,
      next: nextList,
    };
    return data[activeTab];
  };
  useEffect(() => {
    setActiveTabData(getTabData);
  }, [activeTab]);
  return (
    <MainWrapper>
      <Live />
      <TabsWrapper>
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            background={tab === activeTab ? "#00003C" : null}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabsWrapper>
      <Wrapper>
        <Table data={activeTabData} />
      </Wrapper>
    </MainWrapper>
  );
}
