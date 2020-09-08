import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './listings.css';
import Marker from './Marker';
import { connect } from 'react-redux';
import MapListing from './MapListing';
import './map-listing.css'

class Map extends Component {
    state = {
        toggledItem: '',
    }

    render() {
        let center = {lat: 0, lng: 0};
        let key = process.env.REACT_APP_GOOGLE_MAPS_API
        const notLoaded = this.props.listings && this.props.listings.length > 0;

        if (notLoaded){
            center = {lat: this.props.listings[0].lat, lng: this.props.listings[0].long}
        }


        const mapStyle = {
            height: '100vh'
        }


    return (
         <>
             {notLoaded ?
            <div style={mapStyle} className="map">
                <GoogleMapReact
                                defaultCenter={center}
                                defaultZoom={11}
                                bootstrapURLKeys={{ key: key}}
                                yesIWantToUseGoogleMapApiInternals>
                                {this.props.listings.map((listing) => <MapListing onCloseClick={() => this.setState({toggledItem: ""})} onClick={(id) => this.setState({toggledItem: id})} toggleItem={this.state.toggledItem} lat={listing.lat} lng={listing.long} listing={listing} />)}
                </GoogleMapReact>
            </div> : 'Loading........' }
         </>
    )
    }
}
    

function mapReduxStateToProps(reduxState){
    return {
        listings: reduxState.listings
    }
}
export default connect(mapReduxStateToProps)(Map);