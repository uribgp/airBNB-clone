import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { searchCity } from '../../store/listings';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const [city, setCity] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [guests, setGuests] = useState('')
  // const [state,setState] = useState('')

  const history = useHistory()
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    history.push(`/listings/${city}`)
    // dispatch(searchCity(city))
  }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Where are you going?"
        />
        <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            placeholder="Add Dates"
        />
        <input
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            placeholder="Add Dates"
        />
        <input
            type="text"
            value={guests}
            onChange={e => setGuests(e.target.value)}
            placeholder="Add Guests"
        />
        <button type="submit" >Submit</button>
      </form>
    );
};