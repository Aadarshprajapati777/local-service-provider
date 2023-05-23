import React from 'react';
import PhoneInTalkTwoToneIcon from '@mui/icons-material/PhoneInTalkTwoTone';
import EmailIcon from '@mui/icons-material/Email';
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import './contact.css';
const Contact = () => {
    return (

        <div className='contact-parent-container'>
            <p>Contact Us</p>
            <div className='contact-container'>

                <div className='contact-item'>
                    <PhoneInTalkTwoToneIcon sx={{ fontSize: 150 }} />
                    <p>Call us at</p>
                    <p>+919312341234</p>
                </div>
                <div className='contact-item'>
                    <EmailIcon sx={{ fontSize: 150 }} />
                    <p>Email us at</p>
                    <p>localservprov@hello.com</p>
                </div>
                <div className='contact-item'>
                    <RoomTwoToneIcon sx={{ fontSize: 150 }} />
                    <p>Amrita University Vallikavu PO </p>
                    <p>Amritapuri Clappana Kerala 690525</p>

                </div>
            </div>

        </div>

    )



}

export default Contact;