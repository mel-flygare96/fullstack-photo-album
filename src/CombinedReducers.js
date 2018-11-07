import { combineReducers } from 'redux';
import common from './reducers/commonReducer';
import album from './reducers/albumReducer';
import photo from './reducers/photoReducer';

const reducer = combineReducers({
    common,
    album,
    photo
});

export default reducer;