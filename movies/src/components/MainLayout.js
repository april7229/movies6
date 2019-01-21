import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WatchlistState from '../reducers';

import Popular from '../pages/Popular';
import Watchlist from '../pages/Watchlist';
import Search from '../containers/Search';
import getRated from '../pages/getRated';
import nowplaying from '../pages/nowplaying';

const store = createStore(WatchlistState);

const Main = () => {
  return (
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={Popular} />
            <Route path="/watchlist" component={Watchlist} />
        <Route path="/search" component={Search} />
        <Route path="/getRated" component={getRated} />
        <Route path="/nowplaying" component={nowplaying} />
        </Switch>
    </Provider>
  )
}

export default Main;
