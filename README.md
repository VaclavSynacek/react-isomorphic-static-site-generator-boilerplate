react isomorphic static site generator boilerplate
===================

Yet another isomorphic react boilerplate. This one does not require node on server. Instead, it generates static HTML plus webpacked javascript that can be uploaded to any web server, is super fast on first HTTP GET and is SEO friendly, while still keeping the advantages of React development and lightning fast client side page transitions on subsequent user clicks with no more HTTP GETs.

Suitable for small to medium sized sites such as a marketing site in [Live demo](http://vaclavsynacek.github.io/react-isomorphic-static-site-generator-boilerplate/). Big sites with lots of contnet may need to refactor to not load all content in the javascript webpacked bundle at once.

Live demo at [http://vaclavsynacek.github.io/react-isomorphic-static-site-generator-boilerplate/](http://vaclavsynacek.github.io/react-isomorphic-static-site-generator-boilerplate/)


Installation & Usage
-------------------
```
git clone https://github.com/VaclavSynacek/react-isomorphic-static-site-generator-boilerplate.git
cd react-isomorphic-static-site-generator-boilerplate
npm install
```

Then to generate the site run `npm run compile`. Or to generate the site and start development web server run `npm run start` and browse to [http://localhost:8080/react-isomorphic-static-site-generator-boilerplate/](http://localhost:8080/react-isomorphic-static-site-generator-boilerplate/) . You should see the same site as in [Live demo](http://vaclavsynacek.github.io/react-isomorphic-static-site-generator-boilerplate/) .

If the generated site will be hosted on web server root (e.g. not on GitHub where it is hosted at /project-name/ ) modify source files and remove the intentionally long project name from all places (including `weppack.config.js` and `package.json`).


Dependencies
-------------------
* React & react-router
* webpack 2.0 & static-site-generator-webpack-plugin
* react-bootstrap & react-router-bootstrap (can be easily removed, but is used in the example)
* babel (can be removed if ES6 not needed)


Non-Dependencies
-------------------
Generates static HTML code that can be uploaded to any web server, no node runtime on server needed.

TODOs and wishes
-------------------
* make react and react-router external dependencies instead of parts of the webpacked bundle (all attempts to do so with externals directive failed, pull requests welcomed)
* autogenerate gh-pages branch from source (currently the example generates all pages to public subdirectory, from there its subdirectory with project name is manually git commited to the gh-pages branch of this project)