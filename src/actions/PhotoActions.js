import * as actionTypes from './actionTypes';

export const uploadPhoto = file => {
    return { type: actionTypes.UPLOAD_PHOTO, photo: file };
}

export const deletePhoto = id => {
    return { type: actionTypes.DELETE_PHOTO, id: id };
}