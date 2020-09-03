import listings from './seed'

const SET_LISTINGS = 'fake/api/call';
const SINGLE_LISTING = 'fake/api/call';

// function to get data from backend, at end of function dispatch setlistings, passing in the listings


export function setListings() { // will need to pass in listing as argument
    // fetch will be the thunk similar to login in auth.js  dispatch similar to line 52
    // will not dispatch the fetch call, just make it.
    //dispatch setListings.
    return {
        type: SET_LISTINGS,
        listings: listings
    }
}

export function singleListing(listing) {
    return {
        type: SINGLE_LISTING,
        listing: listing
    }
}

export const searchCity = (query) => {
    return true;
//     return async dispatch => {
//         const res = await fetch('', {
//             method: "get",
//             headers: {
//                 "Content-Type": "application/json",
//                 "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
//                 "x-api-key": "APIKEY"
//             },
//         });
//         res.data = await res.json();
//         if (res.ok) {
//           dispatch(setListings())
//         }
//         return res;
//     };
};

export default function listingsReducer(state=[], action) {
    switch (action.type) {
        case SET_LISTINGS:
            return action.listings;
        default:
            return state;
    }
}