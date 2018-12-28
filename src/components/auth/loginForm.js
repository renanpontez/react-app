"use strict";
var React = require('react');
var FormInput = require('../common/formInput');

var LoginForm = React.createClass({

    render: function() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                        <FormInput 
                            inputType="email" 
                            name="email"
                            placeholder="Email Address"
                            onChange={this.props.onChange} 
                            value={this.props.user.email} />

                        <FormInput 
                            inputType="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.props.onChange} 
                            value={this.props.user.password} />
                        
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.props.onSave}>Sign in</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = LoginForm;