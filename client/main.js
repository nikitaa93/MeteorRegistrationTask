//import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import { renderRoutes } from '../imports/startup/Routes_his.jsx';
Meteor.startup(() =>  { 
    render(renderRoutes(),document.getElementById('render-target')); 
});
  