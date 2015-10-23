//index.js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Router} from 'react-router';
import Routes from './Routes';
import util from 'util';




//client code
if (typeof document !== 'undefined') {
    var createBrowserHistory = require('history/lib/createBrowserHistory');
    

    var history = createBrowserHistory();
    //render app and attache to <div id="content"> in the HTML document
    ReactDOM.render(<Router history={history}>{Routes}</Router>, document.getElementById('content'));
}



//generator code
module.exports = function render(locals, callback) {
    //var Helmet = require('react-helmet');
    var DocumentMeta = require('react-document-meta');
    var createMemoryHistory = require('history/lib/createMemoryHistory');
    var Html = require('./Html.js');

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
