import auth from './auth'; 
import { LOGOUT_SUCCESS } from '../actions/types'; 
import {combineReducers} from 'redux'
import {formReducer} from 'react-redux-from'

const appReducer =combineReducers({
  form: formReducer,
  auth 
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;