# mlb-material-react

A collection of apps based on MLB's API using react, webpack, babel, es2015 & sass. 

Compiles all the scripts & styles from `src` path to `dist`. The kit generates source maps by default in development mode.

##Installation 

```bash
    $ npm install 
```

##Usage

To build on development mode, generates a minified version with source map.

```bash
    $ npm run build
```

To build on production mode

```bash
    $ NODE_ENV=production npm run build
```

To use webpack dev server & watch,

```bash
    $ npm start
```

Listens at **http://localhost:8080** 