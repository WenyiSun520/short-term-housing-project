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
          <p>
            <Link to="/addTenant">Post a Tenant</Link>
          </p>
        </div>
        <nav className="navbar">
          <Link to="/">
            <div className="nav-item">Lease/subLease Info</div>
          </Link>
          <Link to="/tenants">
            <div className="nav-item">Tenant</div>
          </Link>
        </nav>
      </section>
    );
}

export default Navbar;
