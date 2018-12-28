"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="profile" handler={require('./components/profile/profilePage')} />
        <Route name="profileUser" path="profile/:userId" handler={require('./components/profile/profileUserPage')} />
        <Route name="login" path="auth/login" handler={require('./components/auth/loginPage')} />
        <NotFoundRoute handler={require('./components/notFoundPage')}/>
    </Route>
);

module.exports = routes;