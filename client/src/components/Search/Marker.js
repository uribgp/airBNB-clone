import React from 'react';
import './listings.css';

const Listing = (props) => {
    return (
        <div class="marker">{props.price}</div>
    )
}

export default Listing;