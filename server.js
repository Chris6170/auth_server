/**
 * This is an example of a basic node.js script that performs
 * the Implicit Grant oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow
 */

var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();
app.use(express.static(__dirname + "/public"));
app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
