import {connect} from "react-redux";
import {withRouter} from 'react-router'

import Login from "../components/auth/Login";

const mapStateToProps = (state) => ({
    token: state.auth.login.token,
    error: state.auth.login.error
});


export default withRouter(connect(mapStateToProps)(Login));