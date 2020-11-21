import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <img id="logo" src="./logo_transparent_white.png" alt="Juhani Rajalahti logo" />
            <ul role="presentation">
                <li>Who</li>
                <li>Projects</li>
                <li>Skills</li>
            </ul>
        </nav>
    )
};
