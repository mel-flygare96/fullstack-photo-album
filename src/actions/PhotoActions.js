import * as actionTypes from './actionTypes';

// Action to add a single photo to the photo list
export const uploadPhoto = photo => {
    photo[0] = parseInt(photo[0]);
    return { type: actionTypes.UPLOAD_PHOTO, photo: photo };
}

// Action to remove a photo from the photo list
export const deletePhoto = id => {
    return { type: actionTypes.DELETE_PHOTO, id: id };
}