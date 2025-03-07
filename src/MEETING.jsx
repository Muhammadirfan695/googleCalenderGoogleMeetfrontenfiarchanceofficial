import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// import { google } from 'googleapis';

import moment from "moment";
import axios from "axios";

import {
  FaMapMarkerAlt,
  FaUser,
  FaBirthdayCake,
  FaCalendarAlt,
  FaRegClock,
  FaSearch,
} from "react-icons/fa";

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
  const [showNewEmailInput, setShowNewEmailInput] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [emails, setEmails] = useState([
    "shehzad319ramzan@gmail.com",
    "umarsaleem9701@gmail.com",
    "irfan013ramzam@gmail.com",
  ]);
  const handleAddEmail = () => {
    if (newEmail && isValidEmail(newEmail)) {
      if (!emails.includes(newEmail)) {
        setEmails([...emails, newEmail]);
      }
      setNewEmail("");
      setShowNewEmailInput(false);
    }
  };

  // Email validation helper
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleDateClick = (info) => {
    if (!isAdmin) return;
    setSelectedDate(info.dateStr);
    setShowModal(true);
  };

  const createGoogleMeetEvent = async () => {
    try {
      const reminderMinutes = {
        none: [],
        "at-time": [{ method: "popup", minutes: 0 }],
        "5-min": [{ method: "popup", minutes: 1 }],
        "10-min": [{ method: "popup", minutes: 10 }],
        "15-min": [{ method: "popup", minutes: 15 }],
        "30-min": [{ method: "popup", minutes: 30 }],
        "1-hour": [{ method: "popup", minutes: 60 }],
        "2-hours": [{ method: "popup", minutes: 120 }],
      };
      console.log("ReminderMinutes", reminderMinutes[notificationTime]);
      console.log("notificat", notificationTime);

      const response = await axios.post("http://localhost:5000/create-event", {
        summary: eventTitle,
        start: new Date().toISOString(),
        end: new Date(Date.now() + 3600000).toISOString(),
        reminders: reminderMinutes[notificationTime],
        date: selectedDate,
        time: selectedTime,
        description: taskDescription,
      });

      setMeetLink(response.data.meetLink);
    } catch (error) {
      console.error("Error creating event:", error);
      setErrorMessage("Failed to create meeting");
    }
  };
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
      ]); // Dummy suggestions
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

  const handleSendEmail = async () => {
    try {
      await axios.post("http://localhost:5000/send-email", {
        date: selectedDate,
        time: selectedTime,
        eventTitle: eventTitle,
        // searchQuery: searchQuery,
        selectedEmails: selectedEmails,
        isBirthday: isBirthday,
        meetLink: meetLink,
        location: location,
        taskDescription: taskDescription,
      });

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

  const handleGetEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get-events");
      const datafetch = response?.data?.map((item) => {
        const formattedDate = moment(item.selectedDate).format("YYYY-MM-DD");
        const formattedDateTime = `${formattedDate} ${item.selectedTime}`;
        const title = item.isBirthday
          ? `🎂 Birthday: ${item.eventTitle}`
          : item.eventTitle;

        return {
          title,
          start: formattedDateTime,
          selectedTime: item.selectedTime,
          isBirthday: item.isBirthday,
          eventTitle: item.eventTitle,
          selectedDate: item.selectedDate,
        };
      });
      setEvents(datafetch);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    handleGetEvents();
  }, []);

  console.log("events", events);
  return (
    <div className="font-poppins">
      {/* FullCalendar Component */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height="90vh"
        dateClick={handleDateClick}
        events={events}
        eventClick={handleEventClick}
      />
      {/* Show events in a list (or calendar, depending on your UI) */}
      {/* <div>
      {events.map((event, index) => (
        <div
          key={index}
          onClick={() => handleEventClick(event)}
          className="event-item cursor-pointer"
        >
          {event.title}
        </div>
      ))}
    </div> */}
      {/* Show event details modal */}
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
              <p>
                <strong>Event Title:</strong> {selectedEvent.eventTitle}
              </p>
              <p>
                <strong>Event Date:</strong>{" "}
                {moment(selectedEvent.selectedDate).format("YYYY-MM-DD")}
              </p>
              <p>
                <strong>Event Time:</strong> {selectedEvent.selectedTime}
              </p>
              {selectedEvent.isBirthday && (
                <p>
                  <strong>🎂 Birthday Event</strong>
                </p>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
            >
              <svg
                className="w-7 h-7"
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

            {/* Main Content */}
            <div className="space-y-6">
              {/* Title Input */}
              <input
                type="text"
                className="w-full text-2xl font-semibold border-b pb-3 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                placeholder={
                  activeTab === "event" ? "Event Title" : "Task Title"
                }
                value={activeTab === "event" ? eventTitle : taskTitle}
                onChange={(e) =>
                  activeTab === "event"
                    ? setEventTitle(e.target.value)
                    : setTitle(e.target.value)
                }
              />

              {/* Toggle Buttons */}
              <div className="flex gap-3 border-b pb-6">
                <button
                  onClick={() => setActiveTab("event")}
                  className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                    activeTab === "event"
                      ? "bg-blue-500 text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  Event
                </button>
                <button
                  onClick={() => setActiveTab("task")}
                  className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                    activeTab === "task"
                      ? "bg-blue-500 text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  Task
                </button>
              </div>

              {/* Description Textarea */}
              {activeTab === "task" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">
                    Description
                  </label>
                  <textarea
                    placeholder="Add detailed description..."
                    value={taskDescription}
                    className="w-full h-32 px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    onChange={(e) => setTaskDescription(e.target.value)}
                  />
                </div>
              )}

              {/* Date & Time Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-500" />
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <FaRegClock className="text-gray-500" />
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                </div>
              </div>

              {/* Birthday Checkbox */}
              {activeTab === "event" && (
                <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                    checked={isBirthday}
                    onChange={() => setIsBirthday(!isBirthday)}
                  />
                  <span className="flex items-center gap-2">
                    <FaBirthdayCake className="text-gray-600" />
                    Mark as Birthday
                  </span>
                </label>
              )}

              {/* Add People Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <FaUser className="text-gray-600" />
                    Add People
                  </h3>
                  <button
                    onClick={() => setShowNewEmailInput(!showNewEmailInput)}
                    className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                  >
                    + Invite New
                  </button>
                </div>

                {/* Add New Email Input - Only shown when clicking + Invite New */}
                {showNewEmailInput && (
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter new email address"
                      className="w-full pl-4 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleAddEmail()}
                    />
                    <button
                      onClick={handleAddEmail}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                )}

                {/* Search and Email List */}
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search by email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {emails
                    .filter((email) =>
                      email.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((email) => (
                      <label
                        key={email}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                          checked={selectedEmails.includes(email)}
                          onChange={(e) =>
                            e.target.checked
                              ? setSelectedEmails([...selectedEmails, email])
                              : setSelectedEmails(
                                  selectedEmails.filter((e) => e !== email)
                                )
                          }
                        />
                        <span className="text-gray-700">{email}</span>
                      </label>
                    ))}
                </div>
              </div>
              {/* Reminder Section */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">
                  Set Reminder
                </label>
                <select
                  value={notificationTime}
                  onChange={(e) => setNotificationTime(e.target.value)}
                  className="w-full  px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  {/* options */}
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

              {/* Google Meet Section */}
              {activeTab === "event" && (
                <div className="space-y-3">
                  <button
                    onClick={createGoogleMeetEvent}
                    className="w-full px-4 py-2.5 bg-blue-100 text-blue-600 rounded-lg font-medium hover:bg-blue-200 transition-colors"
                  >
                    Generate Google Meet Link
                  </button>
                  {meetLink && (
                    <div className="text-blue-600 truncate">
                      <a href={meetLink} target="_blank" rel="noreferrer">
                        {meetLink}
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Save Button */}
              <button
                onClick={handleSendEmail}
                className="w-full py-3.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
              >
                {activeTab === "event" ? "Create Event" : "Create Task"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Meeting;
