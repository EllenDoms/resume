import { FETCH_JSON, FETCH_SUCCESS } from '../actions/types';

const initialState = {
  resume: '',
  loading: true
};

export function CvReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_JSON:
      // return default json
      return {
        ...state,
        resume: action.payload,
        loading: false
      };
      case FETCH_SUCCESS:
        // return default json
        return {
          ...state,
          resume: action.payload,
          loading: false
        };
    default:
      return state;
  }
}
