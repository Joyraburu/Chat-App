import React from 'react'
import Image from '../assets/icons8-communication-64.png'
import {FaPhone, FaGithub,FaFacebookF,FaTwitter, FaReddit, FaDiscord}from 'react-icons/fa'
export default function navbar() {
  return (
    <div className='nav-bar'>
      <div className='nav-left'>
        <img id='logo' src={Image} alt='logo'/>
        <h1> Yappy</h1>
        </div>
        <div className='nav-right'>
        <h4><FaPhone/></h4>
        <h4><FaFacebookF/></h4>
        <h4><FaTwitter/></h4>
        <h4><FaReddit/></h4>
        <h4><FaGithub/></h4>
        <h4><FaDiscord/></h4>
        </div>
     
    </div>
  )
}
