import React, { useState, useEffect } from 'react';
import ListingsContainer from './ListingsContainer';
import MapDiv from './Map' 
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux'; 
import Cookies from 'js-cookie';

function ListingsPage () {

        const loadListings = async () => {
        const res = await fetch('/api/listings', {
            headers: {"XSRF-TOKEN": Cookies.get("XSRF-TOKEN")},
        });
        const data = await res.json();
        console.log(data);
        return data;
      };

      loadListings()

    // useEffect(() => {
    //   const loadListings = async () => {
    //     const res = await fetch('/api/listings', {
    //         headers: {"XSRF-TOKEN": Cookies.get("XSRF-TOKEN")},
    //     });
    //     const data = await res.json();
    //     return data;
    //   };
    //     if (res.ok) {
    //       res.data = await res.json(); // current user info
    //       dispatch(setListings(res.data.listings))
    //     }
    //   }, [dispatch]);
  

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