import axios from 'axios';
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
} from '../action/types';
// import { setAlert } from '../action/alert';
import setAuthToken from '../util/setAuthToken';
//check token
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('http://13.126.141.50:96/access/loginapi');
    console.log(res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    'Content-Type': 'application/json',
  };
  const body = { email, password };
  const res = await axios({
    method: 'POST',
    url: 'http://13.126.141.50:96/access/loginapi',
    data: body,
    headers: config,
  })
    .then((response) => {
      console.log('Success ========>', response);
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    })
    .catch((error) => {
      console.log('Error ========>', error);
      dispatch({
        type: LOGIN_FAILED,
      });
    });
};
