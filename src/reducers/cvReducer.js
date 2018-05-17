import { FETCH_JSON } from '../actions';

export default function (state = {}, action) {
  switch(action.type) {
    case FETCH_JSON:
      // return default json
      return action.payload.data ;
    default:
      return state;
  }
}
