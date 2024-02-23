// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "About Us", 
		path: "/",
		icon: <AiIcons.AiFillHome />,
       
		iconClosed: <button> <RiIcons.RiArrowDownSFill /></button>,
		iconOpened: <button> <RiIcons.RiArrowUpSFill /> </button>,

		
	},
	{
		title: "YOUR PROFILE",
		path: "/services",
		icon: <IoIcons.IoIosPaper />,
        iconClosed: <button> <RiIcons.RiArrowDownSFill /></button>,
		iconOpened: <button> <RiIcons.RiArrowUpSFill /> </button>,

		
	},
	{
		title: "EDIT YOUR PROFILE",
		path: "/contact",
		icon: <FaIcons.FaPhone />,
	},
	{
		title: "Events",
		path: "/events",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <button> <RiIcons.RiArrowDownSFill /></button>,
		iconOpened: <button> <RiIcons.RiArrowUpSFill /> </button>,

		
	},
	{
		title: "Academy",
		path: "/support",
		icon: <IoIcons.IoMdHelpCircle />,
	},{
		title: "Courses",
		path: "/courses23",
		icon: <IoIcons.IoMdHelpCircle />,
	},
	{
		title: "home",
		path: "/nav",
		icon: <IoIcons.IoMdHelpCircle />,
	},
];
