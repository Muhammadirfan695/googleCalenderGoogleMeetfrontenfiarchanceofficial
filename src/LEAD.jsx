import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios"; 
import moment from "moment";

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
                            <td className="px-4 py-2">{moment(row.lastModified).format("DD MM YYYY HH:MM:SS A")}</td>
                            <td className="px-4 py-2 text-center w-24">
                                <input
                                    type="checkbox"
                                    checked={row.status}
                                    readOnly
                                    className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                                />
                            </td>
                            <td className="px-4 py-2 flex justify-center gap-3 w-32">
                                <button className="text-blue-500 hover:underline" onClick={() => handleEdit(row._id)}>
                                    Edit
                                </button>
                                <button className="text-red-500 hover:underline" onClick={() => handleDelete(row._id)}>
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

const LEAD = () => {
    const [tableData, setTableData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [status,setStatus] =useState(false)
    const [itemId,setItemId] = useState("")
    const [formData, setFormData] = useState({
        name: '', description: '', sharedWith: '', lastModified: '', status: 'Inactive',
    });
    const [formEditData, setFormEidtData] = useState({
        name: '', description: '', sharedWith: '', lastModified: '', status: 'Inactive',
    });
  
    const getItemsDetails = async()=>{
        await  axios.get('http://localhost:8000/api/getItems')
        .then(response => {
            console.log(response.data)
            setTableData(response.data);  
        })
        .catch(error => {
            console.error("Error fetching data", error);
        });
    }
    useEffect(() => {
        getItemsDetails()
    }, []); 

    const handleStatusChange = (id) => {
        setTableData((prevData) =>
            prevData.map((row) =>
                row.id === id ? { ...row, status: row.status === "Active" ? "Inactive" : "Active" } : row
            )
        );
    };

    // const handleDelete = (id) => {
    //     setTableData((prevData) => prevData.filter((row) => row.id !== id));
    // };
   console.log("itemId", itemId);
   
    const handleEdit = async(id) => {
        // console.log("id",id);
        setItemId(id)
        
        await  axios.get(`http://localhost:8000/api/getItemsById/${id}`)
        .then(response => {
            console.log(response.data)
            // setTableData(response.data);  
            setFormEidtData({
                name: response.data.name,
                description: response.data.description,
                sharedWith: response.data.sharedWith,
                lastModified: response.data.lastModified.split("T")[0],
            })
            setStatus(response.data.status)
            setShowModalEdit(true)
        })
        .catch(error => {
            console.error("Error fetching data", error);
        });
        const row = tableData.find((item) => item.id === id);
        setFormData({ ...row });
        setEditIndex(id);
        ;
    };

    const handleModalToggle = () => {
        setShowModal(!showModal);
        setEditIndex(null);
    };
    const handleModalEditToggle = () => {
        setShowModalEdit(!showModalEdit);
        setEditIndex(null);
    };
// console.log("status",status);
    const handleSave = async() => {
        const object = {
            name:formData.name,
            description: formData.description,
            status: status,
            sharedWith: formData.sharedWith,
            lastModified: formData.lastModified
        }
        // console.log("object", object);
        
          await axios.post("http://localhost:8000/api/createItem", object) .then(response => {
            console.log(response.data)
            getItemsDetails()
        })
        .catch(error => {
            console.error("Error fetching data", error);
        });
        setShowModal(false);
        setFormData({ name: '', description: '', sharedWith: '', lastModified: '', status: false });
    };
    const handleEditSave = async () => {
        const object = {
            name: formEditData.name,
            description: formEditData.description,
            sharedWith: formEditData.sharedWith,
            lastModified: formEditData.lastModified,
            status: status
        };
        
        try {
            await axios.put(`http://localhost:8000/api/updateItemById/${itemId}`, object)
                .then(response => {
                    console.log("Update Response:", response.data);
                    getItemsDetails(); 
                    
                })
                .catch(error => {
                    console.error("Error updating data", error);
                });
        } catch (error) {
            console.error("Update failed:", error);
        }
        setShowModalEdit(false);
        setFormEidtData({ name: '', description: '', sharedWith: '', lastModified: '', status: false });
    };
    
    const handleDelete = async (id) => {
        if (!id) {
            console.error("No item selected for deletion.");
            return;
        }
        try {
            await axios.delete(`http://localhost:8000/api/deleteItemById/${id}`)
                .then(response => {
                    console.log("Delete Response:", response.data);
                    getItemsDetails(); 
                })
                .catch(error => {
                    console.error("Error deleting data", error);
                });
        } catch (error) {
            console.error("Delete failed:", error);
        }
    };
    
    return (
        <div className="min-h-screen bg-white">
            <main className="p-8 bg-gray-50 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">CUSTOMIZE HOME PAGE</h1>
                        <button className="h-12 px-6 rounded-lg text-white bg-blue-500 flex items-center gap-2" onClick={handleModalToggle}>
                            <FaPlus className="h-4 w-4" />
                            Create Custom Home Page
                        </button>
                    </div>
                    <DataTable 
                        tableData={tableData} 
                        handleStatusChange={handleStatusChange} 
                        handleDelete={handleDelete} 
                        handleEdit={handleEdit} 
                    />
                </div>
            </main>

            {/* Modal */}
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
                        type="text"
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
                            type="date"
                            value={formData.lastModified}
                            onChange={(e) => setFormData({ ...formData, lastModified: e.target.value })}
                            placeholder="Last Modified"
                            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                        />
                        <div className="flex">
                         <input
                            type="checkbox"
                            checked={status}
                            onChange={(e) => setStatus(e.target.checked)}
                            placeholder="Last Modified"
                            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                        /> <label>Status</label>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="bg-red-400 text-white px-4 py-2 rounded-md" onClick={handleModalToggle}>
                                Cancel
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md" onClick={handleSave}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

             {showModalEdit && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg max-w-lg w-full">
                        <h2 className="text-2xl font-semibold">Edit Custom Home Page</h2>
                        <p className="text-gray-600 mt-4">Enter the details below to create a custom home page.</p>
                        <input
                            type="text"
                            value={formEditData.name}
                            onChange={(e) => setFormEidtData({ ...formEditData, name: e.target.value })}
                            placeholder="Page Name"
                            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                        />

                        <textarea
                        type="text"
                            value={formEditData.description}
                            onChange={(e) => setFormEidtData({ ...formEditData, description: e.target.value })}
                            placeholder="Description"
                            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                        ></textarea>
                        
                        <input
                            type="text"
                            value={formEditData.sharedWith}
                            onChange={(e) => setFormEidtData({ ...formEditData, sharedWith: e.target.value })}
                            placeholder="Shared With"
                            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="date"
                            value={formEditData.lastModified}
                            onChange={(e) => setFormEidtData({ ...formEditData, lastModified: e.target.value })}
                            placeholder="Last Modified"
                            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                        />
                        <div className="flex">
                         <input
                            type="checkbox"
                            checked={status}
                            onChange={(e) => setStatus(e.target.checked)}
                            placeholder="Last Modified"
                            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                        /> <label>Status</label>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="bg-red-400 text-white px-4 py-2 rounded-md" onClick={handleModalEditToggle}>
                                Cancel
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md" onClick={handleEditSave}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LEAD;















































// import { useState, useEffect } from "react";
// import { FaPlus } from "react-icons/fa";
// import axios from "axios";
// import moment from "moment";

// const DataTable = ({ tableData, handleEdit, handleDelete }) => (
//     <div className="overflow-x-auto bg-white shadow-md rounded-md">
//         <table className="min-w-full table-auto">
//             <thead className="bg-gray-100">
//                 <tr>
//                     {['Name', 'Description', 'Shared With', 'Last Modified', 'Status', 'Action'].map((header, index) => (
//                         <th key={index} className="px-4 py-2 text-left font-semibold text-sm">
//                             {header}
//                         </th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {tableData.map(({ _id, name, description, sharedWith, lastModified, status }) => (
//                     <tr key={_id} className="border-b">
//                         <td className="px-4 py-2">{name}</td>
//                         <td className="px-8 py-2">{description}</td>
//                         <td className="px-4 py-2">{sharedWith}</td>
//                         <td className="px-4 py-2">{moment(lastModified).format("DD-MM-YYYY HH:mm:ss A")}</td>
//                         <td className="px-4 py-2 text-center">
//                             <input type="checkbox" checked={status} readOnly className="form-checkbox h-4 w-4 text-blue-600" />
//                         </td>
//                         <td className="px-4 py-2 flex justify-center gap-3">
//                             <button className="text-blue-500 hover:underline" onClick={() => handleEdit(_id)}>Edit</button>
//                             <button className="text-red-500 hover:underline" onClick={() => handleDelete(_id)}>Delete</button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
// );

// const LEAD = () => {
//     const [tableData, setTableData] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [editMode, setEditMode] = useState(false);
//     const [currentId, setCurrentId] = useState(null);
//     const [formData, setFormData] = useState({
//         name: '', description: '', sharedWith: '', lastModified: '', status: false,
//     });

//     useEffect(() => {
//         fetchItems();
//     }, []);

//     const fetchItems = async () => {
//         try {
//             const { data } = await axios.get('http://localhost:8000/api/getItems');
//             setTableData(data);
//         } catch (error) {
//             console.error("Error fetching data", error);
//         }
//     };

//     const handleEdit = async (id) => {
//         setCurrentId(id);
//         setEditMode(true);
//         setShowModal(true);
//         try {
//             const { data } = await axios.get(`http://localhost:8000/api/getItemsById/${id}`);
//             setFormData({ ...data, lastModified: data.lastModified.split("T")[0] });
//         } catch (error) {
//             console.error("Error fetching item", error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8000/api/deleteItemById/${id}`);
//             fetchItems();
//         } catch (error) {
//             console.error("Error deleting item", error);
//         }
//     };

//     const handleSave = async () => {
//         try {
//             if (editMode) {
//                 await axios.put(`http://localhost:8000/api/updateItemById/${currentId}`, formData);
//             } else {
//                 await axios.post("http://localhost:8000/api/createItem", formData);
//             }
//             fetchItems();
//             setShowModal(false);
//             resetForm();
//         } catch (error) {
//             console.error("Error saving item", error);
//         }
//     };

//     const resetForm = () => {
//         setFormData({ name: '', description: '', sharedWith: '', lastModified: '', status: false });
//         setEditMode(false);
//         setCurrentId(null);
//     };

//     return (
//         <div className="min-h-screen bg-white">
//             <main className="p-8 bg-gray-50 min-h-screen">
//                 <div className="max-w-5xl mx-auto">
//                     <div className="flex justify-between items-center mb-8">
//                         <h1 className="text-2xl font-bold text-gray-900">CUSTOMIZE HOME PAGE</h1>
//                         <button className="h-12 px-6 rounded-lg text-white bg-blue-500 flex items-center gap-2" onClick={() => setShowModal(true)}>
//                             <FaPlus className="h-4 w-4" /> Create Custom Home Page
//                         </button>
//                     </div>
//                     <DataTable tableData={tableData} handleEdit={handleEdit} handleDelete={handleDelete} />
//                 </div>
//             </main>
//             {showModal && (
//                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
//                     <div className="bg-white p-8 rounded-lg max-w-lg w-full">
//                         <h2 className="text-2xl font-semibold">{editMode ? "Edit" : "Create"} Custom Home Page</h2>
//                         <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Page Name" className="mt-4 w-full p-2 border rounded-md" />
//                         <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Description" className="mt-4 w-full p-2 border rounded-md"></textarea>
//                         <input type="text" value={formData.sharedWith} onChange={(e) => setFormData({ ...formData, sharedWith: e.target.value })} placeholder="Shared With" className="mt-4 w-full p-2 border rounded-md" />
//                         <input type="date" value={formData.lastModified} onChange={(e) => setFormData({ ...formData, lastModified: e.target.value })} className="mt-4 w-full p-2 border rounded-md" />
//                         <div className="flex items-center mt-4">
//                             <input type="checkbox" checked={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.checked })} className="mr-2" /> <label>Status</label>
//                         </div>
//                         <div className="flex justify-end mt-4">
//                             <button className="bg-red-400 text-white px-4 py-2 rounded-md" onClick={() => { setShowModal(false); resetForm(); }}>Cancel</button>
//                             <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md" onClick={handleSave}>Save</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default LEAD;
