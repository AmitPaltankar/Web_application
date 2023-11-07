import React from 'react'
import {useState} from 'react';
import { Link } from 'react-router-dom'
import Dashboard from '../img/dashboard.png';
import Dashboard1 from '../img/dashboard1.png';
import Report from '../img/report.png';
import Report1 from '../img/report1.png';
import Payroll from '../img/dollar.png';
import Payroll1 from '../img/dollar1.png';
import Accounts from '../img/accounts.png';
import Accounts2 from '../img/accounts2.png';
import Adviosr from '../img/advisor.png';
import Adviosr1 from '../img/advisor1.png';
import Contact from '../img/contact.png';
import Contact1 from '../img/contact1.png';
import './index.css'


const sideBars = [
    {
        id:1,
        name: 'Dashboard',
        img: Dashboard,
        img1: Dashboard1,
        to: '/'
    },
    {
        id:2,
        name: 'Accounts',
        img: Accounts,
        img1: Accounts2,
        to: '/account'
    },
    {
        id:3,
        name: 'Payroll',
        img: Payroll,
        img1: Payroll1,
        to: '/payrole'
    },
    {
        id:4,
        name: 'Report',
        img: Report,
        img1:Report1,
        to: '/report'
    },
    {
        id:5,
        name: 'Advisor',
        img: Adviosr,
        img1: Adviosr1,
        to: '/advisor'
    },
    {
        id:6,
        name: 'Contacts',
        img: Contact,
        img1: Contact1,
        to: '/contacts'
    },
]

function Sidebar() {
const [selected, setselected]= useState(1)
    const selectSiderData = (id) =>{
        setselected(id)
    }
  return (
    <div className='sidebar'>
        {
            sideBars.map(data => (
                <div onClick={() => selectSiderData(data.id)}>
                    <Link className='link' style={selected === data.id ? {backgroundColor: 'chartreuse'} :{}} key={data.id} to={data.to}>
                        <img src={selected === data.id ? data.img1 :data.img} alt={data.name} style={{ width: '20px', height: '20px', marginLeft: '37px' }} />
                        <div style={{marginLeft: '15px'}}>
                            {data.name}
                        </div>
                    </Link>
                </div>
            ))
        }
        
    </div>
  )
}
export default Sidebar
