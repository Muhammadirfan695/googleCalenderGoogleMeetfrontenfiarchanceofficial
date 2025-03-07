import React from "react"

const MenuItem = ({ icon: Icon, label, onClick }) => (
  <div
    className="flex items-center gap-2 text-gray-500 hover:text-gray-300 cursor-pointer"
    onClick={onClick}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

export default MenuItem;