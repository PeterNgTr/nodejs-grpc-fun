const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { data } = require('../data');

const PROTO_PATH = './src/proto/welcome.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const welcome_proto = grpc.loadPackageDefinition(packageDefinition).welcome;

/**
* Implements the SayWelcome RPC method.
*/

async function SayWelcome(call, callback) {
  callback(null, { message: 'Welcome to gRPC world, ' + call.request.name });
}

/**
* Starts an RPC server that receives requests for the Welcome service at the
* sample server port
*/

async function main() {
  const server = new grpc.Server();

  server.addService(welcome_proto.Welcome.service, { SayWelcome });

  server.bindAsync(`0.0.0.0:${data.defaultPort}`, 
  grpc.ServerCredentials.createInsecure(), 
  (error, port) => {
    console.log(`Server running at http://127.0.0.1:${port}`);
    server.start();
  }
  );
}

main();