import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const colors = {
    text: 'white',
    background: 'rgb(29, 161, 242)',
    backgroundHover: 'rgb(26, 145, 218)'
};

const useStyles = makeStyles({
    root: {
        borderRadius: "100px",
        height: '47px',
        color: colors.text,
        backgroundColor: colors.background,
        "&:hover": {
            backgroundColor: colors.backgroundHover,
        },
        "&:disabled": {
            color: colors.text,
            backgroundColor: colors.background,
            opacity: '0.5'
        },
    },
})

function AuthSubmitButton(props) {
    const classes = useStyles();

    return (
    <Button 
        type="submit"
        classes={classes}
        size="large" 
        disableElevation
        variant="contained" 
        {...props}
    />
    )
}

export default AuthSubmitButton;