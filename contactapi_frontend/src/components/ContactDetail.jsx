/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getContact } from '../api/ContactService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ContactDetail = ({ updateContact, updateImage}) => {
  const [contact, setContact] = useState({
    name: "", email:"", phone: "", address: "", title: "", status: "", photoUrl: ""
  });

  const {id} = useParams();

  const fetchContact = async (id) => {
    try {
      const {data} = await getContact(id);
      setContact(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContact(id);
  }, [id]);

  return (
    <>
      <Link to={'/'}><FontAwesomeIcon icon={faArrowLeft} /> Back to List</Link>
    </>
  )
}

export default ContactDetail