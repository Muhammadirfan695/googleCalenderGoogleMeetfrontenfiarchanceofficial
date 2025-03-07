import { useState } from "react";
import {
    FaBell, FaCog, FaUser, FaSearch, FaPlus,
    FaHome, FaHandshake, FaAddressBook, FaIndustry,
    FaStar, FaTasks, FaRegCalendarAlt
} from "react-icons/fa";

const sidebarItems = [
    { name: "HOME", icon: <FaHome className="mr-2" /> },
    { name: "LEAD", icon: <FaHandshake className="mr-2" /> },
    { name: "CONTACT", icon: <FaAddressBook className="mr-2" /> },
    { name: "COMPANY", icon: <FaIndustry className="mr-2" /> },
    { name: "POTENTIAL", icon: <FaStar className="mr-2" /> },
    { name: "TASK", icon: <FaTasks className="mr-2" /> },
    { name: "MEETING", icon: <FaRegCalendarAlt className="mr-2" /> }
];

const DataTable = ({ tableData, handleStatusChange, handleDelete, handleEdit }) => {
    return (
        <div className="overflow-x-auto bg-white shadow-md rounded-md">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left font-semibold text-sm">Name</th>
                        <th className="px-8 py-2 text-left font-semibold text-sm">Description</th>
                        <th className="px-4 py-2 text-left font-semibold text-sm">Shared With</th>
                        <th className="px-4 py-2 text-left font-semibold text-sm">Last Modified</th>
                        <th className="px-4 py-2 text-center font-semibold text-sm w-24">Status</th>
                        <th className="px-4 py-2 text-center font-semibold text-sm w-32">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id} className="border-b">
                            <td className="px-4 py-2">{row.name}</td>
                            <td className="px-8 py-2">{row.description}</td>
                            <td className="px-4 py-2">{row.sharedWith}</td>
                            <td className="px-4 py-2">{row.lastModified}</td>
                            <td className="px-4 py-2 text-center w-24">
                                <input
                                    type="checkbox"
                                    checked={row.status === "Active"}
                                    onChange={() => handleStatusChange(row.id)}
                                    className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                                />
                            </td>
                            <td className="px-4 py-2 flex justify-center gap-3 w-32">
                                <button className="text-blue-500 hover:underline" onClick={() => handleEdit(row.id)}>
                                    Edit
                                </button>
                                <button className="text-red-500 hover:underline" onClick={() => handleDelete(row.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const DashboardLayout = () => {
    const [tableData, setTableData] = useState([
        { id: 1, name: "Manager's Home", description: "description content", sharedWith: "qeewr", lastModified: "wefe", status: "Inactive" },
        { id: 2, name: "Another Page", description: "other description", sharedWith: "user123", lastModified: "2025-01-25", status: "Inactive" },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: '', description: '', sharedWith: '', lastModified: '', status: 'Inactive',
    });

    const handleStatusChange = (id) => {
        setTableData((prevData) =>
            prevData.map((row) =>
                row.id === id ? { ...row, status: row.status === "Active" ? "Inactive" : "Active" } : row
            )
        );
    };

    const handleDelete = (id) => {
        setTableData((prevData) => prevData.filter((row) => row.id !== id));
    };

    const handleEdit = (id) => {
        const row = tableData.find((item) => item.id === id);
        setFormData({ ...row });
        setEditIndex(id);
        setShowModal(true);
    };

    const handleModalToggle = () => {
        setShowModal(!showModal);
        setEditIndex(null);
    };

    const handleSave = () => {
        setTableData((prevData) =>
            editIndex !== null
                ? prevData.map((row) => (row.id === editIndex ? formData : row))
                : [...prevData, { ...formData, id: prevData.length + 1 }]
        );

        setShowModal(false);
        setFormData({ name: '', description: '', sharedWith: '', lastModified: '', status: 'Inactive' });
    };

    return (
        <div className="min-h-screen bg-white">
            <header className="flex items-center justify-between px-4 py-2 bg-[#21394b] text-white">
                <div className="flex items-center gap-4">
                    <img src="/logofairforce2.png" alt="CRM Illustration" className="max-w-[130px]" />
                    <div className="relative">
                        <FaSearch className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                        <input
                            type="search"
                            placeholder="Search"
                            className="rounded-lg w-52 pl-8 h-8 bg-white/10 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center">
                        <button variant="ghost" className="text-white">
                            Free trial day 14
                        </button>
                        <button variant="secondary" className="mt-0">UPGRADE</button>
                    </div>
                    <FaBell className="h-5 w-5" />
                    <FaCog className="h-5 w-5" />
                    <FaUser className="h-5 w-5" />
                </div>

            </header>

            <div className="flex h-screen">
                <aside className="w-52 bg-[#21394b] text-white p-4">
                    <nav className="space-y-2">
                        {sidebarItems.map((item) => (
                            <a key={item.name} href="#" className="flex items-center px-4 py-2 rounded-md text-white hover:text-blue-500 hover:bg-white/10 transition">
                                {item.icon}
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </aside>

                <main className="flex-1 p-8 bg-gray-50">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-2xl font-bold text-gray-900">CUSTOMIZE HOME PAGE</h1>
                            <button className="h-12 px-6 rounded-lg text-white bg-blue-500 flex items-center gap-2" onClick={handleModalToggle}>
                                <FaPlus className="h-4 w-4" />
                                Create Custom Home Page
                            </button>
                        </div>

                        <DataTable tableData={tableData} handleStatusChange={handleStatusChange} handleDelete={handleDelete} handleEdit={handleEdit} />
                    </div>
                </main>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg max-w-lg w-full">
                        <h2 className="text-2xl font-semibold">Create Custom Home Page</h2>
                        <p className="text-gray-600 mt-4">Enter the details below to create a custom home page.</p>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Page Name"
                            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                        />
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Description"
                            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                        ></textarea>
                        <input
                            type="text"
                            value={formData.sharedWith}
                            onChange={(e) => setFormData({ ...formData, sharedWith: e.target.value })}
                            placeholder="Shared With"
                            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            value={formData.lastModified}
                            onChange={(e) => setFormData({ ...formData, lastModified: e.target.value })}
                            placeholder="Last Modified"
                            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                        />
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-red-400 text-white px-4 py-2 rounded-md"
                                onClick={handleModalToggle}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default DashboardLayout;
