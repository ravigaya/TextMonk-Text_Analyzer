
import React from 'react'
import { Link } from 'react-router-dom'
import Pallets from './Pallets'

export default function TextcontentsNav(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextM</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                
                <Link className="nav-link" to="/about">AboutUs</Link>
              </li>
            </ul>  
          
          </div>
                {`${props.pal}`}  
          <div onClick={props.togglemode} className={`custom-control custom-switch text-${props.text}`}>
            <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
             <label className="custom-control-label" htmlFor="customSwitch1">{`${props.Changemode}`}</label>
          </div> 
        </div>    
      </nav>
      
    </div>
  )
}
