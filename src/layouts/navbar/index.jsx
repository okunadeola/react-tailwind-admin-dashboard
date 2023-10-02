



import React, { useContext } from 'react'
import { SlSettings } from "react-icons/sl";
import { MdMenu, MdNotifications } from 'react-icons/md';
import { BsPersonLock } from 'react-icons/bs';
import { dashboardContext } from '../../context/Dashboard';
import ThemeModeSwitcher from '../components/ThemeModeSwitcher';


const Navbar = () => {
    const {toggleSideBar} = useContext(dashboardContext)
    


  return (
    <div className='w-screen sticky top-0 p-2 shadow-sm dark:shadow-md dark:text-gray-100 dark:bg-slate-700 bg-white z-[99]'>
      <div className='px-2 py-3'>
         <div className='flex items-center justify-between'>
            <div className='flex items-center justify-between gap-2'> 
                <div className="md:hidden cursor-pointer" onClick={() => toggleSideBar()}>
                    <MdMenu size={25} />
                </div>
                
                <img
                    src="https://img.icons8.com/color/512/firebase.png"
                    width={35}
                    alt=""
                />
                <span className="text-xl whitespace-pre font-medium">Fireboard</span>
            </div>
                

            <div className='flex items-center justify-between gap-10 '>
                <div className='p-1 flex items-center rounded-lg cursor-pointer bg-slate-200'>
                <ThemeModeSwitcher/>
                </div>
                <div className='p-1 flex items-center rounded-lg cursor-pointer bg-slate-200'>
                    <SlSettings size={20} className='font-medium text-gray-600'/>
                </div>
                
                <div className='p-1 flex items-center rounded-lg cursor-pointer bg-slate-200'>
                    <MdNotifications  size={20} className='font-medium text-gray-600' />
                </div>
                <div className='p-1 flex items-center rounded-lg cursor-pointer bg-slate-200'>
                    <BsPersonLock  size={20}   className='font-medium text-gray-600' />
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar
