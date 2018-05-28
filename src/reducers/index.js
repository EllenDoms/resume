import { combineReducers } from 'redux';
import { CvReducer } from './cvReducer';
import { reducer as FormReducer} from 'redux-form'; //assign to alias FormReducer

const rootReducer = combineReducers({
  data: CvReducer,
  form: FormReducer
})

export default rootReducer;
