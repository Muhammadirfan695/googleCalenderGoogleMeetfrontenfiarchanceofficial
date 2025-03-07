import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBell, FaCog, FaUser, FaChevronDown, FaPlus } from "react-icons/fa";

const DropdownMenu = ({
  options,
  buttonLabel,
  buttonIcon,
  showSearch = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // console.log("filteredOptions", filteredOptions);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white flex items-center gap-1 p-2 border rounded-md"
      >
        {buttonIcon && <span>{buttonIcon}</span>}
        <span>{buttonLabel}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-md p-2">
          {showSearch && (
            <input
              placeholder="Search History"
              className="w-full p-2 border rounded-md mb-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}
          <ul className="space-y-1">
            {filteredOptions.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    navigate(option.path);
                    setIsOpen(false);
                  }}
                  className="p-2 block w-full text-left hover:bg-gray-200 text-black"
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const menuOptions = [
    { label: "Leadd", path: "/lead" },
    { label: "Contact", path: "/contact" },
    { label: "Company", path: "/company" },
    { label: "Potential", path: "/potential" },
    { label: "Task", path: "/task" },
    { label: "Meeting", path: "/meeting" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] flex items-center justify-between px-4 bg-[#21394b] text-white z-10">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img
            src="/logofairforce2.png"
            alt="CRM Illustration"
            className="max-w-[130px]"
          />
        </Link>
        <div className="ml-24">
          <DropdownMenu
            options={menuOptions}
            buttonLabel="Menu"
            showSearch={true}
          />
        </div>
      </div>

      <div className="flex items-center gap-6 w-full justify-end">
        <div className="flex flex-col mb-2 items-center">
          <button className="text-white text-xs px-2 py-0">
            Free trial day 14
          </button>
          <button className="text-white text-xs px-2 py-0 rounded mt-1">
            UPGRADE
          </button>
          <div className="w-full border-t border-gray-400 mt-1"></div>
        </div>
        <DropdownMenu
          options={menuOptions}
          buttonIcon={<FaPlus className="h-5 w-5" />}
          showSearch={false}
        />
        <FaBell className="h-4 w-5" />
        <FaCog className="h-5 w-5" />
        <FaUser className="h-5 w-5" />
      </div>
    </header>
  );
};

export default Header;
