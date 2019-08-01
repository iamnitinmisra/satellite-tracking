// import axios from 'axios'

// const initialState= {
//     user: null
// }

// const REQUEST_USER_DATA = "REQUEST_USER_DATA";

// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case REQUEST_USER_DATA:
//             // const { }
//             return { user: action.payload };
//         default:
//             return state;
//     }
// }

// export function requestUserData() {
//     let user = axios.get('/api/session').then(res => res.data);
//     return {
//         payload: user,
//         type: REQUEST_USER_DATA
//     }
// }