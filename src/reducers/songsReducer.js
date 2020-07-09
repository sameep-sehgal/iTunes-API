import { createReducer,Types as ReduxSauceTypes } from 'reduxsauce'
import Types from '../sagas/types';
 

const INITIAL_STATE = {}


const success = (state = INITIAL_STATE, action) => {
    return action.payload;
}
 

const failure = (state = INITIAL_STATE) => {
    return { error:'We are having trouble making your request.' }
}


const defaultHandler = (state = INITIAL_STATE) => {
    return state;
}
 

const HANDLERS = {
  [Types.FETCH_SONGS]: success,
  [Types.FETCH_FAILURE]: failure,
  [ReduxSauceTypes.DEFAULT]: defaultHandler,
}
 
export default createReducer(INITIAL_STATE, HANDLERS)