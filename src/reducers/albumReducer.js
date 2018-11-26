import initialState from './initialState';

export default function album(state = initialState.album, action){
    switch(action.type){
        case 'CREATE_ALBUM': {
            if(action.id === -1){
                return Object.assign({}, state, {
                    albums: Object.assign({}, state.albums,  {
                        [state.nextId]: {
                            id: state.nextId,
                            name: action.name,
                            photos: action.photos
                        }
                    }),
                    nextId: state.nextId + 1
                })
            } else {
                return Object.assign({}, state, {
                    albums: Object.assign({}, state.albums,  {
                        [action.id]: {
                            id: action.id,
                            name: action.name,
                            photos: action.photos
                        }
                    }),
                    nextId: Math.max(state.nextId, action.id) + 1
                })
            }
        }
        case 'ADD_TO_ALBUM': {
            let match = state.albums[action.albumID];
            if(!match.photos.includes(action.photoID)){
                match.photos = action.photoList;
            } else {
                return state;
            }
            return Object.assign({}, state, {
                albums: Object.assign({}, state.albums, {
                    [action.albumID]: match
                })
            })
        }
        default: {
            return state;
        }
    }
};