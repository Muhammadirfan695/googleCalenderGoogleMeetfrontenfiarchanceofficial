import React from 'react';
import { FaEnvelope,  FaEllipsisV, FaUser, FaTimes } from "react-icons/fa"
const Modal = ({ isOpen, onClose, onSave, newEmails, setNewEmails }) => {
  

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Add Email Address</h2>
            <FaTimes className="cursor-pointer" onClick={onClose} />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            value={newEmails}
            onChange={(e) => setNewEmails(e.target.value)}
            className="mt-4 p-2 w-full border rounded-md"
          />
          <div className="flex justify-end gap-4 mt-4">
            <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={onClose}>
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => {
                onSave(newEmails);
                setNewEmails("");
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Modal 