// @flow

import React, {Component} from 'react';
import type {Node} from 'react';

import {Redirect} from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from "react-redux";

import {logout} from "../../actions/auth/login";
import type {Dispatch, InitialState} from "../../types/general";

type LogoutProps = {
    dispatch: Dispatch
}


class Logout extends Component<LogoutProps> {

    componentWillMount = () : void => {
        this.props.dispatch(logout());
        localStorage.clear();
    };

    render = (): Node => {
        return <Redirect to="/"/>;
    }

}

export default withRouter(connect((state : InitialState) => {})(Logout));
