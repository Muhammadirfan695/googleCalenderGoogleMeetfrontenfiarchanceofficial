
import React from "react";
import Select from "react-select";
import { FaSearch } from "react-icons/fa";

const SidebarOne = () => {
  const options = [
    { value: "leads", label: "Leads" },
    { value: "contacts", label: "Contacts" },
    { value: "accounts", label: "Accounts" },
    { value: "potential", label: "Potential" },
  ];

  return (
    <div>
      
 <aside className="w-52 fixed left-0 top-36 h-screen bg-[#21394b] text-white p-4 rounded-tr-[50px] rounded-br-[50] ">
        
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
                className={`block px-3 py-2 rounded text-sm ${
                  item === "All Leads" ? "bg-white/20" : "hover:bg-white/10"
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

export default SidebarOne;



import Select from "react-select";
import { FaSearch, FaPhone, FaEnvelope, FaBuilding, FaUser, FaLink } from "react-icons/fa";

 const CustomView = () => {
  const options = [
    { value: "leads", label: "Leads" },
    { value: "contacts", label: "Contacts" },
    { value: "accounts", label: "Accounts" },
    { value: "potential", label: "Potential" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="flex items-center justify-between px-6 py-3 bg-[#2F4F4F] text-white border-b border-white/10">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold tracking-wide">FAIRFORCE</h1>
          <div className="relative">
            <div className="flex items-center bg-white/10 rounded-md px-3 py-1">
              <FaSearch className="text-gray-400" />
              <input
                type="search"
                placeholder="Search"
                className="w-64 pl-2 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm">14 Days Free Trial</span>
            <span className="text-gray-400">|</span>
            <button className="text-blue-400 hover:text-blue-300 hover:bg-white/10 px-3 py-1 rounded">
              UPGRADE
            </button>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar */}
        <aside className="w-64 bg-[#2F4F4F] text-white p-4">
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
                  className={`block px-3 py-2 rounded text-sm ${
                    item === "All Leads" ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Untitled Home page</h1>
              <div className="space-x-2">
                <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200">
                  Save And Share
                </button>
                <button className="border px-4 py-2 rounded">Cancel</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-6 text-center border-b pb-4">All Leads</h2>
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex items-center gap-4">
                  <FaUser className="text-gray-500" />
                  <input placeholder="Lead Name" className="flex-1 border p-2 rounded" />
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-gray-500" />
                  <input placeholder="(123) 456-7890" className="flex-1 border p-2 rounded" />
                </div>
                <div className="flex items-center gap-4">
                  <FaLink className="text-gray-500" />
                  <input placeholder="Lead Source" className="flex-1 border p-2 rounded" />
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-gray-500" />
                  <input placeholder="abc@gmail.com" className="flex-1 border p-2 rounded" />
                </div>
                <div className="flex items-center gap-4">
                  <FaBuilding className="text-gray-500" />
                  <input placeholder="Industry" className="flex-1 border p-2 rounded" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}











