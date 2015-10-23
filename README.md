react isomorphic static site generator boilerplate
===================

Yet another isomorphic react boilerplate. This one does not require node on server. Instead, it generates static HTML plus webpacked javascript that can be uploaded to any web server, is super fast on first HTTP GET and is SEO friendly, while still keeping the advantages of React development and lightning fast client side page transitions on subsequent user clicks with no more HTTP GETs.

Suitable for small to medium sized sites such as a marketing site in example. Big sites with lots of contnet may need to refactor to not load all content in the javascript webpacked bundle at once.


Installation & Usage
-------------------
```
git clone https://github.com/VaclavSynacek/react-isomorphic-static-site-generator-boilerplate.git
cd react-isomorphic-static-site-generator-boilerplate
npm start
```
Browse to http://localhost:8080 .


Dependencies
-------------------
* React 0.14 & react-router
* webpack & static-site-generator-webpack-plugin
* react-bootstrap & react-router-bootstrap (can be easily removed, but is used in the example)
* babel (can be removed if ES6 not needed)


Non-Dependencies
-------------------
Generates static HTML code that can be uploaded to any web server, no node runtime on server needed.

TODOs and wihes
-------------------
* autogenerate list of HTML files to be generated from React Router configuration (curently the routes are defined duplicitly in Routes.js and webpack.config.js)
* make react and react-router external dependencies instead of parts of the webpacked bundle (all attempts to do so with externals directive failed, pull requests welcomed)
* autogenerate gh-pages branch from source (currently the example works only as root directory on the webserver)