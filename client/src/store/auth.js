import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

const setUser = (user) => {
    return {
        type: SET_USER,
        user
    };
};

export const login = (username, password) => {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method:"put",
            headers: {
                "Content-type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({username, password})
        });
        res.data = await res.json(); // returning currentUser from User model
        if (res.ok) {
            dispatch(setUser(res.data));
        } // else statement for errors
        return res;
    };
};

