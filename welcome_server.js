const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/welcome.proto';
const DEFAULT_PORT = '50051';

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

function SayWelcome(call, callback) {
  callback(null, { message: 'Welcome to gRPC world, ' + call.request.name });
}

/**
* Starts an RPC server that receives requests for the Welcome service at the
* sample server port
*/

function main() {
  const server = new grpc.Server();

  server.addService(welcome_proto.Welcome.service, { SayWelcome: SayWelcome });

  server.bindAsync(
    `0.0.0.0:${DEFAULT_PORT}`,

    grpc.ServerCredentials.createInsecure(),

    () => {
      server.start();
      console.log(`Server is up and running: 0.0.0.0:${DEFAULT_PORT}`)
    }
  );
}

main();