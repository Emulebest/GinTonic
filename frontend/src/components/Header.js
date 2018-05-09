import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import "../style/Header.css"

const mapStateToProps = (state) => ({
    token: state.auth.login.token
});


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let token = this.props.token || localStorage.getItem('token');
        return (
            <React.Fragment>
                <Navbar expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Concept</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Features</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Get started</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/register">Sign up</NavLink>
                            </NavItem>
                            {
                                (!token) ?
                                    (<NavItem>
                                        <NavLink href="/login">Sign in</NavLink>
                                    </NavItem>)
                                    :
                                    (<React.Fragment>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>
                                                Account
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    <NavLink href="#">My devices</NavLink>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <NavLink href="#">Settings</NavLink>
                                                </DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>
                                                    <NavLink href="/logout">Logout</NavLink>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </React.Fragment>)
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Header));