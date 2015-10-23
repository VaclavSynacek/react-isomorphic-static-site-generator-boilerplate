import * as React from 'react';

import {Jumbotron} from 'react-bootstrap';
import DocumentMeta from 'react-document-meta';


var About = React.createClass({

            render: function() {
                return (
                    <div>
                        {/*<Helmet title="About" />*/}
                        <DocumentMeta title="Marketing Site | About" description="some looooong description of why this is cool" />
                        <Jumbotron>
                        
            			    <h1>Hello, world.</h1>
            			    <p>This is hello world application example included in <a href="https://github.com/VaclavSynacek/react-isomorphic-static-site-generator-boilerplate">react-isomorphic-static-site-generator-boilerplate</a></p>
            		    </Jumbotron>
                    </div>
                );
            }
        });

module.exports = About;
