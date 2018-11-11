import initialState from './initialState';

export default function album(state = initialState.photo, action){
    switch(action.type){
        case 'UPLOAD_PHOTO': {
            console.log(...state.photos)
            return Object.assign({}, state, {
                nextId: state.nextId + 1,
                photos: [...state.photos, {
                    id: state.nextId,
                    photo: action.photo
                }]
            });
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