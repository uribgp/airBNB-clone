import Cookies from 'js-cookie';

export const SET_USER = 'auth/SET_USER';

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
        const errorsList = document.getElementById("errors");
        errorsList.innerHTML = "";
        const { message } = res.data;
        if (message) {
          errorsList.style.display = "flex";
          const errorLi = document.createElement("li");
          errorLi.innerHTML = message;
          errorsList.appendChild(errorLi)
        }
        if (res.ok) {
          dispatch(setUser(res.data.user))
        }
        return res;
    };
};

export const loginDemo = () => {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({username: 'Demo-lition', password: 'password'})
        });
        res.data = await res.json(); // returning currentUser from User model
        if (res.ok) {
            dispatch(setUser(res.data.user));
        } // else statement for errors goes here
        return res;
    };
};

export const logout = async () => {
    const res = await fetch('/api/session', {
        method: 'delete',
        headers: {"XSRF-TOKEN": Cookies.get("XSRF-TOKEN")},
    })
    res.data = await res.json()
    if (res.ok) {
        return true;
    }
    return res;
}

export const register = (email, password) => {
    return async dispatch => {
        const res = await fetch("/api/session", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({email, password})
        });
        res.data = await res.json(); // returning currentUser from User model
        console.log(res.data)
        if (res.ok) {
            return true;
        } // else statement for errors goes here
        return;
    };
};


// window.login = login;
// testing login in window

export default function authReducer(state={}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
}