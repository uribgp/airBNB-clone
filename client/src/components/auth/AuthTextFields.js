import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const colors = {
    text: 'white',
    background: 'rgb(29, 161, 242)',
    labelFocus: "rgb(29,161,242)",
    label: "rgb(136,153,166)"
};

const useStyles = makeStyles({
    root: {
        marginBottom: '20px',
        '& label': {
            color: colors.text
        },
        '& input': {
            color: colors.text
        },
        '&:focus label.Mui-focused': {
            color: colors.labelFocus
        },
    },
});

function AuthTextField(props) {
    const classes = useStyles();

    return (
    <TextField 
        classes={classes}
        variant="filled" 
        {...props}
    />
    )
}

export default AuthTextField;