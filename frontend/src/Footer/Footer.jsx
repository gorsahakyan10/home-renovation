import React from 'react'
import './Footer.css'
import Contacts from '../Contacts'

function Footer() {
    const contacts = [
        { key: "vk", value: 'https://vk.com/gorsahakyan10', isLink: true},
        { key: "WhatsApp", value: '+374-77-800-722' },
    ];
  return (
    <footer className='p-3'>
        <h4>Контакты администратора</h4>
        <Contacts contacts={contacts}/>
    </footer>
  )
}

export default Footer