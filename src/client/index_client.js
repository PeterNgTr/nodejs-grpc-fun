const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './src/proto/welcome.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const welcome_proto = grpc.loadPackageDefinition(packageDefinition).welcome;

let target = 'localhost:50051';

const client = new welcome_proto.Welcome(target, grpc.credentials.createInsecure());

module.exports = client;
