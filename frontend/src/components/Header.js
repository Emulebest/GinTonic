import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Login from "./auth/Login";

const mapStateToProps = (state) => ({
    token: state.auth.login.data.password,
    error: state.auth.login.error
});


class Header extends Component {

    render() {
        //let token = localStorage.getItem('token');
        let {token} = this.props;
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/register'>Sign up</Link></li>
                    {
                        (!token) ? (
                            <li><Link to='/login'>Sign in</Link></li>
                        ) : (
                            <React.Fragment>
                                <li><Link to='/login'>Profile</Link></li>
                                <li><Link to='/login'>Logout</Link></li>
                            </React.Fragment>
                        )
                    }
                </ul>
            </nav>
        )
    }
}


export default withRouter(connect(mapStateToProps)(Header));