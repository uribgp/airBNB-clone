import Cookies from 'js-cookie';


export const SET_USER = 'auth/SET_USER';

export const LOGOUT_USER = 'auth/LOGOUT_USER';

export const REGISTER_USER = 'auth/REGISTER_USER';

export const registerUser = (user) => {
    return {
        type: REGISTER_USER,
        user
    }
}


export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
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

export const logout = () => {
    return async dispatch => {
    const res = await fetch('/api/session', {
        method: 'delete',
        headers: {"XSRF-TOKEN": Cookies.get("XSRF-TOKEN")},
    })
    res.data = await res.json()
    if (res.ok) {
        dispatch(logoutUser());
        return res;
    }
    return res;
}
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
            dispatch(registerUser(res.data.user))
            return res;
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
        case LOGOUT_USER:
            return {};
        case REGISTER_USER:
            return action.user;
        default:
            return state;
    }
}