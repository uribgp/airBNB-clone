import React from 'react';
import { Route } from 'react-router-dom';
import ListingsPage from '../components/Search/ListingsPage';
import HomePage from './HomePage'
import Navbar from '../components/navbar/Navbar'

export default function Pages () {
    return (
        <>
            <Navbar />
            <Route exact path="/" component={HomePage} />
            <Route path="/listings" component={ListingsPage} />
        </>
    )
}