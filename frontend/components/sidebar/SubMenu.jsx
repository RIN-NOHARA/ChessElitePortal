// Filename - components/SubMenu.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between; // Use space-between to separate the icon and label
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  cursor: pointer;

  &:hover {
    background: #252831;
    border-left: 4px solid green;
  }
`;

const ArrowIcon = styled.span`
  margin-right: 16px;
  cursor: pointer;
`;

const DropdownLink = styled(Link)`
  background: #252831;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: green;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const toggleSubnav = () => {
    setSubnav(!subnav);
  };

  return (
    <>
      <SidebarLink to={item.path}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
      </div>
      </SidebarLink>
      {item.subNav && (
          <ArrowIcon onClick={toggleSubnav}>
          {subnav ? item.iconOpened : item.iconClosed}
        </ArrowIcon>
      )}
      
      {subnav &&
        item.subNav.map((subItem, index) => (
          <DropdownLink to={subItem.path} key={index}>
            {subItem.icon}
            <SidebarLabel>{subItem.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

export default SubMenu;
