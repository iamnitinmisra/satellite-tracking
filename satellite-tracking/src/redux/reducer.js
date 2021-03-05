const initialState = {
  user: {},
};

const REQUEST_USER_DATA = "REQUEST_USER_DATA";

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
    default:
      return state;
  }
}
