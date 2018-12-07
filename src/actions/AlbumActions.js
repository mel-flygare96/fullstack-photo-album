import * as actionTypes from './actionTypes';

// Action to create an album, optionally with a list of photos
export const createAlbum = (id, name, photos) => {
    return { type: actionTypes.CREATE_ALBUM, id: id, name: name, photos: photos !== "" ? photos : [] };
} 

// Action to add a list of photos to an album
export const addToAlbum = (photoList, albumID) => {
    return { type: actionTypes.ADD_TO_ALBUM, photoList: photoList, albumID: albumID };
}