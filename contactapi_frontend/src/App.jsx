/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react"
import Contact from "./components/Contact"
import Header from "./components/Header"
import { getContacts } from "./api/ContactService";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import AddNewContact from "./components/AddNewContact";

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const modalRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [photo, setPhoto] = useState('');

  // Add onChange handlers to update state variables
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleStatusChange = (event) => setStatus(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);

  const getAllContacts = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const { data } = await getContacts(page, size);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const toggleModal = (show) => {
    show ? modalRef.current.showModal() : modalRef.current.close();
  };

  useEffect(() => {
    getAllContacts();
  }, [])

  return (
    <>
      <Header toggleModal={toggleModal} nbOfContacts={data.totalElements} />
      {/* <AddNewContact isOpen={toggleModal} onClose={closeDialog} onSave={handleSaveContact} /> */}
      <main className="main">
        <div className="container columns-2 p-8 ">
          <Routes>
            <Route path="/" element={<Navigate to={'/contacts'} />} />
            <Route path="/contacts" element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} />} />
          </Routes>
        </div>
      </main>

      <dialog ref={modalRef} id="dialog" className="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen">
    <div className="modal-overlay fixed inset-0 opacity-50"></div>
    <div className="modal-container bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
      <div className="modal-header flex justify-between items-center">
        <h3 className="text-lg font-semibold">Add New Contact</h3>
        <button onClick={() => toggleModal(false)} className="close-button text-gray-500 hover:text-gray-700 focus:outline-none">
          X
        </button>
      </div>
      <div className="modal-body space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block font-medium text-gray-700">Name:</label>
          <input id="name" type="text" value={name} onChange={handleNameChange} className="input-field" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block font-medium text-gray-700">Email:</label>
          <input id="email" type="email" value={email} onChange={handleEmailChange} className="input-field" />
        </div>
        <div className="form-group">
          <label htmlFor="title" className="block font-medium text-gray-700">Title:</label>
          <input id="title" type="text" value={title} onChange={handleTitleChange} className="input-field" />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="block font-medium text-gray-700">Address:</label>
          <input id="address" type="text" value={address} onChange={handleAddressChange} className="input-field" />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="block font-medium text-gray-700">Phone:</label>
          <input id="phone" type="number" value={phone} onChange={handlePhoneChange} className="input-field" />
        </div>
        <div className="form-group">
          <label htmlFor="status" className="block font-medium text-gray-700">Status:</label>
          <input id="status" type="text" value={status} onChange={handleStatusChange} readOnly className="input-field bg-gray-100 cursor-not-allowed" />
        </div>
        <div className="form-group">
          <label htmlFor="photo" className="block font-medium text-gray-700">Photo:</label>
          <input id="photo" type="file" value={photo} onChange={handlePhotoChange} className="input-field" />
        </div>
      </div>
      <div className="modal-footer flex justify-end space-x-2">
        <button className="btn-primary">Save</button>
        <button className="btn-secondary" onClick={() => toggleModal(false)}>Cancel</button>
      </div>
    </div>
  </div>
</dialog>


    </>
  )
}

export default App
