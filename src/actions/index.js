//list of all possible actions in the app
import axios from 'axios';

export const FETCH_JSON = 'FETCH_JSON';

export function fetchJson(location) {
  return function (dispatch) {
    const request = axios.get(location);
    console.log(request);
    request.then(({ data }) => {
      //count characters in paragraph
      let characters = 0;
      data.intro.content.map(paragraph => { characters = characters + paragraph.length });
      //check if input is ok
      if (
        //min one entry everywhere
        data.experience.length > 0 && data.education.length > 0 && data.skills.length > 0 && data.expertise.length > 0 && data.intro.title.length > 0 && data.intro.content.length > 0 && data.personality.length > 0 && data.passions.length > 0 &&
        // max timeline
        data.experience.length + data.education.length < 7 &&
        characters < 801 && characters > 449 &&
        // max skills + Expertise
        data.skills.length/2 + data.expertise.length < 11 &&
        // max why paragraph
        data.intro.content.length < 5 &&
        // max personality and Passions
        data.personality.length < 10 && data.passions.length < 11
      ) {
        console.log('file ok');
        dispatch({ type: FETCH_JSON, payload: request })
      } else {
        console.log('Nono, File no good.');
      };

    });
  };
}
