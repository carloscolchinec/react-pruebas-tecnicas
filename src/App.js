// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Login from './components/auth/Login';
import Routes from './Routes';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <div>
        <div>
          <Switch>
            <Route path="/login">
              {token ? (
                <Redirect to="/posts" />
              ) : (
                <Login setToken={setToken} /> 
              )}
            </Route>
            <Route path="/" component={Routes} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
