import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";

const EmailModel = ({ setNewEmail, modalOpen, handleCancel, handleConfirmDelete, newEmail, handleSave, deleteEmail,  }) => {
  const [emailError, setEmailError] = useState('');
  
  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
    setEmailError('');
  };
  
  const handleSaveWithValidation = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(newEmail)) {
      setEmailError('Please enter a valid email address.');
    } else {
      handleSave();
    }
  };

  return (
    <>
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
                  onChange={handleEmailChange}
                  className="mt-4 p-2 w-full border rounded-md"
                />
                {emailError && <p className="text-red-600 text-sm mt-2">{emailError}</p>}
                <div className="flex justify-end gap-4 mt-4">
                  <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={handleSaveWithValidation}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EmailModel;
