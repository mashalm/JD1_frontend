#Release Notes



# Install Guide:

This guide requires node.js and npm to be installed already. If you need to download these, you can do so through the [direct download page](https://nodejs.org/en/download), or with a version manager such as [nvm](https://github.com/creationix/nvm) ([nvm-windows](https://github.com/coreybutler/nvm-windows) for PC).

This project was last tested with v7.4.0. For any node or npm upgrades, be sure everything is up to date with the following commands:

```
npm update -g npm
npm update --save
npm install
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

Then navigate to [localhost:3000](http://localhost:3000) to access the site.

## Running Remotely:

Currently the code is hosted with Amazon's cloud servers. The server was stopped to save on costs, so you'll need to reactivate it first. This can be done in the AWS EC2 console, under the Oregon region.

To access the server, use the .pem file supplied and run the following command:

```
ssh -i /path/to/pem/file ubuntu@54.218.174.22
```

If this doesn't work, the ip address may have changed. This is normal for AWS. Just log into the EC2 console and verify.

Then, once you're logged in:

```
npm install
npm run deploy
```

Navigate to [54.218.174.22:3000](http://54.218.174.22:3000) (or the new IP if it's changed) to reach the site
