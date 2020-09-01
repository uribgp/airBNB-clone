import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    };
};

export const login = (username, password) => {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({username, password})
        });
        res.data = await res.json(); // returning currentUser from User model
        if (res.ok) {
            dispatch(setUser(res.data.user));
        } // else statement for errors goes here
        return res;
    };
};


window.login = login;
// testing login in window

export default function authReducer(state={}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
}