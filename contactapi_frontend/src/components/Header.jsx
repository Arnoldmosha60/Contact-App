/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Header = ({ toggleModal, nbOfContacts }) => {
  return (
    <header className='header'>
      <div className='container'>
        <h3>Contact List ({nbOfContacts})</h3>
        <button onClick={() => toggleModal(true)} className='btn'>
          <FontAwesomeIcon icon={faPlus} className="" /> Add New Contact
        </button>
      </div>
    </header>
    // <nav className='bg-gray-300 elevation-3'>
    //   <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
    //     <div className='relative flex h-16 items-center justify-between'>
    //       <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
    //         <div className='flex flex-shrink-0 items-center'>
    //           <h3 className='text-xl font-semibold text-black'>Contact List ({nbOfContacts})</h3>
    //         </div>
    //       </div>
    //       <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
    //         <button onClick={() => toggleModal(true)} className='relative btn btn-primary p-2 text-black hover:text-white bg-sky-500 hover:bg-sky-700 '>
    //           <FontAwesomeIcon icon={faPlus} className="" /> New Contact
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Header