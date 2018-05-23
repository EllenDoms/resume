import { FETCH_JSON } from '../actions/types';

export function CvReducer (state = {}, action) {
  switch(action.type) {
    case FETCH_JSON:
      // return default json
      return action.payload.data ;
      //return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
