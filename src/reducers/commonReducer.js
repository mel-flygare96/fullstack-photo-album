import initialState from './initialState';

export default function common(state = initialState.common, action){
    console.log(action.type);
    switch(action.type){
        case 'TOGGLE_NAV_OPEN': {
            console.log(state.navOpen);
            return Object.assign({}, state, {
                navOpen: !state.navOpen
            });
        }
        default:
            return state;
    }
}