import * as React from 'react';

import {Route,IndexRoute} from 'react-router';

import App from './App';
import About from './About';
import Products from './Products';
import ProductDetail from './ProductDetail';

//if there is a lot of data, replace this with some better way to retrieve it
import data from './ProductData';

var Routes = (
    	<Route path="/react-isomorphic-static-site-generator-boilerplate/" component={App} data={data} >
    		<IndexRoute component={About} />
        	<Route path="products" component={Products} />
        	<Route path="product/:id" component={ProductDetail} />
    	</Route>
);

 module.exports = Routes;