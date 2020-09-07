import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ListingDetail(props) {
  const { id } = useParams();
  const [listing, setListing] = useState(null)

  useEffect(() => {
    async function getListing() {
      const res = await fetch(`/api/listings/${id}`);
      const listing = await res.json()
      setListing(listing)
    }

    getListing()
    return;
  }, [id])

  if (!listing) {
    return null;
  }

  return (
      <div>
        <h1>connected</h1>
      </div>
  )
}

export default ListingDetail;