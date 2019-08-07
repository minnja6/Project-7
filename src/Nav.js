import React from 'react';
import { NavLink } from 'react-router-dom';
// import {
//     Switch
// } from 'react-router-dom';
const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                {/* <Switch> */}
                    <li><NavLink to='/dance'>Dance</NavLink></li>
                    <li><NavLink to='/dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/waterfalls'>Waterfalls</NavLink></li>
                {/* </Switch> */}
            </ul>
        </nav>

    );
}
export default Nav;
