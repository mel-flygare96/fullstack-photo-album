import * as actionTypes from './actionTypes';

export const createAlbum = (id, name, photos) => {
    return { type: actionTypes.CREATE_ALBUM, id: id, name: name, photos: photos !== "" ? photos : [] };
} 

export const addToAlbum = (photoList, albumID) => {
    return { type: actionTypes.ADD_TO_ALBUM, photoList: photoList, albumID: albumID };
}