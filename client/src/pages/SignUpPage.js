import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container} from '@material-ui/core';
import AuthSubmitButton from '../components/auth/AuthSubmitButton';
import './Button.css';
import { makeStyles } from '@material-ui/core/styles';
import AuthTextField from '../components/auth/AuthTextFields';
import { Modal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { register } from '../store/auth';


export default function SignUpPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const useStyles = makeStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
        }
    })
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(register(email,password))
        handleClose()
      }

    return (
      <div>
      <div className="signup">
      <p>Don't have an account?</p> 
        <button className='signup-button' type="button" onClick={handleOpen}>
          <p>Sign up</p>
        </button>
        </div>
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
        <div className="spacer-2"></div>
        <Container 
        classes={{root: classes.container}}
        fixed 
        maxWidth="sm"
        >
        
        <div className="header-signup">
          <button className="modalButton" onClick={handleClose}>X</button>
            <span>Finish Signing Up</span>
        </div>
                  <form onSubmit={handleSubmit}>
                  <AuthTextField
                    variant="outlined"
                    label="First Name" 
                    value={firstName} 
                    onChange={e => setFirstName(e.target.value)}
                  />
                  <AuthTextField
                    variant="outlined"
                    label="Last name" 
                    value={lastName} 
                    onChange={e => setLastName(e.target.value)}
                  />
                  <p>Make sure it matches the name on your government ID.</p>
                  <AuthTextField
                    variant="outlined"
                    label="" 
                    value={birthday} 
                    onChange={e => setBirthday(e.target.value)}
                    type="date"
                  />
                  <p>To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.</p>
                  <AuthTextField
                    variant="outlined"
                    label="Email Address" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
                <p>We'll email you trip confirmations and receipts.</p>
                <AuthTextField
                    variant="outlined"
                    label="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
                <p>We’ll send you marketing promotions, special offers, inspiration, and policy updates via email.</p>
                <AuthSubmitButton>
                    Agree and continue
                </AuthSubmitButton>
                <div className="spacer-2"></div>
                  </form>
              </Container>
            </div>
          </Fade>
          </Modal>
      </div>
    );
}
