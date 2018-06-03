import { FETCH_USER, FETCH_NOTFOUND, FETCH_SUCCESS, POST_RESUME } from './types';
import { config, authRef, provider } from "../config/firebase";

import axios from 'axios';

function fetchSuccess(bool, data) {
  return {
      type: FETCH_SUCCESS,
      loading: bool,
      payload: data
  };
}

function fetchNotFound(bool) {
  return {
      type: FETCH_NOTFOUND,
      notFound: bool,
  };
}

function checkData(data) {
  //count characters in paragraph
  let characters = 0;
  data.intro.content.map(paragraph => { return characters = characters + paragraph.length });

  /* (Anthony) "map" is niet geschikt voor wat je hier doet
   * map = array -> nieuwe array
   * reduce = array -> 1 value (object, getal, string)
   * Heb het nog niet getest, maar wat je wil is zoiets:
   * data.intro.content.reduce(   (acc, paragraph) => acc + paragraph.length      ,           0          )
   *                                  Functie die voor ieder element                   initiële waarde
   *                                  wordt uitgevoerd, de return value ervan           van de acc
   *                                  is steeds de nieuwe waarde voor "acc",
   *                                  de accumulator. In dit geval is de
   *                                  accumulator het totale aantal karakters,
   *                                  die bij elke nieuwe paragraaf wordt
   *                                  vermeerderd met het aantal karakters
   *                                  in die paragraaf
   */

  console.log(data.skills)
  //check if input is ok
  return true;
   if (
     //min one entry everywhere
     data.experience.length > 0 && data.education.length > 0 && data.skills.length > 0 && data.expertise.length > 0 && data.intro.title.length > 0 && data.intro.content.length > 0 && data.personality.length > 0 && data.passions.length > 0 &&
     // max timeline
     data.experience.length + data.education.length < 7 &&
     // amount of characters for intro text
     characters < 801 && characters > 449 &&
     // max skills + Expertise
     data.skills.length/2 + data.expertise.length < 11 &&
     // max why paragraph
     data.intro.content.length < 5 &&
     // max personality and Passions
     data.personality.length < 10 && data.passions.length < 11
   ){
     return true;
   } else {
     return false;
   }
}

export function fetchResume(version) {
  return dispatch => {
    const url = config.databaseURL + version + config.auth;
    console.log(url)
    return axios.get(url)
    .then(data => {
      if(!data.data) {
        dispatch(fetchNotFound(true))
      } else {
        const check = checkData(data.data);
        if(check) {
          console.log('file ok');
          dispatch(fetchSuccess(false, data.data));
        } else {
            // (Anthony) Oppassen met dit soort stuff :-) Gaat soms mee naar productie (ook bij Telenet) en komt niet professioneel over
            /* (Anthony) Daarnaast wil je hier waarschijnlijk wel iets visueel doen, bv zeggen dat het
             * CV wel bestaat maar nog niet compleet is  */
          console.log('Nono, File no good.');
        };
      }
    })
    .catch(error => console.log('BAD', error))
  }
}

export function postResume(values, callback) {
  // (Anthony) Hier ook een redux-action van maken, dat laat u toe om een action te firen bij het handlen van de error, if any
  // (Anthony) Met die action kunt ge dan uw state veranderen en een bericht tonen in uw UI
  const url = config.databaseURL + config.auth;
  const request = axios.post(url , values)
    .then((response) => {
      callback(response);
    })
      .catch(err => {
        // (Anthony) Fout afhandelen
      }); //promise if succesfully completed: do callback (go to other page)
  return {
    type: POST_RESUME,
    payload: request
  };
}

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {})
    .catch(error => {
      console.log(error);
    });
};

// export const signOut = () => dispatch => {
//   authRef
//     .signOut()
//     .then(() => {
//       this.context.router.history.push("/");
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
