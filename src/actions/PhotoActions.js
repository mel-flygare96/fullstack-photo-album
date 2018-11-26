import * as actionTypes from './actionTypes';

export const uploadPhoto = photo => {
    photo[0] = parseInt(photo[0]);
    return { type: actionTypes.UPLOAD_PHOTO, photo: photo };
}

export const deletePhoto = id => {
    return { type: actionTypes.DELETE_PHOTO, id: id };
}