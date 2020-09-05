

export default function singleListingReducer(state=null, action) {
    switch (action.type) {
        case SINGLE_LISTING:
            return action.listing;
        default:
            return state;
    }
}