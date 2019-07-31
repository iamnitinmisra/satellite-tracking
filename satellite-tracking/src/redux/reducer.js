import axios from 'axios'

const initialState= {
    user: null
}

const REQUEST_USER = "REQUEST_USER";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { user: action.payload };
        default:
            return state;
    }
}

export function requestUserData() {
    let user = axios.get('/api/session').then(res => res.data);
    return {
        payload: user,
        type: REQUEST_USER
    }
}