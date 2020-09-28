/* Import the ORM to create functions that will interact with the database */
var orm = require("../config/orm.js");

var goFish = {
  all: function(cb) {
    orm.all("goFish", function(res) {
      cb(res);
    });
  },
  /* The variables cols and vals are arrays */
  create: function(cols, vals, cb) {
    orm.create("goFish", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("goFish", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("goFish", condition, function(res) {
      cb(res);
    });
  }
};

/* Export the database functions for the controller */
module.exports = goFish;

/* this is boiler plate */