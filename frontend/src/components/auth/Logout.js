import React, {Component} from 'react';

import {Redirect} from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from "react-redux";

import {logout} from "../../actions/auth/login";


class Logout extends Component {

    componentWillMount = () => {
        this.props.dispatch(logout());
        localStorage.clear();
    };

    render = () => {
        return <Redirect to="/"/>;
    }

}

export default withRouter(connect((state) => {})(Logout));
