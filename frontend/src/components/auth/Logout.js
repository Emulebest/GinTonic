import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import LoginForm from "./forms/LoginForm";
import {logout} from "../../actions/auth/login";
import Login from "./Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";

const mapStateToProps = (state) => ({
    token: null,
    error: state.auth.login.error
});

class Logout extends Component {

    componentWillMount(){
        this.props.dispatch(logout());
        localStorage.clear();
    }

    render(){
        return <Redirect to="/" />;
    }

}

export default withRouter(connect(mapStateToProps)(Logout));
