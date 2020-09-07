import React, { useState } from 'react';
import { searchCity } from '../../store/listings';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import DateRange from './DateRange'
import SearchIcon from '@material-ui/icons/Search';
import './searchbar.css'

export default function SearchBar() {
  const [city, setCity] = useState('')
  const [guests, setGuests] = useState('')
  const [state,setState] = useState('')
  const [showDateRange, setShowDateRange] = useState(false);

  const history = useHistory()
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(searchCity(city,state))
    history.push(`/listings/${city}`)
  }



//   <input
//   type="date"
//   value={startDate}
//   onChange={e => setStartDate(e.target.value)}
//   placeholder="Add Dates"
// />
// <input
//   type="date"
//   value={endDate}
//   onChange={e => setEndDate(e.target.value)}
//   placeholder="Add Dates"
// />


    return (
      <div className="cover">
      <div className="flex-form" onSubmit={handleSubmit}>
      <select value={state} onChange={e => setState(e.target.value)}>
        <option value="None">Choose a state</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Where are you going?"
        />
      <Button onClick={() => setShowDateRange(!showDateRange)} className='banner__searchButton' variant='outlined'>
        {showDateRange ? "Hide" : "Check in / Check out"}
     </Button>
     {showDateRange && <DateRange />}
        <input
            type="text"
            value={guests}
            onChange={e => setGuests(e.target.value)}
            placeholder="Add Guests"
        />
        <button onClick={handleSubmit} className='submit_button' >
          <SearchIcon />
           Search
        </button>
      </div>
      </div>
    );
};
