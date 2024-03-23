/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { faCircle, faCircleNotch, faEnvelope, faMapMarkerAlt, faP, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = ({ contact }) => {
  return (
    <Link to={`/contacts/${contact?.id}`}>
      <div
        className="flex flex-col rounded-lg bg-white text-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-300 md:max-w-xl md:flex-row p-5">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={contact?.photoUrl} alt={contact?.name} />
        <div className="flex flex-col justify-start p-6">
          <h5
            className="mb-2 text-xl font-medium text-black">
            {contact.name}
          </h5>
          <h4
            className="mb-2 text-xl font-medium text-black">
            <FontAwesomeIcon icon={faBriefcase} />&nbsp; {contact.title}
          </h4>
          <p className="mb-4 text-base text-black ">
            <FontAwesomeIcon icon={faEnvelope} /> &nbsp; {contact?.email}
          </p>
          <p className="mb-4 text-base text-black">
            <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp; {contact?.address}
          </p>
          <p className="mb-4 text-base text-black">
            <FontAwesomeIcon icon={faPhone} />&nbsp; {contact?.phone}
          </p>
          <p className="text-xs text-black">
            {contact?.status === 'Active' ?
              <span className="badge badge-primary flex items-center">
                <FontAwesomeIcon icon={faCircle} />
                &nbsp;{contact?.status}
              </span>
              :
              <span className="badge badge-secondary flex items-center">
                <FontAwesomeIcon icon={faCircleNotch} spin />
                &nbsp;{contact?.status}
              </span>
            }
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-between p-8 text-sm w-full" >
        <div className='container'>
        <div className="card m-4 bg-gray-300">
          <div className='card-header'>
            <img src={contact?.photoUrl} alt={contact?.name} className='' />
          </div>
          <div className='card-body'>
            <p className='text-lg font-semibold'>{contact?.name}</p>
            <p className='text-sm text-gray-500'>{contact?.title}</p>
          </div>
          <div className='card-footer'>
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
        </div>
      </div> */}
    </Link>
  )
}

export default Contact