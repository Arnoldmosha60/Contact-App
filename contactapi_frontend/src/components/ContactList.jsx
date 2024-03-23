/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Contact from './Contact'

const ContactList = ({data, currentPage, getAllContacts}) => {
  return (
    <main className=''>
      { data?.content?.length === 0 && <div className='col-span-full'>No contacts. Add new Contact.</div> }

      <ul className=''>
        <li>
          { data?.content?.length > 0 && data.content.map(contact => <Contact contact={contact} key={contact.id} />) }
        </li>
      </ul>

      { data?.content?.length > 0 && data?.totalPages > 1 && 
        <div className='pagination col-span-full flex justify-center items-center'>
          <a onClick={() => getAllContacts(currentPage - 1)} className={0 === currentPage ? 'pointer-events: none;' : ''} >&laquo;</a>
          { data && [...Array(data.totalPages).keys()].map((page, index) => 
            <a key={page} onClick={getAllContacts(page)} className={currentPage === page ? 'active' : ''}>{page + 1}</a>
          )}
          <a onClick={() => getAllContacts(currentPage + 1)} className={data.totalPages === currentPage + 1 ? 'pointer-events: none;' : ''} >&raquo;</a>
        </div>
      
      }
    </main>
  )
}

export default ContactList