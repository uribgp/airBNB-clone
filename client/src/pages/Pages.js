import React from 'react';
import { Route } from 'react-router-dom';
import ListingsPage from '../components/Search/ListingsPage';
import HomePage from './HomePage'

export default function Pages () {
    return (
        <>
            <Route exact path="/" component={HomePage} />
            <Route path="/listings" component={ListingsPage} />
        </>
    )
}