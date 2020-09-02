import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../store/auth'




function LogoutButton(props) {
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    logout()
    return <Redirect to="/" />
}


  return (
    <div id="logout-button-holder">
      <button onClick={handleSubmit}>Logout</button>
    </div>
  );

}

export default LogoutButton;