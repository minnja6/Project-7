import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
class PhotoContainer extends React.Component {
    state = {
        Photo: 0
    };
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <NotFound />

                </ul>
            </div>
        )
    };
}
export default PhotoContainer;