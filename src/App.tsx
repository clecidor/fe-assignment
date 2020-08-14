import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppView from './views/AppView';
import HomeView from './views/HomeView';
import SortFilterView from './views/SortFilterView';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/app" component={AppView} />
        <Route path="/products/filter" component={SortFilterView} />
        <Route path="/products" component={HomeView} exact />
        <Route path="/" component={HomeView} exact />
      </Switch>
    </Router>
  );
}

export default App;
