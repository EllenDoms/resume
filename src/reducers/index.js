import { combineReducers } from 'redux';
import { CvReducer } from './cvReducer';

const rootReducer = combineReducers({
  data: CvReducer,
})

export default rootReducer;
