import {connect} from "react-redux";
import {withRouter} from 'react-router'

import Login from "../components/auth/Login";

const mapStateToProps = (state) => ({
    token: state.auth.login.token,
    error: state.auth.login.error,
    message : state.auth.login.message
});


export default withRouter(connect(mapStateToProps)(Login));