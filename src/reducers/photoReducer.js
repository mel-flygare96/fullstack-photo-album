import initialState from './initialState';

export default function album(state = initialState.photo, action){
    switch(action.type){
        case 'UPLOAD_PHOTO': {
            console.log(...state.photos)
            return Object.assign({}, state, {
                photos: [...state.photos, {
                    id: state.photos[state.photos.length - 1].id + 1,
                    photo: action.photo
                }]
            });
        }
        default: {
            return state;
        }
    }
};