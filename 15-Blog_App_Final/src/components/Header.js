import React from 'react';
import { NavLink } from 'react-router-dom';
import {logout} from '../actions/auth';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container">
                
                <NavLink className="navbar-brand" to="/">Blog App</NavLink>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blogs" activeClassName="active">Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/create" activeClassName="active">Create</NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary" onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
