import React from 'react'
import './Navbar.css'
import 'tachyons'

export default function navbar(props) {
    return (
        <div >
            <ul className='tc'>
                <li>Ravi Kumar</li>
                <li>{props.title1}</li>
                <li>contacts</li>
                <li>Projects</li>
            </ul>

            <p className='tc'> hello world Here I am to test this file</p>
        </div>
    )
}
