import React from 'react'
import Notification from '../img/icons8-notification-bell-64.png'
import Logo from '../img/th.jpg'
import SearchIcon from '../img/searchicon.jpg'
import Profile from '../img/profile.jpg'
import DropDown from '../img/dropdown.jpg'

import './index.css'


export default function header() {
  return (
    <div className='header'>
        <div className='maintitle'>
            <img src={Logo} alt="" style={{width: '32px', height: '32px'}} />
            ASSIDUUS
        </div>
        <div className='sub_header'>
            <div className='searchbar'>
                <img src={SearchIcon} alt="SearchIcon" style={{width: '18px', height: '18px', padding: '0px 5px'}} />
                <input type='text' onChange={() => {}}/>
            </div>
            <div className='notification'>
                <img src={Notification} alt="note" style={{width: '25px', height: '25px'}} />
            </div>
            <div className='profile'>
                <img src={Profile} alt="Profile" style={{width: '25px', height: '25px'}} />
                <img src={DropDown} alt="DropDown" style={{width: '8px', height: '8px', cursor: 'pointer'}} />
            </div>
        </div>
    </div>
  )
}
