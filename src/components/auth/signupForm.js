"use strict";
var React = require('react');
var FormInput = require('../common/formInput');

var SignupForm = React.createClass({
    propTypes: {
        user: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>

                        <FormInput 
                            inputType="email" 
                            name="email"
                            placeholder="Email Address"
                            onChange={this.props.onChange} 
                            value={this.props.user.email} 
                            error={this.props.errors.email}/>

                        <FormInput 
                            inputType="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.props.onChange} 
                            value={this.props.user.password} 
                            error={this.props.errors.password}/>
                            
                        
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.props.onSave}>Sign in</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = SignupForm;