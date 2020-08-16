import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReduxStore from './components/ReduxStore';
import AppView from './views/AppView';
import HomeView from './views/HomeView';
import SortFilterView from './views/SortFilterView';


function App() {
  return (
    <ReduxStore>
      <Router>
        <Switch>
          <Route path="/app" component={AppView} />
          <Route path="/products/filter" component={SortFilterView} />
          <Route path="/products" component={HomeView} exact />
          <Route path="/" component={HomeView} exact />
        </Switch>
      </Router>
    </ReduxStore>
  );
}

export default App;
