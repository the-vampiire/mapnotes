# Zika Dashboard: Web Client

Starter repo for the front end component of the Zika Dashboard system.

> project files

> **NOTE**: the `node_modules` and `geoserver-config` dirs won't exist until after running `npm install`

```
zika-client/
  package.json <-- pre-configured for local client development with openlayers and webpack
  package-lock.json

  docker-compose.yml <-- pre-configured for local development with a Zika GeoServer API and DB

  webpack.common.js <-- base configuration for webpack
  webpack.dev.js <-- development environment configuration for webpack
  webpack.prod.js <-- production environment configuration for webpack

  src/ <-- your source code
    data/ <-- static data needed (for now...) to complete your objectives

  node_modules/ <-- NPM packages (derived code, git ignored)
  geoserver-config/ <-- geoserver configuration data (derived code, git ignored)
```

# Starter Code

On the `master` branch this starter repo does not contain a `src/index.html` nor a `src/index.js` file. However, it does include pre-configured `package.json` and `docker-compose` files to ensure no time is lost on the tedious bits.

The `src` directory will contain a `data/` directory which holds some static data that you will need for your objectives. Beyond that you can choose to begin with a blank slate or with a bit of starter code.

## Blank Slate

If you would like an extra challenge you can begin with a blank slate. **Note** that the `webpack.common.js` file expects that the

- HTML template be called `src/index.html`
- entry-point script be called `src/index.js`

If you choose to name these files something different **you will need to reflect those changes** in `webpack.common.js`

## With HTML/JS Starter Code

If you want to have a bit more guidance to start with you can use the starter code available in the `starter-code` branch. Before beginning development _merge the `starter-code` branch into your `master` branch_.

## Git Workflow

For each objective you work on don't forget to create a feature branch off of `master` called `objective-#` (replacing `#` with the number of the objective you are on). Full details are availabel in [the project article](https://education.launchcode.org/gis-devops/project-requirements/zika-client/index.html)

# Local Development Instructions

## Zika Client Development

Similar to your workshop this project comes pre-configured with `webpack` and `openlayers` so you can quickly get started on the fun parts of the project.

> Don't forget the first time you use the project you need to install your dependencies

```sh
npm install
# shorthand
npm i
```

Once the dependencies are downloaded to the `node_modules` directory you can begin coding! You can start the `webpack` development server for your client using the NPM `start` script.

> Start up the development server and services

The `prestart` script will ensure that the GeoServer API and Postgres DB container services are running automatically. If you want to start/stop them separately view the section below.

```sh
npm run start
# or shorthand (only works for start and test scripts)
npm start
```

After the `prestart` and `start` scripts are run your default browser should open automatically to `http://localhost:3000`. If it doesn't then click [this link](http://localhost:3000) to view your client.

When you make changes to your code (**and save**) the `webpack` dev server will rebuild and reload the browser page to reflect the changes automatically.

Once the services are up the GeoServer WFS Zika outbreak data can be accessed at the following URL:

- **GeoServer WFS data**: `http://localhost:8080/geoserver/wfs`

## GeoServer API & Postgres DB (WFS Zika data)

The `npm run services:start[stop]` scripts can be used to start up and shut down the GeoServer API and Postgres DB containers separately from the `webpack` development server.

For this project week you are focused on consuming and presenting this data rather than providing it so you can treat these services as a black box. Fortunately, the black box is pre-configured and any WFS Zika outbreak data you need can be accessed once the services are up.

**After finishing your primary objectives** you can learn more about how the services work by looking at the scripts and reading about [docker-compose](https://docs.docker.com/compose/).

> Start up the services with:

```sh
npm run services:start
```

> Check the status of the services

```sh
docker-compose ps
```

> Shut down the services with

```sh
npm run services:stop
```

### Accessing the Database

If you want to poke around the Zika outbreak database it can be accessed through the `psql` client with the `docker exec` command (using its container name `zika-postgres-db`):

```sh
docker exec -it zika-postgres-db psql -U zika_user -d zika
```
