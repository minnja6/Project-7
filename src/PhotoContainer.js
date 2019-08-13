//importing react and necessary components 
import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
//creating a PhotoConatiner component to hold the 24 photos that are shown
const PhotoContainer = props => {
    const results = props.photos;
    let photos;
    //if there are photos and the results are more than 0, show the photos 
    if (results && results.length > 0) {
        photos = results.map(photo => <Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" />)
    //otherwise, show the "NotFound" component    
    } else {
        photos = <NotFound />
    }
    //shows the title of the photos and displays the photos
    return (
        <div className="photo-container">
            <h2>{props.match.params.query}</h2>
            <ul>{photos}</ul>
        </div>
    );
}
//exporting component
export default PhotoContainer;
