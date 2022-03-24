
import React from 'react';
import { NavLink } from 'react-router-dom';

function AppHeader() {
    return (
        <header>
            <div className="banner">
            <nav>
                <h1 className="banner-title"> Micro Frontend POC</h1>
                <NavLink to="/appOne" className="nav-item"> App 1</NavLink>
                <NavLink to="/appTwo" className="nav-item"> App 2</NavLink>
            </nav>
            </div>
        </header>
    );
}
export default AppHeader