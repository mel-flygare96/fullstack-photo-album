import * as actionTypes from './actionTypes';

export function uploadPhoto(file){
    return { type: actionTypes.UPLOAD_PHOTO, photo: file };
}