import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiFolder,
  FiChevronDown,
} from "react-icons/fi";
import { LuPenTool } from "react-icons/lu";
import { TbSpeakerphone } from "react-icons/tb";
import { MdOutlineCode } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import krite from "../assets/krite.png";
import ankitdehariya from "../assets/ankitdehariya.jpg";
import { RiCommandFill } from "react-icons/ri";
import ExternalLink from "./ExternalLink";

const Sidebar = () => {
  const [isCreateTeamOpen, setIsCreateTeamOpen] = useState(false);
  const [isFoldersOpen, setIsFoldersOpen] = useState(false);
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [isDesignOpen, setIsDesignOpen] = useState(false);
  const [isDesignTeamOpen, setIsDesignTeamOpen] = useState(false);
  const [isMarketingOpen, setIsMarketingOpen] = useState(false);
  const [isDevelopmentOpen, setIsDevelopmentOpen] = useState(false);

  const toggleCreateTeam = () => {
    setIsCreateTeamOpen(!isCreateTeamOpen);
  };

  const toggleFolders = () => {
    setIsFoldersOpen(!isFoldersOpen);
  };

  const toggleSales = () => {
    setIsSalesOpen(!isSalesOpen);
  };

  const toggleDesign = () => {
    setIsDesignOpen(!isDesignOpen);
  };
  const toggleDesignTeam = () => {
    setIsDesignTeamOpen(!isDesignTeamOpen);
  };

  const toggleMarketing = () => {
    setIsMarketingOpen(!isMarketingOpen);
  };

  const toggleDevelopment = () => {
    setIsDevelopmentOpen(!isDevelopmentOpen);
  };

  return (
    <div className=" min-h-screen max-h-full bg-white w-96 shadow-lg m-3 border rounded-xl  ">
   <div className="flex items-center justify-between px-4 py-2 text-white">
      <div className="flex items-center">
        <Link to="/products/ProductsTable" className="flex items-center">
          <img src={krite} alt="Krite Logo" className="w-11 h-11 mr-2" />
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500">INC</span>
            <span className="text-base font-medium text-gray-600">
              InnovateHub
            </span>
          </div>
        </Link>
      </div>
      <ExternalLink href="https://ankitdehariya.vercel.app/">
        <img
          src={ankitdehariya}
          alt="Krite Logo"
          className="w-8 h-8 mr-2 rounded-full"
        />
      </ExternalLink>
    </div>
      <ul className="py-4">
        <li
          className="flex justify-between items-center px-4 py-2 cursor-pointer mx-3 hover:bg-gray-100 hover:mx-3 hover:rounded-lg"
          onClick={toggleDesignTeam}
        >
          <div className="flex items-center">
            <LuPenTool className="mr-2" /> Design Team
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg hover:bg-white">
            <RiCommandFill
              className={`transition-transform transform mx-1 ${
                isDesignTeamOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            <span className="mx-1">+2</span>
          </div>
        </li>
        {isDesignTeamOpen && (
          <ul className="pl-8">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Design Item 1
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Design Item 2
            </li>
          </ul>
        )}
        <li
          className="flex justify-between items-center px-4 py-2 cursor-pointer  group  mx-3 hover:bg-gray-100 hover:mx-3 hover:rounded-lg"
          onClick={toggleMarketing}
        >
          <div className="flex items-center">
            <TbSpeakerphone className="mr-2" /> Marketing Team
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg hover:bg-white">
            <RiCommandFill
              className={`transition-transform transform mx-1 ${
                isMarketingOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            <span className="mx-1">+2</span>
          </div>
        </li>
        {isMarketingOpen && (
          <ul className="pl-8">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Marketing Item 1
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Marketing Item 2
            </li>
          </ul>
        )}
        <li
          className="flex justify-between items-center px-4 py-2 cursor-pointer mx-3 hover:bg-gray-100 hover:mx-3 hover:rounded-lg"
          onClick={toggleDevelopment}
        >
          <div className="flex items-center">
            <MdOutlineCode className="mr-2" /> Development Team
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg hover:bg-white">
            <RiCommandFill
              className={`transition-transform transform mx-1 ${
                isDevelopmentOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            <span className="mx-1">+2</span>
          </div>
        </li>
        {isDevelopmentOpen && (
          <ul className="pl-8">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Development Item 1
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Development Item 2
            </li>
          </ul>
        )}
        <li
          className="flex justify-between items-center px-4 py-2 cursor-pointer mx-3 hover:bg-gray-100 hover:mx-3 hover:rounded-lg"
          onClick={toggleCreateTeam}
        >
          <div className="flex items-center">
            <CiSquarePlus className="mr-2" /> Create a Team
          </div>
          <div className="flex items-center">
            <span className="text-xs font-semibold">+</span>
          </div>
        </li>
        {isCreateTeamOpen && (
          <div className="pl-8 py-2">
            <span>Create Team Popup</span>
          </div>
        )}

        <li
          className="flex justify-between items-center px-4 py-2 cursor-pointer mx-3 hover:bg-gray-100 hover:mx-3 hover:rounded-lg"
          onClick={toggleFolders}
        >
          <div className="flex items-center">
            <FiFolder className="mr-2" /> Products
          </div>
          <div className="flex items-center">
            <FiChevronDown
              className={`transition-transform transform ${
                isFoldersOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </li>
        {isFoldersOpen && (
          <ul className="pl-8">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              <Link to="/products/productsTable">productsTable</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              <Link to="/products/roadmap">Roadmap</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              <Link to="/products/feedback">Feedback</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              <Link to="/products/performance">Performance</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              <Link to="/products/team">Team</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              <Link to="/products/analytics">Analytics</Link>
            </li>
          </ul>
        )}
        <li
          className="flex justify-between items-center px-4 py-2 cursor-pointer mx-3 hover:bg-gray-100 hover:mx-3 hover:rounded-lg"
          onClick={toggleSales}
        >
          <div className="flex items-center">
            <FiFolder className="mr-2" /> Sales
          </div>
          <div className="flex items-center">
            <FiChevronDown
              className={`transition-transform transform ${
                isSalesOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </li>
        {isSalesOpen && (
          <ul className="pl-8">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Sale Item 1
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Sale Item 2
            </li>
          </ul>
        )}
        <li
          className="flex justify-between items-center px-4 py-2 cursor-pointer mx-3 hover:bg-gray-100 hover:mx-3 hover:rounded-lg"
          onClick={toggleDesign}
        >
          <div className="flex items-center">
            <FiFolder className="mr-2" /> Design
          </div>
          <div className="flex items-center">
            <FiChevronDown
              className={`transition-transform transform ${
                isDesignOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </li>
        {isDesignOpen && (
          <ul className="pl-8">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Design Item 1
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Design Item 2
            </li>
          </ul>
        )}
        <li className="flex justify-between items-center px-4 py-2 cursor-pointer mx-3 hover:bg-gray-100 hover:mx-3 hover:rounded-lg">
          <div className="flex items-center">
            <FiFolder className="mr-2" /> Office
          </div>
        </li>
        <li className="flex justify-between items-center px-4 py-2 cursor-pointer mx-3 hover:bg-gray-100 hover:mx-3 hover:rounded-lg">
          <div className="flex items-center">
            <FiFolder className="mr-2" /> Legal
          </div>
        </li>
        <li className="flex justify-between items-center px-4 py-2 cursor-pointer mx-3 hover:bg-gray-100 hover:mx-3 hover:rounded-lg">
          <div className="flex items-center">
            <FiFolder className="mr-2" /> Office
          </div>
        </li>

        <li className="px-4 py-2 cursor-pointer mx-3 hover:bg-gray-100 hover:mx-3 hover:rounded-lg">
          <Link to="/help-and-steps">Help and First Steps</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
