import React from 'react';
import DocumentMeta from 'react-document-meta';

import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';


class ProductTile extends React.Component {

    render() {

        return (
            <span>
                <DocumentMeta title="Marketing Site | List of Products" description="All our products are cool, jsut choose the coolest for you" />
                <Link to={`/react-isomorphic-static-site-generator-boilerplate/product/${this.props.data.id}/`}>
                    <Col xs={6} md={4}>
                        <h2>{this.props.data.name}</h2>
                        <img src={this.props.data.img} alt={this.props.data.name + ' Photo'} />
                    </Col>
                </Link>
            </span>

        );
    }
};


export default class Products extends React.Component {

    render() {

        var data = this.props.data;


        var productNodes = data.map(function (product) {
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
};
