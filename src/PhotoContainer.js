import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
const PhotoContainer = (props) => {
    return (
        <div class="photo-container">
            <h2>Results</h2>
            <ul>
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                if(){
                    <NotFound />
                }
            </ul>
        </div>
    )
};
export default PhotoContainer;