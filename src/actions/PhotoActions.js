import * as actionTypes from './actionTypes';

export function uploadPhoto(file){
    return { type: actionTypes.UPLOAD_PHOTO, photo: file };
}

export function deletePhoto(id){
    return { type: actionTypes.DELETE_PHOTO, id: id };
}