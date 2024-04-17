/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const AddNewContact = ({ modalRef, toggleModal }) => {
    return (
        <>
            <dialog ref={modalRef} id="dialog">
                <div>
                    <div className="modal-overlay"></div>
                    <div className="modal-container">
                        <div className="modal-header">
                            <h3>Add New Contact</h3>
                            <button onClick={() => toggleModal(false)} className="close-button">X</button>
                        </div>
                        <div className="modal-body">
                            <label>Name:</label>
                            <input type="text" value="name" />
                            <label>Email:</label>
                            <input type="email" value="email" />
                            <label>Title:</label>
                            <input type="text" value="title" />
                            <label>Address:</label>
                            <input type="text" value="address" />
                            <label>Phone:</label>
                            <input type="number" value="phone" />
                            <label>Status:</label>
                            <input type="text" value="status" />
                            <label>Photo:</label>
                            <input type="file" value="photo" />
                        </div>
                        <div className="modal-footer">
                            <button>Save</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default AddNewContact