import React, { Component } from 'react';
import ListingsContainer from './ListingsContainer';
import MapDiv from './Map' 
import './listings.css';

class ListingsPage extends Component {

    
    render() {
        return (
            <div className="full-width">
                <ListingsContainer />
                <MapDiv />
            </div>
        )
    }
}

export default ListingsPage;