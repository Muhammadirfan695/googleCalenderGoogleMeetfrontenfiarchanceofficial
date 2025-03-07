import React, { useState } from "react";
import { GrRefresh } from "react-icons/gr";
import { ChevronDown, MousePointer2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [selectedView, setSelectedView] = useState("ABC Home");
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); 
  
    const handleNavigation = (view, path) => {
      setSelectedView(view);
      setIsOpen(false);
      navigate(path); 
    };

  return (
    <main className="flex-1 p-8 overflow-hidden bg-gray-100 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 ">
          {/* <div>
            <h1 className="text-3xl font-bold text-gray-900">Hello, ABC 👋</h1>
            <p className="text-gray-600">Here’s what’s happening in your CRM this month</p>
          </div> */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Hello, ABC 👋
            </h1>
            <div className="h-[2px] w-full bg-gray-300 my-2"></div>
            <p className="text-gray-600">
              Here’s what’s happening in your CRM this month
            </p>
          </div>

          <div className="p-4 flex items-center justify-end relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center gap-2"
      >
        {selectedView}
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 w-56 bg-white shadow-lg rounded-md border border-gray-200">
          <button
            className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={() => handleNavigation("Classic View", "/classicview")}
          >
            Classic View
          </button>
          <button
            className={`w-full text-left py-2 px-4 flex items-center justify-between ${
              selectedView === "ABC Home" ? "bg-blue-100" : ""
            }`}
            onClick={() => handleNavigation("ABC Home", "/abchome")}
          >
            ABC Home
            {selectedView === "ABC Home" }
          </button>
          <button
            className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={() => handleNavigation("Manager's Home", "/managerHome")}
          >
            Manager's Home
          </button>
          <button
            className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={() => handleNavigation("Customize Home Page", "/customiseHome")}
          >
            Customize Home Page
          </button>
        </div>
      )}
    </div>
          {/* <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 text-sm text-gray-700 hover:bg-gray-200 rounded-md transition">
              ABC's Home
            </button>
            <button className="px-4 py-2 border border-gray-300 text-sm text-gray-700 hover:bg-gray-200 rounded-md transition">
              This Month
            </button>
          </div> */}
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <p className="text-sm text-gray-600">My Open Potential</p>
            <p className="text-3xl font-bold mt-1 text-gray-900">12</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <p className="text-sm text-gray-600">My Untouched Potential</p>
            <p className="text-3xl font-bold mt-1 text-gray-900">10</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <p className="text-sm text-gray-600">My Calls Today</p>
            <p className="text-3xl font-bold mt-1 text-gray-900">01</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <p className="text-sm text-gray-600">My Leads</p>
            <p className="text-3xl font-bold mt-1 text-gray-900">78</p>
          </div>
        </div>
        
        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Meeting Table */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center p-6 border-b bg-gray-50">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                My Meeting
                <GrRefresh className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700 transition" />
              </h2>
              <button className="text-gray-400 hover:text-gray-600 text-xl">...</button>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Title</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">From</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Related to</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">To</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Contact Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b text-blue-600">Demo</td>
                    <td className="px-4 py-2 border-b">02/29/2024</td>
                    <td className="px-4 py-2 border-b">Printing Dimensions</td>
                    <td className="px-4 py-2 border-b">02/29/2024 10:45 AM</td>
                    <td className="px-4 py-2 border-b">John Doe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* My Open Task Table */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center p-6 border-b bg-gray-50">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                My Open Task
                <GrRefresh className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700 transition" />
              </h2>
              <button className="text-gray-400 hover:text-gray-600 text-xl">...</button>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Subject</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Due Date</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Status</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Priority</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Contact Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b text-blue-600">Register 2024</td>
                    <td className="px-4 py-2 border-b">03/25/2024</td>
                    <td className="px-4 py-2 border-b">Not Started</td>
                    <td className="px-4 py-2 border-b">Low</td>
                    <td className="px-4 py-2 border-b">Jane Smith</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;


















// import React from "react";
// import { GrRefresh } from "react-icons/gr";
// const Dashboard = () => {
//   return (
//     <main className="flex-1 p-8 bg-[#f8f9fa] overflow-auto">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">Hello, ABC</h1>
//             <p className="text-gray-600">This is what's happening in your CRM this month</p>
//           </div>
//           <div className="flex gap-2">
//             <button className="px-4 py-2 border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 rounded">
//               ABC's Home
//             </button>
//             <button className="px-4 py-2 border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 rounded">
//               This Month
//             </button>
//           </div>
//         </div>

//         {/* Metrics */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           {[
//             { title: "My Open Potential", value: "12" },
//             { title: "My Untouched Potential", value: "10" },
//             { title: "My Calls Today", value: "01" },
//             { title: "My Leads", value: "78" },
//           ].map((metric) => (
//             <div key={metric.title} className="bg-white shadow-sm rounded-lg p-6">
//               <div className="text-center">
//                 <p className="text-sm text-gray-600">{metric.title}</p>
//                 <p className="text-2xl font-bold mt-1">{metric.value}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Tables */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="bg-white shadow-sm rounded-lg">
//             <div className="flex justify-between items-center p-6 border-b">
//               <h2 className="text-lg font-semibold flex items-center gap-2">
//                 My Meeting
//                 <GrRefresh className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700" />
//               </h2>
//               <button className="text-gray-400 hover:text-gray-600">...</button>
//             </div>

//             <div className="p-6 overflow-x-auto">
//               <table className="min-w-full table-auto w-full">
//                 <thead>
//                   <tr>
//                     <th className="px-2 py-2 text-left">Title</th>
//                     <th className="px-2 py-2 text-left">From</th>
//                     <th className="px-2 py-2 text-left">Related to</th>
//                     <th className="px-2 py-2 text-left">To</th>
//                     <th className="px-2 py-2 text-left">Contact Name</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="px-2 py-2 text-blue-600">Demo</td>
//                     <td className="px-2 py-2">02/29/2024</td>
//                     <td className="px-2 py-2">Printing Dimensions</td>
//                     <td className="px-2 py-2">02/29/2024 10:45 AM</td>
//                     <td className="px-2 py-2">
//                       <div className="flex items-center gap-2">
//                         <span>John Doe</span>
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="bg-white shadow-sm rounded-lg">
//             <div className="flex justify-between items-center p-6 border-b">
//               <h2 className="text-lg font-semibold flex items-center gap-2">
//                 My Open Task
//                 <GrRefresh className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700" />
//               </h2>

//               <button className="text-gray-400 hover:text-gray-600">...</button>
//             </div>
//             <div className="p-6 overflow-x-auto">
//               <table className="min-w-full table-auto w-full">
//                 <thead>
//                   <tr>
//                     <th className="px-2 py-2 text-left">Subject</th>
//                     <th className="px-2 py-2 text-left">Due Date</th>
//                     <th className="px-2 py-2 text-left">Status</th>
//                     <th className="px-2 py-2 text-left">Priority</th>
//                     <th className="px-2 py-2 text-left">Contact Name</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="px-2 py-2 text-blue-600">Register  2024</td>
//                     <td className="px-2 py-2">03/25/2024</td>
//                     <td className="px-2 py-2">Not Started</td>
//                     <td className="px-2 py-2">Low</td>
//                     <td className="px-2 py-2">
//                       <div className="flex items-center gap-2">
//                         <span>Jane Smith</span>
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Dashboard;
