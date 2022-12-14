const client = require("./index_client");
const { expect } = require('expect');

describe('welcome service', () => {
  it('should see correct response - with payload', () => {
    client.SayWelcome({ name: 'Peter' }, (err, response) => {
      if (err) throw err;
      expect(response.message).toEqual('Welcome to gRPC world, Peter');
    })
  });

  it('should see correct response - no payload', () => {
    client.SayWelcome({ }, (err, response) => {
      if (err) throw err;
      expect(response.message).toEqual('Welcome to gRPC world, ');
    })
  });

});