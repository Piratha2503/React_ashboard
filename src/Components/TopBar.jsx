import { MailFilled } from '@ant-design/icons'
import { BellAlertIcon } from '@heroicons/react/16/solid'
import { Avatar } from 'antd'
import React, { useState } from 'react'
import logo from "../assets/ApsturnLogo.svg"
import profileImg from "../assets/Piratha.jpg"
import '../DashboardLayout.css'

const TopBar = () => {

    const [clicked,SetClicked] = useState(false)
    const [menuClicked,setMenuClicked] = useState(false)

  return (
    
<div className='p-0'>
<nav className="MainNavBar">
  <div className="MainNavBarSubDiv max-w-screen-xl">
  <button
        data-collapse-toggle="navbar-user"
        type="button"
        className="AvatarButton"
        aria-controls="navbar-user"
        aria-expanded={menuClicked}
        onClick={() => setMenuClicked(!menuClicked)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
  <a href="https://Apsturn.com/" className="logoLink">
  <img src={logo} className="h-8" alt="flow" />
  <span className="logoTitle"></span>
  </a>
  
  <div className='flex justify-between w-32'>
  <MailFilled className='w-6 text-slate-500' />
  <BellAlertIcon className='w-5 text-slate-500' />
  <div className="TopbarButtons">
 
      <button type="button" className="AvatarButtonDropdown" id="user-menu-button" 
      onClick={()=> SetClicked(!clicked)} 
      aria-expanded="true" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        
        <Avatar src={<img src={profileImg} alt='avatar'/>}/>
        
      </button>
      <div className={`${clicked ? 'top-12':'top-[-350px]'} DropdownDiv`} id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby='user-menu-button'>
          <li>
            <a href="/" className="AvatarButtonLinks">Profile</a>
          </li>
          <li>
            <a href="/" className="AvatarButtonLinks">Change Password</a>
          </li>
          <li>
            <a href="/" className="AvatarButtonLinks">Sign out</a>
          </li>
        </ul>
      </div>
      
  </div>
  </div>
  
  </div>
</nav>

</div>

  )
}

export default TopBar
