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

Navigate to [54.218.174.22:3000](http://54.218.174.22:3000) (or the new IP if it's changed) to reach the site.

# Troubleshooting

If you encounter authentication errors while trying to perform database operations like register a new user, your AWS credentials may not be properly saved.

Make sure the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are populated with the correct values, and stored as environment variables.

On a Mac or Linux machine, this can be done with adding the following shell commands:

```
export AWS_ACCESS_KEY_ID=value_provided
export AWS_SECRET_ACCESS_KEY=value_provided
```

We recommend adding these commands to your .bashrc. This will save you from having to type the above in every new shell.

---


## Release Notes:
v1.0 - April 24th, 2017

Software Features:
- Puretone Test with increasing volumes
- Speech recognition test with female voice
- Find an audiologist based on zipcode
- Sign up and login
- Save test results
- Send test results

Known bugs and limitations:
- Only 200 emails allowable per month (per emailJS's free tier)
- There is a bug with displaying past scores, where some of the saved results do not get graphed properly

Fixes:
- Fixed the login check issue from before (where some pages weren't displaying the logged in state)
- Fixed saving scores to do so automatically if the user is logged in
