"use strict";

var React = require('react');
var LoginForm = require('./loginForm');

var LoginPage = React.createClass({
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

    render: function() {
        return (
            <div>
               <LoginForm 
                    user={this.state.user}
                    onChange={this.setUserState} />
            </div>
        );
    }
});

module.exports = LoginPage;