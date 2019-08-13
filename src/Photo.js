//importing react
import React from 'react';
//creating a Photo component to hold the url of a single photo
const Photo = props => (
        <li className="photo-wrap">
            <img src={props.url} alt=""/>
        </li>
    );
//exporting component
export default Photo;