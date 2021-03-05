import { getUser } from "./getUser";

const initialState = {
  user: null,
};

const REQUEST_USER_DATA = "REQUEST_USER_DATA";
const GET_USER = "GET_USER";

export function persistentUser() {
  const user = getUser();
  return {
    payload: user,
    type: GET_USER,
  };
}

export function requestUserData(user) {
  return {
    payload: user,
    type: REQUEST_USER_DATA,
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_USER_DATA:
      return { user: payload };
    case GET_USER:
      return { user: payload };
    default:
      return state;
  }
}
