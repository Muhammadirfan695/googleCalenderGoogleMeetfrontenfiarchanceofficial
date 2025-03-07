
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Hearder";
import Sidebar from "./components/Sidebar";
import Lead from "./LEAD";
import COMPANY from "./COMPANY"
import ABCHOME from "./ABCHOME"
import ManagerHome from "./ManagerHome"
import CustomiseHome from "./CustomiseHome"
import Classicview from "./classicview";
import CONTACT from "./CONTACT";
import Meeting from "./MEETING";
import "./App.css"

import TASK from "./TASK";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import SidebarOne from "./components/SidebarOne";
const App = () => {
  const location = useLocation();
  console.log("location",location);
  
  const pathArray = [
    // "/company",
    // "/classicview",
    "/abchome",
    "/customiseHome",
    "/managerHome"
  ]
  return (
    <>
     {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}> */}
      <Header />
      {
      //  !pathArray.includes(location.pathname) ? <SidebarOne/> :<Sidebar /> 
      !pathArray.includes(location.pathname) && <Sidebar />
      }

      <div className={`ml-64 mt-[60px] h-screen overflow-auto p-4 `}>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/lead" element={<Lead />} />
          <Route path="/contact" element={<CONTACT/>} />
          <Route path="/classicview" element={<Classicview/>}/>
          <Route path="/abchome" element={<ABCHOME />} />
          <Route path="/customiseHome" element={<CustomiseHome />} />
          <Route path="/managerHome" element={<ManagerHome />} />
          {/* <Route path="/meeting" element={<Meeting />} />  */}
          <Route path="/meeting" element={<Meeting isAdmin={true} />} />
          <Route path="/task" element={<TASK />} />
        </Routes>
        {/* <Routes path="/header" element={<Header/>}>
        <Route path="/COMPANY" element={<COMPANY/>}/> */}
        {/* </Routes> */}
      </div>
      {/* </GoogleOAuthProvider> */}
    </>
  );
};

export default App;




