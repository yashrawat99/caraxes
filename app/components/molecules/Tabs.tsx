import React from "react";
import { Tab, TabsContainer } from "./style";
import { TabsGroupProps } from "./types";

const TabGroup = ({ tabList, selectedIndex, onTabChange }: TabsGroupProps) => {
  return (
    <TabsContainer>
      {tabList.map((tab, index) => {
        return (
          <Tab
            key={tab.key}
            className={index === selectedIndex ? "selected" : ""}
            onClick={() => onTabChange(index)}
          >
            {tab.title}
          </Tab>
        );
      })}
    </TabsContainer>
  );
};

export default TabGroup;
