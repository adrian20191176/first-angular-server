import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Falcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavBarItems } from "./NavBarItems";
import "./NavBar.css";
import { IconContext } from "react-icons/lib";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "red" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <Falcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavBarItems.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
