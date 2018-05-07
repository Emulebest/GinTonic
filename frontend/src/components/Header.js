import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {withRouter} from "react-router";

const mapStateToProps = (state) => ({
    token: state.auth.login.token,
    error: state.auth.login.error
});


class Header extends Component {

    render() {
        console.log("TOKEN" , this.props.token);
        let token = this.props.token || localStorage.getItem('token');
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
                                <li><Link to='/logout'>Logout</Link></li>
                            </React.Fragment>
                        )
                    }
                </ul>
            </nav>
        )
    }
}


export default withRouter(connect(mapStateToProps)(Header));