import { combineReducers } from 'redux';
import CvReducer from './cvReducer';

const rootReducer = combineReducers({
  json: CvReducer
})

export default rootReducer;
