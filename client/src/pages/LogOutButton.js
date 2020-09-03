import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { logout } from '../store/auth'
import { useDispatch, useSelector } from 'react-redux';





function LogoutButton(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  
  
  const handleClose = () => {
    setOpen(false);
};
function refreshPage() {
  window.location.reload(false);
}

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(logout())
    refreshPage()
}


  return (
    <div id="logout-button-holder">
      <button onClick={handleSubmit}>Logout</button>
    </div>
  );

}

export default LogoutButton;