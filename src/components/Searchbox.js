import React from 'react'

export default function Searchbox() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search Robofriends" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
          </div>

        </nav>
      </div>
    )
}
