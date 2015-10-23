import * as React from 'react';
import DocumentMeta from 'react-document-meta';

import {Grid,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router';


var ProductTile = React.createClass({

    render: function() {

        return (
            <span>
            <DocumentMeta title="Marketing Site | List of Products" description="All our products are cool, jsut choose the coolest for you" />
            <Link to={`/product/${this.props.data.id}/`}>
            <Col xs={6} md={4}>
                <h2>{this.props.data.name}</h2>
                <img src={this.props.data.img} alt={this.props.data.name + ' Photo'} />
            </Col>
            </Link>
            </span>
            
        );
    }
});


var Products = React.createClass({

    render: function() {

        var data = this.props.data;


        var productNodes = data.map(function(product) {
            return (
                <ProductTile key={product.id} data={product} />
            );
        });


        return (
            <span>
            {/*<Helmet title="Products" />*/}
            <h1>Products</h1>
            <Grid>
                <Row>

            {productNodes}

                </Row>
            </Grid>

            </span>
        );
    }
});

module.exports = Products;
