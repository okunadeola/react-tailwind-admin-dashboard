import { useContext } from "react";
import { dashboardContext } from "../context/Dashboard";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { FullScreen} from "react-full-screen";

function RootLayout({ children }) {
  const {fullscreenHandler, sidebarOpen } = useContext(dashboardContext)

console.log(sidebarOpen)
  return (

    <FullScreen handle={fullscreenHandler}>
      {/* {
        sidebarOpen 
      } */}
        <div className="dark:text-gray-100 dark:bg-slate-700 bg-lighten duration-200 ease-in-out z-1 ">
              <Navbar/>
              <div className="flex max-w-full ">
                <Sidebar />
                <div className={`w-full min-h-[93vh]  ${!(sidebarOpen) ? 'md:ml-16' : 'md:ml-64'}  `}>
                <main className="py-4 flex-1 px-4 break-words">{children}</main>
                </div>
              </div>
        </div>
      </FullScreen>
  );
}

export default RootLayout;
