"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ProfilePage = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Profile Page</h3>

                <ul>
                    <li>
                        <Link to="signupManager" params={{id: 1}}>
                            Renan
                        </Link>
                    </li>
                    <li>
                        <Link to="signupManager" params={{id: 2}}>
                            Renan 2
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = ProfilePage;
