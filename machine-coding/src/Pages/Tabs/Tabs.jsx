import { useState } from "react";
import "./tabsStyles.css";

export const Tabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tabs-list">
        {tabs.map(({ title }, index) => (
          <div
            onClick={() => setCurrentTab(index)}
            key={index}
            className={`tab-item ${
              index === currentTab ? "tab-item-selected" : ""
            }`}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="tabs-content">{tabs[currentTab].content}</div>
    </div>
  );
};
