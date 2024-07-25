import { NavLink } from "react-router-dom";
import { FaBars} from "react-icons/fa";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './SideBar';




const routes = [
  {
    path: "/",
    name: "Home",
 
  },
  {
    path: "/about-us",
    name: "About Us",
 
  },
  {
    path: "/academics",
    name: "Academics",
   
  },
  {
    path: "/admissions",
    name: "Admissions",
   
  },
  {
    path: "/contact-us",
    name: "Contact Us",
 
  },
  {
    path: "/faculty",
    name: "Faculty",
  
  },
  {
    path: "/gallery",
    name: "Gallery",
  
  },
  {
    path: "/students",
    name: "Students",
   
  },
];



const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
        

              width: isOpen ? "200px" : "45px",
              height: isOpen ? "auto" : "50px", marginTop:"0px", // Adjust as needed
              transition: {
                duration: 0, // Adjust duration for quicker transition
              },

            // },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
      

<div className="bars">
              <FaBars onClick={toggle} />
            </div>
</div>
          
          
     

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;



