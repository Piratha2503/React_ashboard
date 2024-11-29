import React from 'react'
import Sidebar from './SideBar'
import Topbar from './TopBar'
import ContentMain from './ContentMain';

const MainPage = (props) => {
  const {childComp} = props;
  return (
    <div className='flex'>
    <Sidebar/>  
    <div className='w-5/6 mob:w-full flex flex-col'>
    <Topbar/>
   <ContentMain childComp={childComp}/>
   <div className="text-center"> 
    <h1 className='text-xs font-semibold'>© copyrights reserved for Apsturn Technologies (pvt) ltd @ 2024</h1>
   </div>
    </div>    
    </div>
  )
}

export default MainPage
