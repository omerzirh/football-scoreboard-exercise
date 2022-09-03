import React, { useContext } from "react";

import { MainWrapper, Tab, TabsWrapper, Wrapper } from "./style.elements";
import Table from "../../components/Table";
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

  const handleTabChange = (value) => {
    setActiveTab(value);
    const data = {
      live: liveList,
      finished: finishedList,
      next: nextList,
    };
    setActiveTabData(data[activeTab]);  };
  return (
    <MainWrapper>
      <TabsWrapper>
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            background={tab === activeTab ? "#00003C" : null}
            onClick={() => handleTabChange(tab)}
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
