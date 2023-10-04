



import React, { useContext } from 'react'

import { MdMenu } from 'react-icons/md';
import { dashboardContext } from '../../context/Dashboard';
// import ThemeModeSwitcher from '../components/ThemeModeSwitcher';
import ThemeModeSwitcher2 from '../components/ThemeModeSwitcher2';
import { AiOutlineFullscreen } from 'react-icons/ai';
import UserDropdown from '../components/UserDropdown';
import DropdownNotification from '../components/DropdownNotification';
import DropdownMessage from '../components/DropdownMessage';


const Navbar = () => {
    const {toggleSideBar, fullscreenHandler} = useContext(dashboardContext)



  return (
    <div className='w-screen sticky top-0 right-0 left-0 p-2 shadow-sm dark:shadow-md dark:text-gray-100 dark:bg-slate-800 bg-white z-[99]'>
      <div className='px-2 py-3'>
         <div className='flex items-center justify-between'>
            <div className='flex items-center justify-between gap-2'> 
                <div className="md:hidden cursor-pointer" onClick={() => toggleSideBar()}>
                    <MdMenu size={25} />
                </div>
                
                <img
                className='hidden md:block'
                    src="https://img.icons8.com/color/512/firebase.png"
                    width={35}
                    alt=""
                />
                <span className="text-xl whitespace-pre font-medium sm:block hidden">Fireboard</span>
            </div>
                

            <div className='flex items-center justify-between md:gap-10  gap-2'>

                {/* first theme */}
                {/* <div className='p-1 flex items-center rounded-lg cursor-pointer bg-slate-200'>
                <ThemeModeSwitcher/>
                </div> */}


                {/* second theme */}
                <ThemeModeSwitcher2/>
                

                
                <div className='p-1 flex items-center rounded-lg cursor-pointer bg-slate-200'>
                    <AiOutlineFullscreen onClick={fullscreenHandler.enter} size={20} className='font-medium text-gray-600'/>
                </div>
                <div>
                    <DropdownMessage/>
                </div>

                <div>
                    <DropdownNotification/>
                </div>
               
               
                    <UserDropdown className='font-medium text-gray-600' />
                
            </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar
