import { createReducer,Types as ReduxSauceTypes } from 'reduxsauce'
import Types from '../sagas/types';
 

const INITIAL_STATE = null


const success = (state = INITIAL_STATE, action) => {
    return action.payload;
}
 

const failure = (state = INITIAL_STATE) => {
    return '';
}


const defaultHandler = (state = INITIAL_STATE) => {
    return state;
}
 

const HANDLERS = {
  [Types.FETCH_REQUESTED]: success,
  [Types.FETCH_FAILURE]: failure,
  [ReduxSauceTypes.DEFAULT]: defaultHandler,
}
 
export default createReducer(INITIAL_STATE, HANDLERS)