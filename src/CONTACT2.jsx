import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import axios from "axios";
import { FaMapMarkerAlt, FaUser, FaBirthdayCake, FaCalendarAlt, FaRegClock, FaSearch } from "react-icons/fa";

function Meeting({ isAdmin }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [taskTitle, setTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isBirthday, setIsBirthday] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("event");
  const [meetLink, setMeetLink] = useState("");
  const [location, setLocation] = useState(null);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [notificationTime, setNotificationTime] = useState("none");

  const handleDateClick = (info) => {
    if (!isAdmin) return;
    setSelectedDate(info.dateStr);
    setShowModal(true);
  };
  const createGoogleMeetEvent = async () => {
    try {
      console.log("Creating Google Meet Event...");
  
      const eventData = {
        eventTitle:eventTitle ,  // Provide event title
        startDateTime: new Date().toISOString() // Start time (current time)
      };
  
      const response = await axios.post("http://localhost:5000/create-event", eventData);
  
      setMeetLink(response.data.meetLink);
      console.log("Meet Link:", response.data.meetLink);
    } catch (error) {
      console.error("Error creating event:", error.response?.data || error.message);
      setErrorMessage("Failed to create meeting");
    }
  };
  
  // const createGoogleMeetEvent = async () => {
  //   console.log("xzxzx");
    
  //   try {
  //     // const reminderMinutes = {
  //     //   "none": [],
  //     //   "at-time": [{ method: "popup", minutes: 0 }],
  //     //   "1-min": [{ method: "popup", minutes: 1 }],
  //     //   "10-min": [{ method: "popup", minutes: 10 }],
  //     //   "15-min": [{ method: "popup", minutes: 15 }],
  //     //   "30-min": [{ method: "popup", minutes: 30 }],
  //     //   "1-hour": [{ method: "popup", minutes: 60 }],
  //     //   "2-hours": [{ method: "popup", minutes: 120 }],
  //     // };

  //     const response = await axios.post("http://localhost:5000/create-event", {
  //       // summary: "Google Meet Meeting",
  //       // start: new Date().toISOString(),
  //       // end: new Date(Date.now() + 3600000).toISOString(),
  //       // reminders: reminderMinutes[notificationTime],
  //     });
      
  //     setMeetLink(response.data.meetLink);
  //   } catch (error) {
  //     console.error("Error creating event:", error);
  //     setErrorMessage("Failed to create meeting");
  //   }
  // };

//   const createGoogleMeetEvent = async () => {
//     try {
//         const reminderMinutes = {
//             "none": [],
//             "at-time": [{ method: "popup", minutes: 0 }],
//             "1-min": [{ method: "popup", minutes: 1 }],
//             "10-min": [{ method: "popup", minutes: 10 }],
//             "15-min": [{ method: "popup", minutes: 15 }],
//             "30-min": [{ method: "popup", minutes: 30 }],
//             "1-hour": [{ method: "popup", minutes: 60 }],
//             "2-hours": [{ method: "popup", minutes: 120 }],
//         };

//         // Separate variables
//         const summary = "Google Meet Meeting";
//         const start = selectedDate;
//         const end = selectedTime;
//         const reminders = reminderMinutes[notificationTime];

//         // Event data object
//         const eventData = { summary, start, end, reminders };

//         console.log("Evet data:",eventData); // Debugging purpose

//         // API request
//         const response = await axios.post("http://localhost:5000/create-event", eventData);
        
//         setMeetLink(response.data.meetLink);
//     } catch (error) {
//         console.error("Error creating event:", error);
//         setErrorMessage("Failed to create meeting");
//     }
// };

  const handleEventClick = (info) => {
    const eventData = info.event._def.extendedProps;
    setSelectedEvent(eventData);
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);

    if (value.length > 2) {
      setLocationSuggestions([
        "New York, USA",
        "Los Angeles, USA",
        "London, UK",
        "Lahore, Pakistan",
      ]);
    } else {
      setLocationSuggestions([]);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const closeModal = () => {
    setSelectedDate("");
    setSelectedTime("");
    setEventTitle("");
    setTitle("");
    setTaskDescription("");
    setIsBirthday(false);
    setShowModal(false);
  };
  // const handleSendEmail = async () => {
  //   try {
  //     const requestData = {
  //       date: selectedDate,
  //       time: selectedTime,
  //       eventTitle: eventTitle,
  //       selectedEmails: selectedEmails,
  //       isBirthday: isBirthday,
  //       meetLink: meetLink,
  //       location: location,
  //     };

  //     console.log("📩 Sending Email with Data:", requestData); // Log the object

  //     await axios.post("http://localhost:5000/send-email", requestData);

  //     alert("Email sent successfully!");
  //     handleGetEvents();
  //     setSelectedEmails([]);
  //     setErrorMessage("");
  //     setShowModal(false);
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     setErrorMessage(
  //       `Error: ${error.response?.data?.message || "Failed to send email."}`
  //     );
  //   }
  // };

  const handleSendEmail = async () => {
    try {
      // Format Date as "YYYY-MM-DD"
      const formattedDate = new Date(selectedDate).toISOString().slice(0, 10);

      // Format Time as "HH:mm"
      const formattedTime = selectedTime.slice(0, 5);

      const requestData = {
        date: formattedDate,    // "2025-01-27"
        time: formattedTime,    // "16:20"
        eventTitle: eventTitle,
        selectedEmails: selectedEmails,
        isBirthday: isBirthday,
        meetLink: meetLink || null,
        location: location || null,
      };

      console.log("📩 Sending Email with Data:", requestData); // Log the object

      await axios.post("http://localhost:5000/send-email", requestData);

      alert("Email sent successfully!");
      handleGetEvents();
      setSelectedEmails([]);
      setErrorMessage("");
      setShowModal(false);
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage(
        `Error: ${error.response?.data?.message || "Failed to send email."}`
      );
    }
  };

  // const handleGetEvents = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/get-events');
  //     const datafetch = response?.data?.map((item) => {
  //       const formattedDate = moment(item.selectedDate).format('YYYY-MM-DD');
  //       const formattedDateTime = `${formattedDate} ${item.selectedTime}`;
  //       const title = item.isBirthday
  //         ? `🎂 Birthday: ${item.eventTitle}`
  //         : item.eventTitle;

  //       return {
  //         title,
  //         start: formattedDateTime,
  //         selectedTime: item.selectedTime,
  //         isBirthday: item.isBirthday,
  //         eventTitle: item.eventTitle,
  //         selectedDate: item.selectedDate,
  //       };
  //     });
  //     setEvents(datafetch);
  //   } catch (error) {
  //     console.error('Error fetching events:', error);
  //   }
  // };

  const handleGetEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get-events");
      console.log("📌 API Response:", response.data);
  
      const datafetch = response.data.map((item) => {
        const formattedDate = moment(item.startDateTime).format("YYYY-MM-DD HH:mm");
        const title = item.isBirthday ? `🎂 Birthday: ${item.eventTitle}` : item.eventTitle;
  
        return {
          title,
          start: formattedDate,
          selectedTime: moment(item.startDateTime).format("HH:mm"),
          isBirthday: item.isBirthday,
          eventTitle: item.eventTitle,
          selectedDate: moment(item.startDateTime).format("YYYY-MM-DD"),
        };
      });
  
      console.log("✅ Processed Events:", datafetch);
      setEvents(datafetch);
    } catch (error) {
      console.error("❌ Error fetching events:", error);
    }
  };
  
  useEffect(() => {
    console.log("🔄 Fetching events on page load...");
    handleGetEvents();
  }, []);
  

  return (
    <div className="font-poppins">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        height="90vh"
        dateClick={handleDateClick}
        events={events}
        eventClick={handleEventClick}
      />

      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Event Details</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedEvent(null)}
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <div className="mt-4">
              <p><strong>Event Title:</strong> {selectedEvent.eventTitle}</p>
              <p><strong>Event Date:</strong> {moment(selectedEvent.selectedDate).format('YYYY-MM-DD')}</p>
              <p><strong>Event Time:</strong> {selectedEvent.selectedTime}</p>
              {selectedEvent.isBirthday && (
                <p><strong>🎂 Birthday Event</strong></p>
              )}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isAdmin && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[80vh] overflow-y-auto">
            <div className="relative p-4">
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <input
                type="text"
                className="w-full text-xl font-medium border-b-2 bg-gray-200 border-blue-500 pb-2 focus:outline-none"
                placeholder={
                  activeTab === "event"
                    ? "Enter event title"
                    : "Enter task title"
                }
                value={activeTab === "event" ? eventTitle : taskTitle}
                onChange={(e) =>
                  activeTab === "event"
                    ? setEventTitle(e.target.value)
                    : setTitle(e.target.value)
                }
              />
            </div>

            <div className="flex justify-start ml-6 space-x-4 mb-5 ">
              <button
                onClick={() => setActiveTab("event")}
                className={`px-6 py-2 rounded-lg transition ${
                  activeTab === "event"
                    ? "bg-blue-200 text-white"
                    : "bg-gray-200"
                }`}
              >
                Event
              </button>
              <button
                onClick={() => setActiveTab("task")}
                className={`px-6 py-2 rounded-lg transition ${
                  activeTab === "task"
                    ? "bg-blue-200 text-white"
                    : "bg-gray-200"
                }`}
              >
                Task
              </button>
            </div>

            {activeTab === "task" && (
              <div>
                <textarea
                  placeholder="Add description"
                  value={taskDescription}
                  className="w-full h-32 p-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                  onChange={(e) => setTaskDescription(e.target.value)}
                ></textarea>
              </div>
            )}

            <div className="flex gap-4 mt-4 ml-3">
              <div className="relative flex items-center gap-2">
                <FaCalendarAlt className="absolute left-3 text-gray-500" />
                <input
                  type="date"
                  className="p-2 bg-gray-200 rounded pl-10 border-b-2 hover:border-blue-500 focus:outline-none"
                  placeholder="Select date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              <div className="relative flex items-center gap-2">
                <FaRegClock className="absolute left-3 text-gray-500" />
                <input
                  type="time"
                  className="p-2 bg-gray-200 rounded pl-10 border-b-2 hover:border-blue-500 focus:outline-none"
                  placeholder="Select time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
              </div>
            </div>

            {activeTab === "event" && (
              <div className="mt-2 ml-6">
                <label className="flex items-center text-sm">
                  <FaBirthdayCake className="mr-2 text-xl text-gray-600" />
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={isBirthday}
                    onChange={() => setIsBirthday(!isBirthday)}
                  />
                  Mark as Birthday
                </label>
              </div>
            )}

            <div className="mt-4 ml-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <FaUser className="text-xl text-gray-600" />
                Add Person
              </h3>
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  className="p-2 border-b-2 bg-gray-200 rounded w-full pl-10 border-gray-300 hover:border-blue-500 focus:outline-none"
                  placeholder="Search by email"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="mt-2 max-h-60 overflow-y-auto space-y-2">
                {["acountnetlifi786@gmail.com", "chsalman9041@gmail.com","umarsaleem9701@gmail.com", "fairchanceforcrm52@gmail.com", "irfan013ramzam@gmail.com"]
                  .filter((email) =>
                    email.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((email, index) => (
                    <label key={index} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedEmails.includes(email)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedEmails([...selectedEmails, email]);
                          } else {
                            setSelectedEmails(
                              selectedEmails.filter((e) => e !== email)
                            );
                          }
                        }}
                      />
                      {email}
                    </label>
                  ))}
              </div>
            </div>

            <div className="mt-2 text-gray-700 text-sm ml-6">
              Selected Date and Time:{" "}
              {selectedDate && selectedTime
                ? `${formatDate(selectedDate)} at ${selectedTime}`
                : "Not Set"}
            </div>

            {activeTab === "event" && (
              <div className="mt-4 ml-6">
                <button
                  onClick={async () => {
                    await createGoogleMeetEvent();
                  }}
                  className="px-6 py-2 bg-slate-300 text-white rounded-md hover:bg-slate-400"
                >
                  Generate Google Meet Link
                </button>
                {meetLink && (
                  <div className="mt-2 text-blue-600 underline">
                    <a
                      href={meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {meetLink}
                    </a>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-600">Participants</label>
                <button className="text-primary text-sm h-auto p-0 bg-transparent border-none cursor-pointer">
                  + Add
                </button>
              </div>
              <select
                value={notificationTime}
                onChange={(e) => setNotificationTime(e.target.value)}
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="none">None</option>
                <option value="at-time">At time of meeting</option>
                <option value="5-min">5 minutes before</option>
                <option value="10-min">10 minutes before</option>
                <option value="15-min">15 minutes before</option>
                <option value="30-min">30 minutes before</option>
                <option value="1-hour">1 hour before</option>
                <option value="2-hours">2 hours before</option>
              </select>
            </div>

            <button
              onClick={handleSendEmail}
              className="mt-4 ml-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save Event
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Meeting;