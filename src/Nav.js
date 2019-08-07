import React from 'react';
const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href='/dance'>Dance</a></li>
                <li><a href='/dogs'>Dogs</a></li>
                <li><a href='/waterfalls'>Waterfalls</a></li>
            </ul>
        </nav>

    );
}
export default Nav;
