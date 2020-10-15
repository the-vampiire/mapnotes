# Zika Dashboard: Web Client

Starter repo for the front end component of the Zika Dashboard system.

```
zika-client/
  package.json <-- pre-configured for local client development with openlayers and webpack
  package-lock.json
  docker-compose.yml <-- pre-configured for local development with a Zika GeoServer API and DB
  webpack.common.js <-- base configuration for webpack
  webpack.dev.js <-- development environment configuration for webpack
  webpack.prod.js <-- production environment configuration for webpack
  geoserver-config/ <-- geoserver configuration files (do not edit)

  src/ <-- your source code
    data/ <-- static data needed (for now...) to complete your objectives
```

# Starter Code

On the `master` branch this starter repo does not contain a `src/index.html` nor a `src/index.js` file. However, it does include pre-configured `package.json` and `docker-compose` files to ensure no time is lost on the tedious bits.

The `src` directory will contain a `data/` directory which holds some static data that you will need for your objectives. Beyond that you can choose to begin with a blank slate or with a bit of starter code.

## Blank Slate

If you would like an extra challenge you can begin with a blank slate. **Note** that the `webpack.common.js` file expects that the

- HTML template be called `src/index.html`
- entry-point script be called `src/index.js`

If you choose to name these files something different **you will need to reflect those changes** in `webpack.common.js`

## With Starter Code

If you want to have a bit more guidance to start with you can use the starter code available in the `starter-code` branch. Before beginning development _merge the `starter-code` branch into your `master` branch_.

## Git Workflow

For each objective you work on don't forget to create a feature branch off of `master` called `objective-#` (replacing `#` with the number of the objective you are on). Full details are available in [the project article]()

# Local Development Instructions

## GeoServer API (WFS Zika data)

The `docker-compose.yml` file can be used to start up the GeoServer API and Postres DB. For this project week you are focused on consuming this data rather than providing it so you can treat it as a black box. Fortunately, the black box is pre-configured and any WFS Zika outbreak data you need can be accessed after running the following command.

> Start up the stack with:

```sh
docker-compose up -d
```

You can then access the GeoServer data at the following URL:

- **GeoServer WFS data**: `http://localhost:8080/geoserver/wfs`

> Shut down the stack with

```sh
docker-compose down
```

## Zika Client Development

Similar to your workshop this project comes pre-configured with `webpack` and `openlayers` so you can quickly get started on the fun parts of the project.

> Don't forget the first time you use the project you need to install your dependencies

```sh
npm install
# shorthand
npm i
```

Once the dependencies are downloaded to the `node_modules` directory you can begin coding! Remember you can start the `webpack` development server for your client using the NPM `start` script.

> Start up the development server

```sh
npm run start
# or shorthand
npm start
```

This should open your default browser to `http://localhost:3000` but if it doesn't then click [this link](http://localhost:3000)
