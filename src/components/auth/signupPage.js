"use strict";

var React = require('react');
var Router = require('react-router');
var SignupForm = require('./signupForm');
var toastr = require('toastr');

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
            },
            errors: {}
        };
    },

    componentWillMount: function() {
        var userId = this.props.params.id;

        if(userId === 1) {
            this.setState({
                user: {
                    id: 1,
                    email: 'renanpontez@gmail.com',
                    password: '123123'
                }
            });
        }
    },

    setUserState: function(event) {
        var field = event.target.name;
        var value = event.target.value;

        this.state.user[field] = value;
        return this.setState({user: this.state.user});
    },

    signupFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; //clear previous errors

        if (this.state.user.email.length < 3) {
            this.state.errors.email = 'E-mail less than 3 carc';
            formIsValid = false;
        }

        if (this.state.user.password.length < 6) {
            this.state.errors.password = 'Password less than 6 carc';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
    },

    saveUser: function(event) {

        if(!this.signupFormIsValid()) {
            return;
        }

        toastr.success('User created successfully!');
        
        this.transitionTo('profile');
    },

    render: function() {
        return (
            <div>
               <SignupForm 
                    user={this.state.user}
                    onSave={this.saveUser}
                    onChange={this.setUserState}
                    errors={this.state.errors} />
            </div>
        );
    }
});

module.exports = LoginPage;