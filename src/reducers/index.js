import { combineReducers } from 'redux';
import songsReducer from './songsReducer';
import searchQueryReducer from './searchQueryReducer';


export default combineReducers({
    songs:songsReducer,
    searchQuery:searchQueryReducer
})