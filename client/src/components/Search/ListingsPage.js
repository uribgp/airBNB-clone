import React from 'react';
import ListingsContainer from './ListingsContainer';
import MapDiv from './Map' 
import { Container } from '@material-ui/core'; 

const ListingsPage = () => {
    return (
        <>
            <Container>
                <ListingsContainer />
                <MapDiv />
            </Container>
        </>
    )
}

export default ListingsPage;