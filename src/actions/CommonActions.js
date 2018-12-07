import * as actionTypes from './actionTypes';

// Action to open the app bar nav menu
export const toggleNavOpen = () => {
    return { type: actionTypes.TOGGLE_NAV_OPEN };
}