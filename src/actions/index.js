import { FETCH_NOTFOUND, FETCH_SUCCESS } from './types';
import config from '../config/firebase';

export function fetchSuccess(bool, data) {
  return {
      type: FETCH_SUCCESS,
      loading: bool,
      payload: data
  };
}

export function fetchNotFound(bool) {
  return {
      type: FETCH_NOTFOUND,
      notFound: bool,
  };
}

export function fetchResume(version) {
  return dispatch => {
    const url = config.databaseURL + version + "/.json?auth=EBRWKRaOxTSi7t9dAdeRL4sbv74SWh4VSUJErfgI";
    console.log(url)
    return fetch(url)
    .then(res => res.json())
    .then(data => {
      if(!data) {dispatch(fetchNotFound(true))}
      dispatch(fetchSuccess(false, data));
      }
    )
    .catch(error => console.log('BAD', error))
  }
}

// //count characters in paragraph
// let characters = 0;
// data.intro.content.map(paragraph => { characters = characters + paragraph.length });
// //check if input is ok
// if (
//   //min one entry everywhere
//   data.experience.length > 0 && data.education.length > 0 && data.skills.length > 0 && data.expertise.length > 0 && data.intro.title.length > 0 && data.intro.content.length > 0 && data.personality.length > 0 && data.passions.length > 0 &&
//   // max timeline
//   data.experience.length + data.education.length < 7 &&
//   characters < 801 && characters > 449 &&
//   // max skills + Expertise
//   data.skills.length/2 + data.expertise.length < 11 &&
//   // max why paragraph
//   data.intro.content.length < 5 &&
//   // max personality and Passions
//   data.personality.length < 10 && data.passions.length < 11
// ) {
//   console.log('file ok');
//
// } else {
//   console.log('Nono, File no good.');
// };
