//index.js
import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { applyRouterMiddleware, browserHistory, Router, createMemoryHistory, RoutingContext, match } from 'react-router';
import { useScroll } from 'react-router-scroll';
import Routes from './Routes';
import util from 'util';
import DocumentMeta from 'react-document-meta';




//client code
if (typeof document !== 'undefined') {
    ReactDOM.render(
        <Router
            history={browserHistory}
            render={applyRouterMiddleware(useScroll())}
            routes={Routes}
        />,
        document.getElementById('content'));
}



//generator code
export default function render(locals, callback) {
    var Html = require('./Html.js').default;

    var history = createMemoryHistory(locals.path);

    //render app to string to be used later
    var reactApp = {
        __html: ReactDOMServer.renderToString(<Router history={history}>{Routes}</Router>)
    };

    //retrieve all metadata as React components to be rendered inside <head></head>
    var meta = DocumentMeta.renderAsReact();

    //render the outer HTML and pass the allready rendered app and metadata as props
    // to be inserted in the right place by HTML.js component
    var html = ReactDOMServer.renderToStaticMarkup(<Html meta={meta} reactApp={reactApp} />);
    callback(null, '<!DOCTYPE html>' + html);
}
