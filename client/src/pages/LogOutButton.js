import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import { logout } from '../store/auth'


function LogoutButton(props) {

  return (
    <div id="logout-button-holder">
      <button onClick={logout}>Logout</button>
    </div>
  );

}

export default LogoutButton;