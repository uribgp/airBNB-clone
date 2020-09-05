import React from 'react';
import './listings.css';

const Listing = (props) => {
    return (
        <div onClick={props.onClick} className="marker">{props.price}</div>
    )
}

export default Listing;