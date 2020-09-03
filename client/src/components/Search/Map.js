import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './listings.css';
import Marker from './Marker';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { setListings } from '../../store/listings';
// import { mapkey } from './config/index'

class Map extends Component {
    
    componentWillMount() {
        this.props.setListings();
    }

    render() {
        let center = {lat: this.props.listings[0].lat, lng: this.props.listings[0].long}
        // let key = process.env.REACT_APP_GOOGLE_MAPS_API
        let key = 'AIzaSyBYOx7FBYB_fZ8ZCNXhN9frBQsM1WW_4Z0'

    return (
        <div className="map">
            <GoogleMapReact center={center} 
                            defaultZoom={10} 
                            bootstrapURLKeys={{ key: key}}
                            yesIWantToUseGoogleMapApiInternals>
                            {this.props.listings.map((listing) => <Marker lat={listing.lat} lng={listing.long} price={listing.price} />)}
            </GoogleMapReact>
        </div>
    )
    }
}
    
function mapReduxStateToProps(reduxState){
    return {
        listings: reduxState.listings
    }
}
    
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {setListings: setListings},
        dispatch
    )

}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Map);