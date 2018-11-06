import React from 'react';
import Photo from './Photo';
import PhotoView from './PhotoView';

class AllPhotos extends React.Component {
    render(){
        return (
            <PhotoView photoList={[0, 1, 2, 3, 4, 5, 6, 7, 8].map(num => {return {photo: <Photo image='https://vignette.wikia.nocookie.net/memoryalpha/images/5/52/Earl_Grey_tea%2C_hot.jpg/revision/latest?cb=20121209020531&path-prefix=en'/>, key: num}})} />
        );
    }
}

export default AllPhotos;