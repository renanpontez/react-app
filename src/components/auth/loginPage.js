"use strict";

var React = require('react');
var Router = require('react-router');
var LoginForm = require('./loginForm');

var LoginPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
        return {
            user: {
                id: '',
                email: '',
                password: ''
            }
        };
    },

    setUserState: function(event) {
        console.log(event.target.name);
        var field = event.target.name;
        var value = event.target.value;

        this.state.user[field] = value;
        return this.setState({user: this.state.user});
    },

    saveUser: function(event) {
        console.log(this.state.user);
        this.transitionTo('profile');
    },

    render: function() {
        return (
            <div>
               <LoginForm 
                    user={this.state.user}
                    onChange={this.setUserState}
                    onSave={this.saveUser} />
            </div>
        );
    }
});

module.exports = LoginPage;