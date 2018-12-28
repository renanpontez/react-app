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
                        <Link to="profileUser" params={{userId: 1}}>
                            Renan
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = ProfilePage;
