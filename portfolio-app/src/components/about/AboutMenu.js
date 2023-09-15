import React, { useState } from 'react';
import AboutMenuItem from './AboutMenuItem';
import AboutSubheading from './AboutSubheading';
import Popup from './Popup';
import subheadingsData from './subheadingsData';
import personalIcon from '../assets/moebius-triangle.png';
import educationIcon from '../assets/upgrade.png';
import careerIcon from '../assets/triple-corn.png';
import chatIcon from '../assets/chat-icon.png';

const AboutMenu = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(1);
    const [activeSubheading, setActiveSubheading] = useState(1);

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
        setActiveSubheading(menuItem === 4 ? activeSubheading : 1);
    };

    const handleSubheadingClick = (subheading) => {
        setActiveSubheading(subheading);
    };

    const menuItems = ['PERSONAL', 'CAREER', 'EDUCATION', 'CHAT'];
    const activeMenuTitle = menuItems[activeMenuItem - 1];

    const activeMenuIcon =
        activeMenuTitle === 'PERSONAL'
            ? personalIcon
            : activeMenuTitle === 'EDUCATION'
            ? educationIcon
            : activeMenuTitle === 'CAREER'
            ? careerIcon
            : chatIcon;

    const isChatActive = activeMenuItem === 4;
    const subheadings = subheadingsData[activeMenuItem];

    return (
        <>
            <div className="menu">
                {menuItems.map((item, index) => (
                    <AboutMenuItem
                        key={index}
                        title={item}
                        active={activeMenuItem === index + 1}
                        onClick={() => handleMenuItemClick(index + 1)}
                    />
                ))}
            </div>
            <div className="sub-container">
                <div className="icon-title-container">
                   
                    <h3>{activeMenuTitle}</h3>
                </div>
                {isChatActive ? (
                    <Popup />
                ) : (
                    subheadings.map((subheading, index) => (
                        <AboutSubheading
                            key={index}
                            title={subheading.title}
                            content={subheading.content}
                            active={activeSubheading === index + 1}
                            onClick={() => handleSubheadingClick(index + 1)}
                            menuItem={activeMenuItem}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default AboutMenu;
