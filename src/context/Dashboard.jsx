import { createContext, useState } from "react";




export const dashboardContext = createContext()


import React from 'react'
import { useMediaQuery } from "react-responsive";

const DashboardContext = ({children}) => {
    let isTablet = useMediaQuery({ query: "(max-width: 768px)" });
    const [sidebarOpen, setSidebarOpen] = useState(isTablet ? false : true)



    const toggleSideBar = ()=>{
        setSidebarOpen(true)
    }




  return (
    <dashboardContext.Provider value={{sidebarOpen, setSidebarOpen, toggleSideBar, isTablet}}>
       {children}
    </dashboardContext.Provider>
  )
}

export default DashboardContext
