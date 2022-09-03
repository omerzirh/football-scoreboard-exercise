import React, { useState } from "react";

import { MainWrapper, Tab, TabsWrapper, Wrapper } from "./style.elements";
import Table from "../../components/Table";

import { nextData, tabsData } from "./../../helpers/data";

export default function Index() {
  const [activeTab, setActiveTab ] = useState('live');

  const handleTabChange = (value) => {
    setActiveTab(value);
  };


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
        <Table data={nextData} />
      </Wrapper>
    </MainWrapper>
  );
}
