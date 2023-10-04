import { createContext, useState } from "react";
import React from 'react'
import { useMediaQuery } from "react-responsive";
import { FullScreen, useFullScreenHandle } from "react-full-screen";




export const dashboardContext = createContext()



const DashboardContext = ({children}) => {
    let isTablet = useMediaQuery({ query: "(max-width: 768px)" });
    const [sidebarOpen, setSidebarOpen] = useState(isTablet ? false : true)
    const fullscreenHandler = useFullScreenHandle();


    const toggleSideBar = ()=>{
        setSidebarOpen(true)
    }




  return (
    <dashboardContext.Provider value={{sidebarOpen, setSidebarOpen, toggleSideBar, isTablet, fullscreenHandler}}>
       {children}
    </dashboardContext.Provider>
  )
}

export default DashboardContext
