const client = require("../client/index_client");

client.SayWelcome({ }, function (err, response) {
  return response.message;
});