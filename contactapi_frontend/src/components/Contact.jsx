/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { faCircle, faCircleNotch, faEnvelope, faMapMarkerAlt, faP, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = ({ contact }) => {
  return (
    <Link to={`/contacts/${contact.id}`} className="contact__item">
      <div className="contact__header">
        <div className="contact__image">
          <img src={contact.photoUrl} alt={contact.name} />
        </div>
        <div className="contact__details">
          <p className="contact_name">{contact.name.substring(0, 15)} </p>
          <p className="contact_title">{contact.title}</p>
        </div>
      </div>
      <div className="contact__body">
        <p><FontAwesomeIcon icon={faEnvelope} /> &nbsp; {contact.email.substring(0, 20)} </p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp; {contact.address}</p>
        <p><FontAwesomeIcon icon={faPhone} />&nbsp; {contact.phone}</p>
        <p>{contact.status === 'Active' ? <FontAwesomeIcon icon={faCircle} />  :
          <FontAwesomeIcon icon={faCircleNotch} spin /> } {contact.status}</p>
      </div>
    </Link>
  )
}

export default Contact