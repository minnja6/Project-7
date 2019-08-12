import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = props => {
    const results = props.photos;
    let photos;
    if (results && results.length > 0) {
        photos = results.map(photo => <Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" />)
    } else {
        photos = <NotFound />
    }
    return (
        <div className="photo-container">
            <h2>{props.match.params.query}</h2>
            <ul>{photos}</ul>
        </div>
    );
}

export default PhotoContainer;
