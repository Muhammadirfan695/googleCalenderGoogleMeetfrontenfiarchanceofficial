import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }

  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  // const initialData = 15;
  //   const [myNum, setMyNum] = React.useState(0);
  const intialData = 10;
  const [state, dispatch] = useReducer(reducer, intialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;


import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Home,
  Users,
  Contact,
  Building2,
  Lightbulb,
  ListTodo,
  Calendar,
  Menu,
  Plus,
  Settings,
  Bell,
  Search,
} from "lucide-react"
"use client"

import { useState } from "react"
import { ChevronDown, MousePointer2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"



// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-[#4a6b6f] text-white p-4 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <h1 className="text-xl font-bold">FairForce</h1>
//           <div className="relative">
//             <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
//             <Input
//               placeholder="Search"
//               className="pl-8 bg-white/10 border-none text-white placeholder:text-gray-300 w-64"
//             />
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="icon">
//             <Plus className="h-5 w-5" />
//           </Button>
//           <Button variant="ghost" size="icon">
//             <Bell className="h-5 w-5" />
//           </Button>
//           <Button variant="ghost" size="icon">
//             <Settings className="h-5 w-5" />
//           </Button>
//         </div>
//       </header>

//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 bg-[#4a6b6f] min-h-[calc(100vh-4rem)] text-white p-4">
//           <nav className="space-y-2">
//             {[
//               { icon: Home, label: "HOME" },
//               { icon: Users, label: "LEAD" },
//               { icon: Contact, label: "CONTACT" },
//               { icon: Building2, label: "COMPANY" },
//               { icon: Lightbulb, label: "POTENTIAL" },
//               { icon: ListTodo, label: "TASK" },
//               { icon: Calendar, label: "MEETING" },
//             ].map((item) => (
//               <Button
//                 key={item.label}
//                 variant="ghost"
//                 className="w-full justify-start gap-3 text-white hover:bg-white/10"
//               >
//                 <item.icon className="h-5 w-5" />
//                 {item.label}
//               </Button>
//             ))}
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <div className="mb-6">
//             <h2 className="text-2xl font-semibold mb-2">Hello, ABC</h2>
//             <p className="text-gray-600">This is what happening in your CRM this month</p>
//           </div>

//           {/* Metric Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//             {[
//               { title: "My Open Potential", value: "12" },
//               { title: "My Untouched Potential", value: "10" },
//               { title: "My Calls Today", value: "01" },
//               { title: "My Leads", value: "78" },
//             ].map((metric) => (
//               <Card key={metric.title} className="p-6">
//                 <h3 className="text-gray-600 mb-2">{metric.title}</h3>
//                 <p className="text-2xl font-semibold">{metric.value}</p>
//               </Card>
//             ))}
//           </div>

//           {/* Tables Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <Card className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold">My Meeting</h3>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-5 w-5" />
//                 </Button>
//               </div>
//               {/* Table content would go here */}
//             </Card>

//             <Card className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold">My Open Task</h3>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-5 w-5" />
//                 </Button>
//               </div>
//               {/* Table content would go here */}
//             </Card>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }





























// import React, { useState, useEffect } from "react";
// import "./style.css";

// const UseEffect = () => {
//   // const initialData = 15;
//   const [myNum, setMyNum] = useState(0);

//   useEffect(() => {
//     document.title = `Chats(${myNum})`;
//   });

//   return (
//     <>
//       <div className="center_div">
//         <p>{myNum}</p>
//         <div class="button2" onClick={() => setMyNum(myNum + 1)}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           INCR
//         </div>
//       </div>
//     </>
//   );
// };

// export default UseEffect;


// import React from "react";
// import "./style.css";

// const UseState = () => {
//   // const initialData = 15;
//   const [myNum, setMyNum] = React.useState(0);

//   return (
//     <>
//       <div className="center_div">
//         <p>{myNum}</p>
//         <div class="button2" onClick={() => setMyNum(myNum + 1)}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           INCR
//         </div>
//         <div
//           class="button2"
//           onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           DECR
//         </div>
//       </div>
//     </>
//   );
// };

// export default UseState;

































// import React, { useReducer } from "react";
// import "./style.css";

// const reducer = (state, action) => {
//   if (action.type === "INCR") {
//     state = state + 1;
//   }

//   if (state > 0 && action.type === "DECR") {
//     state = state - 1;
//   }
//   return state;
// };

// const UseReducer = () => {
//   // const initialData = 15;
//   //   const [myNum, setMyNum] = React.useState(0);
//   const intialData = 10;
//   const [state, dispatch] = useReducer(reducer, intialData);

//   return (
//     <>
//       <div className="center_div">
//         <p>{state}</p>
//         <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           INCR
//         </div>
//         <div class="button2" onClick={() => dispatch({ type: "DECR" })}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           DECR
//         </div>
//       </div>
//     </>
//   );
// };

// export default UseReducer;
