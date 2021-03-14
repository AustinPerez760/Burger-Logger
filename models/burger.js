var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      //callback is sent to controller burger.js
      cb(res);
    });
  },
  // variables become arrays
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  deleteAll: function (cb) {
    orm.deleteAll("burgers", function (res) {
      cb(res);
    });
  },
};

module.exports = burger;