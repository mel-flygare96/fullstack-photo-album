import { combineReducers } from 'redux';
import common from './reducers/commonReducer';

const reducer = combineReducers({
    common
});

export default reducer;