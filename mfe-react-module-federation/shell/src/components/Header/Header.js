import React from 'react';

import { Link } from 'react-router-dom'




export default function Header() {
    return (
        <>
            <header>
                <Link to="/home">Home Page</Link>
                <br></br>
                <Link to="/statement">Statement</Link>
                <br></br>
                <Link to="/button">Button</Link>
                
            </header>
        </>


    );
}