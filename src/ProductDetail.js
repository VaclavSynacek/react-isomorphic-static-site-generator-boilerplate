import * as React from 'react';
import DocumentMeta from 'react-document-meta';

var ProductDetail = React.createClass({

    render: function() {

        var id = this.props.params.id;

        var data = this.props.data;

        var product = data[data.findIndex(p => p.id == id)];

        return (
            <span>
                <DocumentMeta title={'Marketing Site | ' + product.name +' Detail'} description="cool SEO description goes HERE" />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <img src={product.imgBig} alt={product.name + ' Big Photo'} />
            </span>
        );
    }
});

module.exports = ProductDetail;
