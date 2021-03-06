//impoting react, the component and NavLink from the react-router-dom
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    //establishing the functionality of Navigation of the buttons
    linkDefault = event => {
        this.props.onClick(event.target.innerText);
        this.props.isTrue(true);
    }
    render() {
        return (
            <nav className="main-nav" >
                <ul>
                    {/* Button Navigation */}
                    <li><NavLink to='/search/cupcakes' onClick={this.linkDefault}>Cupcakes</NavLink></li>
                    <li><NavLink to='/search/waterfalls' onClick={this.linkDefault} >Waterfalls</NavLink></li>
                    <li><NavLink to='/search/flowers' onClick={this.linkDefault}>Flowers</NavLink></li>
                    <li><NavLink to='/search/sunflowers' onClick={this.linkDefault}>Sunflowers</NavLink></li>

                </ul>
            </nav>
        )
    }
}
