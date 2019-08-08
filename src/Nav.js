import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    linkDefault = event => {
        this.props.onClick(event.target.innerText);
        this.props.isTrue(true);
    }
    render() {
        return (
            <nav className="main-nav" >
                <ul>
                    <li><NavLink to='/cupcakes' onClick={this.linkDefault}>Cupcakes</NavLink></li>
                    <li><NavLink to='/dogs' onClick={this.linkDefault} >Dogs</NavLink></li>
                    <li><NavLink to='/dancing' onClick={this.linkDefault}>Dancing</NavLink></li>
                </ul>
            </nav>
        )
    }
}
