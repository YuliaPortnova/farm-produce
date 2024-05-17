import React, { useState } from "react";
import { TabButton, TabList, TabListItem, Content } from "./styles";

function Tabs({ tabsList = [] }) {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <>
      <TabList>
        {tabsList.map((tab, index) => (
          <TabListItem key={`tab${index * 10}`}>
            <TabButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? { as: "span" }
                : {
                    onClick: () => {
                      setSelectIndex(index);
                    },
                  })}
            >
              {tab.title}
            </TabButton>
          </TabListItem>
        ))}
      </TabList>
      <Content>{tabsList[selectIndex].content}</Content>
    </>
  );
}

export default Tabs;
