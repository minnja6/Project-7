//importing react
import React from 'react';
//creating a NotFound Component to hold the information that will show when the results for an input come back as 0
const NotFound = (props) => {
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results.</p>
        </li>
    );
}
//exporting component
export default NotFound;