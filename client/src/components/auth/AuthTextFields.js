import React from 'react';
import { TextField } from '@material-ui/core';
// import { makeStyles, withTheme } from '@material-ui/core/styles';

// const colors = {
//     text: 'white',
//     background: 'rgb(29, 161, 242)',
//     labelFocus: "rgb(29,161,242)",
//     label: "rgb(136,153,166)"
// };

// Soon-Mi's shading for text fields
// const useStyles = makeStyles({
    // root: {
    //     marginBottom: '20px',
    //     '& label': {
    //         color: colors.text
    //     },
    //     '& input': {
    //         color: colors.text
    //     },
    //     '&:focus label.Mui-focused': {
    //         color: colors.text
    //     },
    // },
// });

function AuthTextField(props) {
    // const classes = useStyles();

    return (
    <TextField 
        // classes={classes}
        variant="standard" 
        {...props}
    />
    )
}

export default AuthTextField;