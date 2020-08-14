import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppView from './views/AppView';
import HomeView from './views/HomeView';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/app" component={AppView} />
        <Route path="/" component={HomeView} />
      </Switch>
    </Router>
  );
}

export default App;
