import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

// for testing purposes.  Auth.js has function added to window on line 30
if (process.env.NODE_ENV !== 'production'){
  window.store = store
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      // enter your back end route to get the current user
      const res = await fetch("/api/session");
      if (res.ok) {
        res.data = await res.json(); // current user info
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  if (loading) return null;

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <Route path="/">
            <h1>Airbnb clone thing</h1>
          </Route>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;