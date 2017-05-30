import axios from 'axios';
import { browserHistory } from 'react-router';
// import {
//   AUTH_USER,
//   UNAUTH_USER,
//   AUTH_ERROR,
//   FETCH_MESSAGE
// } from './types';

import { AUTH_USER, AUTH_ERROR } from './types'
const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })

    .then(response => {
      console.log(' inside the axios post ');
      console.log(' going inside the /signin  route ');

      dispatch({ type: AUTH_USER });
      // save the JWT token.

      localStorage.setItem('token', response.data.token);

      // browserHistory.push('/feature');

    })
    //   // If request is good...
    //   // - Update state to indicate user is authenticated


    .catch(() => {
        //   // - Show an error to the user
        console.log('28- Hitting the catch fun');
        dispatch(authError('Bad login Info'));
    });

  }
}


export function authError(error) {
    return {
      type: AUTH_ERROR,
      payload: error
    };
}


// export function signupUser({ email, password }) {
//   return function(dispatch) {
//     axios.post(`${ROOT_URL}/signup`, { email, password })
//       .then(response => {
//         dispatch({ type: AUTH_USER });
//         localStorage.setItem('token', response.data.token);
//         browserHistory.push('/feature');
//       })
//       .catch(response => dispatch(authError(response.data.error)));
//   }
// }
//


// export function authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   };
// }

// export function signoutUser() {
//   localStorage.removeItem('token');
//
//   return { type: UNAUTH_USER };
// }

// export function fetchMessage() {
//   return function(dispatch) {
//     axios.get(ROOT_URL, {
//       headers: { authorization: localStorage.getItem('token') }
//     })
//       .then(response => {
//         dispatch({
//           type: FETCH_MESSAGE,
//           payload: response.data.message
//         });
//       });
//   }
// }
