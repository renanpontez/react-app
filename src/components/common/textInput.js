"use strict";
var React = require('react');
var TextInput = React.createClass({

    render: function() {
        return (
            <div className={wrapperClass}>
                <div className="field">
                    <input 
                        className="form-control" 
                        type="text" 
                        id={this.props.id}
                        name={this.props.name}
                        placeholder={this.props.placeholder} 
                        onChange={this.props.onChange} 
                        value={this.props.user.email} />   

                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
});

module.exports = TextInput; 