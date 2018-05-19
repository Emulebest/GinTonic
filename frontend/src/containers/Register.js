// @flow

import {connect} from "react-redux";
import {withRouter} from 'react-router'

import Register from "../components/auth/Register";

const mapStateToProps = (state) => ({
    status: state.auth.register.status,
    message: state.auth.register.message
});

export default withRouter(connect(mapStateToProps)(Register));