import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppView from './views/AppView';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppView} />
      </Switch>
    </Router>
  );
}

export default App;
