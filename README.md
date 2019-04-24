# App Platform

Web project starter kit including modern tools and workflow based on
[angular-cli](https://github.com/angular/angular-cli), best practices from the community, a scalable base template and
a good learning base.

Generated using [ngX-Rocket](https://github.com/ngx-rocket/generator-ngx-rocket).

# Getting started

1. Go to project folder and install dependencies:

```bash
npm install
```

2. Launch development server, and open `localhost:4200` in your browser:

```bash
npm start
```

# Fix on tiff.js

If the following error appears:

```
ERROR in ./src/assets/tiff.js/tiff.min.js
Module not found: Error: Can't resolve 'crypto' in '/home/ovs-dl/git/starter-kit/src/assets/tiff.js'
ERROR in ./src/assets/tiff.js/tiff.min.js
Module not found: Error: Can't resolve 'fs' in '/home/ovs-dl/git/starter-kit/src/assets/tiff.js'
```

On every update of node packages, edit this according to [src](https://blog.lysender.com/2018/07/angular-6-cannot-resolve-crypto-fs-net-path-stream-when-building-angular/):

```bash
node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js
```

From

```javascript
node: false;
```

to

```javascript
node: { crypto: true, stream: true, fs: 'empty', net: 'empty' }
```

# Project structure

```
dist/                        compiled version
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

#### Libraries

- [Angular](https://angular.io)
- [Bootstrap 4](https://getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [RxJS](http://reactivex.io/rxjs)
- [ng-bootstrap](https://ng-bootstrap.github.io)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)

#### Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
- [Unit tests](docs/coding-guides/unit-tests.md)
- [End-to-end tests](docs/coding-guides/e2e-tests.md)

#### Other documentation

- [I18n guide](docs/i18n.md)
- [Working behind a corporate proxy](docs/corporate-proxy.md)
- [Updating dependencies and tools](docs/updating.md)
- [Using a backend proxy for development](docs/backend-proxy.md)
- [Browser routing](docs/routing.md)
