import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppContext from './AppContext';
import LoginPage from './LoginPage';

export default function App() {
  return (
    <AppContext>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route>
            404 not found <Link to="/login">login</Link>
          </Route>
        </Switch>
      </Router>
    </AppContext>
  );
}