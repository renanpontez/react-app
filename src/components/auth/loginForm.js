"use strict";
var React = require('react');
var LoginForm = React.createClass({

    render: function() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        
                        <input 
                            type="email" 
                            id="inputEmail" 
                            name="email"
                            className="form-control" 
                            placeholder="Email address" 
                            onChange={this.props.onChange} 
                            value={this.props.user.email} />
                        
                        <input 
                            type="password" 
                            id="inputPassword" 
                            name="password"
                            className="form-control" 
                            placeholder="Password" 
                            onChange={this.props.onChange} 
                            value={this.props.user.password} />
                        
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = LoginForm;