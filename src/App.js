import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default class App extends React.Component {

    render() {

        //pass the global application data to all children as props
        var newChildren = React.cloneElement(this.props.children, { data: this.props.route.data });

        return (
            <div>
                <Navbar>
                    <Navbar.Header><Navbar.Brand><a href="#">Marketing Site</a></Navbar.Brand></Navbar.Header>
                    <Nav>
                        <IndexLinkContainer to="/react-isomorphic-static-site-generator-boilerplate/"><NavItem>About</NavItem></IndexLinkContainer>
                        <LinkContainer to="/react-isomorphic-static-site-generator-boilerplate/products"><NavItem>Products</NavItem></LinkContainer>
                    </Nav>
                </Navbar>

                {newChildren}

            </div>
        );
    }
};
