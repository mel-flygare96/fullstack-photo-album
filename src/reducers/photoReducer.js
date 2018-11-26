import initialState from './initialState';

export default function album(state = initialState.photo, action){
    switch(action.type){
        case 'UPLOAD_PHOTO': {
            if(action.photo[0] !== -1){
                if(!Object.keys(state.photos).includes(action.photo[0])){
                    return Object.assign({}, state, {
                        nextId: Math.max(state.nextId + 1, action.photo[0]) + 1,
                        photos: Object.assign({}, state.photos, {
                            [action.photo[0]]: {
                                id: action.photo[0],
                                photo: action.photo[1]
                            }
                        })
                    });
                } else {
                    return state;
                }
            } else {
                return Object.assign({}, state, {
                    nextId: state.nextId + 1,
                    photos: Object.assign({}, state.photos, {
                        [state.nextId]: {
                            id: state.nextId,
                            photo: action.photo[1]
                        }
                    })
                });
            }
        }
        case 'DELETE_PHOTO': {
            return Object.assign({}, state, {
                nextId: state.nextId,
                photos: state.photos.filter(photo =>
                    photo.id != action.id    
                )
            })
        }
        default: {
            return state;
        }
    }
};