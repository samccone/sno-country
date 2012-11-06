var request     = require('request');
var apiKey      = process.env['SNOCOUNTRY_KEY'] || "SnoCountry.example";
var baseUrl     = "http://feeds.snocountry.com/conditions.php?apiKey="+apiKey;

/*
  -- fetches the state(s) by state 2 letter abbrivation

  -- [ie] CO == Colorado
  --      OH == Ohio
  -- accepts a comma deliminated list of states
*/
function getResortsByStates(states, cb) {
  request.get(baseUrl+"&states="+states, function(err, response, body) {
    typeof cb == "function" && cb(err, JSON.parse(body));
  });
}

/*
  -- fetches the resort(s) by snocountry ID
  -- accepts a comma deliminated list of ID's
*/
function getResortsByIds(ids, cb) {
  request.get(baseUrl+"&ids="+ids, function(err, response, body) {
    typeof cb == "function" && cb(err, JSON.parse(body));
  });
}

module.exports = {
  getResortsByStates: getResortsByStates,
  getResortsByIds: getResortsByIds
}