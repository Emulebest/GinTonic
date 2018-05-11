import {connect} from "react-redux";
import {withRouter} from 'react-router'

import Register from "../components/auth/Register";

const mapStateToProps = (state) => ({
    error: state.auth.register.error,
    message : state.auth.register.message
});

export default withRouter(connect(mapStateToProps)(Register));