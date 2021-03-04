import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link to="/" className="navbar-brand"> useContext </Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" to="/" className="nav-item nav-link"> Home </NavLink>
                    
                    <NavLink exact activeClassName="active" to="/africa" className="nav-item nav-link"> Africa </NavLink>
                    <NavLink exact activeClassName="active" to="/america" className="nav-item nav-link"> America </NavLink>
                    <NavLink exact activeClassName="active" to="/asia" className="nav-item nav-link"> Asia </NavLink>
                    <NavLink exact activeClassName="active" to="/europa" className="nav-item nav-link"> Europa </NavLink>
                    <NavLink exact activeClassName="active" to="/oceania" className="nav-item nav-link"> Oceania </NavLink>
                    
                </div>
            </div>
        </nav>
    )
}
