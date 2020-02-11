import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/app.css';
import Template from './components/Template';
import Home from './components/Home';
import Movies from './components/Movies';
import Playlists from './components/Playlists';
import WatchLater from './components/WatchLater';
import Settings from './components/Settings';
import NotFound from './components/NotFound';

ReactDOM.render(<Router>
    <Template>
    <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/playlists">
            <Playlists />
          </Route>
          <Route path="/watch-later">
            <WatchLater />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Template>
    </Router>, document.getElementById('root'));