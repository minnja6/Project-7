import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

class PhotoContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {this.props.photos.map(photo =>
                        <li key={photo.id}>
                            <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
export default PhotoContainer;
