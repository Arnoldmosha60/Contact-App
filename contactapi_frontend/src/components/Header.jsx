/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Header = ({ toggleModal, nbOfContacts}) => {
  return (
    <nav className='bg-gray-300 elevation-3'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>
              <h3 className='text-xl font-semibold text-black'>Contact List ({nbOfContacts})</h3>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button onClick={toggleModal} className='relative btn btn-primary p-2 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
              <FontAwesomeIcon icon={faPlus} className="" /> New Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
    // <header className="flex items-center px-4 py-2 border-b border-gray-300 w-full">
    //   <div className='flex justify-start'>
    //     <h3 className="text-xl font-semibold">Contact List ({nbOfContacts})</h3>
    //   </div>
    //   <div className="flex mr-4 justify-end">
    //     <button className='btn btn-primary' onClick={toggleModal}>
    //       <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add New Contact
    //     </button>
    //   </div>
    // </header>
  )
}

export default Header