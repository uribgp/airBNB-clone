import React from 'react';
import { Link } from 'react-router-dom';
export default function MapPopup({
  listing: { name, price, star, reviews, id, image },
}) {
  return (
        <div className="map-popup">
            <Link to={`/listing/${id}`}>
                <img src={image} />
                <div className="map-popup-text-content">
                    <div className="map-popup-name">{name}</div>
                </div>
            </Link>
        </div>
    );
}