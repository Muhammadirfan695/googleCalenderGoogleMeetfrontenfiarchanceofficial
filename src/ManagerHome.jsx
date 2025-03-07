import { useState, useCallback } from "react";
import { Shield, KeyRound, Settings, Users, MoreHorizontal, User } from "lucide-react";

import ProfileDetails from "./components/ProfileDetails";
import MenuItem from "./components/MenuItem";


const App = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileToggle = useCallback(() => {
    setShowProfile((prevState) => !prevState);
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <aside className="w-64 bg-[#21394b] min-h-screen p-4 text-gray-300 fixed top-12 left-0">
        <div
          className="flex items-center gap-2 text-emerald-500 mb-2 cursor-pointer"
          onClick={handleProfileToggle}
        >
          <User className="w-5 h-5" />
          <span className="font-medium">Profilee</span>
        </div>

        <div className="space-y-4 mt-4">
          <MenuItem icon={Shield} label="Security" />
          <MenuItem icon={KeyRound} label="Multi-Factor Authentication" />
          <MenuItem icon={Settings} label="Settings" />
          <MenuItem icon={Users} label="Sessions" />
          <MenuItem icon={Users} label="Groups" />
          <button className="flex items-center gap-2 text-gray-500 hover:text-gray-300">
            <MoreHorizontal className="w-5 h-5" />
            <span>View more</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 ml-64 overflow-y-auto">
        {showProfile && <ProfileDetails />}
      </main>
    </div>
  );
};

export default App;


{/* <div className="border rounded-lg shadow-md p-4 bg-white">
  <h2 className="text-lg font-semibold flex items-center gap-2">
    <FaEnvelope className="text-orange-400" />
    My Email Addresses
  </h2>
  <p className="text-sm text-gray-500">
    You can use the following email addresses to sign in to your account and also to reset your password if you ever forget it.
  </p>

  {emailList.map((email, index) => (
    <div className="flex items-center gap-4 mt-4 relative" key={index}>
      <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
        <FaEnvelope className="h-6 w-6 text-orange-400" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span>{email}</span>
          {index === 0 && (
            <span className="px-2 py-1 text-sm bg-emerald-100 text-emerald-600 rounded">
              Primary
            </span>
          )}
        </div>
      </div>

      <div className="absolute right-0">
        <button
          onClick={() => handleToggleDropdown(index)}
          className="text-gray-500 hover:text-gray-300"
        >
          <FaEllipsisV className="w-5 h-5" />
        </button>

        {openDropdown === index && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200">
            <button
              onClick={() => handleEdit(email, index)}
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(email, index)}
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  ))}

  {modalOpen && (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {deleteEmail !== null ? "Confirm Deletion" : "Edit Email"}
          </h2>
          <FaTimes className="cursor-pointer" onClick={handleCancel} />
        </div>
        {deleteEmail !== null ? (
          <div className="mt-4">
            <p>Are you sure you want to delete this email?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={handleCancel}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md" onClick={handleConfirmDelete}>
                Confirm Delete
              </button>
            </div>
          </div>
        ) : (
          <div>
            <input
              type="email"
              placeholder="Enter new email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="mt-4 p-2 w-full border rounded-md"
            />
            <div className="flex justify-end gap-4 mt-4">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={handleCancel}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )}

  <div className="flex justify-center mt-4">
    <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 text-blue-500">
      + Add Email Address
    </button>
  </div>
</div> */}
