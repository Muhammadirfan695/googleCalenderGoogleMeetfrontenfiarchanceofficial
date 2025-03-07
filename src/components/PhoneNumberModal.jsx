import React from "react";
import {  FaTimes } from "react-icons/fa"
const PhoneNumberModal = ({
  handleAddMobileNumber,
  modalOpenPhoneNumber,
  handleCancel,
  newMobileNumber,
  handleInputChange,
}) => {
  return (
    <div>
      {modalOpenPhoneNumber && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Add Mobile Number</h2>
              <FaTimes className="cursor-pointer" onClick={handleCancel} />
            </div>
            <div className="mt-4">
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={newMobileNumber}
                onChange={handleInputChange}
                className="mt-4 p-2 w-full border rounded-md"
              />
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handleAddMobileNumber}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberModal;
