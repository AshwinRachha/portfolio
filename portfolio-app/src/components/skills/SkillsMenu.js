import React, { useState } from "react";
import classNames from "classnames";
import skills from "./skillsData";
import frontendIcon from "../assets/eagle-emblem.png";
import backendIcon from "../assets/hawk-emblem.png";

const SkillsMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(1);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const renderContent = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className={`skill-sub-container-${activeMenuItem}`}>
        <h3>{skill.title}</h3>
        <div className="level-container">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`level-point ${i < skill.level ? "filled" : "unfilled"}`} />
          ))}
        </div>
      </div>
    ));
  };

  const menuItems = ["Languages and Skills", "Frameworks and Cloud"];
  const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon;

  return (
    <div className="skill-menu">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={classNames("skill-item", {
            activeSkill: activeMenuItem === index + 1,
          })}
          onClick={() => handleMenuItemClick(index + 1)}
        >
          <h2 className="skill-title">{item}</h2>
        </div>
      ))}
      <img className="skill-icon" src={currentIcon} alt="current skill" />
      <div className="skill-sub-container">
        {renderContent(skills[activeMenuItem])}
      </div>
    </div>
  );
};

export default SkillsMenu;
