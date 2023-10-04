import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { dashboardContext } from "../../context/Dashboard";
import DropDown from "../components/DropDown";
import { HiDotsHorizontal } from "react-icons/hi";

const SubMenu = ({ data }) => {
  const {sidebarOpen} = useContext(dashboardContext)
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);


  const trigger = useRef(null);

  const showSubMenu = ()=>{
    if (sidebarOpen) {
      setSubMenuOpen(!subMenuOpen)
    }else{
      setShowDropDown(true)
    }
  }


  useEffect(() => {
    const clickHandler = ({ target }) => {
          if ( !showDropDown ||
          trigger.current.contains(target)
          )
          return;
          setShowDropDown(false);
      }
    
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    }
  )
  


  
  return (
    <>
      <li
        className={`link ${pathname.includes(data.name) && "text-blue-600"}`}
        onClick={showSubMenu} ref={trigger}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>


      {
        sidebarOpen && (
          <motion.ul
            animate={
              subMenuOpen
                ? {
                    height: "fit-content",
                  }
                : {
                    height: 0,
                  }
            }
            className="flex h-0 flex-col pl-12 text-[0.8rem] font-normal overflow-hidden"
          >
            {data.menus?.map((menu) => (
              <li key={menu}>
                {/* className="hover:text-blue-600 hover:font-medium" */}
                <NavLink

                  to={`/${data.name}/${menu}`}
                  className="link !bg-transparent capitalize"
                >
                  <HiDotsHorizontal/>
                  {menu}
                </NavLink>
              </li>
            ))}
          </motion.ul>

        )
      }
      {
        showDropDown  && <DropDown uiItems={data} showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
      }
    </>
  );
};

export default SubMenu;
