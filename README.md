# Zika Dashboard: Web Client

Starter code for the front end component of the Zika Dashboard system.

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
