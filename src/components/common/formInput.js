"use strict";
var React = require('react');
var TextInput = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.string
    },

    render: function() {
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
           wrapperClass += " " + 'has-error'; 
        }

        return (
            <div className={wrapperClass}>
                <div className="field">
                    <input 
                        className="form-control" 
                        type={this.props.inputType} 
                        id={this.props.id}
                        name={this.props.name}
                        placeholder={this.props.placeholder} 
                        onChange={this.props.onChange} 
                        value={this.props.value} />   

                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
});

module.exports = TextInput; 