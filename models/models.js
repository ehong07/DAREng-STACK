var db = require('../database').dbConnection;
var mongoose = require('mongoose');

const executeQuery = (query, values) => {
  return db.queryAsync(query, values).spread(results => results);
};

module.exports = Model;

class Model {
  constructor(tablename) {
    apihelp
  }
}
