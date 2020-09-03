import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      action: {
        disabled: 'white'
      }
    }
  })

const colors = {
    text: 'white',
    background: 'rgb(255, 56, 92)',
    backgroundHover: 'rgb(26, 145, 218)'
};

const useStyles = makeStyles({
    root: {
      background: 'radial-gradient(circle at center center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%) !important',
    //   border: 20,
    //   borderRadius: 3,
    //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: colors.text,
      height: 48,
      padding: '10 30px',
    },
  });

function AuthSubmitButton(props) {
    const classes = useStyles();

    return (
    <Button 
        theme={theme}
        type="submit"
        className={classes.root}
        size="large" 
        disableElevation
        variant="contained" 
        {...props}
    />
    )
}

export default AuthSubmitButton;