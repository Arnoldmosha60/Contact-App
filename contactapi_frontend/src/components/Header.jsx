/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Header = ({ toggleModal, nbOfContacts}) => {
  return (
    <header className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
      <div>
        <h3 className="text-xl font-semibold">Contact List ({nbOfContacts})</h3>
      </div>
      <div className="mr-4">
        <button className='btn btn-primary' onClick={toggleModal}>
          <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add New Contact
        </button>
      </div>
    </header>
  )
}

export default Header