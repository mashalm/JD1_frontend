# Install Guide:

This guide requires node.js and npm to be installed already. If you need to download these, you can do so through the [direct download page](https://nodejs.org/en/download), or with a version manager such as [nvm](https://github.com/creationix/nvm) ([nvm-windows](https://github.com/coreybutler/nvm-windows) for PC).

This project was last tested with v7.4.0. For any node or npm upgrades, be sure everything is up to date with the following commands:

```
npm install -g npm
npm update --save
npm install
```

If this is your first time running the app, you need to install nodemon as a global package

```
npm install -g nodemon
```

## Running Locally:

make sure dependencies are up to date:

```
npm install
```

and run the code:

```
npm start
```

Then navigate to [http://localhost:3000](localhost:3000) to access the site.

## Running Remotely:

Currently the code is hosted with Amazon's cloud servers. The server was stopped to save on costs, so you'll need to reactivate it first. This can be done in the AWS EC2 console, under the Oregon region.

To access the server, use the .pem file supplied and run the following command:

```
ssh -i /path/to/pem/file ubuntu@54.218.174.22
```

the same commands to run locally work here as well.

Navigate to [http://54.218.174.22:3000](54.218.174.22) to reach the site
