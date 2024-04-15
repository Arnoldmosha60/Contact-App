/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react"
import Header from "./components/Header"
import { getContacts, saveContact, updateContact, updatePhoto } from "./api/ContactService";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const modalRef = useRef();
  const fileRef = useRef();
  const [values, setValues] = useState({
    name: "", email:"", phone: "", address: "", title: "", status: "", 
  });
  const [file, setFile] = useState(undefined);

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

  const onChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  };

  const handleNewContact = async (event) => {
    event.preventDefault();
    try {
      const {data} = await saveContact(values);
      const formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('id', data.id);
      const {data: photoUrl} = await updatePhoto(formData);
      toggleModal(false);
      setFile(undefined);
      fileRef.current.value = null;
      setValues({name: "", email:"", phone: "", address: "", title: "", status: "", });
      getAllContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = () => {};
  const updateImage = () => {};

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <>
      <Header toggleModal={toggleModal} nbOfContacts={data.totalElements} />
      <main className="main">
        <div className="container columns-2 p-8 ">
          <Routes>
            <Route path="/" element={<Navigate to={'/contacts'} />} />
            <Route path="/contacts" element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} />} />
            <Route path="/contacts/:id" element={<ContactDetail updateContact={updateContact} updateImage={updateImage} />} />
          </Routes>
        </div>
      </main>

      <dialog ref={modalRef} id="dialog" className="fixed z-10 inset-0 overflow-y-auto">
        <form onSubmit={handleNewContact} className="flex items-center justify-center min-h-screen">
          <div className="modal-container bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative">
            {/* Modal content */}
            <div className="modal-header flex justify-between items-center">
              <h3 className="text-lg font-semibold">Add New Contact</h3>
              <button onClick={() => toggleModal(false)} className="close-button text-black bg-sky-500 hover:bg-sky-700 px-4 py-2 rounded-lg">
                X
              </button>
            </div>
            <div className="modal-body space-y-4">
              <div className="form-group">
                <label htmlFor="name" className="block font-medium text-gray-700">Name:</label>
                <input id="name" name="name" type="text" value={values.name} onChange={onChange} className="input-field border text-black border-gray-300 rounded-lg w-full py-2 px-3" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block font-medium text-gray-700">Email:</label>
                <input id="email" name="email" type="email" value={values.email} onChange={onChange} className="peer input-field border border-gray-300 rounded-lg w-full py-2 px-3" />
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="title" className="block font-medium text-gray-700">Title:</label>
                <input id="title" name="title" type="text" value={values.title} onChange={onChange} className="input-field border border-gray-300 rounded-lg w-full py-2 px-3" />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="block font-medium text-gray-700">Address:</label>
                <input id="address" name="address" type="text" value={values.address} onChange={onChange} className="input-field border border-gray-300 rounded-lg w-full py-2 px-3" />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="block font-medium text-gray-700">Phone:</label>
                <input id="phone" name="phone" type="number" value={values.phone} onChange={onChange} className="input-field border border-gray-300 rounded-lg w-full py-2 px-3" />
              </div>
              <div className="form-group">
                <label htmlFor="status" className="block font-medium text-gray-700">Status:</label>
                <input id="status" name="status" type="text" value={values.status} onChange={onChange} className="input-field border border-gray-300 rounded-lg w-full py-2 px-3" />
              </div>
              <div className="form-group">
                <label htmlFor="photo" className="block font-medium text-gray-700">Photo:</label>
                <input id="photo" name="photo" ref={fileRef} type="file" onChange={(event) => setFile(event.target.files[0])} className="input-field" />
              </div>
            </div>
            <div className="modal-footer flex justify-end space-x-2 m-3">
              <button type="button" className="bg-red-300 hover:bg-red-500 py-2 px-4 mr-40" onClick={() => toggleModal(false)}>Cancel</button>
              <button type="submit" className="bg-sky-500 hover:bg-sky-700">Save</button>
            </div>
          </div>
        </form>
      </dialog>


    </>
  )
}

export default App
