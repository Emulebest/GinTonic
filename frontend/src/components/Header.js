import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

import * as Scroll from 'react-scroll';

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

let ScrollLink = Scroll.Link;

const mapStateToProps = (state) => ({
    token: state.auth.login.token
});


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            scrollLinks: [
                {to: "concept", name: "Concept"},
                {to: "features", name: "Features"},
                {to: "getting-started", name: "Get started"},
                {to: "contact-us", name: "Contact"},
            ]
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    checkLocation({name, to}) {
        let {pathname} = this.props.location;
        return (pathname === "/") ? (
            <NavItem>
                <NavLink tag={ScrollLink}
                         to={to}
                         smooth={true}
                         duration={1000}>
                    {name}
                </NavLink>
            </NavItem>
        ) : (
            <NavItem>
                <NavLink tag={Link} to='/'>{name}</NavLink>
            </NavItem>
        );
    }

    render() {
        let token = this.props.token || localStorage.getItem('token');

        return (
            <React.Fragment>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={Link} to='/'>Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            {
                                this.state.scrollLinks.map(linkObj => {
                                    return this.checkLocation(linkObj);
                                })
                            }


                            <NavItem>
                                <NavLink tag={Link} to='/register'>Sign up</NavLink>
                            </NavItem>
                            {
                                (!token) ?
                                    (<NavItem>
                                        <NavLink tag={Link} to='/login'>Sign in</NavLink>
                                    </NavItem>)
                                    :
                                    (<React.Fragment>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>
                                                Account
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    <NavLink tag={Link} to='/'>My devices</NavLink>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <NavLink tag={Link} to='/'>Settings</NavLink>
                                                </DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>
                                                    <NavLink tag={Link} to='/logout'>Logout</NavLink>
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