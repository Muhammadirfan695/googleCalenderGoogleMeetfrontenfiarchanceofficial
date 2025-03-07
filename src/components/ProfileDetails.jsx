import React, { useState } from "react";
import { FaEnvelope, FaEllipsisV, FaUser, FaTimes } from "react-icons/fa";
import Modal from "./Modal";
import PhoneNumberModal from "./PhoneNumberModal";
import EmailModel from "./EmailModel";
const ProfileDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [newMobileNumber, setNewMobileNumber] = useState("");
  const [mobileNumbers, setMobileNumbers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenPhoneNumber, setModalOpenPhoneNumber] = useState(false);
  const [emailToEdit, setEmailToEdit] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [deleteEmail, setDeleteEmail] = useState(null);
  const [newEmails, setNewEmails] = useState("");
  const [profileData, setProfileData] = useState({
    fullName: "Muhammad Irfan",
    displayName: "Muhammad Irfan",
    gender: "I will prefer not to say",
    country: "pakistan",
    language: "urdu",
    timeZone: "(-05:00) Eastern Standard Time (EST5EDT)",
    email: "m.irfan319@gmail.com",
  });
  const [emailList, setEmailList] = useState([profileData.email]);
  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setProfileData((prev) => ({
  //         ...prev,
  //         [name]: value,
  //     }));
  //      setProfileData({ ...profileData, language: e.target.value, country: e.target.value  });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleAddEmail = (newEmail) => {
    if (newEmail && !emailList.includes(newEmail)) {
      setEmailList((prevEmails) => [...prevEmails, newEmail]);
    }
    setIsModalOpen(false);
  };
  const handleToggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const handleEdit = (email, index) => {
    setNewEmail(email);
    setEmailToEdit(index);
    setDeleteEmail(null);
    setModalOpen(true);
  };

  const handleDelete = (email, index) => {
    setDeleteEmail(index);
    setModalOpen(true);
  };

  const handleSave = () => {
    // console.log("1111", newEmail, emailToEdit);

    if (newEmail) {
      const updatedEmails = [...emailList];
      // console.log("updatedEmails", updatedEmails);
      updatedEmails[emailToEdit] = newEmail;
      setEmailList(updatedEmails);
      setModalOpen(false);
      setEmailToEdit(null);
      setNewEmail("");
      setIsEditing(false);
    }
  };
  const handleConfirmDelete = () => {
    if (deleteEmail !== null) {
      const updatedEmails = emailList.filter(
        (_, index) => index !== deleteEmail
      );
      setEmailList(updatedEmails);
      setModalOpen(false);
      setDeleteEmail(null);
    }
  };

  const handleCancel = () => {
    setModalOpen(false);
    setEmailToEdit(null);
    setNewEmail("");
    setDeleteEmail(null);
    setNewMobileNumber("");
    setModalOpenPhoneNumber(false);
  };
  const handleAddMobileNumber = () => {
    if (newMobileNumber && /^[0-9]+$/.test(newMobileNumber)) {
      setMobileNumbers([...mobileNumbers, newMobileNumber]);
      setNewMobileNumber("");
      // setModalOpen(false);
      setModalOpenPhoneNumber(false);
    } else {
      alert("Please enter a valid mobile number with digits only.");
    }
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setNewMobileNumber(value);
    }
  };
  const languages = [
    "English (United States)",
    "English (United Kingdom)",
    "Spanish (Spain)",
    "Mandarin Chinese",
    "Hindi",
    "Arabic",
    "Portuguese (Brazil)",
    "Bengali",
    "Russian",
    "Japanese",
    "Punjabi",
    "German",
    "French (France)",
    "Korean",
    "Turkish",
    "Italian",
    "Vietnamese",
    "Urdu",
    "Javanese",
    "Tamil",
    "Telugu",
    "Marathi",
    "Gujarati",
    "Thai",
    "Persian",
    "Polish",
    "Kannada",
    "Malayalam",
    "Odia",
    "Burmese",
    "Khmer",
    "Swahili",
    "Hausa",
    "Yoruba",
    "Igbo",
    "Amharic",
    "Zulu",
    "Fula",
    "Somali",
    "Nepali",
    "Pashto",
    "Sinhala",
    "Kazakh",
    "Uzbek",
    "Malay (Malaysia)",
    "Tagalog",
    "Hebrew",
    "Lao",
    "Czech",
    "Hungarian",
    "Finnish",
    "Danish",
    "Swedish",
    "Norwegian",
    "Greek",
    "Bulgarian",
    "Serbian",
    "Croatian",
    "Bosnian",
    "Albanian",
    "Macedonian",
    "Slovak",
    "Slovenian",
    "Romanian",
    "Lithuanian",
    "Latvian",
    "Estonian",
    "Georgian",
    "Armenian",
    "Azerbaijani",
    "Kurdish",
    "Mongolian",
    "Tatar",
    "Chechen",
    "Bashkir",
    "Chuvash",
    "Yakut",
    "Tibetan",
    "Uyghur",
    "Quechua",
    "Aymara",
    "Guarani",
    "Nahuatl",
    "Haitian Creole",
    "Maori",
    "Samoan",
    "Tongan",
    "Fijian",
    "Bislama",
    "Pidgin English",
    "Malagasy",
    "Wolof",
    "Berber",
    "Cantonese",
    "Shanghainese",
    "Hakka",
    "Min Nan",
    "Assamese",
    "Meitei",
    "Bhojpuri",
    "Santali",
    "Maithili",
    "Dogri",
    "Konkani",
  ];
  const country = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Lucia",
    "Samoa",
    "San Marino",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const timeZone = [
    "(-06:00) Central Standard Time (CST6CDT)",
    "(-05:00) Eastern Standard Time (EST5EDT)",
  ];

  return (
    <div className="max-w-4xl flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-2xl font-bold">
              MR
            </div>
            <div>
              <h2 className="text-xl font-semibold">{profileData.fullName}</h2>
              <p className="text-gray-500">{profileData.email}</p>
            </div>
          </div>
          <button
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md"
            onClick={handleEditClick}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

      
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
  {[
    {
      label: "Full Name",
      value: profileData.fullName,
      name: "fullName",
      isInput: true,
    },
    {
      label: "Display Name",
      value: profileData.displayName,
      name: "displayName",
      isInput: true,
    },
    { 
      label: "Gender", 
      value: profileData.gender, 
      name: "gender", 
      isInput: true 
    },
    {
      label: "Country",
      value: profileData.country,
      name: "country",
      isDropdown: true,
      icon: "w-5 h-5 rounded-sm bg-green-600",
    },
    {
      label: "Language",
      value: profileData.language,
      name: "language",
      isDropdown: true,
    },
    {
      label: "Time zone",
      value: profileData.timeZone,
      name: "timeZone",
      isDropdown: true,
    },
  ].map(({ label, value, name, icon, isDropdown, isInput }, index) => (
    <div key={index}>
      <label className="text-sm text-gray-500">{label}</label>
      {isEditing ? (
        isInput ? (
          <input
            type="text"
            name={name}
            value={value}
            onChange={handleChange}
            className="text-gray-900 mt-1 p-2 border rounded-md w-full"
          />
        ) : isDropdown ? (
          name === "country" ? (
            <select
              name={name}
              value={value}
              onChange={handleChange}
              className="text-gray-900 mt-1 p-2 border rounded-md w-full"
            >
              {country.map((countryName, i) => (
                <option key={i} value={countryName}>
                  {countryName}
                </option>
              ))}
            </select>
          ) : name === "language" ? (
            <select
              name={name}
              value={value}
              onChange={handleChange}
              className="text-gray-900 mt-1 p-2 border rounded-md w-full"
            >
              {languages.map((lang, i) => (
                <option key={i} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          ) : name === "timeZone" ? (
            <select
              name={name}
              value={value}
              onChange={handleChange}
              className="text-gray-900 mt-1 p-2 border rounded-md w-full"
            >
              {timeZone.map((tz, i) => (
                <option key={i} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          ) : null
        ) : (
          <p className="text-gray-900 mt-1 flex items-center gap-2">
            {icon && <span className={icon} />}
            {value}
          </p>
        )
      ) : (
        <p className="text-gray-900 mt-1 flex items-center gap-2">
          {icon && <span className={icon} />}
          {value}
        </p>
      )}
    </div>
  ))}
</div>

      </div>

      {/* email */}
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FaEnvelope className="text-orange-400" />
          My Email Addresses
        </h2>
        <p className="text-sm text-gray-500">
          You can use the following email addresses to sign in to your account
          and also to reset your password if you ever forget it.
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

        <EmailModel
          modalOpen={modalOpen}
          handleCancel={handleCancel}
          handleConfirmDelete={handleConfirmDelete}
          newEmail={newEmail}
          handleSave={handleSave}
          deleteEmail={deleteEmail}
          setNewEmail={setNewEmail}

        />

        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 text-blue-500"
          >
            + Add Email Address
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddEmail}
        newEmails={newEmails}
        setNewEmails={setNewEmails}
        
      />

      {/* mobile */}
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FaUser className="text-emerald-500" />
          My Mobile Numbers
        </h2>
        <p className="text-sm text-gray-500">
          View and manage all of the mobile numbers associated with your
          account.
        </p>

        {mobileNumbers.length > 0 ? (
          mobileNumbers.map((number, index) => (
            <div key={index} className="flex items-center gap-4 mt-4">
              <div className="flex-1">{number}</div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 mt-4">
            No mobile numbers added yet.
          </p>
        )}

        <div className="flex flex-col items-center py-2 mt-4">
          <div className="mb-0">
            <img
              src="/placeholder.svg?height=100&width=100"
              alt="Phone illustration"
              className="h-20"
            />
          </div>
          <button
            onClick={() => setModalOpenPhoneNumber(true)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md"
          >
            Add Mobile Number
          </button>
        </div>

        <PhoneNumberModal
          modalOpenPhoneNumber={modalOpenPhoneNumber}
          handleCancel={handleCancel}
          newMobileNumber={newMobileNumber}
          handleInputChange={handleInputChange}
          handleAddMobileNumber={handleAddMobileNumber}
        />
      </div>
      <div className="max-h-80 overflow-y-auto mt-6">
        <div className="space-y-4"></div>
      </div>
    </div>
  );
};

export default ProfileDetails;
