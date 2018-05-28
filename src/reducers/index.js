import { combineReducers } from 'redux';
import { CvReducer } from './cvReducer';
import sessionReducer from "./session";
import userReducer from './user';

import { reducer as formReducer} from 'redux-form'; //assign to alias FormReducer

const rootReducer = combineReducers({
  data: CvReducer,
  sessionState: sessionReducer,
  userState: userReducer,
  form: formReducer
})

export default rootReducer;
