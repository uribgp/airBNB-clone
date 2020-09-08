import React from 'react';
import Marker from './Marker';
import MapPopup from './MapPopup';

export default function MapListing({listing, toggleItem, onClick, listing: {id}, onCloseClick, }) {
  return (
        <div className="map-listing">
            <Marker onClick={() => onClick(id)} price={listing.price} />
            {toggleItem === id && <MapPopup onCloseClick={() => onCloseClick()}  listing={listing} />}
        </div>
    );
}