import React, { useState } from "react";
import { FaUser, FaChevronDown } from "react-icons/fa";

const ContactForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [name, setName] = useState("");
  const [isTitleDropdownOpen, setIsTitleDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [accountant, setAccountant] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otherPhone, setOtherPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [assistant, setAssistant] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [dob, setDob] = useState("");
  const [assPhone, setAssPhone] = useState("");
  const [fax, setFax] = useState("");

  const handleCancel = () => {
    setIsFormVisible((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsTitleDropdownOpen((prev) => !prev);
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    if (selectedTitle) {
      const titlePrefix = `${selectedTitle} `;
      if (value.startsWith(titlePrefix)) {
        setName(value.slice(titlePrefix.length));
      } else {
        setSelectedTitle("");
        setName(value);
      }
    } else {
      setName(value);
    }
  };

  const handleTitleChange = (value) => {
    if (value === "None") {
      setSelectedTitle("");
    } else {
      setSelectedTitle(value);
    }
    setIsTitleDropdownOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    const formData = {
      selectedTitle,
      name,
      accountant,
      email,
      phone,
      otherPhone,
      mobile,
      assistant,
      leadSource,
      lastName,
      title,
      department,
      homePhone,
      dob,
      assPhone,
      fax,
      selectedImage,
    };

    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div className="flex justify-end space-x-2 mb-5">
        <button
          className="px-3 py-1 border border-gray-400 text-white bg-black hover:bg-gray-200 rounded-md"
          onClick={handleCancel}
        >
          
          {isFormVisible ? "Cancel" : "Open Form"}
        </button>
        <button className="ml-4 px-3 py-1 border border-blue-500 text-blue-500 hover:bg-blue-100 rounded-md">
          Save And New
        </button>
        <button
          className="ml-4 px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 rounded-md"
          onClick={handleSave}
        >
          Save
        </button>
      </div>

      {isFormVisible && (
        <div className="bg-white rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.2)] p-6 mt-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="image-picker"
              />
              <label htmlFor="image-picker">
                <div className="cursor-pointer">
                  <img
                    src={selectedImage || "/imagewebsite.png"}
                    alt="User"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </div>
              </label>
              <h2 className="text-xl font-semibold text-gray-800">
                Contact Information
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label>Contact Owner</label>
                <div className="relative">
                  <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter contact owner"
                    className="w-full p-2 pl-8 pr-8 border rounded-md"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label>First Name</label>
                <div className="relative">
                  <FaChevronDown
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={toggleDropdown}
                  />
                  <input
                    type="text"
                    value={selectedTitle ? `${selectedTitle} ${name}` : name}
                    placeholder="Enter first name"
                    onChange={handleNameChange}
                    className="w-full p-2 pl-8 pr-8 border rounded-md"
                  />
                  {isTitleDropdownOpen && (
                    <ul className="absolute left-0 w-full bg-white border rounded-md shadow-lg mt-1 z-10">
                      {["None", "Mr.", "Mrs.", "Ms.", "Dr.", "Prof."].map(
                        (title) => (
                          <li
                            key={title}
                            className={`p-2 cursor-pointer hover:bg-gray-100 ${
                              (title === "None" && !selectedTitle) ||
                              title === selectedTitle
                                ? "bg-blue-50"
                                : ""
                            }`}
                            onClick={() => handleTitleChange(title)}
                          >
                            {title}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </div>

              {/* Other input fields */}
              <div className="space-y-2">
                <label htmlFor="accountant">Accountant</label>
                <input
                  id="accountant"
                  type="text"
                  placeholder="Enter accountant"
                  value={accountant}
                  onChange={(e) => setAccountant(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  placeholder="Enter phone number"
                   onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              {/* Other Phone */}
              <div className="space-y-2">
                <label htmlFor="other-phone">Other Phone</label>
                <input
                  id="other-phone"
                  type="tel"
                  value={otherPhone}
                  placeholder="Enter other phone number"
                   onChange={(e) => setOtherPhone(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              {/* Mobile */}
              <div className="space-y-2">
                <label htmlFor="mobile">Mobile</label>
                <input
                  id="mobile"
                  type="tel"
                  value={mobile}
                  placeholder="Enter mobile number"
                   onChange={(e) => setMobile(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              {/* Assistant */}
              <div className="space-y-2">
                <label htmlFor="assistant">Assistant</label>
                <input
                  id="assistant"
                  type="text"
                  value={assistant}
                  placeholder="Enter assistant name"
                  onChange={(e) => setAssistant(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Add other input fields */}
              <div className="space-y-2">
                <label htmlFor="lead-source">Lead Source</label>
                <input
                  id="lead-source"
                  placeholder="Enter lead source"
                  value={leadSource}
                  onChange={(e) => setLeadSource(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="last-name">Last Name</label>
                <input
                  id="last-name"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  placeholder="Enter title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="department">Department</label>
                <input
                  id="department"
                  type="text"
                  value={department}
                  placeholder="Enter department"
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="home-phone">Home Phone</label>
                <input
                  id="home-phone"
                  type="tel"
                  value={homePhone}
                  placeholder="Enter home phone"
                  onChange={(e) => setHomePhone(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  id="dob"
                  type="date"
                  value={dob}
                  placeholder="MM/DD/YYYY"
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="ass-phone">Assistant Phone</label>
                <input
                  id="ass-phone"
                  type="tel"
                  value={assPhone}
                  placeholder="Enter assistant phone"
                  onChange={(e) => setAssPhone(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="fax">Fax</label>
                <input
                  id="fax"
                  type="tel"
                  value={fax}
                  placeholder="Enter fax number"
                  onChange={(e) => setFax(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
