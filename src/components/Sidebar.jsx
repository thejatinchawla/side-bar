import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaImage,
    FaLandmark,
    FaMoneyCheckAlt,
    FaQuestion
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"DASHBOARD",
            icon:<FaTh/>
        },
        {
            path:"/profile",
            name:"PROFILE",
            icon:<FaUserAlt/>
        },
        {
            path:"/gallery",
            name:"LAND GALLERY",
            icon:<FaImage/>
        },
        {
            path:"/lands",
            name:"OWNED LANDS",
            icon:<FaLandmark/>
        },
        {
            path:"/payment",
            name:"MAKE PAYMENT",
            icon:<FaMoneyCheckAlt/>
        },
        {
            path:"/help",
            name:"HELP",
            icon:<FaQuestion/>
        }
    ]
    return (
        <div className="box">
           <div style={{width: isOpen ? "300px" : "90px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src="https://github.com/thejatinchawla/Instagram-Clone/blob/master/src/land-registration-logo-removebg-preview%20(1).png?raw=true" alt="logo" width={250} /></h1>
                   <div style={{marginLeft: isOpen ? "5px" : "22px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;