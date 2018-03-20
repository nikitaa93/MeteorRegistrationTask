import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { BrowserRouter, Route, Switch, browserHistory} from 'react-router-dom';

import Registration from '../ui/Registration.jsx';
import { Login } from '../ui/Login.jsx';
import App from '../ui/App.js';


export const renderRoutes = () => (
  
    <BrowserRouter history={ browserHistory }>
        <Switch>
            <Route exact path='/Registration' component={Registration}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/App' component={App}/>
        </Switch>
    </BrowserRouter>
  
);
