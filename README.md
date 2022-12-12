# NodeJS gRPC fun

## Installation

1. Clone/download this repo to your local machine
2. `cd` into the root folder and run the command `npm i` to install the dependencies.

## Running the App

Now go to the command line and run the commands below in different tabs/windows. Make sure that you start the server before the client. 

```shell
npm run start:server

> nodejs-grpc-fun@1.0.0 start:server
> nodemon welcome_server.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node welcome_server.js` 
```

```shell
npm run start:client


> nodejs-grpc-fun@1.0.0 start:client
> node welcome_client.js

Message: Welcome to gRPC world, Johnny Walker
```

## Testing with Insomnia
![grpc-fun](https://i.ibb.co/X8V7Mxd/grpc-fun.png)