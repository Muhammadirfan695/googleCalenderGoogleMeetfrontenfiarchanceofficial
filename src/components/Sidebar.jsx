import React from "react";
import { NavLink } from "react-router-dom";
import { 
    FaHome, FaHandshake, FaAddressBook, FaIndustry, 
    FaStar, FaTasks, FaRegCalendarAlt 
} from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="w-64 fixed left-0 top-0 h-full bg-[#21394b] text-white p-6 border-r border-gray-400">
            <div className="flex justify-center mb-6">
                <h1 className="text-2xl font-bold">MyApp</h1>
            </div>       
            <nav className="space-y-4">
                <NavLink 
                    to="/" 
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-md transition duration-200 ${
                            isActive ? "bg-white/20 text-blue-400" : "text-white hover:text-blue-500 hover:bg-white/10"
                        }`
                    }
                >
                    <FaHome className="mr-2" />
                    <span>HOME</span>
                </NavLink>

                <NavLink 
                    to="/lead" 
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-md transition duration-200 ${
                            isActive ? "bg-white/20 text-blue-400" : "text-white hover:text-blue-500 hover:bg-white/10"
                        }`
                    }
                >
                    <FaHandshake className="mr-2" />
                    <span>LEAD</span>
                </NavLink>
                
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-md transition duration-200 ${
                            isActive ? "bg-white/20 text-blue-400" : "text-white hover:text-blue-500 hover:bg-white/10"
                        }`
                    }
                >
                    <FaAddressBook className="mr-2" />
                    <span>CONTACT</span>
                </NavLink>

                <NavLink 
                    to="/company" 
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-md transition duration-200 ${
                            isActive ? "bg-white/20 text-blue-400" : "text-white hover:text-blue-500 hover:bg-white/10"
                        }`
                    }
                >
                    <FaIndustry className="mr-2" />
                    <span>COMPANY</span>
                </NavLink>

                <NavLink 
                    to="/potential" 
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-md transition duration-200 ${
                            isActive ? "bg-white/20 text-blue-400" : "text-white hover:text-blue-500 hover:bg-white/10"
                        }`
                    }
                >
                    <FaStar className="mr-2" />
                    <span>POTENTIAL</span>
                </NavLink>

                <NavLink 
                    to="/task" 
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-md transition duration-200 ${
                            isActive ? "bg-white/20 text-blue-400" : "text-white hover:text-blue-500 hover:bg-white/10"
                        }`
                    }
                >
                    <FaTasks className="mr-2" />
                    <span>TASK</span>
                </NavLink>

                <NavLink 
                    to="/meeting" 
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-md transition duration-200 ${
                            isActive ? "bg-white/20 text-blue-400" : "text-white hover:text-blue-500 hover:bg-white/10"
                        }`
                    }
                >
                    <FaRegCalendarAlt className="mr-2" />
                    <span>MEETING</span>
                </NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;

