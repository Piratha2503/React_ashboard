import { PieChartOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../DashboardLayout.css';
import { sideMenuItems as menuData } from "../SystemConfig";
const Sidebar = () => {
  // State for tracking open submenus
  const [openSubmenus, setOpenSubmenus] = useState({});

  // Toggle submenu function
  const toggleSubmenu = (key) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
 
  return (
    <div className="SidebarMainDiv">
    <div className='SidebarHeadingDiv'>
    <h1 className='SidebarHeading'> A P S T U R N </h1>
    </div>
    <hr/>
    <div className='h-5'></div>
      {menuData.map((menuItem) => (
        <div key={menuItem.key} className="mb-2 mt-1">
          {/* Main Menu Item */}
          <button
            onClick={() => {
              menuItem.submenu && toggleSubmenu(menuItem.key)
              }}
            className="SidebarMenuButtons"
          >
            <Link to={menuItem.link} className='flex'>
            <PieChartOutlined className='w-6'/>
            {menuItem.label}
            </Link>
            {menuItem.submenu && (
              <svg
                className={`w-4 h-4 transition-transform transform ${
                  openSubmenus[menuItem.key] ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>

          {/* Submenu */}
          {menuItem.submenu && (
            <div
              className={`ml-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                openSubmenus[menuItem.key] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {menuItem.submenu.map((subItem) => (
                <a
                  key={subItem.key}
                  href={subItem.link}
                  className="block px-4 py-2 rounded hover:bg-gray-700"
                >
                  {subItem.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
