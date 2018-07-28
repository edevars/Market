const ADD_TOKEN = 'ADD_TOKEN'

export const addToken = (token) => ({ type: ADD_TOKEN, payload: token });

const intialState = {
    token: localStorage.getItem('token'),
}

export default (state = intialState, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TOKEN:
            localStorage.setItem('token', action.payload);
            return {...state, token: action.payload};
        default:
            return state
    }
}
