import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = props => {
const results = props.data;
let photos = results.map(photo =>
    <Photo url={photo.images.fixed_height.url} />
    );
        return (
            <div className="photo-container">
                <ul>
                    {Photo}
                </ul>
            </div>
        );
    }
export default PhotoContainer;