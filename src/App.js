import * as React from 'react';

import {Navbar,Nav,NavItem, NavBrand} from 'react-bootstrap';

import {LinkContainer,IndexLinkContainer} from 'react-router-bootstrap';

var App = React.createClass({



    render: function() {

        //pass the global application data to all children as props
        var newChildren = React.cloneElement(this.props.children, {data: this.props.route.data});

        return (
            <div>

            <Navbar>
                <NavBrand><a href="#">Marketing Site</a></NavBrand>
                <Nav>
                  <IndexLinkContainer to="/"><NavItem>About</NavItem></IndexLinkContainer>
                  <LinkContainer to="/products"><NavItem>Products</NavItem></LinkContainer>
                  </Nav>
                </Navbar>

                {newChildren}

          </div>
        );
    }
});

module.exports = App;
