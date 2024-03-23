/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { faCircle, faCircleNotch, faEnvelope, faMapMarkerAlt, faP, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = ({ contact }) => {
  return (
    <Link to={`/contacts/${contact?.id}`}>
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="flex items-center">
              <img class="w-10 h-10 rounded-full mr-4" src={contact?.photoUrl} alt={contact?.name} />
              <div class="text-sm">
                <p className="text-gray-900 leading-none">{contact?.name}</p>
                <p class="text-gray-600">{contact?.title}</p>
              </div>
            </div>
            <p class="text-gray-700 text-base"><FontAwesomeIcon icon={faEnvelope} />&nbsp; {contact?.email}</p>
            <p class="text-gray-700 text-base"><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp; {contact?.address}</p>
            <p class="text-gray-700 text-base"><FontAwesomeIcon icon={faPhone} />&nbsp; {contact?.phone}</p>
            {contact?.status === 'Active' ?
              <span className="badge badge-primary flex items-center text-sm text-gray-600">
                <FontAwesomeIcon icon={faCircle} />
                &nbsp;{contact?.status}
              </span>
              :
              <span className="badge badge-secondary flex items-center text-sm text-gray-600">
                <FontAwesomeIcon icon={faCircleNotch} spin />
                &nbsp;{contact?.status}
              </span>
            }
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-between px-8 py-6 text-sm bg-gray-200 rounded-lg shadow hover:bg-gray" >
        <div className="card m-4">
          <div className='card-header'>
            <img src={contact?.photoUrl} alt={contact?.name} className='' />
          </div>
          <div className='card-body'>
            <p className='text-lg font-semibold'>{contact?.name}</p>
            <p className='text-sm text-gray-500'>{contact?.title}</p>
          </div>
          <div className='card-footer bg-gray-100 py-2 px-4'>
            <p className='flex items-center text-sm text-gray-600'> <FontAwesomeIcon icon={faEnvelope} />&nbsp; {contact?.email}</p>
            <p className='flex items-center text-sm text-gray-600'> <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp; {contact?.address}</p>
            <p className='flex items-center text-sm text-gray-600'> <FontAwesomeIcon icon={faPhone} />&nbsp; {contact?.phone}</p>
            {contact?.status === 'Active' ?
              <span className="badge badge-primary flex items-center text-sm text-gray-600">
                <FontAwesomeIcon icon={faCircle} />
                &nbsp;{contact?.status}
              </span>
              :
              <span className="badge badge-secondary flex items-center text-sm text-gray-600">
                <FontAwesomeIcon icon={faCircleNotch} spin />
                &nbsp;{contact?.status}
              </span>
            }
          </div>
        </div>
      </div> */}
    </Link>
  )
}

export default Contact