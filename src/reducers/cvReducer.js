import { FETCH_JSON } from '../actions/types';

const initialState = {
  loading: false
};

export function CvReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_JSON:
      // return default json
      return {
        ...state,
        resume: action.payload
      };
    default:
      return state;
  }
}
