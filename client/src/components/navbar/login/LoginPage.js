import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginDemo } from '../../../store/auth';
import { Container} from '@material-ui/core';
import AuthSubmitButton from '../../auth/AuthSubmitButton';
import './LoginPage.css';
import { makeStyles } from '@material-ui/core/styles';
import AuthTextField from '../../auth/AuthTextFields';
import { Modal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SignUpPage from '../../../pages/SignUpPage';
import LogOutButton from './LogOutButton';
import { Redirect } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        await dispatch(login(username, password))
        return <Redirect to="/" />
    }

    const handleSubmitDemo = (e) => {
        e.preventDefault();
        dispatch(loginDemo())
    }

    const loggedIn = useSelector(state => !!state.auth.id)

    if (loggedIn) return <LogOutButton/>;

    return (
        <>
        <div>
            <AccountCircleIcon type="button" onClick={handleOpen}>
                Log in
            </AccountCircleIcon>
        <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
        
        >
        <Fade in={open}>
        <div className={classes.paper}>
        <div className="spacer"></div>
        <Container 
        classes={{root: classes.container}}
        fixed 
        maxWidth="sm"
        className="formContainer"
        >
        <div className="header">
            <button className="modalButton" onClick={handleClose}>X</button>
            <span>Log in</span>
        </div>
              <form onSubmit={handleSubmit} className="bodyForm">
              <AuthTextField
                    variant="outlined"
                    label="Email" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                    />
                    <AuthTextField
                    variant="outlined"
                    label="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    />
                    <div className="spacer-3"></div>
                    <AuthSubmitButton>
                    Log in
                </AuthSubmitButton>
                <div className="errors-container">
                <ul className="errors" id="errors"></ul>
              </div>
                </form>
                <AuthSubmitButton onClick={handleSubmitDemo}>
                Demo User
            </AuthSubmitButton>
                    <SignUpPage /> 
                    </Container>
                    <div className="spacer"></div>       
                </div>
          </Fade>
          </Modal>
      </div>
      </>
    );
}
