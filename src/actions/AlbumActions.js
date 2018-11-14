import * as actionTypes from './actionTypes';

export const createAlbum = name => {
    return { type: actionTypes.CREATE_ALBUM, name: name };
} 