import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';
import { Container} from '@material-ui/core';
import AuthSubmitButton from '../components/auth/AuthSubmitButton';
import AirbnbLogo from '../components/auth/AirbnbLogo';
import './LoginPage.css';
import { makeStyles } from '@material-ui/core/styles';
import AuthTextField from '../components/auth/AuthTextFields';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const loggedIn = useSelector(state => !!state.auth.id)
    const dispatch = useDispatch()
    const classes = useStyles();

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password))
}

if (loggedIn) return <Redirect to="/" />;

    return (
        <Container 
            classes={{root: classes.container}}
            fixed 
            maxWidth="sm"
        >

            <AirbnbLogo/>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
            <AuthTextField
                variant="filled"
                label="Email or username" 
                value={username} 
                 onChange={e => setUsername(e.target.value)}
            />
            <AuthTextField
                variant="filled"
                label="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                type="password"
            />
                <AuthSubmitButton
                    disabled={!username || !password}
                >
                    Log in
                </AuthSubmitButton>
            </form>
        </Container>
    )
}
