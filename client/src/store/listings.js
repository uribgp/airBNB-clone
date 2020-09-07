const SET_LISTINGS = 'fake/api/call';
const SINGLE_LISTING = 'fake/api/call';


export function setListings(listings) { 
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

// function to get data from backend, at end of function dispatch setlistings, passing in the listings
export const searchCity = (city, state) => {
        return async dispatch => {
            const apiUrl =  `/api/listings`
            const completeUrl = `${apiUrl}?state=${state}&city=${city}`
            const res = await fetch(completeUrl, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
        });
        res.data = await res.json();
        // res.data passed into dispatch
        if (res.ok) {
            console.log(res)
            const propertiesRawData = res.data.data.content.properties
            const properties = propertiesRawData.map(x => {
                return {
                    id: x.id,
                    stars: 5,
                    reviews: Math.round(x.days_on_market / 10),
                    type: x.type,
                    name: x.address,
                    city: x.city,
                    price: Math.round(x.list_price / 3333),
                    guests: 5,
                    bedroom: x.beds,
                    bed: x.beds,
                    bath: x.baths,
                    lat: x.latitude,
                    long: x.longitude,
                    image: x.image_url
                }
            })
            // {id: 1, star: 5, reviews: 181, type: "Entire House", 
            // name: "Cool, fun adobe casita", city: "Santa Fe", price: 73, 
            // guests: 6, bedroom: 2, bed: 2, bath: 3, lat: 35.136720, long: -106.524230
          dispatch(setListings(properties))
        }
        return res;
    };
};

export default function listingsReducer(state=[], action) {
    switch (action.type) {
        case SET_LISTINGS:
            return action.listings;
        default:
            return state;
    }
}