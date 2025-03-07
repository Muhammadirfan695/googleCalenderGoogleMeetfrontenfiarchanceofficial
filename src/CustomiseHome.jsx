import React from "react";
import Select from "react-select";
import { FaSearch } from "react-icons/fa";
const CustomiseHome = () => {

  const options = [
    { value: "leads", label: "Leads" },
    { value: "contacts", label: "Contacts" },
    { value: "accounts", label: "Accounts" },
    { value: "potential", label: "Potential" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-between items-center mb-8 ">
        <h1 className="text-2xl font-bold text-gray-900 underline">Untitled Home page</h1>
        <div className="ml-auto space-x-2">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200">
            Save And Share
          </button>
          <button className="border px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
      <aside className="w-52 mr-3 fixed left-0 top-36 bg-[#21394b] text-white p-4 rounded-tr-[50px] rounded-br-[50px]">
        <h2 className="text-lg font-semibold mb-4">Custom View</h2>
        <div className="mb-6">
          <Select
            options={options}
            placeholder="Choose Module"
            className="text-black"
          />
        </div>
        <h2 className="text-lg font-semibold mb-2">Public Views</h2>
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="w-full pl-10 bg-white/10 border-none text-white placeholder:text-gray-400 p-2 rounded"
          />
        </div>
        <nav className="space-y-1">
          {["All Leads", "All Potential", "Closing This Month", "New Last Week", "Recently Created Deals"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className={`block px-3 py-2 rounded text-sm ${item === "All Leads" ? "bg-white/20" : "hover:bg-white/10"
                  }`}
              >
                {item}
              </a>
            )
          )}
        </nav>
      </aside>
    </div>
  );
};
export default CustomiseHome;