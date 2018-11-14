import initialState from './initialState';

export default function album(state = initialState.album, action){
    switch(action.type){
        case 'CREATE_ALBUM': {
            return Object.assign({}, state, {
                albums: [...state.albums, {
                    id: state.nextId,
                    name: action.name,
                    photos: []
                }],
                nextId: state.nextId + 1
            })
        }
        default: {
            return state;
        }
    }
};