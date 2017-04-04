//Html.js
//component runs only during static site generation, never runs on client
//inserts props.reactApp to the exact place where client side renedering does
import React from 'react';


export default class Html extends React.Component {

    render() {
        return (

            <html lang="en">

                <head>
                    {this.props.meta}
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
                </head>

                <body>
                    <div id="content" dangerouslySetInnerHTML={this.props.reactApp} />
                    <script type="text/javascript" src="/react-isomorphic-static-site-generator-boilerplate/bundle.js" charset="utf-8"></script>
                </body>

            </html>

        );
    }
};
