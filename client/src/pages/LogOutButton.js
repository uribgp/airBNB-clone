import React from 'react';
import { logout } from '../store/auth'
import { useDispatch} from 'react-redux';





function LogoutButton(props) {
  const dispatch = useDispatch();
  
  
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