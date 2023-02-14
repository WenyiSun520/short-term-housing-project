import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return (
      <section className="header">
        <div className="header-title">
          <h1>Short-term Housing For Interns</h1>
          <p>
            <Link to="/addRent">Post a rent</Link>
          </p>
        </div>
        <nav className="navbar">
          <Link to="/">
            <div className="nav-item">Renting</div>
          </Link>
          <div className="nav-item">Asking for Rent</div>
        </nav>
      </section>
    );
}

export default Navbar;
