import { useContext, useEffect } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlNotebook, SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import {  BsChat, BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import {  TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line, RiProductHuntFill } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import { dashboardContext } from "../../context/Dashboard";
import { MdVerticalDistribute } from "react-icons/md";

const Sidebar = () => {
  const {sidebarOpen, setSidebarOpen, isTablet} = useContext(dashboardContext)

  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTablet) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isTablet]);



  const overlayClicked = ()=>{
    setSidebarOpen(false)
  }


  useEffect(() => {
    isTablet && setSidebarOpen(false);
  }, [pathname]);

  const Nav_animation = isTablet
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "build",
      icon: RiBuilding3Line,
      menus: ["auth", "app settings", "stroage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  return (
    <div className="dark:!text-gray-100 dark:!bg-slate-800 !bg-white relative">
      <div
        onClick={() => overlayClicked()}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-gray-500  opacity-30 ${
          sidebarOpen ? "block" : "hidden"
        } `}
      ></div>


      
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTablet ? -250 : 0 }}
        animate={sidebarOpen ? "open" : "closed"}
        className="shadow-xl md:z-[9] z-[9999] max-w-[16rem]  w-[16rem] 
             fixed top-0 left-0
           h-screen  dark:!text-gray-100 dark:!bg-slate-800 !bg-white"
      >

        <div className="flex items-center gap-2.5 font-medium border-b py-4 dark:border-slate-600 border-slate-300 md:mx-0  mx-3 md:py-10 md:bg-lighten dark:md:bg-slate-800" >
          
          <img
          className="md:hidden"
            src="https://img.icons8.com/color/512/firebase.png"
            width={35}
            alt=""
          />
          <span className="text-xl whitespace-pre md:hidden">Fireboard</span>
        </div>

        <div className="flex flex-col  h-full">

          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 overflow-x-hidden  font-medium  scrollbar-thin dark:scrollbar-track-slate-400  scrollbar-track-white scrollbar-thumb-slate-100 dark:scrollbar-thumb-slate-700  md:h-[78%] h-[75%]">
            <li>
              <NavLink to={"/"} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                All Apps
              </NavLink>
            </li>
            <li>
              <NavLink to={"/authentication"} className="link">
                <BsPerson size={23} className="min-w-max" />
                Authentication
              </NavLink>
            </li>
            <li>
              <NavLink to={"/stroage"} className="link">
                <HiOutlineDatabase size={23} className="min-w-max" />
                Stroage
              </NavLink>
            </li>
            {/* test routeless */}
            <li>
              <NavLink to={"/post"} className="link">
                <SlNotebook size={23} className="min-w-max" />
                Post
              </NavLink>
            </li>
            <li>
              <NavLink to={"/product"} className="link">
                <RiProductHuntFill size={23} className="min-w-max" />
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to={"/table"} className="link">
                <MdVerticalDistribute size={23} className="min-w-max" />
                Table
              </NavLink>
            </li>
            <li>
              <NavLink to={"/message"} className="link">
                <BsChat size={23} className="min-w-max" />
                Chat
              </NavLink>
            </li>
            
           
           
            
           
          

            {/* {(sidebarOpen || isTablet) && ( */}
              <div className="border-y py-5 dark:border-slate-600 md:border-slate-300 ">
                {
                  (sidebarOpen || isTablet) && 
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Product categories
                </small>
                }
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            {/* )} */}
            <li>
              <NavLink to={"/settings"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>








          {sidebarOpen && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y dark:border-slate-600 border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
          
         
        
         
        </div>
        <motion.div
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
          animate={
            sidebarOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: 50,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit hidden md:block z-50  right-2 bottom-24 cursor-pointer bg-blue-50 dark:text-black rounded-full p-2 my-auto"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
     
    </div>
  );
};

export default Sidebar;
