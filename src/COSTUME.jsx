import { useState } from "react";
import { ChevronDown, MousePointer2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

 function CustomDropdown() {
  const [selectedView, setSelectedView] = useState("ABC Home");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleNavigation = (view, path) => {
    setSelectedView(view);
    setIsOpen(false);
    navigate(path); 
  };

  return (
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
            onClick={() => handleNavigation("Classic View", "/classic-view")}
          >
            Classic View
          </button>
          <button
            className={`w-full text-left py-2 px-4 flex items-center justify-between ${
              selectedView === "ABC Home" ? "bg-blue-100" : ""
            }`}
            onClick={() => handleNavigation("ABC Home", "/abc-home")}
          >
            ABC Home
            {selectedView === "ABC Home" && <MousePointer2 className="h-4 w-4 text-blue-500" />}
          </button>
          <button
            className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={() => handleNavigation("Manager's Home", "/managers-home")}
          >
            Manager's Home
          </button>
          <button
            className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={() => handleNavigation("Customize Home Page", "/customize-home")}
          >
            Customize Home Page
          </button>
        </div>
      )}
    </div>
  );
}
export default CustomDropdown